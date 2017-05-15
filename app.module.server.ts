import { NgModule }             from '@angular/core';
import { ServerModule }         from '@angular/platform-server';
import { sharedConfig }         from './app.module';
import { HttpService }          from './services/index';



@NgModule({
    bootstrap: sharedConfig.bootstrap,
    declarations: sharedConfig.declarations,
    imports: [
        ServerModule,        
        ...sharedConfig.imports
    ],
    providers: [HttpService]
})
export class AppModule {
}
