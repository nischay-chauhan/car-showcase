"use client";
import { CarProps } from "@/types";

import Image from "next/image";
import React from "react";
import { useState } from "react";
import CustomButton from "./CustomButton";
import { calculateCarRent, generateCarImageUrl } from "@/utils";
import CarDetails from "./CarDetails";
interface CarCardProps {
  car: CarProps;
}
const CarCard = ({ car }: CarCardProps) => {
  const { city_mpg, year, make, model, transmission, drive } = car;

  const [isOpen, setisOpen] = useState(false);

  const carRent = calculateCarRent(city_mpg, year);
  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {make} {model}
        </h2>
      </div>

      <p className="flex mt-6 text-[32] font-extrabold">
        <span className="self-start text-[14] font-semibold">$</span>
        {carRent}
        <span className="self-start text-[14] font-medium">/day</span>
      </p>
      <div className="relative w-full h-40 my-3 object-contain">
        <Image
          src={generateCarImageUrl(car)}
          alt="car "
          fill
          priority
          className="object-contain"
        />
      </div>
      <div className="relative flex w-full mt-2">
        <div className="flex group-hover:invisible w-full justify-between text-gray">
          <div className="flex flex-col jsutify0center items-center gap-2">
            <Image
              src="/steering-wheel.svg"
              width={20}
              height={20}
              alt="steering wheel"
            />
            <p className="text -[14] ">
              {transmission == "a" ? "Automatic" : "Mannual"}
            </p>
          </div>
          <div className="flex flex-col jsutify0center items-center gap-2">
            <Image
              src="/tire.svg"
              width={20}
              height={20}
              alt="steering wheel"
            />
            <p className="text -[14] ">{drive.toUpperCase()}</p>
          </div>
          <div className="flex flex-col jsutify0center items-center gap-2">
            <Image src="/gas.svg" blurDataURL={'/gas.svg'} width={20} height={20} alt="steering wheel" />
            <p className="text-[14px] ">{city_mpg} MPG</p>
          </div>
        </div>

        <div className="car-card__btn-container">
          <CustomButton
            title="view more"
            containerStyles="w-full py-3 rounded-lg bg-gradient-to-r from-teal-400 to-blue-500 hover:from-green-400 hover:to-blue-600"
            textStyles="text-white text-sm font-bold"
            rightIcon="/right-arrow.svg"
            handleClick={() => setisOpen(true)}
            
          />

        </div>
      </div>

      <CarDetails
        isOpen={isOpen}
        closeModal={() => setisOpen(false)}
        car={car}
      />
    </div>
  );
};

export default CarCard;
