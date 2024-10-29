// import React from 'react';
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';

// import './carousel.css';

// // import required modules
// import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// // Import images
// import image1 from '../../imgs/aboutus/background-home.png';
// import image2 from '../../imgs/aboutus/background-home.png';
// import image3 from '../../imgs/aboutus/background-home.png';
// // Add more imports as needed

// export default function Aboutuscarousel() {
//   return (
//     <>
//       <Swiper
//         centeredSlides={true}
//         autoplay={{
//           delay: 2500,
//           disableOnInteraction: false,
//         }}
//         pagination={{
//           clickable: true,
//         }}
//         navigation={true}
//         modules={[Autoplay, Pagination, Navigation]}
//         className="mySwiper"
//       >
//         <SwiperSlide><img src={image1} alt="Slide 1" /></SwiperSlide>
//         <SwiperSlide><img src={image2} alt="Slide 2" /></SwiperSlide>
//         <SwiperSlide><img src={image3} alt="Slide 3" /></SwiperSlide>
//         {/* Add more SwiperSlide components with images as needed */}
//       </Swiper>
//     </>
//   );
// }