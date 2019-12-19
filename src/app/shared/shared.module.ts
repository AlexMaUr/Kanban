import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import {
  MatButtonModule, MatIconModule,
  MatInputModule,
} from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    // material modules
    MatButtonModule,
    MatInputModule,
    MatIconModule,
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    // material modules
    MatButtonModule,
    MatInputModule,
    MatIconModule,
  ],
})
export class AppSharedModule {
}
