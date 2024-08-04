import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden pt-[120px] dark:bg-gray-dark md:pt-[150px] xl:pt-[80px] 2xl:pt-[100px]"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap items-center justify-center">
            <div className="w-full px-4 lg:w-6/12 md:pb-[30px] sm:pb-[30px] xs:pb-[30px]">
              <div className="mx-auto max-w-[800px] text-center">
                <h1 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-5xl sm:leading-tight md:text-6xl md:leading-tight">
                  Create Your Own<br />
                  Professional<br />
                  Telegram Bot<br />
                </h1>
                <p className="mb-12 text-base !leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg md:text-xl">
                  Telegram Bot Manager
                </p>
              </div>
            </div>
            <div className="w-full px-4 lg:w-6/12 md:pb-[30px] sm:pb-[30px] xs:pb-[30px]">
              <div className="mx-auto max-w-[800px] text-center hidden lg:block">
                <Image src="/images/hero/bot.png" alt="hero image" width={800} height={800} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
