import React from "react";
import Link from "next/link";
import { signOut } from "next-auth/react";

type LogINBtnProps = {
  LogInText: string;
  handlerFunc?: () => void;
};

const LogINBtn = ({ LogInText, handlerFunc }: LogINBtnProps) => {
  const handler = (e: any) => {
    e.preventDefault();
    if (handlerFunc) {
      handlerFunc();
    } else {
      signOut({
        redirect: true,
        callbackUrl: `${window.location.origin}/signin`,
      });
    }
  };
  const handle = () => {};
  return (
    <Link
      href={"/signin"}
      className="button_navbar_special  flex_center"
      id="LogInBtn"
      onClick={handlerFunc ? handlerFunc : handle}
    >
      {LogInText == "SignIn"
        ? LogInText
        : LogInText == "SignUp"
        ? "SingUp"
        : "SignIn"}
    </Link>
  );
};

export default LogINBtn;
