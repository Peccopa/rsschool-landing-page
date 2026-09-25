import StateKit from '../../shared/state-kit';
import { initialState } from './initialState';
import menuReducer from './reducers/menuReducer';

const appState = new StateKit(initialState);

appState.addReducer(menuReducer);

export default appState;
