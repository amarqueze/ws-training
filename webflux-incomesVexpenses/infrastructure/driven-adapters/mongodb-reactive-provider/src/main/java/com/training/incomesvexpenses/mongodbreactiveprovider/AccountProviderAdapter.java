package com.training.incomesvexpenses.mongodbreactiveprovider;

import com.training.incomesvexpenses.domain.record.Account;
import com.training.incomesvexpenses.domain.record.AccountProvider;
import com.training.incomesvexpenses.domain.share.Email;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import lombok.RequiredArgsConstructor;
import reactor.core.publisher.Mono;

@Component
@RequiredArgsConstructor
public class AccountProviderAdapter implements AccountProvider {
    @Autowired private AccountRepository accountRepository;

    @Override
    public Mono<Account> find(Email emailUser) {
        return accountRepository.findById(emailUser.toString())
            .flatMap(accountDoc -> Mono.just(accountDoc.toMap()));
    }

    @Override
    public Mono<Void> save(Account account) {
        return accountRepository.save(AccountDocument.of(account))
            .flatMap( r -> {
                System.out.print(r);
                return Mono.empty();
            });
    }    
}
