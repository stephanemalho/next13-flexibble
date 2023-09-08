import { getCurrentUser } from '@/lib/session';
import UserSession from './navbarDetail/session/UserSession'
import Links from './navbarDetail/Links';


const NavBar = async () => {
  const session = await getCurrentUser();

  return (
    <nav className="flexBetween navbar">
      <Links />
      <UserSession session={session} />
    </nav>
  )
}

export default NavBar