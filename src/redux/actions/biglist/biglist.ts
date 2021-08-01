import {Item} from '../../../types/List';

// action types
export const BIGLIST = 'BIGLIST';
export const LOAD_BIGLIST = `${BIGLIST}_LOAD`;
export const SET_BIGLIST = `${BIGLIST}_SET`;

type LoadBiglistAction = {
    type: string,
}

type SetBiglistAction = {
    type: string,
    payload: Item[],
}

type setBiglistProps = {
    list: Item[],
}

// action creators
export const load = (): LoadBiglistAction => ({
    type: LOAD_BIGLIST,
});

export const set = ({list}: setBiglistProps): SetBiglistAction => ({
    type: SET_BIGLIST,
    payload: list,
});
