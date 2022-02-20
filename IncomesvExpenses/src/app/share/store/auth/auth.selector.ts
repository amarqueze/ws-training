export const selectAuthSession = (state: any) => ({
    hasSession: state.AuthState.hasSession,
    session: state.AuthState.session,
    hasError: state.AuthState.hasError,
    error: state.AuthState.error
});

export const selectAuthIsChecking = (state: any) => state.AuthState.isChecking;

export const selectAuthIsSession = (state: any) => state.AuthState.hasSession;