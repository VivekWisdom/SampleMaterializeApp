import { NgModule } from '@angular/core';
import { Settings } from './settings.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [ SharedModule],
  declarations: [
    Settings
  ],
  providers: [

  ]
})
export class SettingsModule { }
