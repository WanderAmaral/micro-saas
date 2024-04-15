"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Todo } from "../types";
import { upsertTodo } from "../actions";
import { useRef } from "react";
import { upsertTodoSchema } from "../schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { toast } from "@/components/ui/use-toast";

interface DialogAddTaskProps {
  children?: React.ReactNode;
  defaultValue?: Todo;
}

const DialogAddTask = ({ children }: DialogAddTaskProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const form = useForm({
    resolver: zodResolver(upsertTodoSchema),
  });
  const router = useRouter();

  const handleOnSubmit = form.handleSubmit(async (data) => {
    await upsertTodo(data);
    router.refresh();

    ref.current?.click();

    toast({
      title: "Sucess",
      description: "Your todo has been updates succesfully",
    });
  });

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div
          className="font-medium border rounded-md w-[130px] flex items-center justify-center hover:bg-black hover:text-white cursor-pointer"
          ref={ref}
        >
          {children}
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>Add Task</DialogHeader>
        <Form {...form}>
          <form className="space-y-8" onSubmit={handleOnSubmit}>
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your todo title" {...field} />
                  </FormControl>
                  <FormDescription>
                    This will be the publicly displayed name for the task.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" variant={"outline"}>
              Submit
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default DialogAddTask;
