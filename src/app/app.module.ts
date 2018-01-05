import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Ng2CarouselamosModule} from 'ng2-carouselamos';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {SearchComponent} from './components/search/search.component';
import {CardsComponent} from './components/cards/cards.component';
import {FooterComponent} from './components/footer/footer.component';
import {StylistComponent} from './components/stylist/stylist.component';
import {AdvancedsearchComponent} from './components/advancedsearch/advancedsearch.component';
import {ParallaxComponent} from './components/parallax/parallax.component';
import {DataService} from './services/data.service';
import {TestComponent} from './components/test/test.component';

import {RouterModule, Routes} from '@angular/router';
import {CalendarComponent} from './components/calendar/calendar.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatNativeDateModule} from '@angular/material';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SafeHtmlPipe} from './safe-html.pipe';




const appRoutes: Routes = [
  {path: '', component: ParallaxComponent},
  {path: 'stylist', component: StylistComponent},
  {path: 'searchCards', component: CardsComponent},
  // {path: '', component: SearchComponent},
  {path: 'advancedSearch', component: AdvancedsearchComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    CardsComponent,
    FooterComponent,
    StylistComponent,
    CalendarComponent,
    AdvancedsearchComponent,
    ParallaxComponent,
    SafeHtmlPipe,
    TestComponent,


  ],
  imports: [
    BrowserModule,
    Ng2CarouselamosModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    MatButtonToggleModule,
    MatButtonModule, MatCheckboxModule,
    HttpModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    BrowserAnimationsModule,
    BrowserModule,
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
