import { PropsWithChildren } from "react";
import MainSidebar from "./(main)/_components/main-sidebar";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="grid grid-cols-[16rem_1fr] gap-4 h-screen">
        <MainSidebar />
        <main className="flex items-center justify-center">{children}</main>
      </div>
    </>
  );
};

export default Layout;
