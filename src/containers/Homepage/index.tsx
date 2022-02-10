import Image from "next/image";
import Link from "next/link";

export default function HomeContainer() {
  return (
    <section className="bg-gray-50 h-screen flex flex-column items-center justify-center">
      <div className="container">
        <div className="flex flex-row items-center justify-center">
          <Image
            src={"/assets/images/me.png"}
            alt="Picture of the author"
            width={256}
            height={256}
          />
        </div>

        <div className="text-center">
          <h1 className="font-sans text-3xl md:text-5xl lg:text-5xl font-bold mt-2 text-black antialiased">
            Hey, I'm Iqbal Fasri! 👋
          </h1>
          <p className="text-1xl md:text-2xl text-center my-4 md:my-6 text-gray-500 antialiased">
            Frontend Developer.
          </p>
        </div>

        <div className="max-w-sm mx-auto text-center">
          <Link href="https://twitter.com/baaalfs" passHref>
            <a
              target="__blank"
              className="mx-1 md:mx-2 py-1 px-2 rounded bg-blue-200 hover:bg-blue-300 text-blue-800"
            >
              Twitter
            </a>
          </Link>
          <Link href="https://github.com/iqbalfasri" passHref>
            <a
              target="__blank"
              className="mx-1 md:mx-2 py-1 px-2 rounded bg-gray-300 hover:bg-gray-200 text-black"
            >
              Github
            </a>
          </Link>
          <Link href="https://id.linkedin.com/in/iqbalfasri" passHref>
            <a
              target="__blank"
              className="mx-1 md:mx-2 py-1 px-2 rounded bg-blue-600 hover:bg-blue-800 text-white"
            >
              Linkedin
            </a>
          </Link>
        </div>

        <div className="max-w-sm mx-auto text-center mt-4">
          <Link href="https://docs.iqbalfasri.dev/" passHref>
            <a
              target="__blank"
              className="mx-1 md:mx-2 py-1 px-2 rounded bg-gray-600 hover:bg-gray-800 text-white"
            >
              Dokumentasi Pribadi
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
}
