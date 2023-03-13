// https://www.codewars.com/kata/5266876b8f4bf2da9b000362/train/typescript
export function getLikes(users: string[]): string {
    if (!users.length) return "no one likes this";
    if (users.length === 1) return `${users[0]} likes this`;
    if (users.length === 2) return `${users[0]} and ${users[1]} like this`;
    if (users.length === 3) return `${users[0]}, ${users[1]} and ${users[2]} like this`;
    else return `${users[0]}, ${users[1]} and ${users.length - 2} others like this`;
}