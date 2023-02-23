import { useFormattedDate } from "@hooks/useFormattedDate";
import React from "react";
import { TweetProps, UserData } from "@types";
import { ColorType, PickVerificationIcon } from "@components/PickVerificationIcon";

export function TweetMetadata({
  color,
  ...props
}: { user: UserData } & ColorType) {
  const formattedDate = useFormattedDate(props.user.createdAt!);

  return (
    <>
      <div className="flex">
        <p className="flex items-center text-base font-medium leading-6 text-gray-800 dark:text-white">
          {props.user.name || props.user.username}
          <PickVerificationIcon color={color} />
          <span className="ml-1 text-sm font-medium leading-5 text-gray-400 transition duration-150 ease-in-out group-hover:text-gray-300">
            @{props.user.username} · {formattedDate}
          </span>
        </p>
      </div>
    </>
  );
}


