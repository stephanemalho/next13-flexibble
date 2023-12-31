import Link from 'next/link'
import { NavLinks } from '@/constants'

const NavLinkLists = () => {
  return (
    <ul className=" xl:flex hidden text-small gap-7">
      {NavLinks.map((link) => (
        <li key={link.key}><Link href={link.href} key={link.key}>{link.text}</Link></li>
      ))}
    </ul>
  )
}

export default NavLinkLists