import React from 'react'
import { useEffect, useState } from 'react'

import useUser from '../../context/UserContext'
import CircularChart from './CircularChart'

function Home() {

  const { axiosSecure, standards, userType, uid, bgImage, profileImage, moto } = useUser()
  const [assignedTasks, setAssignedTasks] = useState(33);
  const [submittedTasks, setSubmittedTasks] = useState(12);


  // useEffect(() => {
  //   if (userType === 'student') {

  //     axiosSecure.get(`task/studentGetTaskInfo/${uid}`).then(res => {
  //       setAssignedTasks(res.data.assignedTasks); setSubmittedTasks(res.data.submittedTasks); 
  //     }).catch(err => console.log(err))
  //   }else{
  //     axiosSecure.get(`task/mentorGetTaskInfo/${uid}`).then(res => {
  //       setAssignedTasks(res.data.totalTasks);
        
  //     }).catch(err => console.log(err))
  //   }
  // }, [])



  return (
    <div className='w-full h-full'>
      <div className=''>
        <div className='w-full h-[34vh] overflow-hidden object-cover relative rounded-md '>
          <img src={bgImage} alt=""
            className='w-full h-full object-cover'
          />
          <h2
            className='absolute bottom-0 right-0 text-xl font-semibold  sm:text-right text-center bg-black/25 text-white p-2 max-h-fit sm:ml-32 rounded-lg text-pretty'
          >{moto}</h2>
        </div>
        <div className='w-full p-3 sm:flex justify-between hidden gap-28 h-20  bg-lightPanel dark:bg-darkPanel relative rounded-lg'>
          <img
            className='w-28 h-36 overflow-hidden rounded-lg -translate-y-24 object-cover'
            src={profileImage} alt="" />
          <div className=''>

            <h3 className='p-5 font-semibold'>
              {standards.join(' ')}
            </h3>
          </div>
        </div>
      </div>
      {userType == 'student'
        ?

        <div className='mt-10 flex gap-4 sm:flex-row flex-col'>
          <h2
            className='text-3xl font-semibold my-auto'
          >Task Completion</h2>
          <CircularChart a={submittedTasks} b={assignedTasks} />
        </div>
        :
        
          <div className='mt-10 flex gap-4 sm:flex-row flex-col'>
            <h2
              className='text-3xl font-semibold my-auto'
          >Total Task Assigned - {assignedTasks}</h2>
            
          </div>
       
      }
    </div>
  )
}

export default Home