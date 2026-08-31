import React from 'react'

const Driver = () => {
  return (
    <div>
        <div className="flex flex-col items-center justify-center my-15">
         <div className="h-px w-[80%] bg-gradient-to-r from-transparent via-gray-600 to-transparent" />
           <h1 className="pt-10 text-5xl font-extrabold underline">
                DRIVERS
            </h1>
        </div>

        <div className="flex items-center justify-center gap-20 w-[80%] mx-auto">
            <div className='bg-black w-[30%] h-15 rounded-2xl'>
                <img className='' src="https://i.pinimg.com/736x/d7/d0/41/d7d041eb12b37c510ea4cb73d0122a77.jpg" alt="" />
                <div className='bg-[#010102] text-white h-20'>
                    <div className='flex flex-row gap-2 items-center'>
                        <img className='h-6 w-6 rounded-full' src="https://i.pinimg.com/1200x/57/a4/50/57a45086257807913bbee3ace4922f37.jpg" alt="" />
                        <h4>Mercedes</h4>
                    </div>
                    <h3>Geroge Russel</h3>
                </div>
            </div>
            <div className='bg-black w-[30%] h-15 rounded-2xl'>
                <img className='' src="https://i.pinimg.com/736x/11/16/f9/1116f9d030c685acf36dc3b90e7b510e.jpg" alt="" />
                <div className='bg-[#010102] text-white h-20'>
                    <div className='flex flex-row gap-2 items-center'>
                        <img className='h-6 w-6 rounded-full' src="https://i.pinimg.com/1200x/57/a4/50/57a45086257807913bbee3ace4922f37.jpg" alt="" />
                        <h4>Mercedes</h4>
                    </div>
                    <h3>Kimi Antonelli</h3>
                </div>
            </div>
            
        </div>
        
    </div>
  )
}

export default Driver
