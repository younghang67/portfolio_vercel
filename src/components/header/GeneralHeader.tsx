import ThemeToggle from "../utils/ThemeToggle";
import Image from "next/image";

export default function GeneralHeader() {
  return (
    <header className="px-4 py-6 dotbg">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          {/* dark mode image */}
          <Image src="/logo/dark-logo-160x160.png" alt="Logo" width={40} height={40} className="dark:block hidden" />
          {/* light mode image */}
          <Image src="/logo/light-logo-160x160.png" alt="Logo" width={40} height={40} className="dark:hidden block" />
        </div>
        <div>
          <nav>
            <ul className="flex gap-8 uppercase font-semibold">
              <li>
                <a href="#">home</a>
              </li>
              <li>
                <a href="#">qulafications</a>
              </li>
              <li>
                <a href="#">projects</a>
              </li>
              <li>
                <a href="#">about me</a>
              </li>
            </ul>
          </nav>
        </div>
        <ThemeToggle />
      </div>
    </header>
  );
}
