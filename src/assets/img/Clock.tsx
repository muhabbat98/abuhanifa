import React from 'react'

interface BookProps {
  fill?: string
  stroke?: string
}
export const Clock: React.FC<BookProps> = ({ fill, stroke }) => {
  return (
    <svg width='14' height='14' viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M12.8334 7.00002C12.8334 10.22 10.22 12.8334 7.00002 12.8334C3.78002 12.8334 1.16669 10.22 1.16669 7.00002C1.16669 3.78002 3.78002 1.16669 7.00002 1.16669C10.22 1.16669 12.8334 3.78002 12.8334 7.00002Z'
        stroke={stroke || '#1A1D1F'}
        strokeWidth='1.3'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M9.16418 8.85503L7.35585 7.77586C7.04085 7.58919 6.78418 7.14003 6.78418 6.77253V4.38086'
        stroke={stroke || '#1A1D1F'}
        strokeWidth='1.3'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}
