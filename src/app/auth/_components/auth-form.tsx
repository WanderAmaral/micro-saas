"use client";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { signIn, useSession } from "next-auth/react";
import { toast } from "@/components/ui/use-toast";
import { useEffect } from "react";
import { auth } from "@/services/auth";
import { redirect } from "next/navigation";

export  function AuthForm() {
  const { register, handleSubmit } = useForm();
  

  const handleClickSubmit = async (data: any) => {
    try {
      await signIn("email", { email: data.email, redirect: false });

      toast({
        title: "Magic Link Send",
        description: "Check Your Email",
      });
    } catch (error) {
      toast({
        title: "Email-incorreto",
        description: "Email invalido",
      });
    }
  };

  // useEffect(() => {
  //   if (session?.user) return redirect("/");
  // });

  return (
    <div className="grid md:grid-cols-2 items-center gap-6 max-w-3xl mx-auto px-4 py-6">
      <form onSubmit={handleSubmit(handleClickSubmit)}>
        <div className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold">Welcome back</h1>
            <p className="text-gray-500 dark:text-gray-400">
              Enter your email below to login to your account
            </p>
          </div>
          <div className="space-y-4">
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
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                required
                type="password"
                {...register("password")}
              />
            </div>
            <Button className="w-full">Login</Button>
            <Button
              className="w-full hover:bg-black hover:text-white"
              variant="outline"
            >
              Login with GitHub
            </Button>
            <Link
              className="inline-block w-full text-center text-sm underline"
              href="#"
            >
              Forgot your password?
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}
