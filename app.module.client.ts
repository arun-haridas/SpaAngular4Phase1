import { NgModule }             from '@angular/core';
import { BrowserModule, }       from '@angular/platform-browser';
import { FormsModule }          from '@angular/forms';
import { HttpModule }           from '@angular/http';
import { sharedConfig }         from './app.module';
import { HttpService }          from './services/index';

// import { Wi } from '@angular/platform-browser';
// import { PLATFORM_ID , windowref } from '@angular/core';
// import { isPlatformBrowser, isPlatformServer,Win } from '@angular/common';

@NgModule({
    bootstrap: sharedConfig.bootstrap,
    declarations: sharedConfig.declarations,
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        ...sharedConfig.imports
    ],
    providers: [
        HttpService,        
        { provide: 'ORIGIN_URL', useValue: location.origin }
    ]
})
export class AppModule {
}


