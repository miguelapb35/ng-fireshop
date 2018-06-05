import { Component } from '@angular/core';
import { NavbarService } from '../../services/navbar.service';
import { AuthService } from '../../services/auth.service';
import { CartService } from '../../../shop/services/cart.service';



@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {

  constructor(private navbarService: NavbarService, public auth: AuthService, public cart : CartService) {

    if(this.auth.isLogged()) {
      this.navbarService.addNavbarItem(this.auth.getUser('first_name'), ':openAccount');
    }

    // this.navbarService.addNavbarItem('', ':openCart', 'shopping_cart', this.cart.count());
    this.navbarService.addSidenavItem('Home', '/');
    this.navbarService.addSidenavItem('Promotions', '/promotions');
    this.navbarService.addSidenavItem('Wish List', '/wish-list');

    if(this.auth.isLogged()) {
      this.navbarService.addSidenavItem('Logout', ':logout');
    } else {
      this.navbarService.addSidenavItem('Login', '/login');
    }

    this.navbarService.setNavbarTitle('ANGUSHOP');
  }

  public navbar(methodName : string, methodArgs ?: any) {
    if(this.navbarService[methodName]) {
      return (methodArgs) ? this.navbarService[methodName](methodArgs) : this.navbarService[methodName]();
    }
    return null;
  }

}
