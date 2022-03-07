package com.training.incomesvexpenses.domain.share;

public class Email {
    private String value;

    public Email(String value) {
        this.value = value;
    }

    @Override
    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }

        if (!(obj instanceof Email)) {
            return false;
        }

        var otherEmail = (Email) obj;
        return this.value.equals(otherEmail.toString());
    }

    @Override
    public int hashCode() {
        return (int) value.hashCode();
    }

    @Override
    public String toString() {
        return value.toLowerCase();
    }
}
