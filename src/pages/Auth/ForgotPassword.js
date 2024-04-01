import React, { useState } from 'react';
import Layout from '../../components/Layout/Layout'
import {useNavigate} from 'react-router-dom'
import toast from 'react-hot-toast';
import axios from 'axios';
import '../../styles/AuthStyles.css'

const ForgotPassword = () => {
    const [email,setEmail]=useState("")
    const [newPassword,setNewPassword]=useState("")
    const [answer,setAnswer]=useState("")

    const Navigate=useNavigate()

    //form function
    const handleSubmit= async(e)=>{
        e.preventDefault()
        try {
            const res=await axios.post('/api/v1/auth/forgot-password/',
                {email, newPassword, answer}
            )
            if(res && res.data.success)
            {
                toast.success( res.data && res.data.message)
                Navigate('/login')
            }
            else
            {
                toast.error(res.data.message)
            }
        } catch (error) {
            console.log(error)  
            toast.error('Something went wrong')
        }
    }

  return (
    <Layout title={'Forgot Password - Eccomerce App'}>
        <div className='form-container'>
            <div className='register'>
                <h1 className='title'>RESET PASSWORD</h1>
                <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <input 
                        type="email" 
                        value={email} 
                        onChange={(e)=> setEmail(e.target.value)}
                        className="form-control" 
                        id="exampleInputEmail"  
                        placeholder='Enter Your Email'
                        required
                    />
                </div>
                <div className="mb-3">
                    <input 
                        type="text" 
                        value={answer} 
                        onChange={(e)=> setAnswer(e.target.value)}
                        className="form-control" 
                        id="exampleInputEmail"  
                        placeholder='Enter Your Favourite Sport'
                        required
                    />
                </div>
                <div className="mb-3">
                    <input 
                        type="password" 
                        value={newPassword} 
                        onChange={(e)=> setNewPassword(e.target.value)}
                        className="form-control" 
                        id="exampleInputpassword"  
                        placeholder='Enter Your New Password'
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">RESET</button>
                </form>
            </div>
        </div>
    </Layout>
  )
}

export default ForgotPassword