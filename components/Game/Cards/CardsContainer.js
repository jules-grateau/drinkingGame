import { connect } from "react-redux";
import {
  decrementCurrentCard,
  incrementCurrentCard
} from "../../../redux/actions/game";
import Cards from "./CardsClique";
import {
  getCards,
  getCurrentCardIndex,
  isEndCardSelected,
  isFirstCardSelected,
  getEffects
} from "../../../redux/reducers/game";

const mapStateToProps = state => {
  return {
    cards: getCards(state),
    effects: getEffects(state),
    currentCardIndex: getCurrentCardIndex(state),
    isEndCardSelected: isEndCardSelected(state),
    isFirstCardSelected: isFirstCardSelected(state)
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onPressBack: () => {
      dispatch(decrementCurrentCard());
    },
    onPressNextCard: () => {
      dispatch(incrementCurrentCard());
    }
  };
};

const CardsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Cards);

export default CardsContainer;
