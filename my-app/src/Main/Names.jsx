import React from 'react';
import {Action, Delete} from "../actions/selectUser";
import {connect} from 'react-redux';


class Names extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            names: [...props.names]
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({names: nextProps.names})
    }

    Remove(item, index) {
        const {names} = this.state;
        const newArray = names.splice(index, 1);
        const newArr = names.filter(item => item !== newArray);
        this.props.removed(newArr);
    };

    render() {
        const {names} = this.state;
        const {selected} = this.props;
        return (
            <div className="App">
                <button onClick={() => selected('Andrii')}
                >Add Name
                </button>
                <ol>
                    {names.map((item, index) => {
                        return (
                            <div key={index}>
                                <li key={index}>{item}</li>
                                <button onClick={() => this.Remove(item, index)}>Delete</button>
                            </div>
                        )
                    })}
                </ol>
            </div>
        );
    }
}

const initMapStateToProps = ({reducers}) => {
    return {
        names: reducers.names
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        selected: (user) => {
            dispatch(Action(user))
        },
        removed: (names) => {
            dispatch(Delete(names))
        }
    }
};

export default connect(initMapStateToProps, mapDispatchToProps)(Names);
