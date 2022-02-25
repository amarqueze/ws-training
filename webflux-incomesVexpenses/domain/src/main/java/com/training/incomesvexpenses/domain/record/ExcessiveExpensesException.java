package com.training.incomesvexpenses.domain.record;

import lombok.Getter;

@Getter
public class ExcessiveExpensesException extends RuntimeException {
    private final String code = "A_02";
    private final String description;

    public ExcessiveExpensesException(String description) {
        this.description = description;
    }
}
