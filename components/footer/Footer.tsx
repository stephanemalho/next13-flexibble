import React from 'react'
import FooterCopyRight from './footerDetail/FooterCopyRight'
import FooterInfo from './footerDetail/FooterInfo'

const Footer = () => {
  return (
    <footer className="flexStart footer">
      <FooterInfo />
      <FooterCopyRight />
    </footer>
  )
}

export default Footer