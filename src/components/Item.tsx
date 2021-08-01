import React from 'react';
import {Item} from '../types/List';

type ItemProps = {
    data: Item
}

const ItemComponent = ({data}: ItemProps): React.ReactElement => {
    if (!data) return null;

    return (
        <div>
            <div>
                {data.id}
            </div>

            <div>
                {data.text}
            </div>

            <div>
                {data.subtext}
            </div>
        </div>
    );
};

export default ItemComponent;
