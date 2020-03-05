import {combineReducers} from 'redux';
import reducers from './reducer'
import count from './count';

const allReducers = combineReducers({
    reducers,
    count
})

export default allReducers