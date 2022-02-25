package com.training.incomesvexpenses.domain.record;

import java.util.LinkedList;
import java.util.List;
import java.util.Optional;
import java.util.function.Function;
import java.util.stream.Collectors;

import com.training.incomesvexpenses.domain.share.Amount;
import com.training.incomesvexpenses.domain.share.Email;

import lombok.NonNull;
import lombok.RequiredArgsConstructor;

import static com.training.incomesvexpenses.domain.record.Record.createNewExpense;
import static com.training.incomesvexpenses.domain.record.Record.createNewIncome;

@RequiredArgsConstructor
public class Account {
    @NonNull private final Email emailUser;
    @NonNull private final List<Record> incomes;
    @NonNull private final List<Record> expenses;
    private Optional<Double> totalIncomesCached = Optional.empty();
    private Optional<Double> totalExpensesCached = Optional.empty();

    public static Account createNewAccount(Email emailUser) {
        return new Account(emailUser, new LinkedList<>(), new LinkedList<>());
    }

    public void addNewIncome(String description, Amount amount) {
        if(incomes.size() > 50) throw new ExcessiveIncomesException("Incomes has exceeded the established top");
        this.incomes.add(createNewIncome(description, amount));
        this.totalIncomesCached = Optional.empty();
    }

    public void removeIncome(String idRecord) {
        this.incomes.removeIf(r -> r.getId().equals(idRecord));
        this.totalIncomesCached = Optional.empty();
    }

    public void addNewExpense(String description, Amount amount) {
        if(expenses.size() > 50) throw new ExcessiveIncomesException("Expenses has exceeded the established top");
        this.expenses.add(createNewExpense(description, amount));
        this.totalExpensesCached = Optional.empty();
    }

    public void removeExpense(String idRecord) {
        this.expenses.removeIf(r -> r.getId().equals(idRecord));
        this.totalExpensesCached = Optional.empty();
    }

    public double totalIncomes() {
        if (totalIncomesCached.isPresent()) return totalIncomesCached.get();

        double acc = 0;
        totalIncomesCached = Optional.of(
            incomes.stream()
            .map(r -> r.getAmount().getValue())
            .reduce(acc, (subtotal, current) -> subtotal + current)
        );
        return totalIncomesCached.get();
    }

    public <T> List<T> getListIncomes(Function<? super Record, T> funcMap) {
        return incomes.stream()
            .map(funcMap)
            .collect(Collectors.toUnmodifiableList());
    }

    public double totalExpenses() {
        if (totalExpensesCached.isPresent()) return totalExpensesCached.get();

        double acc = 0;
        totalExpensesCached = Optional.of(
            incomes.stream()
            .map(r -> r.getAmount().getValue())
            .reduce(acc, (subtotal, current) -> subtotal + current)
        );
        return totalExpensesCached.get();
    }

    public <T> List<T> getListExpenses(Function<? super Record, T> funcMap) {
        return expenses.stream()
            .map(funcMap)
            .collect(Collectors.toUnmodifiableList());
    }

    public double getBalance() {
        return this.totalIncomes() - this.totalExpenses();
    }
}
