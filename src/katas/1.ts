// URL : https://www.codewars.com/kata/5898b4b71d298e51b600014b/train/typescript 

export function solve(sentence: string): string {
    const words = sentence.split(" ");

    const sorted = words.map(word => {
        // Only words with 3+ chars need to be sorted
        if (word.length > 3) {
            const firstLetter = word.charAt(0);
            const lastLetter = word.charAt(word.length - 1);
            const innerContent = word.substring(1, word.length - 1).split("").sort((a, b) => b.localeCompare(a)).join("");
            return `${firstLetter}${innerContent}${lastLetter}`;
        } else {
            return word;
        }
    }).join(" ");

    return sorted;
};

// Best solution - from qiao
/**
 * Note that the use of String.prototype.localCompare() is not necessary as we can directly sort 
 * an array alphabetically with Array.prototype.sort
 */
export function sortTheInnerContent(words: string): string {
    return words.split(' ').map(w => w.length < 2 ? w : w[0] + w.slice(1, -1).split('').sort().reverse().join('') + w.slice(-1)).join(' ');
}