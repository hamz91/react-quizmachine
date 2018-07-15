import { combineReducers } from "redux";
import potatoScore from "./potatoScore";
import duckScore from "./duckScore";
import camelScore from "./camelScore";
import wrongPotato from "./wrongPotato";
import wrongDuck from "./wrongDuck";
import wrongCamel from "./wrongCamel";
import question from "./question";

export default combineReducers({
  potatoScore,
  duckScore,
  camelScore,
  wrongPotato,
  wrongDuck,
  wrongCamel,
  question
});
