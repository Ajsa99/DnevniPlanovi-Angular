import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AktivnostService } from 'src/app/services/aktivnost.service';
import { Aktivnost } from '../model/Aktivnost';

@Component({
  selector: 'app-add-aktivnost',
  templateUrl: './add-aktivnost.component.html',
  styleUrls: ['./add-aktivnost.component.scss'],
})
export class AddAktivnostComponent implements OnInit {
  form!: FormGroup;

  constructor(private aktivnostService: AktivnostService) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      tip: new FormControl('', [Validators.required]),
      opis: new FormControl('', [Validators.required]),
      prioritet: new FormControl('', [Validators.required]),
      datum: new FormControl('', [Validators.required]),
      vreme: new FormControl('', [Validators.required]),
    });
  }

  get tip() {
    return this.form.get('tip');
  }

  get opis() {
    return this.form.get('opis');
  }

  get prioritet() {
    return this.form.get('prioritet');
  }

  get datum() {
    return this.form.get('datum');
  }

  get vreme() {
    return this.form.get('vreme');
  }

  aktivnost: Aktivnost = {
    id: 0,
    tip: '',
    opis: '',
    prioritet: 0,
    datum: '',
    vreme: '',
  };

  AddAktivnost() {
    this.aktivnost = {
      id: 0,
      tip: this.tip?.value,
      opis: this.opis?.value,
      prioritet: this.prioritet?.value,
      datum: this.datum?.value,
      vreme: this.vreme?.value,
    };

    if (this.form.valid) {
      this.aktivnostService
        .postAktivnost(this.aktivnost)
        .subscribe((response) => {
          console.log(response);
        });
    }
  }
}
