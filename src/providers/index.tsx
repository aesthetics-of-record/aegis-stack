"use client";

import { useEffect, useState } from "react";
import { TRPCReactProvider } from "@/trpc/client";

type ProvidersProps = {
  children: React.ReactNode;
};

export const Providers = ({ children }: ProvidersProps) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return <TRPCReactProvider>{children}</TRPCReactProvider>;
};
