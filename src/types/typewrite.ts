export interface TypewriterProps {
  texts: string[];
  speed?: number;
  deleteSpeed?: number;
  delay?: number;
  pauseBetween?: number;
  loop?: boolean;
  className?: string;
  cursor?: boolean;
}
