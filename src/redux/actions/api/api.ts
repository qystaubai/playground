// action types
const prefix = 'API_';
export const API_REQUEST = `${prefix}REQUEST`;
export const API_SUCCESS = `${prefix}SUCCESS`;
export const API_ERROR = `${prefix}ERROR`;

type ApiRequestProps = {
    method: string,
    url: string,
    payload?: unknown,
    feature: string,
}

type ApiSuccessProps = {
    response?: unknown,
    feature: string,
}

type ApiErrorProps = {
    error?: unknown,
    feature: string,
}

type ApiAction = {
    type: string,
    payload?: unknown,
    meta: {
        method?: string,
        url?: string,
        feature: string,
    }
}

// action creators
export const apiRequest = (
    {
        method,
        url,
        payload,
        feature,
    }: ApiRequestProps,
): ApiAction => ({
    type: `${feature}_${API_REQUEST}`,
    payload,
    meta: {method, url, feature},
});

export const apiSuccess = (
    {
        response,
        feature,
    }: ApiSuccessProps,
): ApiAction => ({
    type: `${feature}_${API_SUCCESS}`,
    payload: response,
    meta: {feature},
});

export const apiError = (
    {
        error,
        feature,
    }: ApiErrorProps,
): ApiAction => ({
    type: `${feature}_${API_SUCCESS}`,
    payload: error,
    meta: {feature},
});
