import {
  DashboardPage,
  DashboardPageHeader,
  DashboardPageHeaderTitle,
  DashboardPageMain,
} from "@/components/dashboard/page";
import { TodoDataTable } from "./_components/todo-data-table";
import { getUserTodos } from "./actions";

export default async function Home() {

  const todos = await getUserTodos()

  return (
    <DashboardPage>
      <DashboardPageHeader>
        <DashboardPageHeaderTitle>Tarefas</DashboardPageHeaderTitle>
      </DashboardPageHeader>
      <DashboardPageMain>
        <TodoDataTable data={todos}/>
      </DashboardPageMain>
    </DashboardPage>
  );
}
