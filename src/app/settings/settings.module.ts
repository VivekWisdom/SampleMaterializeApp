import { NgModule }       from '@angular/core';
import { Settings }    from './settings.component';
import { settingsRouting } from './settings.routes';

@NgModule({
  imports: [
    settingsRouting
  ],
  declarations: [
    Settings
  ],
  providers: [

  ]
})
export class SettingsModule {}
