import React from 'react'

function Main() {
  return (
    <div className=' main'>
      <div className='container--name'>
        <h1 className='name'> Laura Smith</h1>
        <div className='title'>Frontend Developer</div>
        <small>laurasmith.website</small>
        <div>
          <button>
            <img src='Icon.png' />
            Email
          </button>
        </div>
      </div>

      <div className='container--about'>
        <h1 className='about'>About</h1>
        <p className='text'> I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
      </div>

      <div className='container--about'>
        <h1 className='about'>interests</h1>
        <p className='text'> Food expert Music scholar. Reader. Internet fanatic. Bacon buff. Emtrepreneur. Travel geek. Pop culture ninja. Coffee fanatic</p>
      </div>

    </div>
  )
}

export default Main
