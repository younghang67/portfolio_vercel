import Image from "next/image";

type SocialsProps = {
  className?: string;
};

export default function SocialLinks({ className }: SocialsProps) {
  return (
    <div className={className}>
      <h2 className="text-3xl font-semibold pb-6">Social Links</h2>
      <div className="grid grid-cols-2 gap-4">
        <a href="https://github.com/younghang67" className="flex items-center gap-4 socials-links shadow-md">
          <Image src="/logo/github-white.png" alt="GitHub" className="dark:block hidden" width={40} height={40} />
          <Image src="/logo/github-black.png" alt="GitHub" className="dark:hidden block" width={40} height={40} />
          <div>
            <h4 className="font-semibold leading-tight">Github</h4>
            <p className="text-muted">Younghang67</p>
          </div>
        </a>
        <a href="https://www.linkedin.com/in/rusan-limbu/" className="flex items-center gap-4 socials-links shadow-md">
          <Image src="/logo/linkend-White.png" alt="linkend logo" className="dark:block hidden" width={40} height={40} />
          <Image src="/logo/linkend-Black.png" alt="linkend logo" className="dark:hidden block" width={40} height={40} />
          <div>
            <h4 className="font-semibold leading-tight">Linkedin</h4>
            <p className="text-muted">Rusan Limbu</p>
          </div>
        </a>
        <a href="https://www.instagram.com/rusanhang/" className="flex items-center gap-4 socials-links shadow-md">
          <Image src="/logo/instagram-white.png" alt="Instagram logo" className="dark:block hidden" width={40} height={40} />
          <Image src="/logo/Instagram-Black.png" alt="Instagram logo" className="dark:hidden block" width={40} height={40} />
          <div>
            <h4 className="font-semibold leading-tight">Instagram</h4>
            <p className="text-muted">Rusanhang</p>
          </div>
        </a>
        <a href="https://www.facebook.com/rusan.limbu.2025/" className="flex items-center gap-4 socials-links shadow-md">
          <Image src="/logo/facebook-white.png" alt="facebook logo" className="dark:block hidden" width={40} height={40} />
          <Image src="/logo/facebook-black.png" alt="facebook logo" className="dark:hidden block" width={40} height={40} />
          <div>
            <h4 className="font-semibold leading-tight">Github</h4>
            <p className="text-muted">Rusan Limbu </p>
          </div>
        </a>
      </div>
    </div>
  );
}
