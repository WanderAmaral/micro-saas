"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";

const CreateAcount = () => {
  const { handleSubmit, register } = useForm();

  const handleClickSubmit = (data: any) => {
    console.log({ data });
  };

  return (
    <div className="items-center flex justify-center mt-16">
      <form onSubmit={handleSubmit(handleClickSubmit)}>
        <div className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold">Criar Conta</h1>
            <p className="text-gray-500 dark:text-gray-400">
              Enter your email below to login to your account
            </p>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Nome</Label>
              <Input
                id="name"
                placeholder="Jhon Dow"
                required
                type="name"
                {...register("name")}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                placeholder="m@example.com"
                required
                type="email"
                {...register("email")}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Senha</Label>
              <Input
                id="password"
                required
                type="password"
                {...register("password")}
              />
            </div>
            <Button className="w-full hover:bg-black hover:text-white">
              Created
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateAcount;
