import { AuthState } from './../../domain/AuthState.interface';
import * as AuthActions from './auth.actions';
import { createReducer, on } from '@ngrx/store';


export const initialState: AuthState = {
    isChecking: false,
    hasSession: false,
    hasError: false,
};

export const AuthReducer = createReducer(
    initialState,
    on(AuthActions.signUp, (state) => ({ 
        ...state,
        isChecking: true,
    })),
    on(AuthActions.successSignUp, (state, session) => ({ 
        isChecking: false, 
        hasSession: true,
        session: session,
        hasError: false,
        error: undefined
    })),
    on(AuthActions.failedSignUp, (state, error) => ({ 
        isChecking: false, 
        hasSession: false,
        session: undefined,
        hasError: true,
        error: error
    })),
    on(AuthActions.signIn, (state) => ({ 
        ...state,
        isChecking: true,
    })),
    on(AuthActions.successSignIn, (state, session) => ({ 
        isChecking: false, 
        hasSession: true,
        session: session,
        hasError: false,
        error: undefined
    })),
    on(AuthActions.failedSignIn, (state, error) => ({ 
        isChecking: false, 
        hasSession: false,
        session: undefined,
        hasError: true,
        error: error
    })),
    on(AuthActions.signIn, (state) => ({ 
        ...state,
        isChecking: true,
    })),
    on(AuthActions.successSignOut, () => ({ 
        isChecking: false, 
        hasSession: false,
        session: undefined,
        hasError: false,
        error: undefined
    })),
    on(AuthActions.failedSignOut, (state, error) => ({ 
        isChecking: false, 
        hasSession: false,
        session: undefined,
        hasError: true,
        error: error
    })),
);