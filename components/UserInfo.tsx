import { useUser } from "@auth0/nextjs-auth0/client";
import Image from "next/image";
import { Button } from "./Button";
import { useState } from "react";

function UserInfo() {
  const { user } = useUser();
  const [showChildren, setShowChildren] = useState(false);

  if (!user) return null;

  return (
    <div className="relative">
      <Button
        className="w-full"
        onClick={() => setShowChildren(!showChildren)}
        onBlur={() => setShowChildren(false)}
      >
        {user.name ? (
          <>
            {user.picture && (
              <div
                style={{
                  minWidth: 30,
                  width: 30,
                  height: 30,
                  position: "relative",
                }}
                className="mr-2"
              >
                <Image
                  src={user.picture}
                  alt=""
                  fill
                  className="rounded-full object-cover"
                />
              </div>
            )}

            <div className="text-xs">
              <p className="text-start leading-none text-gray-900">
                {user.name}
              </p>
              <p className="italic text-slate-500">{user.email}</p>
            </div>
          </>
        ) : (
          <p className="font-serif text-sm italic text-slate-500">
            {user.email}
          </p>
        )}
      </Button>
      {showChildren && (
        <ul className="absolute right-0 bottom-[calc(100%+0.5rem)] list-none rounded-md bg-white p-2 pl-2 shadow-md">
          <li>
            <a className="text-end text-sm" href="/api/auth/logout">
              Logout
            </a>
          </li>
        </ul>
      )}
    </div>
  );
}

export default UserInfo;
