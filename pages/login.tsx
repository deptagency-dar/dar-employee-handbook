import { useEffect } from "react";
import Image from "next/image";
import deptLogo from "@images/dept-logo.svg";
import { Button } from "@components/Button";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useRouter } from "next/router";

export default () => {
  const router = useRouter();
  const { user } = useUser();

  useEffect(() => {
    user && router.push("/");
  }, [user]);

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <div className="mb-4 flex">
        <Image className="w-32" src={deptLogo} alt="Dept" />
        🇦🇷
      </div>
      <a href="/api/auth/login">
        <Button>Login</Button>
      </a>
    </div>
  );
};
