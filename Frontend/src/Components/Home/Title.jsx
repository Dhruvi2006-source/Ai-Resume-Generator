import React from 'react'

const Title = ({Title , Description}) => {
  return (
    <div className='text-center mt-6 text-slate-700'>
        <div className="title text-3xl sm:text-4xl font-medium">{Title}</div>
        <div className="descriptio max-sm max-w-2xl mt-4 text-slate-400">{Description}</div>
    </div>
  )
}

export default Title