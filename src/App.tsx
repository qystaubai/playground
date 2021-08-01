import React from 'react';
import Router from './routes';


const App = (): React.ReactElement => {
    return (
        <>
            <h1>Playground</h1>
            <div>
                <Router />
            </div>
        </>
    );
};

export default App;
