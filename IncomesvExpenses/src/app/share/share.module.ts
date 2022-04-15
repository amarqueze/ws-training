import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TtClassDirectiveDirective } from './directives/tt-class-directive.directive';

@NgModule({
  declarations: [
    TtClassDirectiveDirective
  ],
  exports: [
    TtClassDirectiveDirective
  ],
  imports: [
    CommonModule
  ]
})
export class ShareModule { }
