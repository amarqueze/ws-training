package com.training.incomesvexpenses.mongodbreactiveprovider;

import java.util.Arrays;
import java.util.Collection;
import java.util.List;
import java.util.concurrent.Callable;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.Future;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import com.training.incomesvexpenses.domain.record.Account;
import com.training.incomesvexpenses.domain.record.AccountNotEditedException;
import com.training.incomesvexpenses.domain.share.Amount;
import com.training.incomesvexpenses.domain.share.Email;
import com.training.incomesvexpenses.domain.record.Record;
import com.training.incomesvexpenses.domain.record.TypeRecord;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

@Document(collection = "account")
@Data
public class AccountDocument {
    @Id private String emailUser;
    private List<RecordDocument> incomes;
    private List<RecordDocument> expenses;

    public static AccountDocument of(Account account) {
        var document = new AccountDocument();
        ExecutorService executor = Executors.newFixedThreadPool(2);
        Callable<List<RecordDocument>> incomesCall = () -> account.getListIncomes(
            r -> new RecordDocument(r.getId(), r.getDescription(), r.getAmount().toPrimitiveValue(), r.getType().toRawValue())
        );
        Callable<List<RecordDocument>> expensesCall = () -> account.getListExpenses(
            r -> new RecordDocument(r.getId(), r.getDescription(), r.getAmount().toPrimitiveValue(), r.getType().toRawValue())
        );
        List<Future<List<RecordDocument>>> resultList = null;
        try {
            resultList = executor.invokeAll(Arrays.asList(incomesCall, expensesCall));
        } catch (InterruptedException e) {
            throw new AccountNotEditedException(e.getMessage());
        }
        
        try {
            document.setEmailUser(account.getEmailUser().toString());
            document.setIncomes(resultList.get(0).get());
            document.setExpenses(resultList.get(1).get());
            return document;
        } catch(InterruptedException | ExecutionException e) {
            throw new AccountNotEditedException(e.getMessage());
        }        
    }

    public Account toMap() {
        return Account.of(
            new Email(emailUser),
            collectionAsStream(incomes)
                .map(r -> new Record(r.getId(), r.getDescription(), new Amount(r.getAmount()), TypeRecord.of(r.getType())))
                .collect(Collectors.toList()), 
            collectionAsStream(expenses)              
                .map(r -> new Record(r.getId(), r.getDescription(), new Amount(r.getAmount()), TypeRecord.of(r.getType())))
                .collect(Collectors.toList())
        );
    }

    private Stream<RecordDocument> collectionAsStream(Collection<RecordDocument> collection) {
        return collection == null 
          ? Stream.empty() 
          : collection.stream();
    }
}
