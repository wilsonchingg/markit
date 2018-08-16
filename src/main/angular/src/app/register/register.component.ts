import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { firstNameValidator, lastNameValidator,
		emailValidator, passwordValidator } from '../../util/formValidator';
import { getErrorMessage } from '../../util/validateMessage';
import { ServerAPI } from '../../service/server-api/server-api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  encapsulation: ViewEncapsulation.None,
})

/**
 * Register Page
 */
export class RegisterComponent implements OnInit {
	// Input data from the html
  registerForm =  { firstName: '', lastName: '', email: '', password: '' };
	// Validator of the form
  registerFormValidator: FormGroup;
	// Is the form currently being submitted,
	// This prevent people from clicking the form more than once and registering two users
  submitted = false;
  errorMessage = null;

	/**
   * Constructor
   * @param  {Router}      router      - Angular Router
   * @param  {serverAPI}   ServerAPI   - Server requests interface
   */
  constructor(private router: Router, private serverAPI: ServerAPI) {
    this.onSubmit = this.onSubmit.bind(this);
  }

	/**
   * Initialize class parameters
   */
  ngOnInit() {
    this.registerFormValidator = new FormGroup({
      firstName: new FormControl(this.registerForm.firstName, firstNameValidator),
      lastName: new FormControl(this.registerForm.lastName, lastNameValidator),
      email: new FormControl(this.registerForm.email, emailValidator),
      password: new FormControl(this.registerForm.password, passwordValidator),
    });
  }

	/**
   * Validate input in the register form
   * @return {string} Error message if error is found, or null if no error is found
   */
  validate() {
    let _message = null;
    const keys = Object.keys(this.registerForm);
    for (let i = 0; i < keys.length; i += 1) {
      const _validator = this.registerFormValidator.get(keys[i]);
			// If_message is null and there is an error in the current validator,
			// set _message
      _message = _message || getErrorMessage(_validator, keys[i]);
    }
    return _message;
  }

	/**
   * Submit the register form to the server
   */
  onSubmit() {
    this.submitted = true;
		// Prevent submitting if error is found
    this.errorMessage = this.validate();
    if (this.errorMessage) {
      this.submitted = false;
      return;
    }
    let status;
    this.serverAPI.register(this.registerForm).then((data) => {
			// Prevent user from spanning the submit button by temporarily disable login button until
      // response is returned
      this.submitted = false;
      status = data.status;
      if (status === 202) {
        this.errorMessage = null;
        this.router.navigateByUrl('/confirmUser');
      } else {
        data.json().then((data) => {
          this.errorMessage = data.message;
        }).catch(() => {});
      }
    }).catch((error) => {
      this.submitted = false;
    });
  }
}
