import React from 'react'
import {useSelector} from 'react-redux';

function Home(){
    const {user} = useSelector((state) => state.users)
    return (
        <diV>
            <h1>Dengey</h1>
            {user && <h1>{user.name}</h1>}
        </diV>
    )
}

export default Home