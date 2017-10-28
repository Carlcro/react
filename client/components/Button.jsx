import React from 'react';
import PropTypes from 'prop-types'

export default class Button extends React.Component{

  constructor(props){
    super(props);
    this.state = {counter: this.props.init }

    this.buttonHandler = this.buttonHandler.bind(this)
  }

  buttonHandler()
  {
    let {counter} = this.state
    this.setState({counter: counter+1})
  }

  render(){
    let {counter} = this.state
    let {buttonHandler} = this
    return <button onClick = {buttonHandler}>{counter}</button>

  }

}

Button.propTypes = {
  init: PropTypes.number.isRequired

}

Button.defaultProps = {init : 0}
