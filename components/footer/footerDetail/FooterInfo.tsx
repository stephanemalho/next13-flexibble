import React from 'react'
import FooterDescription from './FooterDescription'
import FooterColumnLinks from './FooterColumnLinks'

const FooterInfo = () => {
  return (
    <div className="flex flex-col gap-12 w-full">
      <FooterDescription />
      <FooterColumnLinks />
    </div>
  )
}

export default FooterInfo