import { v4 as uuidv4 } from 'uuid';
import { createdRecord, createNewRecord } from './Account.actions';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map } from 'rxjs/operators';

@Injectable()
export class AccountEffects {
    constructor(private actions$: Actions) { }

    createdRecord$ = createEffect(() =>
        this.actions$.pipe(
            ofType(createNewRecord),
            map( action => createdRecord({
                id: uuidv4(),
                typeRecord: action.typeRecord,
                description: action.description,
                amount: action.amount
            }))
        )
    );
}