export class SSN {
  static isSocialSecurityNumberValid(input: string): boolean {
    const cleanInput = input.replace(/\s/g, '');
    const number = parseInt(cleanInput.slice(0, 13));
    const key = parseInt(cleanInput.slice(13, 15));
    return 97 - (number % 97) === key;
  }
}
