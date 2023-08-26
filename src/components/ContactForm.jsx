import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { inputList } from './layouts/Constants'
import { Dna } from 'react-loader-spinner'

const ContactUs = () => {
  const serviceId = process.env.REACT_APP_YOUR_SERVICE_ID
  const templateId = process.env.REACT_APP_YOUR_TEMPLATE_ID
  const publicKey = process.env.REACT_APP_YOUR_PUBLIC_KEY
  const form = useRef()

  const [submissionStatus, setSubmissionStatus] = useState('idle')

  const clearDisplay = (event) => {
    event.stopPropagation()
  }

  const handleSubmit = async (event) => {
    event.preventDefault() // Prevent the default form submission behavior

    if (!serviceId || !templateId || !publicKey) {
      alert('One or more environment variables are not defined') // Alert the user if any required environment variables are missing
      return
    }

    try {
      setSubmissionStatus('pending') // Set the submission status to pending
      if (form.current != null) {
        const result = await emailjs.sendForm(serviceId, templateId, form.current, publicKey) // Send the form data using emailjs
        setSubmissionStatus('success', result) // Set the submission status to success
      }
    } catch (error) {
      setSubmissionStatus('error', error) // Set the submission status to error if an error occurs during form submission
    }
  }

  const getStatusMessage = () => {
    switch (submissionStatus) {
      case 'success':
        return (
          <div
            className='fixed inset-0 z-50 flex items-center justify-center'
            onClick={setSubmissionStatus}>
            <div
              className='bg-gray-0 rounded-lg border border-gray-100 bg-opacity-0 bg-clip-padding p-10 backdrop-blur-md backdrop-filter'
              onClick={clearDisplay}>
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
              <div className='flex items-center justify-center'>
                <Dna
                  visible={true}
                  height='80'
                  width='80'
                  ariaLabel='radio-loading'
                  wrapperStyle={{}}
                  wrapperClass='radio-wrapper'
                />
              </div>
              <div className='text-center'>
                <div className='flex items-center justify-center space-x-2'>
                  <p className='text-blue-600 dark:text-blue-400'>
                    Please wait, your message on the way
                  </p>
                </div>
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
          Interested in working together with me? Do you want me to collaboration with you? Leave an
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
                  autoComplete='on'
                  type={list.type}
                  id={list.name}
                  name={list.name}
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
              autoComplete='on'
              id='message'
              name='message'
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
