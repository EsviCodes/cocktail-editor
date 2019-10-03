import { combineReducers } from "redux";
import cocktails from "./cocktails";
import selectedCocktail from "./selected-cocktails";

export default combineReducers({
  cocktails,
  selectedCocktail
  // add more reducers
});
