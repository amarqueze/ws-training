package com.training.incomesvexpenses.domain.user;

import com.training.incomesvexpenses.domain.share.Email;
import com.training.incomesvexpenses.domain.share.Password;

import lombok.AllArgsConstructor;
import lombok.NonNull;

@AllArgsConstructor
public class User {
   @NonNull private final Email email;
   @NonNull private final String fullname;
   @NonNull private final Password password; 
}
