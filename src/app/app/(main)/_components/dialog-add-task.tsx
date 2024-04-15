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

const DialogAddTask = () => {
  const form = useForm();

  const submitFormAddTask = (data: any) => {
    console.log({ data });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="ml-auto">
          Add Task
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>Add Task</DialogHeader>
        <form onSubmit={form.handleSubmit(submitFormAddTask)}>
          <div className="flex flex-col gap-3">
            <Label>Name</Label>
            <Input placeholder="Name task" {...form.register("name")} />
            <div className="mt-5 flex justify-end">
              <DialogClose asChild>
                <Button type="submit" variant={"outline"} className="w-[40%]">
                  Add
                </Button>
              </DialogClose>
            </div>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default DialogAddTask;
