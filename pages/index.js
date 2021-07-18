import Head from 'next/head'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-around min-h-screen py-2">
      <Head>
        <title>PDF365 - Coming Soon</title>
        {/*<link rel="icon" href="/favicon.ico" />*/}
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          <span className="text-blue-500">
            PDF365
          </span>
          <div className="text-2xl">A collection of powerful PDF tools</div>
        </h1>

        <p className="mt-3 text-xl">
          We will be celebrating the launch of our new site very soon!
        </p>

        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
          <img src="./undraw_online_wishes_dlmr.svg" alt="celebrate" className="w-96"/>
        </div>
      </main>

      <footer className="flex items-center justify-center w-full h-24">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Copyright © 2021 PDF365. All Rights Reserved.
        </a>
      </footer>
    </div>
  )
}
