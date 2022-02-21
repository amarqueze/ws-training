import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { TypeRecord } from '../../domain/TypeRecord.enum';
import { createNewRecord } from '../../store/Account.actions';
import { selectAccountDetail } from '../../store/Account.selector';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  private _subscriptions = new Subscription();
  detailAccount$ = this.store.select(selectAccountDetail);

  constructor(private store: Store<any>) {}  

  ngOnInit(): void {
    this._subscriptions.add(
      this.detailAccount$.subscribe(detail => console.log(detail)));

    this.store.dispatch(createNewRecord({
      typeRecord: TypeRecord.INCOME,
      description: "Salary",
      amount: 5000
    }));

    this.store.dispatch(createNewRecord({
      typeRecord: TypeRecord.EXPENSES,
      description: "Food",
      amount: 2000
    }));

    this.store.dispatch(createNewRecord({
      typeRecord: TypeRecord.EXPENSES,
      description: "Others",
      amount: 500
    }));
  }

  ngOnDestroy(): void {
    this._subscriptions.unsubscribe();
  }
}
