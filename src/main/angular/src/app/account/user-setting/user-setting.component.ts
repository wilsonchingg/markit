import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import * as Validator from '../../../util/formValidator';
import { getErrorMessage } from '../../../util/validateMessage';
import { ServerAPI } from '../../../service/server-api/server-api.service';


@Component({
  selector: 'app-user-setting',
  templateUrl: './user-setting.component.html',
  styleUrls: ['./user-setting.component.css'],
  encapsulation: ViewEncapsulation.None,
})

/**
* Reusable component for modifying particular user detail,
* such as first name
*/
export class UserSettingComponent implements OnInit {

  // An object containing information for component initialization
  // @see account.component.ts
  @Input() input: any;
  // Type of input
  @Input() type = 'text';
  // Associated validation for the input field
  validator: FormGroup;
  // User input from the front end
  inputValue: string;
  errorMessage = null;
  // Is the form currently being submitted,
  // This prevent people from clicking the form more than once and registering two users
  submitted = false;

  /**
   * Constructor
   * @param  {serverAPI} ServerAPI             - Server requests interface
   */
  constructor(private serverAPI: ServerAPI) {
    this.onSubmit = this.onSubmit.bind(this);
  }

  /**
   * Obtain form validator from the utility directory based on information
   * the parent component has provided
   */
  ngOnInit() {
    const formControls = {};
    formControls['inputValidate'] = new FormControl(this.inputValue,
			                                                 Validator[this.input.inputName + 'Validator']);
    this.validator = new FormGroup(formControls);
  }

  /**
   * Submit the user detail change to the server
   */
  onSubmit() {
	//  Prevent submitting if error is found
    if (this.validator.get('inputValidate').errors) {
      this.errorMessage = getErrorMessage(
			this.validator.get('inputValidate'), this.input.inputName);
      return;
    }
    this.errorMessage = null;
    this.submitted = true;

	   // Construct JSON payload for form submission
    const jsonPayload = {};
    jsonPayload[this.input.inputName] = this.inputValue;
    this.serverAPI.updateUser(jsonPayload).then((response) => {
      this.submitted = false;
		    // Accepted
      if (response.status === 202) {
				// Hard refresh on the page
        location.reload();
      } else {
        response.json().then((data) => {
          this.errorMessage = data.message;
        }).catch(() => {});
      }
    }).catch((error) => {
      this.submitted = false;
    });
  }
}
