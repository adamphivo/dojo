export function humanReadable(totalSeconds: number): string {
  let secondsLeft: number;
  // Get the number of hours
  const hours = Math.floor(totalSeconds / (60 * 60));
  secondsLeft = totalSeconds % (60 * 60);
  // Get the number of minutes
  const minutes = Math.floor(secondsLeft / 60);
  secondsLeft = secondsLeft % 60;
  // Get the number of seconds left
  const seconds = secondsLeft;
  // Format
  return `${format(hours)}:${format(minutes)}:${format(seconds)}`;
}

function format(amount: number) {
  return amount < 10 ? '0' + amount.toString() : amount.toString();
}
