import { FaPhone, FaRegEnvelope } from "react-icons/fa6";

import { contact } from "@/lib/navigation";

const linkClass =
  "flex items-center gap-1.5 transition-colors hover:text-primary-600";

// phone and email links
export const TopBarContact = () => (
  <div className="flex items-center gap-4 text-gray-500">
    <a href={contact.phoneHref} className={linkClass}>
      <FaPhone className="text-xs" />
      <span>{contact.phone}</span>
    </a>
    <a href={`mailto:${contact.email}`} className={linkClass}>
      <FaRegEnvelope className="text-xs" />
      <span>{contact.email}</span>
    </a>
  </div>
);