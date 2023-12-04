import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination } from "swiper/modules";
import { Divider } from "antd";

export default function Review() {
  return (
    <div className="w-[80%] mx-auto py-16">
      <h3 className="mb-2 text-gray-500">Feedback</h3>
      <h1
        style={{
          backgroundImage:
            "linear-gradient(90deg,rgba(0,89,78,1) 0%, rgba(2,0,36,0.9) 15%, rgba(0,89,78,1.9) 40%)",
          color: "transparent",
          backgroundClip: "text",
          MozBackgroundClip: "text",
          WebkitBackgroundClip: "text",
        }}
        className="text-5xl tracking-wide"
      >
        What Our Student Say
      </h1>

      <div className="flex justify-between">
        <div></div>
        <div className="lg:w-[70%] w-[100%]">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="container flex flex-col w-full  p-6 mx-auto divide-y rounded-md ">
                <div className="flex justify-between p-4">
                  <div className="flex items-center gap-3">
                    <div>
                      <img
                        src="https://source.unsplash.com/100x100/?portrait"
                        alt=""
                        className="object-cover w-12 h-12 rounded-full dark:bg-gray-500"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold">Hafizur Rahman Riaz</h4>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 dark:text-yellow-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      className="w-5 h-5 fill-current"
                    >
                      <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
                    </svg>
                    <span className="text-xl font-bold">4.5</span>
                  </div>
                </div>
                <Divider />
                <div className=" space-y-2 text-sm dark:text-gray-400">
                  <p className="text-lg">
                    Donec eget ultricies diam, eu molestie arcu. Etiam nec lacus
                    eu mauris cursus venenatis. Maecenas gravida urna vitae
                    accumsan feugiat. Vestibulum commodo, ante sit urna purus
                    rutrum sem.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="container flex flex-col w-full  p-6 mx-auto divide-y rounded-md dark:divide-gray-700 dark:bg-gray-900 dark:text-gray-100">
                <div className="flex justify-between p-4">
                  <div className="flex items-center gap-3">
                    <div>
                      <img
                        src="https://source.unsplash.com/100x100/?portrait"
                        alt=""
                        className="object-cover w-12 h-12 rounded-full dark:bg-gray-500"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold">Tarek Rahman</h4>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 dark:text-yellow-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      className="w-5 h-5 fill-current"
                    >
                      <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
                    </svg>
                    <span className="text-xl font-bold">4.5</span>
                  </div>
                </div>
                <Divider />
                <div className=" space-y-2 text-sm dark:text-gray-400">
                  <p className="text-lg">
                    Donec eget ultricies diam, eu molestie arcu. Etiam nec lacus
                    eu mauris cursus venenatis. Maecenas gravida urna vitae
                    accumsan feugiat. Vestibulum commodo, ante sit urna purus
                    rutrum sem.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="container flex flex-col w-full  p-6 mx-auto divide-y rounded-md dark:divide-gray-700 dark:bg-gray-900 dark:text-gray-100">
                <div className="flex justify-between p-4">
                  <div className="flex items-center gap-3">
                    <div>
                      <img
                        src="https://source.unsplash.com/100x100/?portrait"
                        alt=""
                        className="object-cover w-12 h-12 rounded-full dark:bg-gray-500"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold">Mohidul Islam Rimon</h4>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 dark:text-yellow-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      className="w-5 h-5 fill-current"
                    >
                      <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
                    </svg>
                    <span className="text-xl font-bold">4.5</span>
                  </div>
                </div>
                <Divider />
                <div className=" space-y-2 text-sm dark:text-gray-400">
                  <p className="text-lg">
                    Donec eget ultricies diam, eu molestie arcu. Etiam nec lacus
                    eu mauris cursus venenatis. Maecenas gravida urna vitae
                    accumsan feugiat. Vestibulum commodo, ante sit urna purus
                    rutrum sem.
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
