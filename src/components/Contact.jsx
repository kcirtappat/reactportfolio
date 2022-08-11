import React from 'react'

const Contact = () => {
    return (
        <div name="contact" className="w-full h-screen bg-Blackish text-DirtyWhite flex justify-center items-center p-4">
            <form method='POST' action="https://getform.io/f/7b0faa51-3986-49e7-a8d6-20a17d6096f1" className="flex flex-col max-w-[600px] w-full p-5 bg-Grayish rounded-md ">
                <div className="">
                    <p className='text-4xl font-bold text-DarkSkyBlue pb-4 lg:text-5xl'>Contact</p>
                    <p>Submit the form and collaborate with me! </p>
                </div>
                <input className=" focus:text-black" type="text" placeholder='Name' name='name' />
                <input className="my-4 focus:text-black" type="email" placeholder='Email' name='email' />
                <textarea className=" focus:text-black" rows="10" placeholder='Message' name='Message' />
                <button className='text-white border-2 hover:bg-DarkSkyBlue px-4 py-3 mt-5 mx-auto flex items-center'>Let's Collaborate</button>
            </form>
        </div>
    )
}

export default Contact