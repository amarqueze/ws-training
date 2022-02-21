import { OperationError } from './../../share/domain/OperationError.interface';
import { Record } from '../domain/Record.interface';
import { createAction, props } from '@ngrx/store';

/**
 * define operations for delete incomes and expenses
 */
export const createNewRecord = createAction(
    '[Account] Create new record',
    props<Record>()
);

export const createdRecord = createAction(
    '[Account] Created record',
    props<Record>()
);

export const failedCreatingRecord = createAction(
    '[Account] Failed creating record',
    props<OperationError>()
);

/**
 * define operations for edit incomes and expenses by amount
 */
export const editNewRecord = createAction(
    '[Account] Edit new record',
    props<{IdRecord: string, newAmount: number}>()
);

export const editedRecord = createAction(
    '[Account] Edited record',
    props<Record>()
);

export const  failedEditingRecord = createAction(
    '[Account] Failed editing record',
    props<OperationError>()
);

/**
 * define operations for delete incomes and expenses
 */
 export const deleteRecord = createAction(
    '[Account] Delete record',
    props<{idRecord: String}>()
);

export const deletedRecord = createAction(
    '[Account] Deleted Record',
    props<Record>()
);

export const failedDeletingRecord = createAction(
    '[Account] Failed deleting Record',
    props<OperationError>()
);
