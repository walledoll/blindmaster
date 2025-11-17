import { enLayout } from './en';
import { ruLayout } from './ru';

export const LAYOUTS = {
  'en-US': enLayout,
  'ru-RU': ruLayout,
};

export type LayoutName = keyof typeof LAYOUTS;