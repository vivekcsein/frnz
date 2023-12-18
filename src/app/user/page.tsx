// "use client";
import React from "react";
import { authOptions } from "../../libs/authoptions";
import { getServerSession } from "next-auth";

type props = {
  params: {
    newuser: string | number | undefined;
  };
};
const page = async ({ params: { newuser } }: props) => {
  const session = await getServerSession(authOptions);
  // const currentPath = String(newuser).toLocaleLowerCase();

  return <div>Hello {`${session?.user.username} `}</div>;
};

export default page;
