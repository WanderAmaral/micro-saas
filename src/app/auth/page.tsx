import { auth } from "@/services/auth";
import { AuthForm } from "./_components/auth-form";
import { redirect } from "next/navigation";

const PageAuth = async () => {
  const session = await auth();

  if (session) {
    return redirect("/app");
  }

  return (
    <>
      <AuthForm />
    </>
  );
};

export default PageAuth;
