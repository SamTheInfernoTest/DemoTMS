import { useNavigate } from 'react-router-dom';

import useWeb from '../context/WebContext'


function Welcome() {

  const {theme} = useWeb();

  const navigate = useNavigate();

  return (
    <div className='min-h-screen'>
      <header className={`dark:bg-darkHeader bg-lightHeader w-full right-0 h-[5.5rem] flex justify-between`}>
        <div className='my-auto sm:ml-10 ml-6'>
          <img src={theme === "dark" ? "/whitetms.svg" : "/blacktms.svg"} alt="TMS Logo"
            className='h-20'
          />
        </div>
        <div className='my-auto sm:mr-10 mr-6 flex justify-between sm:gap-16 gap-5 text-lg'>
          <button className='dark:bg-darkButton bg-lightButton px-4 py-2 rounded-full dark:text-[#DFF2EB] text-white hover:ring dark:hover:ring-slate-400 hover:ring-slate-300 font-semibold'
          onClick={() => navigate("/login")}
          >Log In</button>
          {/* <button className='dark:bg-darkButton bg-lightButton px-4 py-2 rounded-full dark:text-[#DFF2EB] text-white hover:ring dark:hover:ring-slate-400 hover:ring-slate-300'
          onClick={() => navigate("/register")}
          >Register Now</button> */}
        </div>
      </header>
      <div className={`dark:bg-darkBg bg-lightBg p-5 h-full`}>
        
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-blue-200 dark:from-gray-800 dark:to-gray-900 text-gray-800 dark:text-gray-100">
          <header className="text-center mb-8 transition-opacity duration-500 ease-in-out">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 hover:scale-105 transform transition-transform duration-500">
              Welcome to <span className="text-blue-600">Task Management System</span>
            </h1>
            <p className="text-lg md:text-xl font-medium text-gray-600 dark:text-gray-300">
              A platform for seamless collaboration between mentors and students.
            </p>
          </header>

          <main className="w-full max-w-4xl p-6 space-y-6 rounded-lg shadow-lg bg-white dark:bg-gray-800">
            <div className="p-4 bg-blue-50 dark:bg-gray-700 rounded-lg border border-blue-200 dark:border-gray-600">
              <p className="text-blue-700 dark:text-blue-200 font-semibold text-center">
                ** This is a demo website. Backend services, built with Django and PostgreSQL, are not available at the moment due to financial constraints. **
              </p>
            </div>

            <div className="p-4 bg-yellow-50 dark:bg-gray-700 rounded-lg border border-yellow-200 dark:border-gray-600">
              <p className="text-yellow-700 dark:text-yellow-200 font-semibold text-center">
                Use any UID and password to log in and explore the platform!
              </p>
            </div>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-center">
                How TMS Helps Mentors and Students
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-justify leading-relaxed">
                This website is a Task Management System (TMS) designed exclusively for mentors and students. Its purpose is to streamline task assignment and submission workflows, fostering efficiency and better collaboration. Here's how it works:
                <ul>
                  <h3 className='font-bold text-lg py-2'>Mentor Features:</h3>
                  <li>Assign tasks to students.</li>
                  <li>Review and evaluate task submissions.</li>
                </ul>

                <ul>
                  <h3 className='font-bold text-lg py-2'>Student Features:</h3>
                  <li>View assigned tasks with clear instructions and deadlines.</li>
                  <li>Submit tasks seamlessly for mentor review.</li>
                </ul>
              </p>
              <p className="text-gray-600 dark:text-gray-300 text-justify leading-relaxed">
                Whether you are a mentor seeking better ways to track student
                performance or a student aiming to excel in your academics, TMS
                provides a simple, intuitive interface to manage tasks, submit
                assignments, and communicate with ease. 🌟
              </p>
            </section>
          </main>

          <footer className="mt-8 space-x-4">
            <button
              onClick={() => navigate("/login")}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300 shadow-lg transform hover:-translate-y-1"
            >
              Get Started
            </button>
            
          </footer>

          <div className="mt-12 text-gray-500 dark:text-gray-400 text-center text-sm">
            <p>✨ Designed to foster collaboration and academic excellence. ✨</p>
            <p>Experience the future of education today!</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Welcome