import {getProviders, signIn as signIntoProvider} from 'next-auth/react'
import Header from '@/components/Header'
import Image from 'next/image'
import {OAuthProviderType, ProviderType} from 'next-auth/providers'

interface CustomProviderType {
  providers: {
    provider: {
      name: string
      id: string
      callbackUrl: string
      signinUrl: string
      type: string
    }
  }
}

function signIn({providers}: CustomProviderType) {
  return (
    <>
      <Header/>

      <div className={'flex flex-col items-center justify-center min-h-screen py-2 -mt-56 px-14 text-center'}>
        <Image src="https://links.papareact.com/ocw" height={285} width={800} alt="" className={'w-80 h-auto object-contain'}/>

        <p className={'font-xs italic'}>
          This is not a REAL app, this is just a clone of Instagram, which is built for educational purpose only
        </p>

        <div className={'mt-40'}>
          {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <button className={'p-3 bg-blue-500 rounded-lg text-white'}
                      onClick={() => signIntoProvider(provider.id, {callbackUrl: '/'})}>
                Sign in with {provider.name}
              </button>
            </div>
          ))}
        </div>

      </div>

    </>
  )
}

export async function getServerSideProps() {
  const providers = await getProviders()

  return {
    props: {
      providers
    }
  }
}

export default signIn