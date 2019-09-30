import React, {Component} from 'react';
import Dice from './Dice';
import './RollDice.css'


class RollDice extends Component {
  static defaultProps = {
    sides:['one', 'two', 'three', 'four', 'five', 'six']
  };

  state = {dice1: 'one', dice2: 'two', rolling: false};

 roll = () => {
  const new1 = this.props.sides[Math.floor(Math.random()*this.props.sides.length)];
  const new2 = this.props.sides[Math.floor(Math.random()*this.props.sides.length)];
  this.setState({dice1:new1, dice2:new2, rolling: true})
  setTimeout(() => {
    this.setState({rolling: false})
  }, 1000)
}


    render () {

      return (
        <div className='RollDice'>
          < Dice className="Dice" face={this.state.dice1} />
          < Dice className="Dice" face={this.state.dice2} /><br />
          <button onClick={this.roll} disabled={this.state.rolling}>{this.state.rolling? 'Rolling...' : 'Roll Dice!'}</button>
        </div>


      )
    }
  }

export default RollDice;
