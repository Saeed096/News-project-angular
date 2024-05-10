import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class authenticationGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    if (localStorage.getItem('token')) {
      // Token exists in local storage, allow access to the route
      return true;
    } else {
      // No token found, redirect to login page
      this.router.navigate(['/login']);
      return false;
    }
  }
}
