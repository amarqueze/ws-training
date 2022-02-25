package com.training.incomesvexpenses.domain.auth;

import com.training.incomesvexpenses.domain.share.Email;
import com.training.incomesvexpenses.domain.share.Password;

import lombok.AllArgsConstructor;
import lombok.NonNull;

@AllArgsConstructor
public class AuthUser {
    @NonNull private final Email email;
    @NonNull private final Password password;

    @Override
    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }

        if (!(obj instanceof AuthUser)) {
            return false;
        }

        var authUser = (AuthUser) obj;
        return this.email == authUser.email 
            && this.password == authUser.password;
    }
}
