const safeMap = <T = void>(array?: T) => {
  if (array) return array as T;
  else return null;
};

export { safeMap };
