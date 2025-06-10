import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold">404 - Not Found</h1>

      <Link to="/">
        <button className="ml-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Go Back Home
        </button>
    </Link>
    </div>
  )
}

export default NotFoundPage