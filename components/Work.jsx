import Image  from 'next/image'
import React from 'react'

const Work = () => {
  return (
    <div className="Main flex-row text-center mt-14">
        <div className="heading text-3xl font-bold mb-7">
            See Our Work
        </div>
        <div className="para mx-96">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos beatae culpa pariatur vitae quod, laboriosam molestias modi praesentium ratione natus incidunt voluptas repellat ab nihil dolor 
        atque reprehenderit a exercitationem? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione libero consequatur sunt repellat dicta natus officiis debitis cum ea dolorum architecto, voluptate officia soluta expedita quos sapiente 
        cupiditate, quibusdam tempora.</div>
        <div className="workPhotos flex items-center justify-center">
            <Image className="m-6 " src="/Images/Work1.png" height={250} width={250}/>
            <Image className="m-6" src="/Images/Work2.png" height={250} width={250}/>
            <Image className="m-6" src="/Images/Work3.png" height={250} width={250}/>
        </div>
        <button className='bg-[#0A1128] w-24 px-1 text-white py-2 rounded-3xl'>Our work</button>
    </div>
  )
}

export default Work