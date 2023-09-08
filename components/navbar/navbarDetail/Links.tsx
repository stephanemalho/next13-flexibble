import React from 'react'
import NavLinkImage from './NavLinkImage'
import NavLinkLists from './NavLinkLists'

const Links = () => {
  return (
    <div className="flex-1 flexStart gap-10">
        <NavLinkImage />
        <NavLinkLists />
      </div>
  )
}

export default Links