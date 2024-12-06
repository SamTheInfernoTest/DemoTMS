import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { RouterProvider, Navigate } from "react-router-dom";
import { useState, useEffect, lazy, Suspense, useTransition } from "react";

import useUser from "./context/UserContext";
import Welcome from "./components/Welcome";
import Login from "./components/authentication/Login";
import Register from "./components/authentication/Register";

import App from "./App";
import Home from "./components/home/Home";
import Tasks from "./components/tasks/Tasks";
import Mentors from "./components/mentors/Mentors";
import Chat from "./components/chat/Chat";
import Settings from "./components/settings/Settings";
import Submissions from "./components/submissions/Submissions";
import AssignTask from "./components/assignTask/AssignTask";

export default function Routes() {
  const { uid, userType } = useUser();
  const [router, setRouter] = useState(null);

  const [isPending, startTransition] = useTransition();

  // Preload all lazy-loaded components
  // useEffect(() => {
  //   const preloadComponents = () => {
  //     App.preload?.();
  //     Home.preload?.();
  //     Tasks.preload?.();
  //     Mentors.preload?.();
  //     Chat.preload?.();
  //     Settings.preload?.();
  //     Submissions.preload?.();
  //     AssignTask.preload?.();
  //   };

    
  //   preloadComponents();
    
  // }, [userType]);

  const router1 = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/*" element={<Navigate to="/" replace />} />
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </>
    )
  );

  const router2 = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/*" element={<Navigate to={`/${uid}/home`} replace />} />
        <Route path={`/${uid}`} element={<App />}>
          <Route path="home" element={<Home />} />
          <Route path="tasks" element={<Tasks />} />
          <Route path="mentors" element={<Mentors />} />
          <Route path="chat" element={<Chat />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </>
    )
  );

  const router3 = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/*" element={<Navigate to={`/${uid}/home`} replace />} />
        <Route path={`/${uid}`} element={<App />}>
          <Route path="home" element={<Home />} />
          <Route path="assignTask" element={<AssignTask />} />
          <Route path="submissions" element={<Submissions />} />
          <Route path="chat" element={<Chat />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </>
    )
  );

  useEffect(() => {
    if (userType === null) {
      setRouter(router1);
    } else if (userType === "student") {
      startTransition(() => {
        setRouter(router2);
      })
    } else if (userType === "mentor") {
      startTransition(() => {
        setRouter(router3);
      })
    }
  }, [uid, userType]);

  return (
    router === null ? (
      <div className="flex justify-center items-center h-screen dark:bg-[#070F2B] dark:text-[#DFF2EB] bg-[#DFF2EB]">
        <h1 className="text-8xl">Loading...</h1>
      </div>
    ) : (
      // <Suspense
      //   fallback={
      //     <div className="flex justify-center items-center h-screen dark:bg-[#070F2B] dark:text-[#DFF2EB] bg-[#DFF2EB]">
      //       <h1 className="text-8xl">Loading...</h1>
      //     </div>
      //   }
      // >
        <RouterProvider router={router} />
      // </Suspense>
    )
  );
}
