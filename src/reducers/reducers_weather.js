import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
    if(!action.error){
        switch (action.type) {
            case FETCH_WEATHER:
                return [ action.payload.data, ...state ];
        }
    }

    return state;
}