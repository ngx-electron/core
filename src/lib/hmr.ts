import {ApplicationRef, NgModuleRef, Type} from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import {createNewHosts} from '@angularclass/hmr';


export function bootstrap<M>(moduleType: Type<M>) {
    if (module['hot']) {
        let ngModule: NgModuleRef<any>;
        module['hot'].accept();
        platformBrowserDynamic().bootstrapModule(moduleType).then(currentModule => ngModule = currentModule);
        module['hot'].dispose(() => {
            const appRef: ApplicationRef = ngModule.injector.get(ApplicationRef);
            const elements = appRef.components.map(c => c.location.nativeElement);
            const removeOldHosts = createNewHosts(elements);
            ngModule.destroy();
            removeOldHosts();
        });
    } else {
        platformBrowserDynamic().bootstrapModule(moduleType);
    }
}
