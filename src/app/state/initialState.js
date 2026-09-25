import { getTheme } from '../../shared/theme';

export const initialState = {
  menu: {
    open: false,
  },
  theme: getTheme(),
};
