export interface IDeleteDialogProps {
  title?: string;
  message?: string;
  onConfirm: Function;
  onCancel: Function;
  open: boolean;
}
