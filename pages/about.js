/* eslint-disable react/no-unknown-property */
import Link from 'next/link'
import CardSectionOne from '../components/Card/CardSectionOne'
import CardTwo from '../components/Card/CardTwo'
import CardButton from '../components/Card/CardButton'

export default function Home() {
  return (
    <div className="header">
      <header>
        <nav className="navbar navbar-expand-lg shadow-md py-2 bg-white relative flex items-center w-full justify-between">
          <div className="px-6 w-full flex flex-wrap items-center justify-between">
            <div className="items-center">
                <Link href="/">
                    <a className='font-bold text-xl'>TextFolio</a>
                </Link>
            </div>
            <div className='items-center grid gap-5 grid-cols-2'>
              <Link href="/read">
                <a>
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                </a>
              </Link>
              <Link href="/about">
                <a>
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                    </svg>
                  </div>
                </a>
              </Link>
            </div>
          </div>
        </nav>
      </header>
        <div className="text-center bg-gray-100 text-gray-800 py-20 px-6">
            <h1 className="text-6xl font-bold mt-0 mb-6">About</h1>
        </div>
        <CardSectionOne>
            <CardTwo>

            </CardTwo>
        </CardSectionOne>
    </div>
  )
}
