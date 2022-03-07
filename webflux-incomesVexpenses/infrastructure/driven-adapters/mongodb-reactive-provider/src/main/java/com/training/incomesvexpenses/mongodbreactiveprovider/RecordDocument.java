package com.training.incomesvexpenses.mongodbreactiveprovider;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@AllArgsConstructor
@Getter
@Setter
public class RecordDocument {
    private String id;
    private String description;
    private double amount; 
    private String type;
}
