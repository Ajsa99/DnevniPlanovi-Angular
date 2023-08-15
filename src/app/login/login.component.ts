import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Korisnik } from '../model/Korisnik';
import { KorisnikService } from '../services/korisnik.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
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

  Login() {
    this.korisnik = {
      id: 0,
      ime: this.ime?.value,
      lozinka: this.lozinka?.value,
    };

    if (this.form.valid) {
      console.log(this.korisnik);

      this.korisnikService.login(this.korisnik).subscribe((response) => {
        console.log(response);
        if (response.msg) {
          alert(response.msg);
        } else {
          alert('Uspesno ste se ulogovali');

          localStorage.setItem('id', response.id);
          localStorage.setItem('ime', response.ime);
          localStorage.setItem('token', response.lozinka);

          this.router.navigate(['/lista']);
        }
      });
    }
  }
}
