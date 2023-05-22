import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-yellow-500 before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-400 after:via-blue-800 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]"></div>
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <div className="flex flex-col w-full justify-center lg:static lg:h-auto lg:w-auto lg:bg-none">
          <h1 className="text-4xl text-emerald-700 font-bold underline">
            Redux Toolkit - Examples
          </h1>
          <Link href="/example1" className="p-2 w-28 hover:text-yellow-500">
            example-1
          </Link>
          <Link href="/example2" className="p-2 w-28 hover:text-yellow-500">
            example-2
          </Link>
        </div>
      </div>
    </main>
  );
}
