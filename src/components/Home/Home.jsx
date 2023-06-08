import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/UserContext';

const Home = () => {
    const user = useContext(AuthContext);
    return (
        <div>
            this is home {user}
        </div>
    );
};

export default Home;