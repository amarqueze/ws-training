package com.training.incomesvexpenses.domain.record;

import lombok.Getter;

@Getter
public class AccountNotEditedException extends RuntimeException {
    private final String code = "A_03";
    private final String description;

    public AccountNotEditedException(String description) {
        this.description = description;
    }
}
