# @ngx-electron/core

用于解决angular与electron应用数据传递问题，减少与主进程的交互，可以用angular的方式去操作electron的部分api，包括创建窗口，创建Tray，窗口间数据的传递

相关项目
* @ngx-electron/main
* @ngx-electron/data

## 使用

main.ts

```typescript

import {createTray, createWindow, initElectronMainIpcListener, isMac} from '@ngx-electron/main';

initElectronMainIpcListener();

```


