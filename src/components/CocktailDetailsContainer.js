import React from "react";
import { connect } from "react-redux";
import CocktailDetails from "./CocktailDetails";

class CocktailDetailsContainer extends React.Component {
  render() {
    console.log("PROPS IN CDC", this.props); // depatch
    const cocktail = this.props.cocktail;
    if (!cocktail) return null;

    return <CocktailDetails cocktail={cocktail} />;
  }
}

const mapStateToProps = state => {
  if (state.selectedCocktail !== null) {
    return {
      cocktail: state.cocktails.find(
        cocktail => cocktail.id === state.selectedCocktail
      )
    };
  }
  return {};
};

export default connect(mapStateToProps)(CocktailDetailsContainer);
