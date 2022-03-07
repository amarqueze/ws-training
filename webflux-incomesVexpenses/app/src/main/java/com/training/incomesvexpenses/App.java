/*
 * This Java source file was generated by the Gradle 'init' task.
 */
package com.training.incomesvexpenses;

import com.training.incomesvexpenses.domain.record.Account;
import com.training.incomesvexpenses.domain.record.AccountProvider;
import com.training.incomesvexpenses.domain.share.Amount;
import com.training.incomesvexpenses.domain.share.Email;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(scanBasePackages={"com.training.incomesvexpenses"})
public class App implements CommandLineRunner {
    private final Logger log = LoggerFactory.getLogger(App.class);
    @Autowired AccountProvider accountProvider;
    
    public static void main(String[] args) {
        SpringApplication.run(App.class, args);
    }

    @Override
    public void run(String... args) {
        log.info("RUNNING APPLICATION");  
        
        //Account account = Account.createNewAccount(new Email("alanmarquez@outlook.com"));
        //account.addNewIncome("Salary", new Amount(15000));
        //account.addNewIncome("Rent", new Amount(7000));
        //account.addNewExpense("Food", new Amount(5000));
        //accountProvider.save(account)
        //    .doOnError(e -> log.error(e.getMessage()))
        //    .doOnSuccess(v -> log.info("REsultado"))
        //    .subscribe();

        accountProvider.find(new Email("alanmarquez@outlook.com")).subscribe(c -> log.info(""+c.getBalance()));
    }
}
