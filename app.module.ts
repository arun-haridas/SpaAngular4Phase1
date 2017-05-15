import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component'
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { FetchDataComponent }   from './components/fetchdata/fetchdata.component';
import { CounterComponent }     from './components/counter/counter.component';

import { HomeModule }           from './components/home/home.module';
import { AuthModule }           from './components/auth/auth.module';
import { AppService }           from './services/index';
import { HttpService }          from './services/http.service';
import { AppRouting }           from './app.routes';

import { SharedModules } from './components/shared/shared.modules';


export const sharedConfig: NgModule = {
    bootstrap: [ AppComponent ],
    declarations: [
        AppComponent,
        //NavMenuComponent,
        //CounterComponent,
        //FetchDataComponent,
        HomeComponent        
    ],
    imports: [        
        AuthModule,
        HomeModule,
        SharedModules,
        AppRouting,
        //RouterModule.forRoot([
        //    { path: '', redirectTo: 'home', pathMatch: 'full' },
        //    { path: 'home', component: HomeComponent },
        //    { path: 'counter', component: CounterComponent },
        //    { path: 'fetch-data', component: FetchDataComponent },
        //    { path: '**', redirectTo: 'home' }
        //])
    ],
    providers: [HttpService]
};






