import { Session } from './../../share/domain/Session.interface';
import { selectAuthSession, selectAuthSessionExist } from './../../share/store/auth/auth.selector';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { signUp } from 'src/app/share/store/auth/auth.actions';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  session$ = this.store.pipe(selectAuthSessionExist);

  constructor(private store: Store<any>) { }

  ngOnInit(): void {
    this.session$.subscribe(sessionCurrent => this.confirmSession(sessionCurrent));
    this.store.dispatch(signUp({nameFull: "Berton Suarez", email: "bertonz@outlook.com", password: "123456"}));
  }

  confirmSession(session: Session) {
    console.log(session);
  }
}
