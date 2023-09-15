export function shorten(string) {
  if (string.length > 50) return string.slice(0, 50).trim();
  else return string;
}
