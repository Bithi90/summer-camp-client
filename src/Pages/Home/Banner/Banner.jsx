import { Autoplay, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";


import slideImg1 from '../../../assets/slide1.webp';
import slideImg2 from '../../../assets/istockphoto-481495699-612x612.jpg';
import slideImg3 from '../../../assets/slide3.jpg';
import slideImg4 from '../../../assets/shutterstock_714450502_800x480.jpg';
import slideImg5 from '../../../assets/slide5.jpg';

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link } from "react-router-dom";

const Banner = () => {
    return (
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
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper text-left text-white"
        >
            <SwiperSlide >
                <div

                    style={{
                        backgroundImage: `url(${slideImg1})`,
                        backgroundSize: "cover"
                    }}
                >
                    <div className="w-[1280px] h-[600px] pt-48 pl-24 justify-center bg-gradient-to-r from-slate-600 ">
                        <h4 className="text-3xl font-bold text-yellow-500 "> 𝐒𝐩𝐞𝐧𝐝 𝐚 𝐠𝐫𝐞𝐚𝐭 𝐰𝐞𝐞𝐤 𝐰𝐢𝐭𝐡</h4>
                        <h2 className="text-6xl font-bold ">𝐇𝐞𝐥𝐥𝐨 𝐒𝐮𝐦𝐦𝐞𝐫 <br />  𝐒𝐩𝐨𝐫𝐭𝐬 𝐚𝐜𝐚𝐝𝐞𝐦𝐢𝐞𝐬</h2>
                        <Link to='/signup'><button className="btn btn-error mt-4">Register for camp</button></Link>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide >
                <div

                    style={{
                        backgroundImage: `url(${slideImg2})`,
                        backgroundSize: "cover"
                    }}
                >
                    <div className="w-[1280px] h-[600px] pt-48 pl-24 justify-center bg-gradient-to-r from-slate-600 ">
                        <h4 className="text-3xl font-bold text-yellow-500 "> 𝐒𝐩𝐞𝐧𝐝 𝐚 𝐠𝐫𝐞𝐚𝐭 𝐰𝐞𝐞𝐤 𝐰𝐢𝐭𝐡</h4>
                        <h2 className="text-6xl font-bold ">𝐇𝐞𝐥𝐥𝐨 𝐒𝐮𝐦𝐦𝐞𝐫 <br />  𝐒𝐩𝐨𝐫𝐭𝐬 𝐚𝐜𝐚𝐝𝐞𝐦𝐢𝐞𝐬</h2>
                        <Link to='/signup'><button className="btn btn-error mt-4">Register for camp</button></Link>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide >
                <div

                    style={{
                        backgroundImage: `url(${slideImg3})`,
                        backgroundSize: "cover"
                    }}
                >
                    <div className="w-[1280px] h-[600px] pt-48 pl-24 justify-center bg-gradient-to-r from-slate-600 ">
                        <h4 className="text-3xl font-bold text-yellow-500 "> 𝐒𝐩𝐞𝐧𝐝 𝐚 𝐠𝐫𝐞𝐚𝐭 𝐰𝐞𝐞𝐤 𝐰𝐢𝐭𝐡</h4>
                        <h2 className="text-6xl font-bold ">𝐇𝐞𝐥𝐥𝐨 𝐒𝐮𝐦𝐦𝐞𝐫 <br />  𝐒𝐩𝐨𝐫𝐭𝐬 𝐚𝐜𝐚𝐝𝐞𝐦𝐢𝐞𝐬</h2>
                        <Link to='/signup'><button className="btn btn-error mt-4">Register for camp</button></Link>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide >
                <div

                    style={{
                        backgroundImage: `url(${slideImg4})`,
                        backgroundSize: "cover"
                    }}
                >
                    <div className="w-[1280px] h-[600px] pt-48 pl-24 justify-center bg-gradient-to-r from-slate-600 ">
                        <h4 className="text-3xl font-bold text-yellow-500 "> 𝐒𝐩𝐞𝐧𝐝 𝐚 𝐠𝐫𝐞𝐚𝐭 𝐰𝐞𝐞𝐤 𝐰𝐢𝐭𝐡</h4>
                        <h2 className="text-6xl font-bold ">𝐇𝐞𝐥𝐥𝐨 𝐒𝐮𝐦𝐦𝐞𝐫 <br />  𝐒𝐩𝐨𝐫𝐭𝐬 𝐚𝐜𝐚𝐝𝐞𝐦𝐢𝐞𝐬</h2>
                        <Link to='/signup'><button className="btn btn-error mt-4">Register for camp</button></Link>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide >
                <div

                    style={{
                        backgroundImage: `url(${slideImg5})`,
                        backgroundSize: "cover"
                    }}
                >
                    <div className="w-[1280px] h-[600px] pt-48 pl-24 justify-center bg-gradient-to-r from-slate-600 ">
                        <h4 className="text-3xl font-bold text-yellow-500 "> 𝐒𝐩𝐞𝐧𝐝 𝐚 𝐠𝐫𝐞𝐚𝐭 𝐰𝐞𝐞𝐤 𝐰𝐢𝐭𝐡</h4>
                        <h2 className="text-6xl font-bold ">𝐇𝐞𝐥𝐥𝐨 𝐒𝐮𝐦𝐦𝐞𝐫 <br />  𝐒𝐩𝐨𝐫𝐭𝐬 𝐚𝐜𝐚𝐝𝐞𝐦𝐢𝐞𝐬</h2>
                        <Link to='/signup'><button className="btn btn-error mt-4">Register for camp</button></Link>
                    </div>
                </div>
            </SwiperSlide>
            
        </Swiper>
    );
};

export default Banner;