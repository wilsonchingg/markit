import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth/authService';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.None,
})

/**
 * Header Component
 */
export class HeaderComponent implements OnInit {

  /**
   * Constructor
   * @param  {AuthService} authService   - Authentication provider
   * @param  {Router}      router        - Angular router
   */
  constructor(private authService: AuthService, private router: Router) {}

	/**
   * ngOnInit
   */
  ngOnInit() {
    this.logout = this.logout.bind(this);
    this.isLoggedIn = this.isLoggedIn.bind(this);
  }

  /**
   * Get the login status of a user
   * @return {boolean} whether a user is logged in
   */
  isLoggedIn() {
    return this.authService.isLoggedIn;
  }

	/**
   * Logout action when the user clicks on the logout button
   */
  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/');
  }
}
