import {InjectionToken, ModuleWithProviders, NgModule} from '@angular/core';
import {NgxElectronContentMenuDirective} from './directives/ngx-electron-content-menu.directive';
import {CommonModule} from '@angular/common';
import {NgxElectronWindowComponent} from './components/ngx-electron-window/ngx-electron-window.component';
import {NgxElectronService} from './services/ngx-electron.service';

export const OPTIONS = new InjectionToken<string>('NGXELECTRONCOREOPTIONS');

export interface ElectronCoreOptions {
    isDebugger: boolean;
    server?: {
        localhost: string;
        port: number;
    };
}

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        NgxElectronWindowComponent,
        NgxElectronContentMenuDirective
    ],
    exports: [
        NgxElectronWindowComponent,
        NgxElectronContentMenuDirective
    ]
})
export class NgxElectronCoreModule {
    static forRoot(options: ElectronCoreOptions = {isDebugger: false}): ModuleWithProviders {
        return {
            ngModule: NgxElectronCoreModule,
            providers: [
                {provide: OPTIONS, useValue: options},
                NgxElectronService
            ]
        };
    }
}
