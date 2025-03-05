import React from 'react'
import { FaSpinner } from 'react-icons/fa6'

export default function LoaderPage() {
  return (
    <div className='min-h-[60vh] flex justify-center items-center'>
        <FaSpinner className='h-8 w-8 animate-spin' />
    </div>
  )
}
