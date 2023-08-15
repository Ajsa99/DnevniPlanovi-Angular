import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Korisnik } from '../model/Korisnik';

@Injectable()
export class KorisnikService {
  constructor(private http: HttpClient) {}

  addKorisnik(korisnik: Korisnik) {
    return this.http.post<any>('https://localhost:7050/addKorisnik', korisnik);
  }

  login(korisnik: Korisnik) {
    return this.http.post<any>('https://localhost:7050/login', korisnik);
  }
}
