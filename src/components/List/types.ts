export interface ListProps {
  collectionName: string;
  itemName: string;
  items: any[];
  fieldsToDisplay: string[];
  collectionTitle: string;
  onRowClick?: Function;
  onDeleteItem?: (id: string) => void;
  onRefresh: () => void;
}
