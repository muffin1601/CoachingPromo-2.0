export const validators = {
  email: (v) => /\S+@\S+\.\S+/.test(v),
  phone: (v) => /^\d{10}$/.test(v)
};
