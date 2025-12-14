import Link from "next/link";

export default function NotFound() {
  return (
    <div className="max-wid flex justify-center items-center flex-col h-[80dvh]">
      <h2 className="text-4xl font-semibold">Sorry page Not Found</h2>
      <Link className="px-6 py-4 bg-primary dark:text-black text-white rounded-md mt-6" href="/">Return Home</Link>
    </div>
  );
}
