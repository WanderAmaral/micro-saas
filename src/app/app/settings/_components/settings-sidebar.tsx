"use client";
import {
  DashboardSidebarNav,
  DashboardSidebarNavLink,
  DashboardSidebarNavMain,
} from "@/components/dashboard/sidebar";
import { DollarSign, SunMoon, User } from "lucide-react";
import { usePathname } from "next/navigation";

const SettingsSidebar = () => {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <>
      <aside className="border-r boder-zinc-400  h-screen py-4 pr-3">
        <DashboardSidebarNav>
          <DashboardSidebarNavMain>
            <DashboardSidebarNavLink
              href="/app/settings"
              active={isActive("/app/settings")}
            >
              <User size={18} />
              My profile
            </DashboardSidebarNavLink>
            <DashboardSidebarNavLink
              href="/app/settings/theme"
              active={isActive("/app/settings/theme")}
            >
              <SunMoon size={18} />
              Theme
            </DashboardSidebarNavLink>
            <DashboardSidebarNavLink
              href="/app/settings/billing"
              active={isActive("/app/settings/billing")}
            >
              <DollarSign size={18}/>
              Billing
            </DashboardSidebarNavLink>
          </DashboardSidebarNavMain>
        </DashboardSidebarNav>
      </aside>
    </>
  );
};

export default SettingsSidebar;
