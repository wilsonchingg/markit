import { Injectable } from '@angular/core';
import {
  CanActivate, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot } from '@angular/router';
import { AuthService } from './authService';

@Injectable()
export class AuthGuard implements CanActivate {

  /**
   * Constructor
   * @param  {AuthService} authService   - Authentication provider
   * @param  {Router}      router        - Angular router
   */
  constructor(private authService: AuthService, private router: Router) {
  }

  /**
   * Prevent the user from visiting pages that are protected by login function
   * @param  {ActivatedRouteSnapshot} route - router
   * @param  {RouterStateSnapshot}    state - current state of the web page
   * @return {Promise<boolean>}             - whether the user is logged in
   */
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):  Promise<boolean> {
    return new Promise((resolve) => {
      this.authService.validateJWT().then((isAuthenticated) => {
        if (isAuthenticated) {
          resolve(true);
        } else {
          this.router.navigate(['/login']);
          resolve(false);
        }
      });
    });
  }
}
