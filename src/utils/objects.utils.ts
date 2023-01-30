export const cloneObj = <Obj>(obj: Obj): Obj => ({ ...obj });

export const cloneWithJson = <Obj>(obj: Obj): Obj =>
  JSON.parse(JSON.stringify(obj));

export const cloneWithGlobalMethod = <Obj>(obj: Obj): Obj =>
  structuredClone(obj);
