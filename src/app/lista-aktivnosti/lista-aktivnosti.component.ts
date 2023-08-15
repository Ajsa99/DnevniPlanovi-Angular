import { Component, OnInit } from '@angular/core';
import { AktivnostService } from 'src/app/services/aktivnost.service';
import { Aktivnost } from '../model/Aktivnost';

@Component({
  selector: 'app-lista-aktivnosti',
  templateUrl: './lista-aktivnosti.component.html',
  styleUrls: ['./lista-aktivnosti.component.scss'],
})
export class ListaAktivnostiComponent implements OnInit {
  aktivnosti!: Aktivnost[];

  idKorisnka: any;

  isToday(dateString: string): boolean {
    const activityDate = new Date(dateString);
    const today = new Date();

    return (
      activityDate.getFullYear() === today.getFullYear() &&
      activityDate.getMonth() === today.getMonth() &&
      activityDate.getDate() === today.getDate()
    );
  }

  isFutureDate(dateString: string): boolean {
    const activityDate = new Date(dateString);
    const today = new Date();

    return activityDate > today;
  }
  constructor(private aktivnostService: AktivnostService) {}

  ngOnInit(): void {
    this.aktivnostService.getAktivnosti().subscribe((response) => {
      this.aktivnosti = response;
      console.log(response);
    });

    this.idKorisnka = localStorage.getItem('id');
  }

  Status(id: number) {
    console.log(id);

    this.aktivnostService.updateAktivnost(id, 'Odradjena').subscribe();
  }
}
