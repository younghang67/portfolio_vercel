import Image from "next/image";
import React from "react";

type ExprienceProp = {
  className?: string;
};

export default function ExprienceProjects({ className }: ExprienceProp) {
  return (
    <div className={className}>
      <h2 className="text-3xl font-semibold pb-6">Exprience</h2>
      <div className="flex gap-6 items-center py-6 px-4 dark:border dark:shadow-none shadow-lg dark:shadow-white rounded-md">
        <div className="bg-white p-4 rounded-lg">
          <Image src="/logo/bridge-logo.png" alt="Bridge Software Solutions Logo" width={100} height={100} />
        </div>
        <div>
          <h3 className="text-2xl font-semibold">Bridge Software Solutions</h3>
          <p className="text-muted">Frontend Developer (Project Based)</p>
          <p className="text-muted">March 2023 - Present</p>
        </div>
      </div>
    </div>
  );
}
