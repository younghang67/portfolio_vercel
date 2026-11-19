import Image from "next/image";

export default function GeneralFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="px-4 py-8 dotbg mt-24">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <Image src="/logo/dark-logo-160x160.png" alt="Logo" width={40} height={40} className="dark:block hidden" />
            <Image src="/logo/light-logo-160x160.png" alt="Logo" width={40} height={40} className="dark:hidden block" />
          </div>

          <ul className="flex gap-6 uppercase font-semibold text-sm">
            <li>
              <a href="https://github.com/younghang67" target="_blank" rel="noopener noreferrer">
                github
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/rusan-limbu/" target="_blank" rel="noopener noreferrer">
                linkedin
              </a>
            </li>
            <li>
              <a href="mailto:rusanlimbu123@gmail.com">email</a>
            </li>
          </ul>
        </div>
        <div className="mt-8 pt-6 border-t border-current/20 text-center text-sm opacity-70">
          <p>&copy; {year} Rusan Limbu. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
