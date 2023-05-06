export function dnaStrand(dna: string): string {
  let complementSquence = '';

  for (let char of dna) {
    switch (char) {
      case 'A':
        complementSquence += 'T';
        break;
      case 'T':
        complementSquence += 'A';
        break;
      case 'C':
        complementSquence += 'G';
        break;
      case 'G':
        complementSquence += 'C';
        break;
    }
  }

  return complementSquence;
}
