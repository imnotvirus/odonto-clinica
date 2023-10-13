const emailRegex = /\S+@\S+\.\S+/;
export function validateEmail(email: string) {
  return emailRegex.test(email);
}
