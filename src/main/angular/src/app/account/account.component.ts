import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ServerAPI } from '../../service/server-api/server-api.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  encapsulation: ViewEncapsulation.None,
})

/**
 * Account setting page
 */
export class AccountComponent implements OnInit {

  // Information for each user setting's input field
  // to be passed down to user-setting component
  emailInput = {
    label: 'Email',
    originalInput: '',
    inputName: 'email',
  };
  lastNameInput = {
    label: 'Last Name',
    originalInput: '',
    inputName: 'lastName',
  };
  firstNameInput = {
    label: 'First Name',
    originalInput: '',
    inputName: 'firstName',
  };
  passwordInput = {
    label: 'Password',
    originalInput: '',
    inputName: 'password',
  };

  /**
   * Constructor
   * @param  {serverAPI} ServerAPI             - Server requests interface
   */
  constructor (private serverAPI: ServerAPI) { }

  /**
   * Get the current user detail from sessionStorage
   */
  ngOnInit() {
    this.serverAPI.getUser().then((response) => {
      return response.json();
    })
    .then((data) => {
      this.emailInput.originalInput = data.email;
      this.passwordInput.originalInput = '********';
      this.firstNameInput.originalInput = data.firstName;
      this.lastNameInput.originalInput = data.lastName;
    })
    .catch(() => { });
  }
}
