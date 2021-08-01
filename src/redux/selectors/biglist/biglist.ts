import {RootState} from '../../../../store';
import {Item} from '../../../types/List';

export const getBiglist = (state: RootState): Item[] => state.biglist.list;
