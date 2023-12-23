// checked page

import { infoAbout } from '@/lib/const'
import Network from '@/components/icons/network'

export default function About() {
  return (
    <>
      <section className="px-2 bg-gray min-h-screen mb-6">
        <h2 className="mx-auto font-inter  text-6xl font-semibold text-gray-dark pt-32 block text-center">
          About the ex.iphones.
        </h2>
        <div className="flex items-center justify-center gap-x-8 text-center my-6 w-max mx-auto">
          <figure className="flex justify-center items-center gap-x-4">
            <img src="/about-profile.png" alt="Teams Lynx cop" />
            <figcaption className="font-semibold font-inter text-gray-dark">
              Feyz ibrahim
            </figcaption>
          </figure>
          <h5 className="font-inter text-gray-dark px-4 py-2 border-l-2 border-gray-dark border-opacity-30">
            20 Septiembre 2023
          </h5>
        </div>
        <h5 className="px-6  max-w-5xl mx-auto text-center  font-inter  text-gray-dark">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. Nulla
          at congue diam, at dignissim turpis. Ut vehicula sed velit a faucibus. In feugiat
          vestibulum velit vel pulvinar.
        </h5>
        <figure className="w-full flex justify-center items-center my-6">
          <img src="/about-iphone.png" alt="Lynx description tags dev" />
        </figure>
        <div className="flex  justify-center ">
          <div>
            {infoAbout.map((inf) => (
              <article className="px-6 py-10 max-w-5xl mx-auto ">
                <h2 className="font-inter font-semibold text-gray-dark text-2xl mb-4 text-center">
                  {inf.title}
                </h2>
                <p className="font-inter text-balance font-normal text-gray-dark text-center md:text-left">
                  {inf.content}
                </p>
              </article>
            ))}
          </div>
          <div className=" flex-col hidden md:flex">
            <h6 className="text-gray-dark mt-6">SHARE</h6>
            <Network
              logocolum="flex-col"
              colorfacebook="text-gray-dark"
              bgfacebook="text-gray-dark"
            />
          </div>
        </div>

        <div className=" border m-10 border-black p-6 md:text-justify max-w-6xl mx-auto text-4xl font-inter font-medium leading-[64px] tracking-[1px] text-gray-dark gradient-left-to-right">
          <p className="italic w-full max-w-fit-content  md:p-8">
            "Lorem ipsum dolor sit amet, consectetur adipiscing
          </p>
          <p className="md:px-8 italic">elit . Curabitur ac ultrices odio".</p>
        </div>

        <article className=" flex  flex-col md:gap-11 py-10 max-w-5xl mx-auto">
          <h2 className="font-inter text-center md:text-left font-semibold text-gray-dark text-2xl mb-4">
            Where do we stand now
          </h2>
          <p className="font-inter text-balance text-center md:text-left  font-normal text-gray-dark ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio.
            Nulla at congue diam, at dignissim turpis. Ut vehicula sed velit a faucibus. In feugiat
            vestibulum velit vel pulvinar. Fusce id mollis ex. Praesent feugiat elementum ex ut
            suscipit
          </p>
        </article>
      </section>
    </>
  )
}
