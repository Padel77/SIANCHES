import React from "react";
import { ArrowRight, ArrowLeft, ArrowDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

interface Item {
    id: number;
    img: string;
    description: string;
    price: number;
    onClick?: () => void;
}

interface SliderProps {
    items: Item[];
}

const Slider: React.FC<SliderProps> = ({ items }) => {
    const slideLeft = () => {
        const slider = document.getElementById("slider1");
        if (slider) {
            slider.scrollLeft -= 235;
        }
    };

    const slideRight = () => {
        const slider = document.getElementById("slider1");
        if (slider) {
            slider.scrollLeft += 235;
        }
    };

    return (
        <div className="relative flex items-center">
            
            <div
                id="slider1"
                className="w-full flex overflow-x-scroll scrollbar-hide scroll-smooth"
            >
                {items.map((item,index) => (
                    <div key={index} className="p-2 flex-shrink-0 w-60">
                        <Link href={`/`}>
                            <div className="bg-white rounded">
                                <Image
                                    className="h-full rounded"
                                    src={item.img}
                                    alt={item.description || "image"}
                                    sizes="100%"
                                    loading="lazy"
                                />
                            </div>
                        </Link>
                        <div className="flex text-center items-center justify-between p-2">
                            <p className="text-lg">{item.description}</p>
                            <p>
                                <ArrowDown size={16} />
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <Button
                className="absolute left-0 p-2"
                title="scroll left"
                // onClick={slideLeft}
            >
                <ArrowLeft />
            </Button>
            <Button
                className="absolute right-0 p-2"
                title="scroll right"
                // onClick={slideRight}
            >
                <ArrowRight />
            </Button>
        </div>
    );
};

export default Slider;
