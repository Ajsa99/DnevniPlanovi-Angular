import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ListaAktivnostiComponent } from './lista-aktivnosti/lista-aktivnosti.component';
import { AddAktivnostComponent } from './add-aktivnost/add-aktivnost.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AktivnostService } from 'src/app/services/aktivnost.service';
import { DetaljiAktivnostiComponent } from './detalji-aktivnosti/detalji-aktivnosti.component';
import { ActivityStatusPipe } from './Pipe/activityStatus.pipe';
import { RegistracijaComponent } from './registracija/registracija.component';
import { LoginComponent } from './login/login.component';
import { KorisnikService } from './services/korisnik.service';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ListaAktivnostiComponent,
    AddAktivnostComponent,
    DetaljiAktivnostiComponent,
    ActivityStatusPipe,
    RegistracijaComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: 'lista', component: ListaAktivnostiComponent },
      { path: 'addAktivnost', component: AddAktivnostComponent },
      { path: 'detailAktivnost/:id', component: DetaljiAktivnostiComponent },
      { path: 'registration', component: RegistracijaComponent },
      { path: '', component: LoginComponent },
    ]),
    HttpClientModule,
  ],
  providers: [AktivnostService, KorisnikService],
  bootstrap: [AppComponent],
})
export class AppModule {}
