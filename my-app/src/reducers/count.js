const initialState={
    count:0
};

export default function (state=initialState,action) {
    switch (action.type){
        case'Dec':{
            return {
                count: state.count-1
            }
        }
        case'Inc':{
            return {
                count: state.count+1
            }
        }
        default:{
            return state
        }
    }
}