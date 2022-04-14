import { TypeRecord } from './domain/TypeRecord.enum';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { createNewRecord } from './store/Account.actions';

@Component({
  selector: 'app-dashboard-module',
  templateUrl: './dashboard-module.component.html',
  styleUrls: ['./dashboard-module.component.scss']
})
export class DashboardModuleComponent implements OnInit {
  operation = TypeRecord;
  isOpenModel: boolean = false;

  recordForm = new FormGroup(
    {
      typeRecord: new FormControl(this.operation.INCOME, [Validators.required]),
      description: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
      amount: new FormControl(0, [Validators.required])
    }
  );

  constructor(private store: Store<any>) { }

  get typeRecord() {
    return this.recordForm.get('typeRecord');
  }

  get description() {
    return this.recordForm.get('description');
  }

  get amount() {
    return this.recordForm.get('amount');
  }

  ngOnInit(): void {
  }

  openModal() {
    this.isOpenModel = true;
  }

  closeModal() {
    this.isOpenModel = false;
  }

  onSubmit() {
    if(this.recordForm.valid) {
      this.store.dispatch(createNewRecord({
        typeRecord: this.typeRecord?.value,
        description: this.description?.value,
        amount: this.amount?.value
      }));
      this.recordForm.reset({ typeRecord: this.typeRecord?.value });
    }
  }

}
