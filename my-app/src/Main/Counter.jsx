import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as action from "../actions/selectUser";


class Counter extends React.PureComponent {
    render() {
        const {Increment, Decrement} = bindActionCreators(action, this.props.dispatch);
        const AsyncCountAdd=()=>()=>{
            setTimeout(()=>{
                this.props.dispatch(Increment)
            },3000)
        };
        const AsyncCountRemove=()=>()=>{
            setTimeout(()=>{
               this.props.dispatch(Decrement)
            },3000);
        };

        const {count} = this.props;
        return (
            <div style={{textAlign:'center'}}>
                <button onClick={Increment}>Increment</button>
                <div>{count}</div>
     .           <button onClick={Decrement}>Decrement</button>
                <div>
                    <button onClick={AsyncCountAdd()}>Async Add</button>
                    <button onClick={AsyncCountRemove()}>Async Remove</button>

                </div>
            </div>
        )
    }
};
const MapStateToProps = ({count}) => {
    return {
        count: count.count
    }
};

export default connect(MapStateToProps, null)(Counter)