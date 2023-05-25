import React, { useState } from 'react'
import { Button, Container,Form, FormGroup,Row,Col } from 'react-bootstrap'
import MainScreen from '../../components/MainScreen'
import { Link } from 'react-router-dom'
import './LoginScreen.css'
import axios from 'axios'

const LoginScreen = () => {
  const [email , setEmail] = useState("")
  const [password , setPassword] = useState("")
  const [error , setError] = useState(false)
  const [Loading , setLoading] = useState(false)

  const submitHandler = async(e)=>{
    e.preventDefault(); 

    try {
      const config = {
        headers:{
          "Content-type":"application/json"
        }
      }

      setLoading(true)

      const {data} = await axios.post(
        "/api/users/login",
        {
          email,
          password
        },
        config
          );

      console.log(data)
      localStorage.setItem('userrInfo',JSON.stringify(data));
      setLoading(false)

    } catch (error) {
      setError(error.response.data.message)
    }

  }

  return (
    <div >
       <MainScreen title="LOGIN">
        <div className="loginContainer">
          <Form onSubmit={submitHandler}>
            <Form.Group controlId="formBasicEmail" className="py-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control 
              type='email' 
              value={email}
              placeholder='enter your email id'
              onChange={(e)=>{setEmail(e.target.value)
              }}/>
            </Form.Group>

            <Form.Group controlId="formBasicPassword" >
              <Form.Label>Password</Form.Label>
              <Form.Control 
              type='password' 
              value={password}
              placeholder='enter your password'
              onChange={(e)=>{
                setPassword(e.target.value)
              }}/>
            </Form.Group>

            <Button variant='primary' type='submit' className="my-3" >
              Submit
            </Button>
          </Form>
          <Row className="py-2">
            <Col>
              New User ? <Link to="/register">Register Here</Link>
            </Col>
          </Row> 
        </div> 
       </MainScreen>
    </div>
  )
}  

export default LoginScreen