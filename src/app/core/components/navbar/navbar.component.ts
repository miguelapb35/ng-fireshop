import { Component, Input } from '@angular/core';
import { NavbarItem } from '../../models/NavbarItem';

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

  constructor() {}

  callFunction(functionName: string) {
    if(this[functionName]) {
      this[functionName]();
    }
  }

  openCart() {
    console.log('opened cart!');
  }

  openAccount() {
    console.log('opened account!');
  }

}
