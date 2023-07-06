import Link from 'next/link'
import AuthProviders from '../../../auth/AuthProviders'
import Image from 'next/image'

const UserSession = ({ session }: any) => {
  return (
    <div className="flexCenter gap-4">
      {session?.user ? (
        <>
          {session?.user.image && (
            <Image
              src={session?.user.image}
              alt={session.user.name}
              width={40}
              height={40}
              className="rounded-full"
            />)}
          <Link href="/create-project">
            ShareWork
          </Link>
        </>
      ) :
        <AuthProviders />
      }
    </div>
  )
}

export default UserSession


