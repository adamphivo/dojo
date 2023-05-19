import assert from 'assert';
import { SSN } from './ssn';

describe('SSN Test suite', () => {
  it('Should return true when SSN is correct', () => {
    assert.strictEqual(
      SSN.isSocialSecurityNumberValid('1 92 07 63 113 165 95'),
      true
    );
  });
  it('Should return false when SSN is wrong', () => {
    assert.strictEqual(
      SSN.isSocialSecurityNumberValid('1 92 07 63 113 125 95'),
      false
    );
    assert.strictEqual(
      SSN.isSocialSecurityNumberValid('2 92 07 63 113 125 95'),
      false
    );
    assert.strictEqual(
      SSN.isSocialSecurityNumberValid('1 96 07 63 113 125 95'),
      false
    );
  });
});
