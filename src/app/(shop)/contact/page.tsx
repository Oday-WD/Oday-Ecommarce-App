import { Fragment } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  FaClock,
  FaCircleQuestion,
  FaEnvelope,
  FaFacebookF,
  FaHeadset,
  FaInstagram,
  FaLinkedinIn,
  FaLocationDot,
  FaPhone,
  FaTwitter,
} from "react-icons/fa6";
import { ContactForm } from "@/components/contact/ContactForm/ContactForm";
import { PageHeader } from "@/components/shared/PageHeader/PageHeader";
import { contact } from "@/lib/navigation";

export const metadata: Metadata = { title: "Contact Us | FreshCart" };

const infoCards = [
  {
    icon: FaPhone,
    title: "Phone",
    note: "Mon-Fri from 8am to 6pm",
    link: { label: contact.phone, href: contact.phoneHref },
  },
  {
    icon: FaEnvelope,
    title: "Email",
    note: "We'll respond within 24 hours",
    link: { label: contact.email, href: `mailto:${contact.email}` },
  },
  {
    icon: FaLocationDot,
    title: "Office",
    lines: ["123 Commerce Street", "New York, NY 10001", "United States"],
  },
  {
    icon: FaClock,
    title: "Business Hours",
    lines: [
      "Monday - Friday: 8am - 6pm",
      "Saturday: 9am - 4pm",
      "Sunday: Closed",
    ],
  },
];

const socials = [
  { label: "Facebook", icon: FaFacebookF },
  { label: "Twitter", icon: FaTwitter },
  { label: "Instagram", icon: FaInstagram },
  { label: "LinkedIn", icon: FaLinkedinIn },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-50/50">
      <PageHeader
        compact
        title="Contact Us"
        description="We'd love to hear from you. Get in touch with our team."
        icon={<FaHeadset className="text-3xl" />}
        breadcrumb={[{ label: "Contact Us" }]}
      />

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="space-y-6 lg:col-span-1">
            {infoCards.map(({ icon: Icon, title, note, link, lines }) => (
              <div
                key={title}
                className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-50">
                    <Icon className="text-lg text-primary-600" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-gray-900">
                      {title}
                    </h3>
                    {note && (
                      <p className="mb-2 text-sm text-gray-500">{note}</p>
                    )}
                    {link && (
                      <a
                        href={link.href}
                        className="font-medium text-primary-600 hover:underline"
                      >
                        {link.label}
                      </a>
                    )}
                    {lines && (
                      <p className="text-sm text-gray-500">
                        {lines.map((line, index) => (
                          <Fragment key={line}>
                            {index > 0 && <br />}
                            {line}
                          </Fragment>
                        ))}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}

            <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
              <h3 className="mb-4 font-semibold text-gray-900">Follow Us</h3>
              <div className="flex items-center gap-3">
                {socials.map(({ label, icon: Icon }) => (
                  <a
                    key={label}
                    href="#"
                    aria-label={label}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-500 transition-colors hover:bg-primary-600 hover:text-white"
                  >
                    <Icon />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm lg:p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50">
                  <FaHeadset className="text-lg text-primary-600" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900">
                    Send us a Message
                  </h2>
                  <p className="text-sm text-gray-500">
                    Fill out the form and we&apos;ll get back to you
                  </p>
                </div>
              </div>

              <ContactForm />
            </div>

            <div className="mt-6 rounded-2xl border border-primary-100 bg-primary-50 p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm">
                  <FaCircleQuestion className="text-xl text-primary-600" />
                </div>
                <div>
                  <h3 className="mb-1 font-semibold text-gray-900">
                    Looking for quick answers?
                  </h3>
                  <p className="mb-3 text-sm text-gray-600">
                    Check out our Help Center for frequently asked questions
                    about orders, shipping, returns, and more.
                  </p>
                  <Link
                    href="/help"
                    className="inline-flex items-center gap-1 text-sm font-medium text-primary-600 hover:underline"
                  >
                    Visit Help Center →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
