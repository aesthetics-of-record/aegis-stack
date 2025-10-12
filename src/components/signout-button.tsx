"use client";

import { authClient } from "@/lib/auth-client";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

export const SignoutButton = () => {
  const router = useRouter();

	const handleSignout = async () => {
		await authClient.signOut();
		router.push("/signin");
	};

	return <Button onClick={handleSignout}>Sign Out</Button>;

};
