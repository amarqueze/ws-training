package com.training.incomesvexpenses.domain.share;

public class Amount {
    private final double value;

    public Amount(double value) {
        if(value < 0) throw new IllegalArgumentException("Field Amount not must be less than 0");
        this.value = value;
    }

    public double toPrimitiveValue() {
        return value;
    }
}
