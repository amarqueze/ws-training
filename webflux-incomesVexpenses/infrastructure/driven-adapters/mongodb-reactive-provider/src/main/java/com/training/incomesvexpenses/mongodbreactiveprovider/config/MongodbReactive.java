package com.training.incomesvexpenses.mongodbreactiveprovider.config;

import com.mongodb.ConnectionString;
import com.mongodb.MongoClientSettings;
import org.springframework.data.mongodb.config.AbstractReactiveMongoConfiguration;
import org.springframework.data.mongodb.repository.config.EnableReactiveMongoRepositories;

@EnableReactiveMongoRepositories
public class MongodbReactive extends AbstractReactiveMongoConfiguration {
    @Override
    protected void configureClientSettings(MongoClientSettings.Builder builder) {
        builder.applyConnectionString(new ConnectionString("mongodb://172.19.0.2:27017"));
    }

    @Override
    protected String getDatabaseName() {
        return "incomesvexpenses";
    }    
}
