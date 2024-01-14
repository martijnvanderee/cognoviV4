import Link from "next/link";

export const Logo = () => {
  return (
    <>
      {/* logo naam small*/}
      {/* <Link href="/">
        <a className="relative my-auto md:text-center hidden sm:block md:flex md:mx-auto focus:outline-none focus:ring focus:border-blue-300">
          <div className="my-auto md:text-center">
            <div className="my-auto md:text-center">
              {" "}
              <h2 className="text-4xl text-white md:text-5xl  font-black ">
                Science<strong className="text-yellow">Geek</strong>
              </h2>
              <div className="hidden md:block text-almostWhite">
                het beste wetenschappelijke nieuws
              </div>
            </div>
          </div> */}

      {/* logo */}
      {/* <div className="ml-2 hidden md:inline-block ">
            <img
              className="h-16 cursor-pointer "
              alt="logo science geek"
              src={`/sciencegeeklogo.png/?nf_resize=fit&h=${4 * 32}`}
            />
          </div>
        </a>
      </Link> */}

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
              style={{ minWidth: "34px" }}
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
