import Image from "next/image";

interface LogoIconProps {
  src: string;
  alt: string;
  size?: number;
  className?: string;
}

// category / brand logo shown inside the page header
export const LogoIcon = ({
  src,
  alt,
  size = 40,
  className = "h-10 w-10 object-contain",
}: LogoIconProps) => (
  <Image src={src} alt={alt} width={size} height={size} className={className} />
);
