import { getCurrentUser } from '@/lib/session';
import NavLinkImage from './navbarDetail/NavLinkImage'
import NavLinkLists from './navbarDetail/NavLinkLists'
import UserSession from './navbarDetail/session/UserSession'


const NavBar = async () => {
  const session = await getCurrentUser();

  return (
    <nav className="flexBetween navbar">
      <div className="flex-1 flexStart gap-10">
        <NavLinkImage />
        <NavLinkLists />
      </div>
      <UserSession session={session} />
    </nav>
  )
}

export default NavBar