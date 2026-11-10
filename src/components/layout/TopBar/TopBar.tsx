import { getSession } from "@/lib/auth-session";
import { TopBarContact } from "./TopBarContact";
import { TopBarPromo } from "./TopBarPromo";
import { TopBarUser } from "./TopBarUser";

export const TopBar = async () => {
  const session = await getSession();

  return (
    <div className="hidden border-b border-gray-100 text-sm lg:block">
      <div className="container mx-auto px-4">
        <div className="flex h-10 items-center justify-between">
          <TopBarPromo />

          <div className="flex items-center gap-6">
            <TopBarContact />
            <span className="h-4 w-px bg-gray-200" />
            <TopBarUser user={session?.user} />
          </div>
        </div>
      </div>
    </div>
  );
};