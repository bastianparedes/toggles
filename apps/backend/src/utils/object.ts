const keys = <Obj extends Record<string, unknown>>(
  object: Obj,
): (keyof Obj)[] => {
  return Object.keys(object);
};

export { keys };
