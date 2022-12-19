export type ViewModeType = 'mobile' | 'desktop';

export type ViewModeProps = {
  viewMode: ViewModeType;
};

export type ItemCVProps = {
  id: number;
  title: string;
  subtitle: string;
  date: string;
  description: string;
  description_link?: string;
};

export type CategoryCVProps = {
  category: string;
  id?: string | number;
};
