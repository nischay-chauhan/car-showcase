import { CarProps } from "@/types";
import React from "react";
import Image from "next/image";
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

interface CarDetailsProps {
  isOpen: boolean;
  closeModal: () => void;
  car: CarProps;
}

const CarDetails = ({ isOpen, closeModal, car }: CarDetailsProps) => {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-50 overflow-y-auto"
          onClose={closeModal}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="flex items-center justify-center min-h-screen">
              <Dialog.Panel className="fixed inset-0 max-w-lg p-4 mx-auto overflow-y-auto bg-white rounded-2xl shadow-xl">
                <div className="flex justify-end">
                  <button
                    type="button"
                    className="p-2 bg-primary-blue-100 rounded-full"
                    onClick={closeModal}
                  >
                    <Image
                      src="/close.svg"
                      alt="close"
                      width={20}
                      height={20}
                      className="object-contain"
                    />
                  </button>
                </div>
                <div className="flex flex-1 flex-col gap-3">
                  <div className="relative w-ful  h-40  bg-pattern bg-cover bg-center rounded-lg"></div>
                  <Image
                    src="/hero.png"
                    alt="car model"
                    fill
                    priority
                    className="object-contain"
                  />
                </div>
                <div className="flex gap-3 ">
                    <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
                    <Image
                    src="/hero.png"
                    alt="car model"
                    fill
                    priority
                    className="object-contain"
                  />
                    </div>
                    <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
                    <Image
                    src="/hero.png"
                    alt="car model"
                    fill
                    priority
                    className="object-contain"
                  />
                    </div>
                    <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
                    <Image
                    src="/hero.png"
                    alt="car model"
                    fill
                    priority
                    className="object-contain"
                  />
                    </div>
                </div>
              </Dialog.Panel>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  );
};

export default CarDetails;
