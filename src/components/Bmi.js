import React, { useState } from 'react'
import { Box, Typography, TextField, Button, styled } from '@mui/material'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Stylebutton = styled(Button)`
width:400px;
background: #FF2625;
padding :10px 10px;
margin-top:20px`
const Heding = styled(Typography)`
font-family:Alegreya;
      font-size:27px;
      color:#FF2625;
      font-weight:600;`
const Result = styled(Typography)`
      font-family:Alegreya;
            font-size:24px;
            color:#0A3864;
            font-weight:600;`
const Message = styled(Typography)`
      font-family:Cursive;
            font-size:22px;
            color:#FF1493;
            font-weight:600;`
function Bmi() {

  const [weight, setWeight] = useState('')
  const [height, setHeight] = useState('')
  const [bmi, setBmi] = useState()
  const [message, setMessage] = useState('')
  function showBmi() {
    if (height === '' || weight === '') {
      toast("Please fill out input fields", { position: "top-center", pauseOnHover: false });
      setBmi('')
      setMessage('')
      return
    }

    let ans = (weight / ((height * height) / (100 * 100))).toFixed(2)

    setBmi(ans)
    if (ans < 18.50) {
      setMessage("You are Underweight")
    }
    else if (ans >= 18.50 && ans < 25) {
      setMessage("You are Healthy")
    }
    else {
      setMessage("You are Overweight")
    }
  }
  const clearValue = () => {
    setHeight('')
    setWeight('')
    setBmi('')
    setMessage('')
  }
  return (
    <Box mt="50px" mb="90px">
      <Box display="flex"
        justifyContent="center"
        alignItems="center"
        width="400px"
        minHeight='50vh'
        flexDirection='column'

        margin="auto">
        <ToastContainer />
        <Heding mt="30px" mb="20px">BMI Calculator</Heding>
        <TextField mb="20px" margin="normal" value={weight} fullWidth label="Weight (kg)" variant="standard" onChange={(e) => setWeight(e.target.value)} width='100%' />
        <TextField margin="normal" label="Height (cm)" value={height} fullWidth variant="standard" onChange={(e) => setHeight(e.target.value)} />
        <Box mt="30px" >
          <Stylebutton variant="contained" onClick={() => showBmi()}>Submit</Stylebutton>
          <Stylebutton variant="contained" onClick={() => clearValue()}>Clear</Stylebutton>
        </Box>
        <Result mt="40px">Your BMI is:  {bmi} </Result>
        <Message mt="30px">{message}</Message>
      </Box>
    </Box>
  )
}

export default Bmi