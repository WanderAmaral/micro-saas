import { PropsWithChildren } from "react";
import MainSidebar from "./_components/main-sidebar";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="grid grid-cols-[16rem_1fr]">
        <MainSidebar />
        <main>{children}</main>
      </div>
    </>
  );
};

export default Layout;
