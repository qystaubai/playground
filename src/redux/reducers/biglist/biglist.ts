import {Reducer} from 'redux';
import {SET_BIGLIST} from '../../actions/biglist/biglist';

const initialState = {
    list: [],
};

export const biglistReducer: Reducer = (state = initialState, action) => {
    switch (action.type) {
    case SET_BIGLIST: {
        return {...state, list: action.payload};
    }
    default: {
        return state;
    }
    }
};
