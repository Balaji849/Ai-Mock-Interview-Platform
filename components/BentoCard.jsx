import React from 'react'

const BentoCard = ({icon,title,desc,children,className=""}) => {
  return (
    <div className={`relative bg-[#0f0f11] border border-white/10 hover:border-purple-200/20
    rounded-2xl p-9 h-full transition duration-300 overflow-hidden ${className}`}>

        <span className='w-11 h-11 rounded-xl bg-purple-400/10 border border-purple-400/20
        flex items-center justify-center text-xl mb-5'>
            {icon}</span>

        <h3 className='text-xl tracking-tight mb-2'>
            {title}</h3>
        <p className='text-sm text-stone-400 leading-relaxed'>
            {desc}</p>
        {children}
    </div>
  )
}

export default BentoCard