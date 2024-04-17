import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { RocketIcon, LogOut, Settings } from "lucide-react";
import { Session } from "next-auth";
import { signOut } from "next-auth/react";
import Link from "next/link";

type UserDropdownProps = {
  user: Session["user"];
};

const UserDropDown = ({ user }: UserDropdownProps) => {
  if (!user) return;

  const firstNameUser = user.name?.["0"];

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="link"
            className="relative h-8 flex items-center justify-between w-full space-x-2 !px-0"
          >
            <Avatar className="h-8 w-8">
              <AvatarImage
                src={user.image as string}
                alt={user.name as string}
              />
              <AvatarFallback>{firstNameUser}</AvatarFallback>
            </Avatar>

            <div className="flex flex-col flex-1 space-y-1 text-left">
              {user.name && (
                <p className="text-base font-semibold">{user.name}</p>
              )}
              <p className=" text-xs leading-none">{user.email}</p>
            </div>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className=" w-56 ">
          <DropdownMenuLabel className="font-normal">
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium leading-none">{user.name}</p>
              <p className="text-xs leading-none text-muted-foreground">
                {user.email}
              </p>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <Link href={"/app/settings"}>
              <DropdownMenuItem className="gap-2  hover:border hover:border-zinc-200">
                <Settings size={16} />
                Configurações
              </DropdownMenuItem>
            </Link>
            <DropdownMenuItem className="gap-2 hover:border hover:border-zinc-200">
              <RocketIcon size={16} />
              Upgrade
            </DropdownMenuItem>
          </DropdownMenuGroup>

          <DropdownMenuItem
            onClick={() => signOut()}
            className="gap-2 cursor-pointer hover:border hover:border-zinc-200 "
          >
            <LogOut size={16} />
            Log out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default UserDropDown;
