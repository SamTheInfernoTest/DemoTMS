import React from 'react'
import { useState, useEffect } from 'react'

import useWeb from '../../context/WebContext'

function InfoCard({ mentor }) {
  const { baseApiUrl } = useWeb()

  const [name, setName] = useState('')
  const [img, setImg] = useState('')

  useEffect(() => {
    fetch('https://randomuser.me/api/').then(response => response.json()).then(data => {
      const user = data.results[0];
      setName(`${user.name.first} ${user.name.last}`);
      setImg(user.picture.medium);
    })
  }, [])

  return (
    <div
      className="dark:bg-darkPanel bg-lightPanel rounded-xl p-2 flex"
    >
      <div>
        <img src={img} alt="Profile Image"
          className="w-16 h-16 rounded-full lg:scale-100 scale-75" />
      </div>
      <h2
        className="text-xl font-bold my-auto ml-6"
      >{name}</h2>
    </div>
  )
}

export default InfoCard