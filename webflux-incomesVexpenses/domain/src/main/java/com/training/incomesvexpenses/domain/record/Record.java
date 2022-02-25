package com.training.incomesvexpenses.domain.record;

import java.util.UUID;

import com.training.incomesvexpenses.domain.share.Amount;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NonNull;

@AllArgsConstructor
@Getter
public class Record {
    @NonNull private final String id;
    @NonNull private final String description;
    @NonNull private final Amount amount; 
    @NonNull private final TypeRecord type;

    public static Record createNewIncome(String description, Amount amount) {
        return new Record(UUID.randomUUID().toString(), description, amount, TypeRecord.INCOME);
    }

    public static Record createNewExpense(String description, Amount amount) {
        return new Record(UUID.randomUUID().toString(), description, amount, TypeRecord.EXPENSE);
    }
}
