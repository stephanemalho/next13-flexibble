import { footerLinks } from '@/constants'
import FooterLists from './FooterLists'

const FooterColumnLinks = () => {
  return (
    <div className="flex flex-wrap gap-12">
      <FooterLists title={footerLinks[0].title} links={footerLinks[0].links} />
      <div className="flex-1 flex flex-col gap-4">
        <FooterLists title={footerLinks[1].title} links={footerLinks[1].links} />
        <FooterLists title={footerLinks[2].title} links={footerLinks[2].links} />
      </div>
      <FooterLists title={footerLinks[3].title} links={footerLinks[3].links} />
      <div className="flex-1 flex flex-col gap-4">
        <FooterLists title={footerLinks[4].title} links={footerLinks[4].links} />
        <FooterLists title={footerLinks[5].title} links={footerLinks[5].links} />
      </div>
      <FooterLists title={footerLinks[6].title} links={footerLinks[6].links} />
    </div>
  )
}

export default FooterColumnLinks