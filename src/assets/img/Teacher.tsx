import React from 'react'

interface BookProps {
  fill?: string
  stroke?: string
}

export const Teacher: React.FC<BookProps> = ({ fill, stroke }) => {
  return (
    <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M6.70001 1.68669L2.68668 4.30669C1.40001 5.14669 1.40001 7.02669 2.68668 7.86669L6.70001 10.4867C7.42001 10.96 8.60668 10.96 9.32668 10.4867L13.32 7.86669C14.6 7.02669 14.6 5.15336 13.32 4.31336L9.32668 1.69336C8.60668 1.21336 7.42001 1.21336 6.70001 1.68669Z'
        stroke={fill || stroke}
        strokeWidth='1.7'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M3.75337 8.71997L3.7467 11.8466C3.7467 12.6933 4.40004 13.6 5.20004 13.8666L7.3267 14.5733C7.69337 14.6933 8.30004 14.6933 8.67337 14.5733L10.8 13.8666C11.6 13.6 12.2534 12.6933 12.2534 11.8466V8.7533'
        stroke={fill || stroke}
        strokeWidth='1.7'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M14.2667 10V6'
        stroke={fill || stroke}
        strokeWidth='1.7'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}
