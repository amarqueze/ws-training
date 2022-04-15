import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TtClassDirectiveDirective } from './directives/tt-class-directive.directive';
import { UppercasePipe } from './pipes/uppercase.pipe';

@NgModule({
  declarations: [
    TtClassDirectiveDirective,
    UppercasePipe
  ],
  exports: [
    TtClassDirectiveDirective,
    UppercasePipe
  ],
  imports: [
    CommonModule
  ]
})
export class ShareModule { }
