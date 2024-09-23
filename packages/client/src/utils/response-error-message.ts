const extractErrorMessage = (
  errors: any,
  defaultMessage: string = "An error occurred"
): string => {
  const error = errors?.response?.data ?? errors?.response?.message ?? errors;

  if (typeof error === "string") return error;
  if (error?.message) return error.message;
  if (Array.isArray(error)) return error.join(" ").trim();

  const errorMessages = error?.errors ? Object.values(error.errors).flat() : [];
  return errorMessages.length ? errorMessages.join(" ").trim() : defaultMessage;
};

export { extractErrorMessage };
