package com.training.incomesvexpenses.mongodbreactiveprovider;

import java.util.List;

import org.springframework.data.repository.reactive.ReactiveCrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AccountRepository extends ReactiveCrudRepository<AccountDocument, String>  {
    List<AccountDocument> findTop3ByEmailUser();
}
