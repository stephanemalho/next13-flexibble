import Link from 'next/link'
import AuthProviders from '../../../auth/AuthProviders'

const UserSession = ({ session }: any ) => {
  return (
    <div className="flexCenter gap-4">
    {session ? (
      <>
        UserPhoto
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


