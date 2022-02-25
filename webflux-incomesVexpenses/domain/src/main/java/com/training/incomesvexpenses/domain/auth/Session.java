package com.training.incomesvexpenses.domain.auth;

import com.training.incomesvexpenses.domain.share.Email;

import lombok.AllArgsConstructor;
import lombok.NonNull;

@AllArgsConstructor
public class Session {
    @NonNull private final Email email;
    @NonNull private final String sessionToken;
}
