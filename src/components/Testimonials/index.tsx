"use client";
import { Testimonial } from "@/types/testimonial";
import SectionTitle from "../Common/SectionTitle";
import CreateRecord from "./CreateRecord";
import UpdateRecord from "./UpdateRecord";
import ChangePassword from "./ChangePassword";
import Message from "./Message";

const Testimonials = () => {
  return (
    <section className="dark:bg-bg-color-dark relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Bot Management"
          paragraph=""
          center
        />
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 xl:grid-cols-3">
          {/* <CreateRecord /> */}
          <UpdateRecord />
          <ChangePassword />
          <Message />
        </div>{/* 
        <div className="flex flex-col items-center justify-center mt-10">
          <Link
            href="https://www.google.com/maps/place/Dry+Cleaning+White+And+Bright/@51.530682,0.03955,17z/data=!4m16!1m9!3m8!1s0x47d8a7ceca0e8d3f:0xacff1cc17f0c3824!2sDry+Cleaning+White+And+Bright!8m2!3d51.5306879!4d0.0395535!9m1!1b1!16s%2Fg%2F11c2phb6w4!3m5!1s0x47d8a7ceca0e8d3f:0xacff1cc17f0c3824!8m2!3d51.5306879!4d0.0395535!16s%2Fg%2F11c2phb6w4?entry=ttu"
            className="rounded-lg bg-amber-500 px-8 py-4 text-base w-[300px] text-center font-semibold text-white duration-300 ease-in-out hover:bg-amber-500/80"
          >
            SHOW MORE
          </Link>
        </div> */}
      </div>
    </section>
  );
};

export default Testimonials;
