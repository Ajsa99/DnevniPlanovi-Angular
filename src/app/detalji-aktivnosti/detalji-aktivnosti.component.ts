import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AktivnostService } from 'src/app/services/aktivnost.service';
import { Aktivnost } from '../model/Aktivnost';

@Component({
  selector: 'app-detalji-aktivnosti',
  templateUrl: './detalji-aktivnosti.component.html',
  styleUrls: ['./detalji-aktivnosti.component.scss'],
})
export class DetaljiAktivnostiComponent implements OnInit {
  aktivnost!: Aktivnost;
  routeId: any;

  constructor(
    private aktivnostService: AktivnostService,
    private route: ActivatedRoute
  ) {
    this.routeId = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.aktivnostService.getAktivnostId(this.routeId).subscribe((response) => {
      this.aktivnost = response;
      console.log(response);
    });
  }
}
