package com.training.incomesvexpenses.domain.record;

import lombok.Getter;

@Getter
public class AccountNotExistException extends RuntimeException {
    private final String code = "A_00";
    private final String description;

    public AccountNotExistException(String description) {
        this.description = description;
    }
}
