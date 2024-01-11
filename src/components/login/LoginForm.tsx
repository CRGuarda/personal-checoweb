'use client'
import { signIn } from 'next-auth/react'
import Image from 'next/image'
import { useSearchParams } from 'next/navigation'
import fullLogo from '@/assets/img/Kambia logotipo positivo.png'
import backgroundImage from '@/assets/img/Kambia ilustracion.png'
import { GoogleIcon } from '@/components/icons/Icons'

export const LoginForm = () => {
  const searchParams = useSearchParams()
  const callbackUrl = searchParams.get('callbackUrl') || '/'
  return (
    <section className='w-full h-screen text-center flex flex-col items-center justify-between'>
      <div className='flex flex-col md:flex-row pt-20 md:gap-10 items-center w-fit h-fit gap-8'>
        <Image src={fullLogo} alt={'Logotipo Kambia'} priority className='w-[300px] h-auto md:w-[550px] px-4' />
        <button
          onClick={() => signIn('google', { callbackUrl })}
          className='rounded-md px-2 text-xl md:text-lg text-center w-fit h-fit mt-4 flex gap-2 items-center p-1 bg-accent-lilac'
        >
          <GoogleIcon className='w-8' />
          <span>Sign in with Google</span>
        </button>
      </div>
      <Image
        src={backgroundImage}
        alt={'Background image'}
        className='2xl:w-[550px] h-auto w-[500px] pb-32 md:pb-24'
        priority
      />
    </section>
  )
}
