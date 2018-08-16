import { Injectable, OnInit } from '@angular/core';
import { ServerAPI } from '../server-api/server-api.service';

@Injectable()
export class AuthService {
  isLoggedIn = false;

  /**
   * When the service is initialized, check if the user is logged in
   * @param  {serverAPI} ServerAPI  - Server requests interface
   */
  constructor(private serverAPI: ServerAPI) {
    this.validateJWT = this.validateJWT.bind(this);
    Promise.resolve(this.validateJWT());
  }

  /**
   * Check if the jwt token in storage (if existed) is valid
   * @return {Promise<boolean>}  - true if the jwt is valid, otherwise false
   */
  validateJWT() {
    return new Promise<boolean>((resolve) => {
      if (!sessionStorage.getItem('jwt')) {
        resolve(false);
      } else {
        this.serverAPI.validateJWT(sessionStorage.getItem('jwt')).then((response) => {
          if (response.status === 200) {
            this.isLoggedIn = true;
            resolve(true);
          } else {
            sessionStorage.removeItem('jwt');
            this.isLoggedIn = false;
            resolve(false);
          }
        });
      }
    });
  }
  /**
   * Set the isLoggedIn state to true
   */
  login(): void {
    this.isLoggedIn = true;
  }

  /**
   * Remove jwt token
   */
  logout(): void {
    this.isLoggedIn = false;
    sessionStorage.removeItem('jwt');
  }
}
