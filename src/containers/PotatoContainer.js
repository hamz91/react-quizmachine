import { connect } from "react-redux";
import {
  increasePotatoScore,
  increaseWrongPotatoScore,
  fetchPotatoQuestion
} from "../actions";
import PotatoQuiz from "../components/PotatoQuiz";

export const mapStateToProps = reduxState => {
  return {
    potatoScore: reduxState.potatoScore,
    wrongPotato: reduxState.wrongPotato,
    question: reduxState.question
  };
};

export const mapDispatchToProps = dispatch => {
  return {
    handleScore: score => {
      dispatch(increasePotatoScore(score)), dispatch(fetchPotatoQuestion());
    },
    handleWrong: score => dispatch(increaseWrongPotatoScore(score)),
    fetchQuestion: () => dispatch(fetchPotatoQuestion())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PotatoQuiz);
