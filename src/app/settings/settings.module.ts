import { NgModule }       from '@angular/core';
import { Settings }    from '../settings';
import { settingsRouting } from '../settings';

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
