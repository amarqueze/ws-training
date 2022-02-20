import { createAction, props } from '@ngrx/store';
import { AuthUser } from '../../domain/AuthUser.interface';
import { OperationError } from '../../domain/OperationError.interface';
import { Session } from '../../domain/Session.interface';
import { User } from '../../domain/User.interface';

/**
 * define operations for Sign Up users
 */
export const signUp = createAction(
    '[Auth] Sign up User',
    props<User>()
);

export const successSignUp = createAction(
    '[Auth] Success Sign up User',
    props<Session>()
);

export const failedSignUp = createAction(
    '[Auth] Failed Sign up User',
    props<OperationError>()
);

/**
 *  define operations for Sign In Users 
 */
export const signIn = createAction(
    '[Auth] Sign in User',
    props<AuthUser>()
);

export const successSignIn = createAction(
    '[Auth] Success Sign in User',
    props<Session>()
);

export const failedSignIn = createAction(
    '[Auth] Failed Sign in User',
    props<OperationError>()
);

/**
 * define operations for Log Out Users
 */
 export const SignOut = createAction(
    '[Auth] Sign in User'
);

export const successSignOut = createAction(
    '[Auth] Success Log out User'
);

export const failedSignOut = createAction(
    '[Auth] Failed log out User',
    props<OperationError>()
);