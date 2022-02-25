package com.training.incomesvexpenses.domain.user;

import reactor.core.publisher.Mono;

public interface UserProvider {
    Mono<Void> signUp(User user);
}
