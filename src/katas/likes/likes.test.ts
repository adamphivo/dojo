import { getLikes } from "./likes";

describe('static tests', function() {
    it('should return correct text', function() {
        expect(getLikes([])).toBe("no one likes this");
        expect(getLikes(['Peter'])).toBe("Peter likes this");
        expect(getLikes(['Jacob', 'Alex'])).toBe('Jacob and Alex like this');
        expect(getLikes(['Max', 'John', 'Mark'])).toBe('Max, John and Mark like this')
        expect(getLikes(['Alex', 'Jacob', 'Mark', 'Max'])).toBe('Alex, Jacob and 2 others like this');
    });
  });