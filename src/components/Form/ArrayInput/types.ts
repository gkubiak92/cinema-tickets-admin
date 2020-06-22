export interface IArrayInputProps {
  passedElements: string[];
  label: string;
  onChange: (
    eventOrPath: string | React.ChangeEvent<any>
  ) => void | ((eventOrTextValue: string | React.ChangeEvent<any>) => void);
}
