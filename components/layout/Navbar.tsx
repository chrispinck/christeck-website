import Image from "next/image";
import Link from "next/link";

const menuItems = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Blog", href: "#blog" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="container-custom flex h-20 items-center justify-between">

        <Link href="/" className="flex items-center">
          <Image
            src="/logo/christeck-logo.png"
            alt="CHRISTECK"
            width={260}
            height={70}
            priority
            className="h-14 w-auto"
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="font-medium text-slate-700 transition hover:text-[var(--primary)]"
            >
              {item.name}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="primary-btn hidden lg:inline-block"
        >
          Get in Touch
        </a>
      </div>
    </header>
  );
}