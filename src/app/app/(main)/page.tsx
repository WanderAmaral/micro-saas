import {
  DashboardPage,
  DashboardPageHeader,
  DashboardPageHeaderTitle,
  DashboardPageMain,
} from "@/components/dashboard/page";
import { TodoDataTable } from "./_components/todo-data-table";

export default function Home() {
  return (
    <DashboardPage>
      <DashboardPageHeader>
        <DashboardPageHeaderTitle>Tarefas</DashboardPageHeaderTitle>
      </DashboardPageHeader>
      <DashboardPageMain>
        <TodoDataTable />
      </DashboardPageMain>
    </DashboardPage>
  );
}
