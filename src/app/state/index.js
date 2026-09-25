import StateKit from '../../shared/state-kit';
import { initialState } from './initialState';
import menuReducer from './reducers/menuReducer';
import themeReducer from './reducers/themeReducer';

const appState = new StateKit(initialState);

appState.addReducer(menuReducer, themeReducer);

export default appState;
