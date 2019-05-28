import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NuevomedPage } from './nuevomed.page';
import { IonicSelectableModule } from 'ionic-selectable';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {
    path: '',
    component: NuevomedPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    IonicSelectableModule,
    HttpClientModule
  ],
  declarations: [NuevomedPage]
})
export class NuevomedPageModule {}
