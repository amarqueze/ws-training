package com.training.incomesvexpenses.domain.record;

import com.training.incomesvexpenses.domain.share.Email;

import reactor.core.publisher.Mono;

public interface AccountProvider {
    Mono<Account> find(Email emailUser);
    Mono<Void> save(Account account);
}
