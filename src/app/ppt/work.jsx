import { useOutletContext } from 'react-router';
import ssoImg1 from '@/assets/sso1.png';
import ssoImg2 from '@/assets/sso2.png';
import AirImg1 from '@/assets/air1.png';
import AirImg2 from '@/assets/air2.png';
import AirImg3 from '@/assets/air3.png';
import AirImg4 from '@/assets/air4.png';
import AirImg5 from '@/assets/air5.png';
import AirImg6 from '@/assets/air6.png';
import AirImg7 from '@/assets/air7.png';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css';
const Page = () => {
  const nowPage = useOutletContext();
  const SSOSwiperList = [ssoImg1, ssoImg2];
  const AirSwiperList = [
    AirImg1,
    AirImg2,
    AirImg3,
    AirImg4,
    AirImg5,
    AirImg6,
    AirImg7,
  ];
  return (
    <div>
      {nowPage.BreakPoint == 1 && (
        <div className="p5">
          <h2 className="text-3xl">單一登入(SSO)</h2>
          <Swiper
            navigation={true}
            modules={[Navigation]}
            className=" cursor-default mt10"
            spaceBetween={50}
            slidesPerView={1}
          >
            {SSOSwiperList.map((item, index) => (
              <SwiperSlide key={index} className="hfull">
                <img
                  className="animate-fade-in animate-duration-300 mxa"
                  src={item}
                ></img>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
      {nowPage.BreakPoint == 2 && (
        <div className="p5">
          <h2 className="text-3xl mb2">空中轉診遠距平台</h2>
          <Swiper
            navigation={true}
            modules={[Navigation]}
            className=" cursor-default mt10"
            spaceBetween={50}
            slidesPerView={1}
          >
            {AirSwiperList.map((item, index) => (
              <SwiperSlide key={index} className="hfull">
                <img
                  className="animate-fade-in animate-duration-300 mxa"
                  src={item}
                ></img>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </div>
  );
};
export default Page;
