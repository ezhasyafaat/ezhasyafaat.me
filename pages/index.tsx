import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillFacebook
} from 'react-icons/ai'
import { BsFillMoonStarsFill } from 'react-icons/bs'
import { useState } from 'react'
import ezhasyafaat from '../public/ezhasyafaat.jpg'
import purwantara from '../public/Purwantara.png'
import beemall from '../public/Beemall.png'
import duaempat from '../public/Duaempat.png'
import qrindo from '../public/QRINDO.png'

const Home = () => {
  const [darkMode, setDarkMode] = useState(true)
  const age = new Date().getFullYear() - 2002

  return (
    <div className={darkMode ? 'dark' : 'light'}>
      <Head>
        <title>Ezha Syafaat</title>
        <meta name='description' content='Portofolio website' />
        <meta name='author' content='Muh Ezha Syafaat' />
      </Head>
      <main className='bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40'>
        <section className='main-h-screen'>
          <nav className='py-10 mb-12 flex justify-between dark:text-white'>
            <h1 className='font-lexend text-xl italic'>Ezha Syafaat</h1>
            <ul className='flex item-center'>
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className='cursor-pointer text-2xl' 
              />
              </li>
              <li>
                <a className="bg-gray-900 dark:bg-white dark:text-gray-900 text-white px-4 py-2 border-none rounded-md ml-8 font-lexend" target="_blank" href="#">
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className='text-center p-10 py-10'>
            <h2 className='text-3xl md:text-5xl py-2 text-gray-900 dark:text-white px-4 py-2'>
              Ezha Syafaat
            </h2>
            <h3 className='text-md md:text-2xl py-2 dark:text-white'>
              Back-end Developer
            </h3>
            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-40 h-40 relative overflow-hidden mt-5 md:h-40 md:w-40">
              <Image src={ezhasyafaat} layout="fill" objectFit="cover" alt='profile-picture'/>
            </div>
            <p className="text-md py-5 leading-8 text-gray-900 dark:text-gray-200 max-w-2xl mx-auto md:text-xl text-left">
              I&apos;am a Web Developer. I&apos;am also an open source enthusiast. I love to contribute and sharing knowledge through open source project. Im so happy if what I do can be useful for others in the future. Outside of programming, i also enjoy playing music, especially guitar.
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-300">
              <a href="https://www.linkedin.com/in/zhaasyft/">
                <AiFillLinkedin />
                <p className='text-sm'>LinkedIn</p>
              </a>
              <a href="https://github.com/ezhasyafaat">
                <AiFillGithub />
                <p className='text-sm'>Github</p>
              </a>
              <a href="https://facebook.com/zhaasyft">
                <AiFillFacebook />
                <p className='text-sm'>Facebook</p>
              </a>
            </div>
          </div>
        </section>
        <section className='py-10'>
          <div>
            <h3 className="text-3xl py-1 dark:text-white font-lexend">Portofolio</h3>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/8 flex-1 ">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={purwantara}
                alt='purwantara'
              />
            </div>
            <div className="basis-1/8 flex-1 ">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={beemall}
                alt='beemall'
              />
            </div>
            <div className="basis-1/8 flex-1 ">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={duaempat}
                alt='duaempat'
              />
            </div>
            <div className="basis-1/8 flex-1 ">
              <Image
                className="rounded-lg object-cover object-fill"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={qrindo}
                alt='qrindo'
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Home