import React from 'react'
import Layout from '../components/Layout/Layout'

const Policy = () => {
  return (
    <Layout title={'Privacy Policy'}>
        <div className='row policy'>
            <div className='col-md-6'>
                <img
                    src="images/contact.jpeg"
                    alt="contactus"
                    style={{width: "100%"}}
                />
            </div>
            <div className='col-md-4'>
                <h1 className='bg-dark p-2 text-white text-center'>POLICY </h1>
                <p className='text-justify mt-2'>
                    This is Privacy Policy of Ecommerce App.
                </p>
                <p className='mt-3'>
                    Add Privacy Policy
                </p>
                <p className='mt-3'>
                     Add Privacy Policy
                </p>
                <p className='mt-3'>
                     Add Privacy Policy
                </p>
            </div>
        </div>
    </Layout>
  )
}

export default Policy