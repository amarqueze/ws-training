import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { signUp } from 'src/app/share/store/auth/auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private store: Store) { }

  ngOnInit(): void {
    console.log("bbb");
    this.store.dispatch(signUp({nameFull: "Alan Marquez", email: "alanmarquez@outlook.com", password: ""}))
  }
}
