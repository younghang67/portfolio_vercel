type AboutMeProps = {
  className?: string;
};

export default function AboutMe({ className }: AboutMeProps) {
  return (
    <div className={className}>
      <h2 className="text-3xl font-semibold">About Me</h2>
      <div>
        <ul className="border-l-2 pl-4 pt-6 space-y-6 aboutme-list">
          <li>Rusan Limbu</li>
          <li>Web Developer - specialized in frontend Development</li>
          <li>Kathmandu, Nepal</li>
          <li><a href="mailto:rusanlimbu123@gmail.com" className="relative">rusanlimbu123@gmail.com</a></li>
        </ul>
      </div>
    </div>
  );
}
