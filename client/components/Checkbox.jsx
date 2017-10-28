import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

class Checkbox extends Component {

    constructor(props) {
        super(props);
        this.state = { isChecked: false };

        this.onClickHandler = this.onClickHandler.bind(this);
    }

    onClickHandler() {
        this.props.onClickCallback();
        this.setState({
            isChecked: !this.state.isChecked 
        });
    }

    render() {
        return (
            <div>
            <input type="checkbox" onClick={this.onClickHandler}/>
            <p>The {this.props.name} box is checked: {this.state.isChecked ? 'Yes' : 'No'}</p>
            </div>
        );
    }
}

Checkbox.propTypes = {
    name: PropTypes.string,
}

const mapStateToProps = state => {
    const {name} = state.name;
    return {
        name
    }
}

const mapDispatchToProps = dispatch => {
    return { 
        onClickCallback: () => {
            dispatch({ type: 'CHECKBOX_CLICKED', name: 'Modified name'})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkbox);
