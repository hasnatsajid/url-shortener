export const validateUrl = (value) => {
  return /^(http|https):\/\/[^ "]+$/.test(value);
};
