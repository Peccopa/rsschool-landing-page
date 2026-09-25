import { initialState } from '../initialState';

export default function menuReducer(state = initialState, action) {
  switch (action.type) {
    case 'MENU_TOGGLE':
      return {
        ...state,
        menu: {
          ...state.menu,
          open: !state.menu.open,
        },
      };

    case 'MENU_CLOSE':
      return {
        ...state,
        menu: {
          ...state.menu,
          open: false,
        },
      };

    default:
      return state;
  }
}
