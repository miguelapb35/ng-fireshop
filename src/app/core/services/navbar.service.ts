import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  private _navbarItems : Array<Object> = [];
  private _sidenavItems : Array<Object> = [];
  private _navbarTitle : string;

  constructor() { }

  public addNavbarItem(title: string, uri: string, icon ?: string, badge_count ?: number) {
    const link = { title: title, uri: uri, icon: (icon) ? icon : null, badge_count: (badge_count) ? badge_count : null };
    this._navbarItems.push(link);
  }

  public addSidenavItem(title: string, uri: string, icon ?: string, badge_count ?: number) {
    const link = { title: title, uri: uri, icon: (icon) ? icon : null, badge_count: (badge_count) ? badge_count : null };
    this._sidenavItems.push(link);
  }

  public setNavbarTitle(title : string) {
    this._navbarTitle = title;
  }

  public getSidenavItems() {
    return this._sidenavItems;
  }

  public getNavbarItems() {
    return this._navbarItems;
  }

  public getNavbarTitle() {
    return this._navbarTitle;
  }

}
