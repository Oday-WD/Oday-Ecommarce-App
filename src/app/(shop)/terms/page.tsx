import type { Metadata } from "next";
import {
  FaCreditCard,
  FaEnvelope,
  FaFileContract,
  FaHandshake,
  FaIdCard,
  FaRotateLeft,
  FaScaleBalanced,
  FaTruck,
  FaUserCheck,
} from "react-icons/fa6";
import {
  LegalPage,
  type LegalSection,
} from "@/components/legal/LegalPage/LegalPage";

export const metadata: Metadata = { title: "Terms of Service | FreshCart" };

const sections: LegalSection[] = [
  {
    icon: FaHandshake,
    title: "Acceptance of Terms",
    items: [
      {
        text: "By accessing or using the Service, you acknowledge that you have read, understood, and agree to be bound by these Terms.",
      },
      {
        text: "If you do not agree to these Terms, you must not access or use the Service.",
      },
      {
        text: "We reserve the right to modify these Terms at any time, and such modifications shall be effective immediately upon posting.",
      },
    ],
  },
  {
    icon: FaUserCheck,
    title: "User Eligibility",
    items: [
      {
        text: "The Service is intended for users who are at least eighteen (18) years of age.",
      },
      {
        text: "By using the Service, you represent and warrant that you are of legal age to form a binding contract.",
      },
      {
        text: "If you are accessing the Service on behalf of a legal entity, you represent that you have the authority to bind such entity.",
      },
    ],
  },
  {
    icon: FaIdCard,
    title: "Account Registration",
    items: [
      {
        text: "You may be required to create an account to access certain features of the Service.",
      },
      {
        text: "You agree to provide accurate, current, and complete information during registration.",
      },
      {
        text: "You are solely responsible for maintaining the confidentiality of your account credentials.",
      },
      {
        text: "You agree to notify us immediately of any unauthorized use of your account.",
      },
    ],
  },
  {
    icon: FaCreditCard,
    title: "Orders and Payments",
    items: [
      {
        text: "All orders placed through the Service are subject to acceptance and availability.",
      },
      {
        text: "Prices are subject to change without notice prior to order confirmation.",
      },
      {
        text: "Payment must be made in full at the time of purchase through approved payment methods.",
      },
      {
        text: "We reserve the right to refuse or cancel any order at our sole discretion.",
      },
    ],
  },
  {
    icon: FaTruck,
    title: "Shipping and Delivery",
    items: [
      { text: "Shipping times are estimates only and are not guaranteed." },
      {
        text: "Risk of loss and title for items purchased pass to you upon delivery to the carrier.",
      },
      {
        text: "We are not responsible for delays caused by carriers, customs, or other factors beyond our control.",
      },
    ],
  },
  {
    icon: FaRotateLeft,
    title: "Returns and Refunds",
    items: [
      {
        text: "Our return policy allows returns within 14 days of delivery for most items.",
      },
      { text: "Products must be unused and in original packaging." },
      {
        text: "Refunds will be processed within 5-7 business days after receiving the returned item.",
      },
    ],
  },
  {
    icon: FaScaleBalanced,
    title: "Limitation of Liability",
    paragraph:
      "To the maximum extent permitted by applicable law, FreshCart shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly.",
  },
  {
    icon: FaEnvelope,
    title: "Contact Us",
    paragraph: (
      <>
        If you have any questions about these Terms, please contact us at{" "}
        <a
          href="mailto:support@freshcart.com"
          className="font-semibold text-primary-600 hover:text-primary-700 hover:underline"
        >
          support@freshcart.com
        </a>
      </>
    ),
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      updated="Last updated: February 2026"
      icon={FaFileContract}
      notice={{
        icon: FaFileContract,
        title: "Important Notice",
        text: "By accessing and using FreshCart, you accept and agree to be bound by the terms and provisions of this agreement. Please read these terms carefully before using our services.",
        tone: "amber",
      }}
      sections={sections}
      next={{ label: "View Privacy Policy", href: "/privacy" }}
    />
  );
}