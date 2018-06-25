import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { HttpModule } from '@angular/http';
import { FlexLayoutModule } from '@angular/flex-layout';

import 'hammerjs';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { DishDetailComponent } from './dishes/dish-detail/dish-detail.component';
import { AppRoutingModule } from './app-routing.module'
import { DeleteDialogComponent } from './delete-dialog.component';
import { AddDishComponent } from './dishes/add-dish/add-dish.component';

@NgModule({
    declarations: [
        AppComponent,
        MenuComponent,
        DishDetailComponent,
        DeleteDialogComponent,
        AddDishComponent
    ],
    entryComponents: [DeleteDialogComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpModule,
        FlexLayoutModule,
        MaterialModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
