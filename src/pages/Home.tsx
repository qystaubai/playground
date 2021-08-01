import React from 'react';
import {Link} from 'react-router-dom';

const HomePage = (): React.ReactElement => {
    return (
        <div>
            <Link to='/list'>
                Big list optimization
            </Link>
        </div>
    );
};

export default HomePage;
