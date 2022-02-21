import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map } from 'rxjs/operators';
import { signUp, successSignUp } from './auth.actions';

@Injectable()
export class AuthEffects {
    constructor(private actions$: Actions) { }

    signUp$ = createEffect(() =>
        this.actions$.pipe(
            ofType(signUp),
            map( action => successSignUp({ nameFull: action.nameFull, email: action.email, sessionToken: "xxx" }) )
        )
    );
}