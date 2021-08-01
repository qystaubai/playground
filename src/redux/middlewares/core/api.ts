import {Middleware} from 'redux';
import {API_REQUEST, apiSuccess, apiError} from '../../actions/api/api';

const apiPrefix = '/api';

export const apiMiddleware: Middleware =
    ({dispatch}) => (next) => (action) => {
        next(action);

        if (action.type.includes(API_REQUEST)) {
            const {url, method, feature} = action.meta;
            fetch(`${apiPrefix}${url}`, {method})
                .then((response) => response.json())
                .then((data) => dispatch(apiSuccess({response: data, feature})))
                .catch((error) => dispatch(apiError({error, feature})));
        }
    };
