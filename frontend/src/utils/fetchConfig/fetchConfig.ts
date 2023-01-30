export const fetchConfig = (auth: string) => {
  return {
    headers: {
      Authorization: `Bearer ${auth}`,
    },
  };
};
