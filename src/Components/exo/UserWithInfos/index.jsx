import React from 'react';

export const UserWithInfos = ({user}) => {
  return (
    <div>
      <span>{user.firstName}</span>
      <span>{user.lastName}</span>
    </div>
  )
}
