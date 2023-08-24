import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { inputList } from './layouts/Constants'

const ContactUs = () => {
  const [formData, setFormData] = useState({
    id: new Date().toLocaleString('en-US', {
      timeZone: 'Asia/Jakarta',
      timeZoneName: 'short'
    }),
    email: '',
    subject: '',
    message: ''
  })

  const apiKey = process.env.REACT_APP_GOOGLE_SPREADSHEET_API
  const serviceId = process.env.REACT_APP_YOUR_SERVICE_ID
  const templateId = process.env.REACT_APP_YOUR_TEMPLATE_ID
  const publicKey = process.env.REACT_APP_YOUR_PUBLIC_KEY
  const form = useRef()

  const [submissionStatus, setSubmissionStatus] = useState('idle')
  // (useState < 'idle') | 'pending' | 'success' | ('error' > 'idle')

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (!apiKey || !serviceId || !templateId || !publicKey) {
      alert('One or more environment variables are not defined')
      return
    }
    if (form.current != null) {
      emailjs.sendForm(serviceId, templateId, form.current, publicKey).then()
    }

    setSubmissionStatus('pending')

    try {
      const response = await fetch(apiKey, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      if (response) {
        setSubmissionStatus('success')
      } else {
        setSubmissionStatus('error')
      }
    } catch (error) {
      console.error(error)
      setSubmissionStatus('error')
    }
  }

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }

  const getStatusMessage = () => {
    switch (submissionStatus) {
      case 'success':
        return (
          <div
            className='fixed inset-0 z-50 flex items-center justify-center'
            onClick={() => {
              setSubmissionStatus('idle')
            }}>
            <div
              className='bg-gray-0 rounded-lg border border-gray-100 bg-opacity-0 bg-clip-padding p-10 backdrop-blur-md backdrop-filter'
              onClick={(e) => {
                e.stopPropagation()
              }}>
              <div className='text-center'>
                <svg
                  className='mx-auto h-10 w-10 text-green-600 dark:text-green-400'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M5 13l4 4L19 7'></path>
                </svg>
                <p className='mt-2 text-green-600 dark:text-green-400'>
                  Hooray! Your message has been successfully delivered.
                </p>
              </div>
            </div>
          </div>
        )
      case 'pending':
        return (
          <div className='fixed inset-0 z-50 mx-auto flex items-center justify-center'>
            <div className='bg-gray-0 rounded-lg border border-gray-100 bg-opacity-0 bg-clip-padding p-10 backdrop-blur-md backdrop-filter'>
              <div className='flex items-center space-x-2'>
                <svg
                  version='1.1'
                  id='L7'
                  xmlns='http://www.w3.org/2000/svg'
                  x='0px'
                  y='0px'
                  viewBox='0 0 100 100'
                  enableBackground='new 0 0 100 100'
                  xmlSpace='preserve'>
                  <path
                    fill='#2563eb'
                    d='M31.6,3.5C5.9,13.6-6.6,42.7,3.5,68.4c10.1,25.7,39.2,38.3,64.9,28.1l-3.1-7.9c-21.3,8.4-45.4-2-53.8-23.3
  c-8.4-21.3,2-45.4,23.3-53.8L31.6,3.5z'>
                    <animateTransform
                      attributeName='transform'
                      attributeType='XML'
                      type='rotate'
                      dur='2s'
                      from='0 50 50'
                      to='360 50 50'
                      repeatCount='indefinite'
                    />
                  </path>
                  <path
                    fill='#2563eb'
                    d='M42.3,39.6c5.7-4.3,13.9-3.1,18.1,2.7c4.3,5.7,3.1,13.9-2.7,18.1l4.1,5.5c8.8-6.5,10.6-19,4.1-27.7
  c-6.5-8.8-19-10.6-27.7-4.1L42.3,39.6z'>
                    <animateTransform
                      attributeName='transform'
                      attributeType='XML'
                      type='rotate'
                      dur='1s'
                      from='0 50 50'
                      to='-360 50 50'
                      repeatCount='indefinite'
                    />
                  </path>
                  <path
                    fill='#2563eb'
                    d='M82,35.7C74.1,18,53.4,10.1,35.7,18S10.1,46.6,18,64.3l7.6-3.4c-6-13.5,0-29.3,13.5-35.3s29.3,0,35.3,13.5
  L82,35.7z'>
                    <animateTransform
                      attributeName='transform'
                      attributeType='XML'
                      type='rotate'
                      dur='2s'
                      from='0 50 50'
                      to='360 50 50'
                      repeatCount='indefinite'
                    />
                  </path>
                </svg>
                <span className='text-blue-600 dark:text-blue-400'>Please wait</span>
              </div>
            </div>
          </div>
        )
      case 'error':
        return (
          <div className='fixed inset-0 z-50 mx-auto flex items-center justify-center'>
            <div className='bg-gray-0 rounded-lg border border-gray-100 bg-opacity-0 bg-clip-padding p-10 backdrop-blur-md backdrop-filter'>
              <div className='flex items-center space-x-2'>
                <div className='mt-4 text-center text-red-600 dark:text-red-400'>
                  An error occurred. Please try again later.
                </div>
              </div>
            </div>
          </div>
        )
      default:
        return <></>
    }
  }

  return (
    <section className='bg-white dark:bg-gray-900'>
      <div className='mx-auto max-w-screen-md px-4 py-1 lg:py-2'>
        <h2 className='mb-4 text-center text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white'>
          Contact Us
        </h2>
        <p className='mb-8 text-center font-light text-gray-500 dark:text-gray-400 sm:text-xl lg:mb-16'>
          Interested in working together with me? Do you want me to colaboration with you? Leave an
          email or contact me directly.
        </p>
        <form
          ref={form}
          onSubmit={handleSubmit}
          className='space-y-8'>
          {inputList.map((list, index) => {
            return (
              <div key={index}>
                <label
                  htmlFor={list.type}
                  className='mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300'>
                  {list.text}
                </label>
                <input
                  type={list.type}
                  id={list.name}
                  name={list.name}
                  value={formData[list.name]}
                  onChange={handleChange}
                  required
                  className='dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-red-500 focus:ring-red-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-red-500 dark:focus:ring-red-500'
                />
              </div>
            )
          })}
          <div className='sm:col-span-2'>
            <label
              htmlFor='message'
              className='mb-2 block text-sm font-medium text-gray-900 dark:text-gray-400'>
              Your message
            </label>
            <textarea
              id='message'
              name='message'
              value={formData.message}
              onChange={handleChange}
              required
              className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-red-500 focus:ring-red-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-red-500 dark:focus:ring-red-500'
            />
          </div>
          <button
            type='submit'
            className='rounded-lg bg-red-700 px-5 py-3 text-center text-sm font-medium text-black hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 sm:w-fit'>
            Send message
          </button>
        </form>
        {getStatusMessage()}
      </div>
    </section>
  )
}

export default ContactUs
