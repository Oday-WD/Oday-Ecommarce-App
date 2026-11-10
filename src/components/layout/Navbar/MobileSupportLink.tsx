import Link from "next/link";
import { FaHeadset } from "react-icons/fa6";
import { SheetClose } from "@/components/ui/sheet";

// help card at the bottom
export const MobileSupportLink = () => (
  <SheetClose
    render={
      <Link
        href="/contact"
        className="mx-4 mt-2 flex items-center gap-3 rounded-xl border border-gray-100 bg-gray-50 p-4 transition-colors hover:bg-primary-50"
      />
    }
  >
    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-100">
      <FaHeadset className="text-primary-600" />
    </div>
    <div>
      <div className="text-sm font-semibold text-gray-700">Need Help?</div>
      <div className="text-sm text-primary-600">Contact Support</div>
    </div>
  </SheetClose>
);
