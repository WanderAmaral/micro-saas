import { PropsWithChildren } from "react";
import MainSidebar from "./_components/main-sidebar";
import { auth } from "@/services/auth";
import { redirect } from "next/navigation";

const Layout = async ({ children }: PropsWithChildren) => {
  const session = await auth();

  if (!session) {
    return redirect("/auth");
  }

  return (
    <>
      <div className="grid grid-cols-[16rem_1fr]">
        <MainSidebar user={session?.user} />
        <main>{children}</main>
      </div>
    </>
  );
};

export default Layout;
