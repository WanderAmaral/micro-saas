import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

import { auth } from "@/services/auth";

export default async function Page() {
  const session = await auth();

  return (
    <form>
      <Card>
        <CardHeader className="border-b border-border">
          <CardTitle>Uso do Plano</CardTitle>
          <CardDescription>
            Você está atualmente no{" "}
            <span className="font-bold uppercase">{"plano"}</span>.
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="space-y-2">
            <header className="flex items-center justify-between">
              <span className="text-muted-foreground text-sm">Your progress</span>
              <span className="text-muted-foreground text-sm">20%</span>
            </header>
            <main>
              <Progress value={20}/>
            </main>
          </div>
        </CardContent>
        <CardFooter className="flex items-center justify-between border-t border-border pt-6">
          <span>Para um maior limite, assine o PRO</span>
          <Button type="submit" variant={"outline"}>Assine por R$9/ mês</Button>
        </CardFooter>
      </Card>
    </form>
  );
}
