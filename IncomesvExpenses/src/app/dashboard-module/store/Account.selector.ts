import { createSelector } from "@ngrx/store";
import { AccountState } from "../domain/AccountState.interface";
import { Record } from '../domain/Record.interface';


export const selecAccount = ({ accountState }: { accountState: AccountState }) => accountState;

export const selectAccountisUpdating = createSelector(
    selecAccount,
    (state: AccountState) => state.isUpdatingAccount
);

export const selectAccountIncomes = createSelector(
    selecAccount,
    (state: AccountState) => state.incomes
);

export const selectAccountTotalIncomes = createSelector(
    selecAccount,
    (state: AccountState) => state.incomes.reduce((acc, current) => acc + current.amount, 0)
);

export const selectAccountExpenses = createSelector(
    selecAccount,
    (state: AccountState) => state.expenses
);

export const selectAccountTotalExpenses = createSelector(
    selecAccount,
    (state: AccountState) => state.expenses.reduce((acc, current) => acc + current.amount, 0)
);

export const selectAccountDetail = createSelector(
    selectAccountIncomes,
    selectAccountTotalIncomes,
    selectAccountExpenses,
    selectAccountTotalExpenses,
    (allIncomes: ReadonlyArray<Record>, totalIncomes: number, allExpenses: ReadonlyArray<Record>, totalExpenses: number) => {
        return {            
            incomes: allIncomes,
            totalIncomes: totalIncomes,
            expenses: allExpenses,
            totalExpenses: totalExpenses,
            balance: totalIncomes - totalExpenses
        };
    }
);