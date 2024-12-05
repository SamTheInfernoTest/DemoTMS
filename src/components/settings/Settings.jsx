import React from 'react'
import { useState, useEffect } from 'react'


import Account from './Account'

function Settings() {

  const [tab, setTab] = useState('account')

  // useEffect(() => {
  //   document.getElementById(tab).classList.add('border-b')
  // }, [tab])

  return (
    <div>
      <div>
        <header className = 'sm:p-8 '>
          <nav>
            <ul className= 'flex flex-row '>
              <li id='account' className = ''>
                <button className={`w-24 py-2 px-4 dark:border-white border-black hover:border-b ${tab === 'account' ? 'border-b font-semibold' : ''}`}
                onClick={() => {
                  setTab('account')
                }}
                >
                  Account
                </button>
              </li>
              <li id='general' className=''>
                <button className={`w-24 py-2 px-4 dark:border-white border-black hover:border-b ${tab === 'general' ? 'border-b font-semibold' : ''}`}
                  onClick={() => {
                    setTab('general')
                  }}
                >
                  General
                </button>
              </li>
            </ul>
          </nav>
          <hr className='dark:brightness-[25%] brightness-[90%]'/>
        </header>
        <div className = 'sm:px-14'>
          {tab === 'account' && <Account />}
        </div>
      </div>
    </div>
  )
}

export default Settings