
import ScrollUp from "@/components/Common/ScrollUp";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import { Metadata } from "next";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
/* export const metadata: Metadata = {
  title: "Laundry and Dry Cleaning in LonDon",
  description: "Laundry and Dry Cleaning in LonDon",
  // other metadata
}; */

export default function Home() {
  return (
    <>
      <ToastContainer />
      <ScrollUp />
      <Hero />
      <Testimonials />
    </>
  );
}
