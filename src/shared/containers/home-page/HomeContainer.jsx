import React from 'react'
import { useDispatch } from 'react-redux'
import HomeAction from '../../../redux/home/action'
const HomeContainer = () => {
    const dispatch = useDispatch()
    const handleClick = () => {
        dispatch({
            type: HomeAction.SAMPLE_ACTION,
            payload: 'Something'
        })
    }
    return (
        <div>
            Welcome to InnSight Homepage ....
            <button onClick={handleClick}>
                Test redux
            </button>
        </div>
    )
}

export default HomeContainer
