import { FormControl } from '@angular/forms';

export default function validateCNIC(c: FormControl) {
  const REGEXP = /\d{5}-\d{7}-\d/i;
  return REGEXP.test(c.value) ? null : {
    validateCNIC: {
      valid: false
    }
  };
}
