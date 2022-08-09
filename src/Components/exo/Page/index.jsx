import React from 'react'
import { Title } from '../Title'

export const Page = ({user}) => {
  return (
    <div>
      <Title title={user} />
    </div>
  )
}
