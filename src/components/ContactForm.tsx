/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/no-misused-promises */
import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { inputList } from './layouts/Constants'

interface FormData {
  id: string
  email: string
  subject: string
  message: string
  [key: string]: string
}

const ContactUs = (): React.ReactElement => {
  const [formData, setFormData] = useState<FormData>({
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
  const form = useRef<HTMLFormElement | null>(null)

  const [submissionStatus, setSubmissionStatus] = useState<
  'idle' | 'pending' | 'success' | 'error'
  >('idle')

  const handleSubmit = async (event: React.FormEvent): Promise<void> => {
    event.preventDefault()

    if (!apiKey || !serviceId || !templateId || !publicKey) {
      alert('One or more environment variables are not defined')
      return
    }

    if (form.current != null) {
      emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
        (result) => {
          // console.log(result.text)
        },
        (error) => {
          alert(error.text)
        }
      )
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

      if (response.ok) {
        setSubmissionStatus('success')
      } else {
        setSubmissionStatus('error')
      }
    } catch (error) {
      console.error(error)
      setSubmissionStatus('error')
    }
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }

  const getStatusMessage = (): JSX.Element => {
    switch (submissionStatus) {
      case 'success':
        return (
          <div
            className='fixed inset-0 z-50 flex items-center justify-center'
            onClick={() => {
              setSubmissionStatus('idle')
            }}>
            <div
              className='rounded-lg bg-black bg-opacity-50 p-4 shadow-lg'
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
          <div className='fixed inset-0 mx-auto z-50 flex items-center justify-center'>
            <div className='rounded-lg bg-black bg-opacity-50 p-4 shadow-lg'>
              <div className='flex animate-bounce items-center space-x-2'>
                <svg
                  className='h-5 w-5 animate-spin text-blue-600 dark:text-blue-400'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M12 4v.01M12 8v.01M12 12v.01M12 16v.01M12 20v.01M4.93 4.93l.01-.011M21.17 21.17l-.01.011M4.93 19.07L19.07 4.93'></path>
                </svg>
                <span className='text-blue-600 dark:text-blue-400'>Please wait</span>
              </div>
            </div>
          </div>
        )
      case 'error':
        return (
          <div className='error mt-4 text-center text-red-600 dark:text-red-400'>
            An error occurred. Please try again later.
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
