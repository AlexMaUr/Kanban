export const validationErrors = {
  email: [
    {name: 'required', text: 'Email is required'},
    {name: 'pattern', text: 'Email is invalid'},
  ],
  password: [
    {name: 'required', text: 'Password is required'},
    {name: 'pattern', text: 'Password has to contain 1 capital letter, 1 lowercase letter, 1 special digit and a number, no whitespace'},
    {name: 'minlength', text: 'Min length is 8 symbols'},
    {name: 'maxlength', text: 'Max length is 16 symbols'},
  ],
  confirmPassword: [
    {name: 'required', text: 'This field is required'},
    {name: 'notEqual', text: 'Password mismatch'},
  ],
};
