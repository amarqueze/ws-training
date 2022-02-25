package com.training.incomesvexpenses.domain.auth;

import reactor.core.publisher.Mono;

public interface AuthProvider {
    Mono<Session> login(AuthUser authUser);
    Mono<Void> logout(Session session);
    Mono<Boolean> isValid(Session session); 
}
