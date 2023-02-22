import React from 'react'

export const LoadingProducts = () => {
  return (
    <div className="text-center" >
      <br />
      <br />
      <br />
      <br />
      <div className="spinner-border text-primary" style={{ width: '3rem', height: '3rem' }} role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div >
  )
}
