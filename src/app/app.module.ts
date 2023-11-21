import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

import { AppComponent } from './app.component';
import { WrapperComponent } from './wrapper/wrapper.component';
import { HugeComponent } from './some-heavy-logic-here/huge.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NgxSkeletonLoaderModule.forRoot({
      theme: {
        extendsFromRoot: true,
        display: 'block',
        margin: 0,
      },
    }),
    WrapperComponent,
    HugeComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
