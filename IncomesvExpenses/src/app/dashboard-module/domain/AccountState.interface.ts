import { OperationError } from './../../share/domain/OperationError.interface';
import { Record } from "./Record.interface";

export interface AccountState {
   isUpdatingAccount: boolean;
   hasError: boolean;
   error: OperationError | undefined;
   incomes: ReadonlyArray<Record>;
   expenses: ReadonlyArray<Record>;
}