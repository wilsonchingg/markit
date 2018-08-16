import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth/authService';
import { ServerAPI } from '../../service/server-api/server-api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None,
})

/**
* Login page
*/
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  validationMessage: string;
  // Is the form currently being submitted,
  // This prevent people from clicking the form more than once and registering two users
  submitted = false;

  /**
  * Constructor
  * @param  {AuthService} authService - Authentication provider
  * @param  {serverAPI}   ServerAPI   - Server requests interface
  * @param  {Router}      router      - Angular router
  */
  constructor(private authService: AuthService, private serverAPI: ServerAPI,
              private router: Router) {
    this.onSubmit = this.onSubmit.bind(this);
  }

  /**
  * ngOnInit
  */
  ngOnInit() {
  }


  /**
  * submit the login form
  */
  onSubmit() {
    // Prevent submitting if the form is not filled in
    if (!this.username || !this.password) {
      this.validationMessage = 'Please fill in the form';
    } else {
      this.validationMessage = null;
      // Prevent user from spanning the submit button by temporarily disable login button until
      // response is returned
      this.submitted = true;
      this.serverAPI.login({ email: this.username, password: this.password }).then((response) => {
        if (response.status >= 200 && response.status < 300) {
          this.submitted = false;
          response.json().then((result) => {
            this.authService.login();
            sessionStorage.setItem('jwt', result.message);
            this.router.navigateByUrl('/markets');
          });
        } else {
          this.submitted = false;
          this.validationMessage = 'Incorrect username or password';
        }
      }).catch((error) => {
        this.submitted = false;
        this.validationMessage = 'Unexpected error occurred, please try again later';
      });
    }
  }
}
