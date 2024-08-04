'use client'
import Image from "next/image";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import BotService from "@/api/bot.service";

const ChangePassword = () => {

    const [password, setPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [rePassword, setRePassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    const onUpdate = async () => {
        if (password.trim() == "") {
            toast.warn("Please check password.");
            return;
        }
        if (newPassword.trim() == "") {
            toast.warn("Please check new password.");
            return;
        }
        if (rePassword.trim() == "") {
            toast.warn("Please check re-password.");
            return;
        }

        if (rePassword.trim() != newPassword.trim()) {
            toast.warn("Incorrect password.");
            return;
        }

        setLoading(true);
        try {
            const response = await BotService.update(password, newPassword); // Assuming login returns a promise

            if (response !== undefined) {
                if (response.message == "Password updated successfully!")
                    toast.success(response.message);
                else
                    toast.warn(response.message);
                console.log(response);
            }
            //router.push('/profile'); // Navigate to profile page upon successful login
            //window.location.reload(); // Reload the page
        } catch (error) {
            const resMessage =
                (error.response && error.response.data && error.response.data.message) ||
                error.message ||
                error.toString();
            setMessage(resMessage);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="w-full">
            <div className="flex flex-col justify-between h-[550px] rounded-sm bg-white p-8 shadow-two duration-300 hover:shadow-one dark:bg-dark dark:shadow-three dark:hover:shadow-gray-dark lg:px-5 xl:px-8">
                <h3 className="text-2xl font-bold leading-tight text-black dark:text-white">
                    Change Password
                </h3>
                <div>
                    <h3 className="pb-2 font-bold leading-tight text-black dark:text-white">
                        Password
                    </h3>
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                        className="border-stroke mb-4 w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                    />
                    <h3 className="pb-2 font-bold leading-tight text-black dark:text-white">
                        New Password
                    </h3>
                    <input
                        type="password"
                        name="newpassword"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        placeholder="Enter your new password"
                        className="border-stroke mb-4 w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                    />
                    <h3 className="pb-2 font-bold leading-tight text-black dark:text-white">
                        Conform Password
                    </h3>
                    <input
                        type="password"
                        name="repassword"
                        value={rePassword}
                        onChange={(e) => setRePassword(e.target.value)}
                        placeholder="Re-Enter your new password"
                        className="border-stroke mb-4 w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                    />
                </div>
                <button
                    onClick={onUpdate}
                    className="w-full bg-amber-500 px-8 py-4 text-base w-[300px] text-center font-semibold text-white duration-300 ease-in-out hover:bg-amber-500/80"
                >
                    Update
                </button>
            </div>
        </div>
    );
};

export default ChangePassword;
