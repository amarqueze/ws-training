import { OperationError } from './../../share/domain/OperationError.interface';
import { v4 as uuidv4 } from 'uuid';
import { createFeature, createReducer, on } from '@ngrx/store';
import { AccountState } from '../domain/AccountState.interface';
import * as AccountActions from './Account.actions';
import { TypeRecord } from '../domain/TypeRecord.enum';
import { Record } from '../domain/Record.interface';

export const initialState: AccountState = {
    isUpdatingAccount: false,
    hasError: false,
    error: undefined,
    incomes: [],
    expenses: []
};


function findIndexbyRecord(array: ReadonlyArray<Record>, record: Record): number {
    return array.findIndex(recordOld => recordOld.id === record.id);
}

function updateRecords(array: ReadonlyArray<Record>, index: number, newAmount: number): ReadonlyArray<Record> {
    const newArray = [...array];
    newArray[index].amount = newAmount;
    return newArray;
}

function getStateWithError(state: AccountState, error: OperationError) {
    return {
        ...state, 
        isUpdatingAccount: false,
        hasError: true,
        error: error
    }
}

export const AccountFeature = createFeature({
    name: 'accountState',
    reducer: createReducer(
        initialState,
        on(AccountActions.createNewRecord, state => ({ ...state, isUpdatingAccount: true })),
        on(AccountActions.createdRecord, (state, record) => {
            const newRecord: Record = { id: record.id, typeRecord: record.typeRecord, description: record.description, amount: record.amount };
            switch ( record.typeRecord ) {
                case TypeRecord.INCOME:                    
                    return {
                        ...state, 
                        isUpdatingAccount: false,
                        hasError: false,
                        error: undefined,                 
                        incomes: [...state.incomes, newRecord]
                    };
                default: 
                    return {
                        ...state,
                        isUpdatingAccount: false,
                        hasError: false,
                        error: undefined,
                        expenses: [...state.expenses, newRecord]
                    };
            }
        }),
        on(AccountActions.failedCreatingRecord, (state, error) => getStateWithError(state, error)),
        on(AccountActions.editNewRecord, state => ({ ...state, isUpdatingAccount: true })),
        on(AccountActions.editedRecord, (state, record) => { 
            switch ( record.typeRecord ) {
                case TypeRecord.INCOME:
                    const indexI = findIndexbyRecord(state.incomes, record);
                    const incomes = updateRecords(state.incomes, indexI, record.amount);
                    return {
                        ...state, 
                        isUpdatingAccount: false,
                        hasError: false,
                        error: undefined,                 
                        incomes
                    }
                default:
                    const indexE = findIndexbyRecord(state.expenses, record);
                    const expenses = updateRecords(state.expenses, indexE, record.amount);
                    return {
                        ...state, 
                        isUpdatingAccount: false,
                        hasError: false,
                        error: undefined,                 
                        expenses
                    }
            }
        }),
        on(AccountActions.failedEditingRecord, (state, error) => getStateWithError(state, error)),
        on(AccountActions.deleteRecord, state => ({ ...state, isUpdatingAccount: true })),
        on(AccountActions.deletedRecord, (state, record) => { 
            switch ( record.typeRecord ) {
                case TypeRecord.INCOME:
                    const incomes = state.incomes.filter(income => income.id !== record.id );
                    return {
                        ...state, 
                        isUpdatingAccount: false,
                        hasError: false,
                        error: undefined,                 
                        incomes
                    }
                default:
                    const expenses = state.expenses.filter(expense => expense.id !== record.id );
                    return {
                        ...state, 
                        isUpdatingAccount: false,
                        hasError: false,
                        error: undefined,                 
                        expenses
                    }
            }
        }),
        on(AccountActions.failedDeletingRecord, (state, error) => getStateWithError(state, error))
    )
});