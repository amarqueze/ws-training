package com.training.incomesvexpenses.domain.share;

import lombok.Getter;

public class Amount {
    @Getter private final double value;

    public Amount(double value) {
        if(value < 0) throw new IllegalArgumentException("Field Amount not must be less than 0");
        this.value = value;
    }
}
