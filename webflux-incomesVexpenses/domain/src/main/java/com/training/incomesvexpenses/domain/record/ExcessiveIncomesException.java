package com.training.incomesvexpenses.domain.record;

import lombok.Getter;

@Getter
public class ExcessiveIncomesException extends RuntimeException {
    private final String code = "A_01";
    private final String description;

    public ExcessiveIncomesException(String description) {
        this.description = description;
    }
}
