import { Session } from './../../share/domain/Session.interface';
import { selectAuthSessionExist } from './../../share/store/auth/auth.selector';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { signUp } from 'src/app/share/store/auth/auth.actions';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  private _subscriptions = new Subscription();
  session$ = this.store.pipe(selectAuthSessionExist);

  constructor(private store: Store<any>, private router: Router) {}

  ngOnInit(): void {
    this._subscriptions.add(
      this.session$.subscribe(sessionCurrent => this.confirmSession(sessionCurrent)));
      
    this.store.dispatch(signUp({nameFull: "Berton Suarez", email: "bertonz@outlook.com", password: "123456"}));
  }

  ngOnDestroy(): void {
    this._subscriptions.unsubscribe();
  }

  confirmSession(session: Session) {
    console.log(session);
    this.router.navigate(["/dashboard"]);
  }
}
