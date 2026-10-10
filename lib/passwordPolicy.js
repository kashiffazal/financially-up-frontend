/**
 * Staff password rules (same as the API: financially-up-backend/utils/password.js)
 * and a strong-password generator for admins setting a temporary password.
 */

export const PASSWORD_HINT = "At least 10 characters, with letters and numbers.";

/** A message when the password is too weak, otherwise null. */
export const passwordProblem = (password) => {
  const value = typeof password === "string" ? password : "";
  if (value.length < 10) return "Password must be at least 10 characters long.";
  if (value.length > 128) return "Password must be 128 characters or fewer.";
  if (!/[A-Za-z]/.test(value) || !/\d/.test(value)) return "Password must include both letters and numbers.";
  return null;
};

/** antd Form rule list for a new password field. */
export const passwordRules = (requiredMessage = "Please enter a password") => [
  { required: true, message: requiredMessage },
  {
    validator: (_, value) => {
      if (!value) return Promise.resolve();
      const problem = passwordProblem(value);
      return problem ? Promise.reject(new Error(problem)) : Promise.resolve();
    },
  },
];

/** Random 16-character password with upper/lower case, digits and symbols (crypto-strong). */
export const generateStrongPassword = (length = 16) => {
  const sets = ["ABCDEFGHJKLMNPQRSTUVWXYZ", "abcdefghijkmnopqrstuvwxyz", "23456789", "!@#$%^&*-_=+"];
  const all = sets.join("");
  const random = (max) => {
    const buf = new Uint32Array(1);
    crypto.getRandomValues(buf);
    return buf[0] % max;
  };
  const chars = sets.map((set) => set[random(set.length)]);
  while (chars.length < length) chars.push(all[random(all.length)]);
  for (let i = chars.length - 1; i > 0; i--) {
    const j = random(i + 1);
    [chars[i], chars[j]] = [chars[j], chars[i]];
  }
  return chars.join("");
};
