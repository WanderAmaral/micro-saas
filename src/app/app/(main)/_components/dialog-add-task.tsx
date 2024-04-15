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
import { Todo } from "@prisma/client";
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

interface DialogAddTaskProps {
  children?: React.ReactNode;
  defaultValue?: Todo;
}

const DialogAddTask = ({ children }: DialogAddTaskProps) => {
  const form = useForm();

  const handleOnSubmit = form.handleSubmit((data) => {
    console.log({ data });
  });

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="ml-auto">
          {children}
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>Add Task</DialogHeader>
        <Form {...form}>
          <form className="space-y-8" onSubmit={handleOnSubmit}>
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name task</FormLabel>
                  <FormControl>
                    <Input placeholder="Task" {...field} />
                  </FormControl>
                  <FormDescription>
                    This is your public display name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" variant={'outline'}>Submit</Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default DialogAddTask;
