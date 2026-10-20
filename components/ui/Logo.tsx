import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center transition-opacity duration-300 hover:opacity-90"
    >
      <Image
        src="/logo/christeck-logo.png"
        alt="CHRISTECK Electrical Engineering Solutions"
        width={220}
        height={58}
        priority
        className="h-16 w-auto lg:h-18"
      />
    </Link>
  );
}