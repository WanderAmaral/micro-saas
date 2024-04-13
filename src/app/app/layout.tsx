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
import { PropsWithChildren } from "react";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="grid grid-cols-[16rem_1fr] gap-4 ">
        <DashboardSidebar>
          <DashboardSidebarHeader>
            <h1>DashBoard</h1>
          </DashboardSidebarHeader>
          <DashboardSidebarMain>
            <DashboardSidebarNav>
              <DashboardSidebarNavMain>
                <DashboardSidebarNavLink href="/">
                  Tarefas
                </DashboardSidebarNavLink>
                <DashboardSidebarNavLink href="/app/settings">
                  Configurações
                </DashboardSidebarNavLink>
              </DashboardSidebarNavMain>
            </DashboardSidebarNav>
            <DashboardSidebarNav>
              <DashboardSidebarHeaderTitle>
                Links extras
              </DashboardSidebarHeaderTitle>
              <DashboardSidebarNavMain>
                <DashboardSidebarNavLink href="/">
                  Precisa de ajuda?
                </DashboardSidebarNavLink>
                <DashboardSidebarNavLink href="/">Site</DashboardSidebarNavLink>
              </DashboardSidebarNavMain>
            </DashboardSidebarNav>
          </DashboardSidebarMain>
          <DashboardSidebarFooter>
            <p>User</p>
          </DashboardSidebarFooter>
        </DashboardSidebar>
        <main>{children}</main>
      </div>
    </>
  );
};

export default Layout;
