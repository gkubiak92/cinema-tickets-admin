interface IKeyValuePairObj {
  [key: string]: any;
}

export const getSortedKeyValuePairs = (unsortedObj: IKeyValuePairObj) => {
  const orderedObject: IKeyValuePairObj = {};
  Object.keys(unsortedObj)
    .sort()
    .forEach((key) => {
      orderedObject[key] = unsortedObj[key];
    });
  return orderedObject;
};
