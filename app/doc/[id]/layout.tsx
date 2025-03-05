import RoomProvider from "@/components/RoomProvider";
import { auth } from "@clerk/nextjs/server";

import { redirect } from "next/navigation";
import React from "react";

async function DocLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { id: string };
}) {
  //   auth().protect();
  const { userId } = await auth();

  if (!userId) {
    redirect("/");
  }

  return <RoomProvider roomId={params.id}>{children}</RoomProvider>;
}

export default DocLayout;
