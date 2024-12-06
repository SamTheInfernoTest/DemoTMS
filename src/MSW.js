// Mock Service Worker

import { http, HttpResponse } from 'msw';
import { setupWorker } from 'msw/browser';

import { tasks, submissions } from './MockData'

const baseApiUrl = 'http://localhost:8000';

const handlers = [
    // login Student
    http.post(`${baseApiUrl}/student/login/`, async ({ request }) => {

        const data = await request.json();
        return HttpResponse.json({
            name: data.uid,
            profileImage: `/mockData/student.svg`,
            standards: ['Standard 10'],
            refreshToken: 'refreshToken',
            access: 'accessToken',
            bgImage: `/mockData/stBg.jpg`,
            moto: 'Knowledge is power, and with great power comes great responsibility.'
        }
        )
    }),

    // login Teacher
    http.post(`${baseApiUrl}/mentor/login/`, async ({ request}) => {

        const data = await request.json();

        // const uid = data.get('uid');
        return HttpResponse.json({
            name: data.uid,
            profileImage: `/mockData/teacher.png`,
            standards: ['Standard 10'],
            refreshToken: 'refreshToken',
            access: 'accessToken',
            bgImage:   `/mockData/tBg.jpg` ,
            moto: "A value system that drives a teacher's passion and helps them improve every day."
        }
        )
    }),

    // tasks
    http.get(`${baseApiUrl}/task/byStudent/*`, async ({ request }) => {
        return HttpResponse.json(tasks)
    }),

    // submissions
    http.get(`${baseApiUrl}/task/studentGetSubmissions/*`, async ({ request }) => {
        return HttpResponse.json(submissions)
    }),


]

const worker = setupWorker(...handlers)

export default worker;