import Link from 'next/link'
import Image from 'next/image'

const NavLinkImage = () => {
  return (
    <Link href="/">
      <Image src="/logo.svg" alt="Flexibble" width={115} height={43} />
    </Link>
  )
}

export default NavLinkImage