import { PropsWithChildren } from "react";
import {
  DashboardPage,
  DashboardPageHeader,
  DashboardPageHeaderTitle,
  DashboardPageMain,
} from "@/components/dashboard/page";
import SettingsSidebar from "./_components/settings-sidebar";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <DashboardPage>
      <DashboardPageHeader>
        <DashboardPageHeaderTitle>Configurações</DashboardPageHeaderTitle>
      </DashboardPageHeader>
      <DashboardPageMain clasName="py-0">
        <div className="grid grid-cols-[16rem_1fr] gap-5">
          <SettingsSidebar />
          <div className="p-3">{children}</div>
        </div>
      </DashboardPageMain>
    </DashboardPage>
  );
};

export default Layout;
