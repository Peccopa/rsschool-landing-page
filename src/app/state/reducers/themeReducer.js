export default function themeReducer(state, action) {
  switch (action.type) {
    case 'THEME_TOGGLE': {
      const nextTheme = state.theme === 'dark' ? 'light' : 'dark';

      return {
        ...state,
        theme: nextTheme,
      };
    }

    default:
      return state;
  }
}
