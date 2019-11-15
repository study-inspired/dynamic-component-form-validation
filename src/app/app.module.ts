import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';
import {ErrorStateMatcher, ShowOnDirtyErrorStateMatcher} from "@angular/material/core";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        MatInputModule,

    ],
    providers: [
        {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
