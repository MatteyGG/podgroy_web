'use client'

import Image from 'next/image'

import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'
import {FreeMode, Navigation, Pagination, Thumbs  } from 'swiper/modules'

import { images } from '../lib/images'

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

export default function Page() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <section>
      <div>
        <Swiper
          style={{
            '--swiper-navigation-color': '#fff',
            '--swiper-pagination-color': '#fff',
          }}
          spaceBetween={10}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper2 rounded-lg"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div>
                <Image
                  src={image.src}
                  alt={image.alt}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={5}
          slidesPerView={5}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper mt-2 rounded-lg"
        >
        {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div>
                <Image
                  src={image.src}
                  alt={image.alt}
                />
              </div>
            </SwiperSlide>
          ))}
          </Swiper>
      </div>
    </section>
  )
}