import Link from 'next/link';

export const Logo = () => {
  return (
    <>
      {/* logo naam big*/}
      <div className="flex">
        <Link href="/">
          <a className="my-auto focus:outline-none focus:ring focus:border-blue-300">
            <h2 className="text-2xl text-white md:text-5xl  font-black ">
              Science<strong className="text-yellow">Geek</strong>
            </h2>
            <span className="hidden md:block text-almostWhite">
              het beste wetenschappelijke nieuws
            </span>
          </a>
        </Link>

        {/* logo big*/}
        <Link href="/" passHref>
          <a className="ml-2 focus:outline-none focus:ring focus:border-blue-300 hidden md:block">
            <img
              style={{ minWidth: '34px' }}
              className="cursor-pointer h-16"
              alt="logo science geek"
              src={`/sciencegeeklogo.png/?nf_resize=fit&h=${4 * 32}`}
            />
          </a>
        </Link>
      </div>
    </>
  );
};
