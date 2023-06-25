import React from 'react'
import FooterColumnLinks from './footerDetail/FooterColumnLinks'
import FooterDescription from './footerDetail/FooterDescription'
import FooterCopyRight from './footerDetail/FooterCopyRight'

const Footer = () => {
  return (
    <footer className="flexStart footer">
      <div className="flex flex-col gap-12 w-full">
        <FooterDescription />
        <FooterColumnLinks />
      </div>
      <FooterCopyRight />
    </footer>
  )
}

export default Footer