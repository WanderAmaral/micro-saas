import { PropsWithChildren } from "react";
import {
  DashboardPage,
  DashboardPageHeader,
  DashboardPageHeaderTitle,
  DashboardPageMain,
} from "@/components/dashboard/page";

import {
  DashboardSidebar,
  DashboardSidebarFooter,
  DashboardSidebarHeader,
  DashboardSidebarHeaderTitle,
  DashboardSidebarMain,
  DashboardSidebarNav,
  DashboardSidebarNavLink,
  DashboardSidebarNavMain,
} from "@/components/dashboard/sidebar";


const Layout = ({ children }: PropsWithChildren) => {
  return (
    <DashboardPage>
      <DashboardPageHeader>
        <DashboardPageHeaderTitle>Configurações</DashboardPageHeaderTitle>
      </DashboardPageHeader>
      <DashboardPageMain>
        <div className="grid grid-cols-[16rem_1fr]">
          <aside className="border-r boder-zinc-400">
            <DashboardSidebarNav>
              <DashboardSidebarNavMain>
                <DashboardSidebarNavLink href="/settings">
                  My profile
                </DashboardSidebarNavLink>
                <DashboardSidebarNavLink href="/settings/theme">
                  Theme
                </DashboardSidebarNavLink>
                <DashboardSidebarNavLink href="/settings/billing">
                  Billing
                </DashboardSidebarNavLink>
              </DashboardSidebarNavMain>
            </DashboardSidebarNav>
          </aside>
          <div>{children}</div>
        </div>
      </DashboardPageMain>
    </DashboardPage>
  );
};

export default Layout;
