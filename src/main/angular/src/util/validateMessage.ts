const input = ['firstName', 'lastName', 'email', 'password'];

/**
 * Get the error message given the input is invalid
 * @param  {FormGroup} formValidator - form validator
 * @param  {string}    inputType     - type of the input, such as firstName
 * @return {string}                  - an error message, or undefined if the input is invalid
 */
const getErrorMessage =  (formValidator, inputType) => {
  // If the inputType does not exist in our list or there are no errors in the formvalidator
  if (input.indexOf(inputType) < 0 || !formValidator.errors) { return undefined; }
  switch (inputType) {
    case 'firstName':
      if (formValidator.errors.required) {
        return 'Please fill in your first name';
      }
      if (formValidator.errors.minlength) {
        return 'First name must be at least 2 characters long';
      }
      if (formValidator.errors.maxlength) {
        return 'Your first name should not exceed 30 characters';
      }
      break;
    case 'lastName':
      if (formValidator.errors.required) {
        return 'Please fill in your last name';
      }
      if (formValidator.errors.minlength) {
        return 'Last name must be at least 2 characters long';
      }
      if (formValidator.errors.maxlength) {
        return 'Your last name should not exceed 30 characters';
      }
      break;
    case 'email':
      if (formValidator.errors.required) {
        return 'Please fill in your email';
      }
      if (formValidator.errors.email) {
        return 'Invalid email';
      }
      if (formValidator.errors.maxlength) {
        return 'Your email should not exceed 100 characters.';
      }
      break;
    case 'password':
      if (formValidator.errors.required) {
        return 'Please fill in your password';
      }
      if (formValidator.errors.minlength ||
      formValidator.errors.maxlength) {
        return 'Your password must be at least 8 characters long '
        + 'and must not exceed 100 characters';
      }
      break;
    default: break;
  }
  // supposedly unreachable
  return undefined;
};
export {
  getErrorMessage,
};
