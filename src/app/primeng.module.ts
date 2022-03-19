import { NgModule } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { TableModule } from 'primeng/table';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ButtonModule } from 'primeng/button';

@NgModule({
  imports: [
    InputTextModule,
    ToastModule,
    TableModule,
    ButtonModule,
    ProgressSpinnerModule,
  ],
  exports: [
    InputTextModule,
    ToastModule,
    TableModule,
    ButtonModule,
    ProgressSpinnerModule,
  ],
})
export class PrimengModule {}
