import { cn } from "@/lib/utils";

export type DashboardPageGenericProps<T = unknown> = {
  children: React.ReactNode;
  clasName?: string;
} & T;

export function DashboardPage({
  children,
  clasName,
}: DashboardPageGenericProps) {
  return <section className={cn(["", clasName])}>{children}</section>;
}

export function DashboardPageHeader({
  children,
  clasName,
}: DashboardPageGenericProps) {
  return (
    <header
      className={cn([
        "px-6 py-3 border-b border-zinc-200 h-16 flex items-center",
        clasName,
      ])}
    >
      {children}
    </header>
  );
}

export function DashboardPageHeaderTitle({
  children,
  clasName,
}: DashboardPageGenericProps) {
  return <h1 className={cn([" font-light text-lg", clasName])}>{children}</h1>;
}

export function DashboardPageHeaderNav({
  children,
  clasName,
}: DashboardPageGenericProps) {
  return <nav className={cn(["", clasName])}>{children}</nav>;
}

export function DashboardPageMain({
  children,
  clasName,
}: DashboardPageGenericProps) {
  return <main className={cn(["px-6 py-3", clasName])}>{children}</main>;
}
