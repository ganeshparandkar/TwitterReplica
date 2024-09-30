import React from 'react'
import Image from 'next/image'
import { BiMessageRounded, BiUpload } from 'react-icons/bi'
import { FaRetweet } from 'react-icons/fa'
import { AiOutlineHeart } from 'react-icons/ai'
const FeedCard:React.FC =()=>{
    return (
    
<div className="border border-r-0 border-l-0 border-b-0 border-gray-600 font-semibold p-5 hover:bg-gray-900 transition-all cursor-pointer mainCard">
<div className='grid grid-cols-12 gap-3'>
        <div className='col-span-1  Image'>
            <Image className='rounded-full' src="https://avatars.githubusercontent.com/u/41060734?v=4"
             width={50} 
             height={50} alt="profileImage"  />
        </div>
        <div className='col-span-11 p-2 feedCard'>
                <h5 className='text-white'>Shriyash Parandkar</h5>
                <p className='text-white'>Hey folks, Welcome to my first post of tweeter 

                    Excited to work on twitter project!!</p>
                    <div className='feedButtons flex justify-between mt-5 w-[90%] text-xl items-center'>
                        <div>
                            <BiMessageRounded/>
                        </div>
                        <div>
                            <FaRetweet/>
                        </div>
                        <div>
                            <AiOutlineHeart/>
                        </div>
                        <div>
                            <BiUpload/>
                        </div>
                    </div>
        </div>

    </div>

</div>    
)
}

export default FeedCard