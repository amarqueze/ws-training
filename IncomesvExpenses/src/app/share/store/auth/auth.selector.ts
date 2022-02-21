import { Session } from './../../domain/Session.interface';
import { createSelector, select } from "@ngrx/store";
import { AuthState } from "../../domain/AuthState.interface";
import { pipe } from 'rxjs';
import { filter } from 'rxjs/operators';

export const selectAuth = ({ authState }: { authState: AuthState }) => authState;

export const selectAuthSession = createSelector(
    selectAuth,
    (state: AuthState) => state.session!
);

export const selectAuthSessionExist = pipe(
    select(selectAuthSession),
    filter(session => session !== undefined)    
);

export const selectAuthIsChecking = createSelector(
    selectAuth,
    (state: AuthState) => state.isChecking
);