import * as type from './action-type';

export const sidebar = (state = {selectkey:'1',openkey:''},action) => {
    switch (action.type) {
        case type.SIDEBAR:
            return {
                ...state,
                ...action.payload
            }
            break;
        default:
            return state;
    }
}