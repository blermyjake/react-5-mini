import React, { Component } from "react";
import { connect } from 'react-redux';
import {increment, decrement, undo, redo} from './ducks/counter';


import "./App.css";

class App extends Component {
  
  render() {
    const { 
      currentValue, decrement, increment, 
      futureValues, previousValues, 
      redo, undo 
    } = this.props;

    return (
      <div className="app">
        <section className="counter">
          <h1 className="counter__current-value">{ currentValue }</h1>
          <div className="counter__button-wrapper">
            <button
              className="counter__button increment-one"
              onClick={ () => this.props.increment(1) }
            >
              +1
            </button>
            <button
              className="counter__button increment-five"
              onClick={ () => this.props.increment(5) }
            >
              +5
            </button>
            <button
              className="counter__button decrement-one"
              onClick={ () => this.props.decrement(1) }
            >
              -1
            </button>
            <button
              className="counter__button decrement-five"
              onClick={ () => this.props.decrement(5) }
            >
              -5
            </button>
            <br />
            <button
               className="counter__button"
               disabled={ previousValues.length === 0 }
               onClick={ undo }
            >
              Undo
            </button>
            <button
              className="counter__button"
              disabled={ futureValues.length === 0 }
              onClick={ redo }
            >
              Redo
            </button>
          </div>
        </section>
        <section className="state">
          <pre>
            { JSON.stringify( this.props, null, 2 ) }
          </pre>
        </section>
      </div>
    );
  }
}

// this is better
const mapStateToProps = state => state
// than this
// function mapStateToProps( state ) {
//   return state;
// }
export default connect(mapStateToProps, {increment, decrement, redo, undo})(App);
