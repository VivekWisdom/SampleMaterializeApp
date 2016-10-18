import { NgModule, ModuleWithProviders} from '@angular/core';
import { Header } from './header/index';
import { Footer } from './footer/index';

@NgModule({
  imports: [],
  declarations: [Header, Footer],
  exports:[Header, Footer]
})
export class SharedModule {

}
