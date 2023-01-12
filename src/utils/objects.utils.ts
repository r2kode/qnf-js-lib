type Obj<Type> = {
  entry: Type;
};

export const cloneObj = (obj: Obj<unknown>) => ({ ...obj });

export const cloneWithJson = (obj: Obj<unknown>) =>
  JSON.parse(JSON.stringify(obj));

export const cloneWithGlobalMethod = (obj: Obj<unknown>) =>
  structuredClone(obj);
