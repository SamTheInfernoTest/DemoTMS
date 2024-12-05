import {useState,useEffect} from 'react'
import {ToastContainer, toast} from 'react-toastify'

import ImageUploader from './ImageUploader'
import useUser from '../../context/UserContext'
import useWeb from '../../context/WebContext'


function Account() {

    const {baseApiUrl, theme} = useWeb()
    const { uid, profileImage, setProfileImage, bgImage, setBgImage, moto, setMoto, userType, axiosSecure } = useUser()

    const [passwd, setPasswd] = useState('')
    const [passwd2, setPasswd2] = useState('')

    function updatePassword() {
        if (passwd !== passwd2) {
            toast.error('Passwords do not match', { containerId: 'settings' , toastId: 'passwordsDoNotMatch' })
            return
        }
        axiosSecure.post(`${userType}/updatePassword/`, { password: passwd, uid: uid }).then(res => {
            toast.success(res.data.message, {containerId: 'settings'})
        }).catch(err => {
            console.error(err);            
        })
    }

    function updateProfileImage(image){
        const formData = new FormData();
        formData.append('image', image);
        formData.append('uid', uid);
        axiosSecure.post(`${userType}/updateProfileImage/`, formData).then(res => {
            toast.success(res.data.message, {containerId: 'settings'});
        }).catch(err => {
            console.error(err);
            toast.error('Error updating profile image', {containerId: 'settings'});
            throw new Error('Error updating profile image');
        })
    }

    function updateBgImage(image){
        const formData = new FormData();
        formData.append('image', image);
        formData.append('uid', uid);
        axiosSecure.post(`${userType}/updateBgImage/`, formData).then(res => {
            toast.success(res.data.message, {containerId: 'settings'});
        }).catch(err => {
            console.error(err);
            toast.error('Error updating background image', {containerId: 'settings'});
            throw new Error('Error updating background image');
        })
    }

    function updateMoto(moto){
        axiosSecure.post(`${userType}/updateMoto/`, {moto: moto, uid: uid}).then(res => {
            toast.success(`Your Moto is now: ${moto}`, {containerId: 'settings', toastId: 'motoUpdated'});
        }).catch(err => {
            console.error(err);
            toast.error('Error updating moto', {containerId: 'settings'});
            throw new Error('Error updating moto');
        })
    }

    return (
        <div>
            <ToastContainer containerId='settings' position='top-right' theme={theme} />
            <div >
                <h2
                    className='text-lg font-semibold py-2'
                >Change Password</h2>
                <div className=''>

                    <input
                        className='p-1 rounded-md  dark:bg-[#1e293b] dark:text-darkText'
                        id = 'passwd'
                        autoComplete="new-password"
                        value={passwd}
                        onChange={(e) => setPasswd(e.target.value)}
                        type="password" placeholder='New Password' />
                    <input type="checkbox" 
                        className='ml-4 my-auto dark:bg-[#1e293b] dark:text-darkText'
                    onChange={(e) => {
                        if (e.target.checked) {
                            document.getElementById('passwd').type = 'text'
                        } else {
                            document.getElementById('passwd').type = 'password'
                        }
                    }}
                    />
                    <div className='py-2 flex sm:flex-row flex-col gap-4'>

                        <input
                            className='p-1 rounded-md w-fit dark:bg-[#1e293b] dark:text-darkText' 
                            value={passwd2}
                            autoComplete="new-password"
                            onChange={(e) => setPasswd2(e.target.value)}
                            type="password" placeholder='Confirm Password' />
                        <button
                            className='ml-8 p-1 px-2 rounded-xl bg-lightButton w-fit text-white active:scale-95 dark:bg-darkButton'
                            onClick={updatePassword}
                        >Change Password</button>
                    </div>
                </div>
            </div>
            <hr className='border-b border-black dark:border-white' />
            <div>
                <h2
                    className='text-lg font-semibold py-2'
                >Change Profile Image</h2>
                <div className='flex py-4'>
                    <ImageUploader image={profileImage} setImage={setProfileImage} w={10} h={10} updateImage={updateProfileImage}/>
                </div>
            </div>
            <hr className='border-b border-black dark:border-white' />
            <div>
                <h2
                    className='text-lg font-semibold py-2'
                >Change Home Background</h2>

                <div className='flex py-4'>
                    <ImageUploader image={bgImage} setImage={setBgImage} w={25} h={6} updateImage={updateBgImage} />
                </div>
            </div>
            <div>
                <h2
                    className='text-lg font-semibold py-2'
                >Change Your Moto</h2>
                <div>
                    <textarea
                        className='p-1 rounded-md dark:bg-[#1e293b] dark:text-darkText w-1/2'
                    placeholder='Your Moto'
                    rows={3}
                    value = {moto || ''}
                    onChange={(e) => setMoto(e.target.value)}
                    maxLength={500}
                    />
                    <button
                        className='ml-8 p-1 px-2 rounded-xl bg-lightButton w-fit text-white active:scale-95  dark:bg-darkButton'
                        onClick={() => updateMoto(moto)}
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Account