import {Middleware} from 'redux';
import {apiRequest, API_SUCCESS} from '../../actions/api/api';
import {BIGLIST, LOAD_BIGLIST, set} from '../../actions/biglist/biglist';

const biglistRef = '/biglist';

export const biglistMiddleware: Middleware =
    ({dispatch}) => (next) => (action) => {
        next(action);

        switch (action.type) {
        case LOAD_BIGLIST: {
            next(
                apiRequest({
                    method: 'GET',
                    url: biglistRef,
                    feature: BIGLIST,
                }),
            );
            break;
        }
        case `${BIGLIST}_${API_SUCCESS}`: {
            dispatch(
                set({list: action.payload}),
            );
            break;
        }
        }
    };
