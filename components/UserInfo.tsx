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
        className="w-full px-3"
        onClick={() => setShowChildren(!showChildren)}
        onBlur={() => setShowChildren(false)}
      >
        {user.name ? (
          <div className="inline-flex items-center">
            {user.picture && (
              <div className="relative mr-2 h-8 w-8">
                <Image
                  src={user.picture}
                  alt={user.email || ""}
                  fill
                  className="rounded-full object-cover"
                />
              </div>
            )}

            <div className="w-36 text-xs flex flex-col items-start">
              <p
                className="block truncate text-start leading-none text-gray-900"
                title={user.name}
              >
                {user.name}
              </p>
              <p
                className="block truncate italic text-slate-500"
                title={user.email || ""}
              >
                {user.email}
              </p>
            </div>
          </div>
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
