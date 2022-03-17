import { NgModule } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';

@NgModule({
  imports: [InputTextModule, ToastModule],
  exports: [InputTextModule, ToastModule],
})
export class PrimengModule {}
