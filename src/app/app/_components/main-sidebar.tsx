"use client";
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
import Logo from "@/components/logo";
import { CalendarCheck2, Settings } from "lucide-react";
import { Session } from "next-auth";
import { usePathname } from "next/navigation";
import UserDropDown from "./user-dropdown";
import { ClipboardCheck } from 'lucide-react';

type UserProps = {
  user: Session["user"];
};

const MainSidebar = ({ user }: UserProps) => {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <>
      <div className="grid grid-cols-[16rem_1fr] gap-4 h-screen">
        <DashboardSidebar>
          <DashboardSidebarHeader>
            <Logo /> Dashboard
          </DashboardSidebarHeader>
          <DashboardSidebarMain className="flex flex-col flex-grow">
            <DashboardSidebarNav>
              <DashboardSidebarNavMain>
                <DashboardSidebarNavLink href="/app" active={isActive("/app")}>
                  <CalendarCheck2 size={20} />
                  Tarefas
                </DashboardSidebarNavLink>
                <DashboardSidebarNavLink
                  href="/app/signature"
                  active={isActive("/app/settings")}
                >
                  <ClipboardCheck size={20}/>
                  Assinatura
                </DashboardSidebarNavLink>
                <DashboardSidebarNavLink
                  href="/app/settings"
                  active={isActive("/app/settings")}
                >
                  <Settings size={20} />
                  Configurações
                </DashboardSidebarNavLink>
              </DashboardSidebarNavMain>
            </DashboardSidebarNav>
            <DashboardSidebarNav className="mt-auto">
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
            <UserDropDown user={user} />
          </DashboardSidebarFooter>
        </DashboardSidebar>
      </div>
    </>
  );
};

export default MainSidebar;
