import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import SignIn2167026Reducer from '../features/SignIn2167026/redux/reducers'
import SignIn2167012Reducer from '../features/SignIn2167012/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
SignIn2167026: SignIn2167026Reducer,
SignIn2167012: SignIn2167012Reducer,

});