import Link from "next/link";

import { cn } from "@/lib/utils";

export type DashboardSidebarGenericProps<T = unknown> = {
  children: React.ReactNode;
  className?: string;
} & T;

export function DashboardSidebar({
  className,
  children,
}: DashboardSidebarGenericProps) {
  return (
    <aside
      className={cn([
        "border-r border-border flex flex-col bg-secondary/5 space-y-6",
        className,
      ])}
    >
      {children}
    </aside>
  );
}

export function DashboardSidebarHeader({
  className,
  children,
}: DashboardSidebarGenericProps) {
  return (
    <header
      className={cn([
        "px-6 h-16 flex items-center border-b border-border gap-2",
        className,
      ])}
    >
      {children}
    </header>
  );
}

export function DashboardSidebarHeaderTitle({
  className,
  children,
}: DashboardSidebarGenericProps) {
  return <h2 className={cn(["", className])}>{children}</h2>;
}

export function DashboardSidebarMain({
  className,
  children,
}: DashboardSidebarGenericProps) {
  return <main className={cn(["pt-4 px-3 ", className])}>{children}</main>;
}

export function DashboardSidebarNav({
  className,
  children,
}: DashboardSidebarGenericProps) {
  return <nav className={cn(["", className])}>{children}</nav>;
}

export function DashboardSidebarNavHeader({
  className,
  children,
}: DashboardSidebarGenericProps) {
  return <header className={cn(["", className])}>{children}</header>;
}

export function DashboardSidebarNavHeaderTitle({
  className,
  children,
}: DashboardSidebarGenericProps) {
  return (
    <div
      className={cn([
        "text-[0.6rem] uppercase text-muted-foreground ml-3",
        className,
      ])}
    >
      {children}
    </div>
  );
}

export function DashboardSidebarNavMain({
  className,
  children,
}: DashboardSidebarGenericProps) {
  return <main className={cn(["flex flex-col gap-1", className])}>{children}</main>;
}

type DashboardSidebarNavLinkProps = {
  href: string;
  active?: boolean;
};

export function DashboardSidebarNavLink({
  className,
  children,
  href,
  active,
}: DashboardSidebarGenericProps<DashboardSidebarNavLinkProps>) {
  return (
    <Link
      href={href}
      className={cn([
        "flex items-center text-xs px-3 py-2 rounded-md gap-2 hover:text-black hover:bg-zinc-200 ",
        active && "bg-zinc-200",
        className,
      ])}
    >
      {children}
    </Link>
  );
}

export function DashboardSidebarFooter({
  className,
  children,
}: DashboardSidebarGenericProps) {
  return (
    <footer className={cn(["p-6 mt-auto border-t border-border", className])}>
      {children}
    </footer>
  );
}
