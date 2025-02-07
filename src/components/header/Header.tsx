'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(true);

  const isClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      {isOpen ? (
        <div className="w-full min-h-[70px] relative flex gap-1 bg-[#22262A] px-[10px] p-[20px] pt-[40px]">
          <p className="text-sm text-[#CCCCCC] text-center">
            <strong>Reminder:</strong>
            TruMark Financial will never text, call, or email you asking for your account number, PIN, debit or credit card number, online banking credentials, or any other personal identifying
            information. If anyone contacts you purporting to be from a financial institution and asks for personal information, please be diligent. If you have any question as to legitimacy of a text
            message claiming to come from TruMark Financial, please contact the Member Service Center..
          </p>
          <div className="absolute right-[10px] top-[10px]">
            <button className="border w-[30px] h-[30px] text-[#CCCCCC] text-center text-lg flex items-center justify-center rounded-full" onClick={isClose}>
              x
            </button>
          </div>
        </div>
      ) : (
        <div className="w-full h-[200px] overflow-hidden">
          <Image src="https://i.imgur.com/1oBy2vt.png" width={180} height={28} className="w-full relative -top-[80px]" objectFit="cover" alt="logo" />
        </div>
      )}
    </>
  );
}
