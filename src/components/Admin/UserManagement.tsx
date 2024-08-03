"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import UserService from "@/api/user.service";

const UserManagement = () => {

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      const allUsers = await UserService.getPublicContent();
      if (allUsers !== undefined) {
        if (allUsers?.length > 0) {
          setUsers(allUsers);
          setLoading(allUsers?.length > 0);
          // Navigate on success
          // Example: router.push('/'); // Assuming you have a router instance available
        }
      }
    };
    fetchUsers().catch(error => console.error('Failed to fetch users:', error));
  }, [])

  const onReload = async () => {
    //toast.success("Saved successfully!")
    const allUsers = await UserService.getPublicContent();
    if (allUsers !== undefined) {
      if (allUsers?.length > 0) {
        setUsers(allUsers);
        setLoading(allUsers?.length > 0);
        toast.success("Reloaded successfully!")
        // Navigate on success
        // Example: router.push('/'); // Assuming you have a router instance available
      }
    }
  }

  const onEmployee = async (id: number) => {
    //toast.success("Saved successfully!")
    const res = await UserService.convertEmployee(id);
    if (res !== undefined) {
      if (res?.message == "User converted successfully!") {
        toast.success("Converted successfully!")
      }
      else
        toast.warn(res?.message)
    }
  }

  const onDelete = async (id: number) => {
    //toast.success("Saved successfully!")
    const res = await UserService.delete(id);
    if (res !== undefined) {
      if (res?.message == "User deleted successfully!") {
        toast.success("Deleted successfully!")
      }
      else
        toast.warn(res?.message)
    }
  }

  return (
    <>
      <div className="p-8 rounded-lg shadow-three bg-white dark:bg-gray-dark">
        <h1 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
          User Management
        </h1>
        <div className="w-full mb-5">
          {
            loading ? (
              <table className="w-full border-collapse border border-slate-400 table-auto">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="border border-slate-300 p-3">UserName</th>
                    <th className="border border-slate-300 p-3">FirstName</th>
                    <th className="border border-slate-300 p-3">LastName</th>
                    <th className="border border-slate-300 p-3">Email</th>
                    <th className="border border-slate-300 p-3">Phone</th>
                    <th className="border border-slate-300 p-3">To Employee</th>
                    <th className="border border-slate-300 p-3">Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((item, index) =>
                    <tr key={index}>
                      <td className="border border-slate-300 p-2">{item.username}</td>
                      <td className="border border-slate-300 p-2">{item.firstname}</td>
                      <td className="border border-slate-300 p-2">{item.lastname}</td>
                      <td className="border border-slate-300 p-2">{item.email}</td>
                      <td className="border border-slate-300 p-2">{item.phone}</td>
                      <td className="border border-slate-300 text-center p-2 hover:text-body-color/70">
                        <button
                          onClick={() => onEmployee(item.id)}
                        >
                          Convert
                        </button>
                      </td>
                      <td className="border border-slate-300 text-center p-2 hover:text-body-color/70">
                        <button
                          onClick={() => onDelete(item.id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  )}

                </tbody>
              </table>
            ) :
              (
                <span className="w-full text-red">Loading</span>
              )
          }
        </div>
        <div className="flex flex-row items-center justify-end">
          <button
            onClick={onReload}
            className="rounded-lg bg-slate-200 px-8 py-4 text-base flex items-center justify-center font-semibold text-black duration-300 ease-in-out hover:bg-slate-200/60"
          >
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M480-160q-134 0-227-93t-93-227q0-134 93-227t227-93q69 0 132 28.5T720-690v-110h80v280H520v-80h168q-32-56-87.5-88T480-720q-100 0-170 70t-70 170q0 100 70 170t170 70q77 0 139-44t87-116h84q-28 106-114 173t-196 67Z" /></svg>
            &nbsp;Reload&nbsp;&nbsp;
          </button>
        </div>
      </div>
    </>
  );
};

export default UserManagement;
