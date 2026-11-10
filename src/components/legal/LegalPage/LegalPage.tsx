import type { ReactNode } from "react";
import Link from "next/link";
import type { IconType } from "react-icons";
import { FaArrowLeft } from "react-icons/fa6";

export interface LegalItem {
  label?: string;
  text: string;
}

export interface LegalSection {
  icon: IconType;
  title: string;
  items?: LegalItem[];
  paragraph?: ReactNode;
}

const tones = {
  primary: {
    box: "border-primary-200 bg-linear-to-r from-primary-50 to-primary-100/50",
    icon: "bg-primary-500 shadow-primary-500/25",
    title: "text-primary-900",
    text: "text-primary-800",
  },
  amber: {
    box: "border-amber-200 bg-linear-to-r from-amber-50 to-amber-100/50",
    icon: "bg-amber-500 shadow-amber-500/25",
    title: "text-amber-900",
    text: "text-amber-800",
  },
} as const;

interface LegalPageProps {
  title: string;
  updated: string;
  icon: IconType;
  notice: {
    icon: IconType;
    title: string;
    text: string;
    tone: keyof typeof tones;
  };
  sections: LegalSection[];
  next: { label: string; href: string };
}

export const LegalPage = ({
  title,
  updated,
  icon: HeaderIcon,
  notice,
  sections,
  next,
}: LegalPageProps) => {
  const tone = tones[notice.tone];
  const NoticeIcon = notice.icon;

  return (
    <main className="min-h-screen bg-linear-to-b from-gray-50 to-white">
      <div className="bg-linear-to-br from-primary-600 via-primary-500 to-primary-400 text-white">
        <div className="container mx-auto px-4 py-12 sm:py-16">
          <nav
            aria-label="Breadcrumb"
            className="mb-8 flex items-center gap-2 text-sm text-white/70"
          >
            <Link
              href="/"
              className="transition-colors duration-200 hover:text-white"
            >
              Home
            </Link>
            <span className="text-white/40">/</span>
            <span className="font-medium text-white">{title}</span>
          </nav>

          <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-white/20 shadow-2xl shadow-primary-900/30 ring-1 ring-white/30 backdrop-blur-sm">
              <HeaderIcon className="text-4xl" />
            </div>
            <div>
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                {title}
              </h1>
              <p className="mt-2 text-lg text-white/80">{updated}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div
          className={`mb-12 rounded-3xl border p-6 shadow-sm sm:p-8 ${tone.box}`}
        >
          <div className="flex items-start gap-4">
            <div
              className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl shadow-lg ${tone.icon}`}
            >
              <NoticeIcon className="text-xl text-white" />
            </div>
            <div>
              <h2 className={`mb-2 text-lg font-bold ${tone.title}`}>
                {notice.title}
              </h2>
              <p className={`leading-relaxed ${tone.text}`}>{notice.text}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
          {sections.map(
            ({ icon: Icon, title: sectionTitle, items, paragraph }, index) => (
              <section
                key={sectionTitle}
                className="group rounded-3xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:border-primary-100 hover:shadow-lg sm:p-8"
              >
                <div className="mb-5 flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-linear-to-br from-primary-100 to-primary-50 transition-all duration-300 group-hover:from-primary-500 group-hover:to-primary-400">
                    <Icon className="text-xl text-primary-600 transition-colors duration-300 group-hover:text-white" />
                  </div>
                  <div>
                    <span className="text-xs font-bold tracking-wider text-primary-600 uppercase">
                      Article {index + 1}
                    </span>
                    <h2 className="text-xl font-bold text-gray-900">
                      {sectionTitle}
                    </h2>
                  </div>
                </div>

                {items && (
                  <div className="space-y-3">
                    {items.map(({ label, text }, itemIndex) => (
                      <div
                        key={text}
                        className="flex items-start gap-3 leading-relaxed text-gray-600"
                      >
                        <span className="mt-0.5 shrink-0 rounded-md bg-primary-50 px-2 py-0.5 text-xs font-bold text-primary-500">
                          {index + 1}.{itemIndex + 1}
                        </span>
                        <p className="text-sm">
                          {label && (
                            <strong className="text-gray-800">{label}: </strong>
                          )}
                          {text}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                {paragraph && (
                  <p className="text-sm leading-relaxed text-gray-600">
                    {paragraph}
                  </p>
                )}
              </section>
            ),
          )}
        </div>

        <div className="mt-12 border-t border-gray-200 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-xl bg-gray-100 px-6 py-3 font-medium text-gray-700 transition-all duration-200 hover:bg-gray-200"
            >
              <FaArrowLeft className="text-sm" />
              Back to Home
            </Link>
            <Link
              href={next.href}
              className="inline-flex items-center gap-2 rounded-xl bg-primary-500 px-6 py-3 font-medium text-white shadow-lg shadow-primary-500/25 transition-all duration-200 hover:bg-primary-600"
            >
              {next.label}
              <span className="text-lg">→</span>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};
