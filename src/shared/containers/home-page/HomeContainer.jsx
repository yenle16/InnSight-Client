import React from 'react'
import { useDispatch } from 'react-redux'
import HomeAction from '../../../redux/home/action'
import { Button } from '@mui/material'
import styles from './HomeContainer.module.scss'
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
            <Button
                className={styles['custom-button']}
                onClick={handleClick}
                variant="contained">
                test redux
            </Button>
        </div>
    )
}

export default HomeContainer
