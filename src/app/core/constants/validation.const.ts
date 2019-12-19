import { InjectionToken } from '@angular/core';

export const VALIDATION = new InjectionToken<any>('validation');

export const VALIDATION_VALUE = {
  email: {
    pattern: /^\w+([\.\+-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,6})+$/,
  },
  password: {
    pattern: /^(?!.*[\s])(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[~\\\/"[\]`!@#$%^&*()=+{}|:;,.<>?_-]).+$/,
    minlength: 8,
    maxlength: 16,
  },
};
