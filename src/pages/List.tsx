import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import ItemComponent from '../components/Item';
import {load} from '../redux/actions/biglist/biglist';
import {getBiglist} from '../redux/selectors/biglist/biglist';

const ListPage = (): React.ReactElement => {
    const dispatch = useDispatch();
    const biglist = useSelector(getBiglist);

    useEffect(() => {
        dispatch(load());
    }, []);


    return (
        <div>
            <div>list page</div>
            {biglist &&
                biglist.map((i, idx) => <ItemComponent key={idx} data={i}/>)}
        </div>
    );
};

export default ListPage;
