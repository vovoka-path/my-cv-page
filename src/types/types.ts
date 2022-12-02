export type ViewModeType = 'mobile' | 'desktop';

export type ViewModeProps = {
  viewMode: ViewModeType;
};

export type ItemCVProps = {
  title: string;
  subtitle: string;
  date: string;
  description: string;
  id: number;
};

export type CategoryCVProps = {
  category: string;
  id?: string | number;
};
