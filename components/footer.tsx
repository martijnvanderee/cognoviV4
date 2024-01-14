import { Logo } from "./logo";

export const Footer = () => {
  return (
    <header className="sticky top-0 z-20 bg-purple">
      <section className="mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 justify-between max-w-screen-lg mx-auto px-4 h-16 md:h-20 ">
          <Logo />
        </div>
      </section>
    </header>
  );
};
