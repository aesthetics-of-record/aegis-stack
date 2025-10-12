import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

export default function SigninPage() {
  return (
    <div className="flex h-screen items-center justify-center">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Create an account</CardTitle>
          <CardDescription>
            Using your preferred social provider or email and password
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <Button className="w-[45%]" variant="outline">
              <FaGithub />
              Github
            </Button>
            <Button className="w-[45%]" variant="outline">
              <FcGoogle />
              Google
            </Button>
          </div>
          <div className="my-4 flex items-center gap-2">
            <Separator className="flex-1" />
            <div className="text-center text-muted-foreground text-sm">
              Or continue with
            </div>
            <Separator className="flex-1" />
          </div>
          <div className="flex flex-col gap-2">
            <Label>Email</Label>
            <Input placeholder="a@example.com" type="email" />
            <Label>Password</Label>
            <Input placeholder="********" type="password" />
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Create account</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
