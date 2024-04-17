import {
    DashboardPage,
    DashboardPageHeader,
    DashboardPageHeaderTitle,
    DashboardPageMain,
  } from "@/components/dashboard/page";
  
  const Signature = () => {
    return (
      <DashboardPage>
        <DashboardPageHeader>
          <DashboardPageHeaderTitle>Assinatura</DashboardPageHeaderTitle>
        </DashboardPageHeader>
        <DashboardPageMain>Você ainda não é assinante</DashboardPageMain>
      </DashboardPage>
    );
  };
  
  export default Signature;