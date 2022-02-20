import { Session } from './Session.interface';
import { OperationError } from './OperationError.interface';

export interface AuthState {   
    isChecking: boolean;
    hasSession: boolean;
    session?: Session;
    hasError: boolean;
    error?: OperationError;   
}