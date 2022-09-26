import React, {useState} from 'react'
import HeroBanner from './HeroBanner'
import Exercises from './Exercises'
import {Box} from '@mui/material'

import SearchExercises from './SearchExercises'
const Home = () => {
    const[exercises,setExercises]=useState([])
    const[bodyPart,setBodyPart]=useState('all')
   
    return (
        <Box>
            <HeroBanner/>
            <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
            <Exercises setExercises={setExercises} bodyPart={bodyPart} exercises={exercises}/>
        </Box>
    )
}

export default Home

