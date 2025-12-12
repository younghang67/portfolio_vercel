import Image from "next/image";
import React from "react";

export default function HeroBanner() {
  return (
    <div className="flex justify-center items-center min-h-[400px] dotbg">
      <Image src={"/logo/dark-logo-160x160.png"} height={160} width={160} alt="banner image" className="dark:block hidden" />
      <Image src={"/logo/light-logo-160x160.png"} height={160} width={160} alt="banner image" className="dark:hidden block" />
    </div>
  );
}