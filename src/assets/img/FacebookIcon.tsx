import React from 'react'

interface FacebookIconProps {
  fill?: string
  opacity?: string
}

export const FacebookIcon: React.FC<FacebookIconProps> = ({ fill, opacity }) => {
  return (
    <svg width='40' height='40' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        opacity={opacity || '0.12'}
        d='M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z'
        fill={fill || '#FFFFF'}
      />
      <path
        d='M21.5833 21.2H23.4881L24.25 18H21.5833V16.4C21.5833 15.576 21.5833 14.8 23.1071 14.8H24.25V12.112C24.0016 12.0776 23.0637 12 22.0732 12C20.0047 12 18.5357 13.3256 18.5357 15.76V18H16.25V21.2H18.5357V28H21.5833V21.2Z'
        fill={fill || '#FFFFF'}
      />
    </svg>
  )
}
