"use client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Todo } from "../types";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useRef } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { upsertTodo } from "../actions";
import { toast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import { SquarePen } from "lucide-react";

interface DialogAddTaskProps {
  children?: string;
  todo: Todo;
}

const DialogUpdated = ({ children, todo }: DialogAddTaskProps) => {
  const form = useForm();
  const ref = useRef<HTMLDivElement>(null);
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
        <Button>
        <SquarePen size={20}/>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>Updated task</DialogHeader>
        <Form {...form}>
          <form className="space-y-8" onSubmit={handleOnSubmit}>
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your todo title"
                      {...field}
                      defaultValue={todo.title}
                    />
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

export default DialogUpdated;
