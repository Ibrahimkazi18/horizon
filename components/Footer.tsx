"use client"
import { logoutAccount } from '@/lib/actions/user.action'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

const Footer = ({user, type = 'desktop'}: FooterProps) => {

  const router = useRouter()

  const handleLogoutAccount = async () => {
    const loggedOut = await logoutAccount()

    if(loggedOut)  router.push('/sign-in')
  }

  return (
    <footer className='footer'>
        <div className={type === 'desktop' ? 'footer_name' : 'footer_name-mobile'}>
            <p className='text-xl font-bold text-gray-700'>
                {user?.name[0]}
            </p>
        </div>

            <div className={type === 'desktop' ? 'footer_email' : 'footer_email-mobile'}>
                <h1 className='text-14 truncate text-gray-700 font-semibold'>
                    {user?.name}
                </h1>
                <p className='text-14 font-normal truncate text-gray-600'>
                    {user?.email}
                </p>
            </div>

            <div className='footer_image' onClick={handleLogoutAccount}>
                <Image 
                    src="/icons/logout.svg"
                    alt='logout'
                    fill
                />
            </div>
        
    </footer>
  )
}

export default Footer