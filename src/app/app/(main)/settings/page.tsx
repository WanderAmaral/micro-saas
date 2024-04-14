import {
  DashboardPage,
  DashboardPageHeader,
  DashboardPageHeaderTitle,
  DashboardPageMain,
} from "@/components/dashboard/page";

const SettingsPage = () => {
  return (
    <DashboardPage>
      <DashboardPageHeader>
        <DashboardPageHeaderTitle>configurações</DashboardPageHeaderTitle>
      </DashboardPageHeader>
      <DashboardPageMain>Configurações</DashboardPageMain>
    </DashboardPage>
  );
};

export default SettingsPage;
