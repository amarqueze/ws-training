package com.training.incomesvexpenses.domain.record;

import java.util.Map;

public enum TypeRecord {
    INCOME("Income"),
    EXPENSE("Expense");

    private static Map<String, TypeRecord> types = Map.of(
        "Income", TypeRecord.INCOME,
        "Expense", TypeRecord.EXPENSE
    );

    private String value;
    private TypeRecord(String value) {
        this.value = value;
    }

    public static TypeRecord of(String key) {
        if(!types.containsKey(key)) throw new IllegalArgumentException("There not is any TypeRecord with " + key);

        return types.get(key);
    }

    public String toRawValue() {
        return value;
    }
}
