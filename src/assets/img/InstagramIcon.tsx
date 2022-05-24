import React from 'react'
interface FacebookIconProps {
  fill?: string
  opacity?: string
}

export const InstagramIcon: React.FC<FacebookIconProps> = ({ fill, opacity }) => {
  return (
    <svg width='40' height='40' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        opacity={opacity || '0.12'}
        d='M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z'
        fill={fill || '#FCFCFC'}
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M23.2976 12.048C22.4448 12.008 22.1736 12 20 12C17.8264 12 17.5552 12.0104 16.7024 12.048C15.8496 12.088 15.2704 12.2216 14.76 12.42C14.2259 12.6206 13.7421 12.9354 13.3424 13.3424C12.935 13.7419 12.6202 14.2257 12.42 14.76C12.2216 15.2704 12.088 15.8496 12.048 16.7024C12.008 17.5552 12 17.8264 12 20C12 22.1736 12.0104 22.4448 12.048 23.2976C12.088 24.1496 12.2216 24.7304 12.42 25.24C12.6207 25.774 12.9355 26.2577 13.3424 26.6576C13.742 27.0648 14.2259 27.3796 14.76 27.58C15.2704 27.7776 15.8504 27.912 16.7024 27.952C17.5552 27.992 17.8264 28 20 28C22.1736 28 22.4448 27.9896 23.2976 27.952C24.1496 27.912 24.7304 27.7776 25.24 27.58C25.7738 27.379 26.2576 27.0643 26.6576 26.6576C27.0649 26.2581 27.3797 25.7742 27.58 25.24C27.7776 24.7296 27.912 24.1496 27.952 23.2976C27.992 22.4448 28 22.1736 28 20C28 17.8264 27.9896 17.5552 27.952 16.7024C27.912 15.8504 27.7776 15.2696 27.58 14.76C27.3792 14.2261 27.0644 13.7423 26.6576 13.3424C26.2128 12.8984 25.768 12.6232 25.24 12.42C24.7296 12.2216 24.1496 12.088 23.2976 12.048ZM16 20C16 17.7909 17.7909 16 20 16C22.2091 16 24 17.7909 24 20C24 22.2091 22.2091 24 20 24C17.7909 24 16 22.2091 16 20ZM25 16C25 15.4477 24.5523 15 24 15C23.4477 15 23 15.4477 23 16C23 16.5523 23.4477 17 24 17C24.5523 17 25 16.5523 25 16ZM22 19.5C22 18.1193 20.8807 17 19.5 17C18.1193 17 17 18.1193 17 19.5C17 20.8807 18.1193 22 19.5 22C20.8807 22 22 20.8807 22 19.5Z'
        fill={fill || 'white'}
      />
    </svg>
  )
}
