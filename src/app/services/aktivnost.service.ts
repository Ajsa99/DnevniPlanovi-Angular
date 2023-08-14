import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Aktivnost } from '../model/Aktivnost';

@Injectable()
export class AktivnostService {
  constructor(private http: HttpClient) {}

  getAktivnosti() {
    return this.http.get<any[]>('https://localhost:7050/getAktivnosti');
  }

  getAktivnostId(id: number) {
    return this.http.get<any>(`https://localhost:7050/getAktivnosti/${id}`);
  }

  postAktivnost(ak: Aktivnost) {
    return this.http.post<any>('https://localhost:7050/postAktivnost', ak);
  }

  updateAktivnost(id: number, opis: string) {
    return this.http.put<any>(
      `https://localhost:7050/UpdateAktivnost/${id}/${opis}`,
      null
    );
  }
}
