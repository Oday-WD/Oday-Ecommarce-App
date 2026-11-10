import Image from "next/image";
import Link from "next/link";
import { FaEnvelope, FaLocationDot, FaPhone } from "react-icons/fa6";
import logo from "@/assets/images/freshcart-logo.svg";
import { contact } from "@/lib/navigation";
import { socials } from "./footer-data";

// logo, about, contact and socials
export const FooterBrand = () => (
  <div className="lg:col-span-4">
    {/* Logo */}
    <Link href="/" className="mb-6 inline-block">
      <div className="inline-block rounded-lg bg-white px-4 py-2">
        <Image src={logo} alt="FreshCart Logo" className="h-8 w-auto" />
      </div>
    </Link>

    {/* About */}
    <p className="mb-6 text-sm leading-relaxed text-gray-400">
      FreshCart is your one-stop destination for quality products. From fashion
      to electronics, we bring you the best brands at competitive prices with a
      seamless shopping experience.
    </p>

    {/* Contact */}
    <div className="mb-6 space-y-3">
      <a
        href={contact.phoneHref}
        className="flex items-center gap-3 text-sm text-gray-400 transition-colors hover:text-primary-400"
      >
        <FaPhone className="text-primary-500" />
        <span>{contact.phone}</span>
      </a>
      <a
        href={`mailto:${contact.email}`}
        className="flex items-center gap-3 text-sm text-gray-400 transition-colors hover:text-primary-400"
      >
        <FaEnvelope className="text-primary-500" />
        <span>{contact.email}</span>
      </a>
      <div className="flex items-start gap-3 text-sm text-gray-400">
        <FaLocationDot className="mt-0.5 text-primary-500" />
        <span>123 Commerce Street, New York, NY 10001</span>
      </div>
    </div>

    {/* Socials */}
    <div className="flex items-center gap-3">
      {socials.map(({ label, icon: Icon }) => (
        <a
          key={label}
          href="#"
          aria-label={label}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-gray-400 transition-colors hover:bg-primary-600 hover:text-white"
        >
          <Icon />
        </a>
      ))}
    </div>
  </div>
);
