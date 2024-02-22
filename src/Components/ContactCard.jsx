import React from 'react'


const ContactCard = ({info}) => {
  return (
    <>
    <div className='contact-card border-[2px] border-cyan-500 shadow-[0px_0px_10px_cyan] w-[200px] h-fit p-5 flex flex-col items-center justify-center gap-2 rounded-xl'>
    <div className="icon">
        {info.icon}
    </div>
    {info.h1 && <h1 className='text-xl font-bold'>{info.h1}</h1> }
    <div className="details">
        <p className='text-center text-md'>{info.details}</p>
    </div>
    </div>
    </>
  )
}

export default ContactCard