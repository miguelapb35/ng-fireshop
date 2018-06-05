import {Component, Input, Output} from '@angular/core';
import { NavbarItem } from '../../models/NavbarItem';
import { AuthService } from '../../services/auth.service';
import {CartService} from '../../../shop/services/cart.service';

@Component({
  selector: 'navbar-component',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  @Input() _navbarItems : Array<NavbarItem>;
  @Input() _navbarTitle : string;
  @Input() _navbarType : string;
  @Input() _navbarNavigation : any;

  public _cartOpened : boolean;

  constructor(private auth: AuthService, public cart : CartService) {}

  callFunction(functionName: string) {
    if(this[functionName]) {
      this[functionName]();
    }
  }

  openCart() {
    this._cartOpened = !this._cartOpened;
    console.log('opened cart!', this._cartOpened);

  }

  openAccount() {
    console.log('opened account!');
  }

  logout() {
    this.auth.logout();
  }


}
