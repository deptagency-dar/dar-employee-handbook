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
          <div className="grid grid-cols-4 gap-2">
            {user.picture && (
              <div
                
                className="col-span-1 w-8 h-8 relative"
              >
                <Image
                  src={user.picture}
                  alt={user.email || ""}
                  fill
                  className="rounded-full object-cover"
                />
              </div>
            )}

            <div className={`text-xs self-center ${user.picture ? 'col-start-2 col-span-3' : 'col-span-4'}`}>
              <p className="text-start leading-none text-gray-900 truncate block" title={user.name}>
                {user.name}
              </p>
              <p className="italic text-slate-500 truncate block" title={user.email || ""}>
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
