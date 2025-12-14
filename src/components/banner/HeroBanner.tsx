import { typewritingData } from "@/data/typewrite";
import Typewriter from "../ui/Typewriter";
export default function HeroBanner() {
  return (
    <div className="flex flex-col justify-center items-center gap-5 min-h-[400px] dotbg">
      <h1 className="text-8xl">
        WEB DEVELOPER
      </h1>
      <Typewriter
        texts={typewritingData}
        speed={60}
        className="text-black dark:text-white text-lg"
      />
    </div>
  );
}