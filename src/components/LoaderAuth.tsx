"use client";

import React, { useTransition } from "react";
import Loader from "./Loader";

const LoaderAuth = ({ children }: { children: React.ReactNode }) => {
  const [isPending] = useTransition();

  if (isPending) return <Loader />;

  return children;
};

export default LoaderAuth;
