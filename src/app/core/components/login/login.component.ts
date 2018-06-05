import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private auth : AuthService) {
    if(this.auth.isLogged()) {
      this.auth.router.navigate(['/']);
    }
  }

  public register() {
    this.auth.register('michal.makowski97@gmail.com', 'test123', {
      first_name: 'Michał',
      last_name: 'Makowski',
    });
  }

  public login() {
    this.auth.login('michal.makowski97@gmail.com', 'test123', true);
  }

}
