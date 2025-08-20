import { exampleAction } from './actions';

function DirectoryReducer(state, action){
    switch(action.type){
        case exampleAction:
            return{
                ...state,
            };
        default:
            throw new Error(`Unsupported action ${action.type}`);
    }
}

export default DirectoryReducer;