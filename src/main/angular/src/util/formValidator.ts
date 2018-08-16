import { Validators } from '@angular/forms';

// Input validations
const firstNameValidator = [
  Validators.required,
  Validators.minLength(2),
  Validators.maxLength(30),
];
const lastNameValidator = [
  Validators.required,
  Validators.minLength(2),
  Validators.maxLength(30),
];
const emailValidator = [
  Validators.required,
  Validators.email,
  Validators.maxLength(100),
];
const passwordValidator = [
  Validators.required,
  Validators.minLength(8),
  Validators.maxLength(100),
];
export {
  firstNameValidator, lastNameValidator, emailValidator, passwordValidator,
};
