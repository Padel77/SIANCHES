"use client";
import React, { useState, useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { ArrowUpRight, Heart, MapPin } from 'lucide-react';
import Link from 'next/link';
SwiperCore.use([Navigation, Pagination]);
interface CarouselProps {
    items: any[];
}

const Carousel: React.FC<CarouselProps> = ({ items }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const carouselRef = useRef(null);

    const handleSlideChange = (swiper: Swiper) => {
        setActiveIndex(swiper.activeIndex);
    };

    useEffect(() => {
        if (carouselRef.current && carouselRef.current.swiper) {
            carouselRef.current.swiper.slideTo(activeIndex, 0);
        }
    }, [activeIndex])

    return (
        <div className="relative ">
            <Swiper
                ref={carouselRef}
                navigation={true}
                watchSlidesProgress={true}
                pagination={{ clickable: true }}
                onSlideChange={handleSlideChange}
                spaceBetween={30}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                    },
                    640: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 3,
                    },
                    1024: {
                        slidesPerView: 4,
                    },
                }}
            >
                {items.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className="flex bg-[#F8F8FC] flex-col   ">
                            <Image width={300} height={300} src={"https://s3-alpha-sig.figma.com/img/70bc/832e/e9a6f4143a2e8abd6732887be3f29b0c?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HWmZWhqxPeQMABR7EJ6Cbihoku5jKNv~dQVfCtmZcl85qP2sczXf7rOnUL~UsbgrIMEfl9zoN~IckGDB3Fo-udIsD423kKxE20acSuaq4GCND-akHg922UrrDFrQw3mCPPcWakicfG1b7hWStHlFTkwmTPw0pzLtKb7jy5gm9S9zdTr8k-1I3rgNxba1WufjOr2x1q9IrrBOk2CmawCbQG-366mPiLG~KNIqEV4C0K2AWxtaRqVTytZBUbxUkb~WolnujIo5xE~O7MNCvCx09bF3YyZBS79v-4kFf6TLGWCTRqBRCbuDEVmnfzUpH-RRYngMF7duWtSfVNvr9xSo5Q__"} alt={item.altText} className="w-full h-auto rounded-lg" />

                            <div className='absolute top-4 right-4 rounded-full bg-[#FCFCFB] p-1 '><Heart color='red' fill={item.is_favorite ? 'red' : 'none'} strokeWidth={0.5} size={24} /></div>
                            {/* <div className='absolute top-50 right-4'><p className="text-gray-700">{item.type}</p>
                            </div> */}
                            <div className='px-4 flex flex-col gap-2'>
                                <div className=''>
                                    <h3 className="text-[20px]  font-[400]  mt-4">{item.title}</h3>
                                </div>
                                <div className='flex items-center text-xs gap-1 text-[#8D999D]'>
                                    <p >< MapPin size={16} /></p>
                                    <p >{item.address}</p>
                                </div>
                                {item.features.map((items) => (
                                    <div key={items.id} className='flex items-center justify-start text-sm gap-2 border-b mb-2 py-2'>
                                        <Image alt={items.name} src={items.icon} width={16} height={16} />
                                        <p className=" ">{items.name}</p>
                                    </div>
                                ))
                                }
                            </div>
                            <div className='flex justify-between px-2 py-2 items-center'>
                                <div className='flex flex-col gap-1 '>
                                <p className='text-[#12100B] text-lg font-bold '>{item.price} EGP</p>
                                <p className='text-xs text[#656861] font-[400]'>{item.monthly} monthly</p>
                                </div>
                                <Link href="/properties"> <div className='flex items-center'>
                                    <ArrowUpRight size={24} />
                                </div>
                                </Link>

                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

        </div >
    );
};

export default Carousel;
