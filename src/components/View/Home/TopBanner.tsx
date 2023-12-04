import "swiper/css";
import "swiper/css/navigation";
import image from "../../../assets/banner.png";
import Image from "next/image";

import Link from "next/link";
import SearchForm from "@/components/ui/Form/SearchForm";

const TopBanner = () => {
  return (
    <div className="lg:flex block items-center justify-center px-5 ">
      <div className="lg:w-1/2">
        <h1 className="text-5xl text-[#01574E]">Techneto Lms</h1>
        <h3 className="text-2xl mt-5 font-semibold text-gray-600">
          Unlock Your Learning Potential with LearnXpert.
        </h3>
        <p className="my-3 text-slate-700 tracking-wide font-semibold text-justify text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
          corrupti velit sapiente blanditiis, molestiae nobis, qui
          exercitationem labore ullam ratione omnis quasi similique possimus
          adipisci soluta optio.
        </p>

        <div>
          <SearchForm />
        </div>

        <Link href="/courses">
          <button className="px-5 py-2   border-none outline-none text-white   rounded-md text-lg font-normal tracking-wider hover:tracking-widest bg-[#01574E]  duration-150 cursor-pointer">
            Enroll Courses
          </button>
        </Link>
      </div>
      <div className="flex justify-center ">
        <Image src={image} alt="banner_image" width={500} height={500} />
      </div>
    </div>
  );
};

export default TopBanner;
