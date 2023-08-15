import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Korisnik } from '../model/Korisnik';
import { KorisnikService } from '../services/korisnik.service';

@Component({
  selector: 'app-registracija',
  templateUrl: './registracija.component.html',
  styleUrls: ['./registracija.component.scss'],
})
export class RegistracijaComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private korisnikService: KorisnikService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      ime: new FormControl('', [Validators.required]),
      lozinka: new FormControl('', [Validators.required]),
    });
  }

  get ime() {
    return this.form.get('ime');
  }

  get lozinka() {
    return this.form.get('lozinka');
  }

  korisnik: Korisnik = {
    id: 0,
    ime: '',
    lozinka: '',
  };

  Registrujse() {
    this.korisnik = {
      id: 0,
      ime: this.ime?.value,
      lozinka: this.lozinka?.value,
    };

    if (this.form.valid) {
      console.log(this.korisnik);

      this.korisnikService.addKorisnik(this.korisnik).subscribe((response) => {
        console.log(response);
        if (response.msg) {
          alert(response.msg);
        } else {
          alert('Uspesno ste se registrovali!');
          this.router.navigate(['/']);
        }
      });
    }
  }
}
