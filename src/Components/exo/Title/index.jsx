import React from "react";
import { UserWithInfos } from "../UserWithInfos";

export const Title = ({ title }) => {
  return (
    <div>
      <UserWithInfos user={title} />
    </div>
  );
};
