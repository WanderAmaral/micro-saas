import { auth } from "@/services/auth";
import { ProfileForm } from "./_components/form";

const SettingsPage = async () => {
  const session = await auth();

  return (
    <h1>
      <ProfileForm defaultValues={session?.user} />
    </h1>
  );
};

export default SettingsPage;
