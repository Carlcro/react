import React, {Component} from 'react';
import {connect} from 'react-redux';

class Checkbox extends Component {

    constructor(props) {
        super(props);
        this.state = { isChecked: false };

        this.onClickHandler = this.onClickHandler.bind(this);
    }

    onClickHandler() {
        this.setState({
            isChecked: !this.state.isChecked 
        });
    }

    render() {
        console.log("name i render: " + this.props.name);

        return (
            <div>
            <input type="checkbox" onClick={this.onClickHandler}/>
            <p>The {this.props.name} box is checked: {this.state.isChecked ? 'Yes' : 'No'}</p>
            </div>
        );
    }
}

function mapStateToProps(state) {
  return {
    name: state.name
  }
}

function mapDispatchToProps(dispatch) {
  return { 
    onClickHandler: () => {
      console.log("i onclick");
      return dispatch({ type: 'CHECKBOX_CLICKED'})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkbox);
