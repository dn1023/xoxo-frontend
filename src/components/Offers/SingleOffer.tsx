import Image from "next/image";
import { Offer } from "@/types/offer";

const SingleOffer = ({ offer }: { offer: Offer }) => {
  const { id, icon, title } = offer;
  return (
    <div className="w-full">
      <div className="wow fadeInUp justify-center items-center text-center" data-wow-delay=".15s">
        <div className="mx-auto flex items-center justify-center rounded-full">
          <Image src={icon} alt="offer image" width={120} height={120} />
        </div>
        <h3 className="mb-10 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
          {title}
        </h3>
      </div>
    </div>
  );
};

export default SingleOffer;
