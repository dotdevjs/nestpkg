import {
  SFieldOperator as BaseSFieldOperator,
  SFiledValues,
} from '@nestjsx/crud-request';

export type JSONSFieldOperator = {
  $jsoneq?: SFiledValues;
  $jsoncont?: SFiledValues;
};
export type SFieldOperator = BaseSFieldOperator & JSONSFieldOperator;

export type ComparisonOperator = keyof SFieldOperator;

export type QueryFilter = {
  field: string;
  operator: ComparisonOperator;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value?: any;
};
