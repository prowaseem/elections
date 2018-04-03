import { FormControl } from '@angular/forms';

export default function validateMOBILE(c: FormControl) {
  const REGEXP = /\d{4}-\d{7}/i;
  return REGEXP.test(c.value) ? null : {
    validateMOBILE: {
      valid: false
    }
  };
}
