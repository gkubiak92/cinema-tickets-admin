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

interface ICollectionItem {
  id: string;
}

export const deleteItemFromList = (collection: ICollectionItem[], id: string) =>
  collection.filter((item) => item.id !== id);

export const addItemToList = (
  collection: ICollectionItem[],
  item: ICollectionItem
) => [...collection, item];
