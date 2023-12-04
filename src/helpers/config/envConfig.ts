export const getBaseUrl = (): string => {
  return process.env.NEXT_PUBLIC_BASE_API || "http://localhost:5000/api/v1";
};
