import homeImg from "../../assets/image001.jpg";

export default function HomeTwo() {
    return (
      <div className="relative overflow-hidden bg-white">
        <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
          <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
            <div className="sm:max-w-lg">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              North Star Chiller & Refrigerated 
              </h1>
              <p className="mt-4 text-xl text-gray-500">
              Delivering freshness, reliability, and precision in temperature-controlled logistics. Whether it's dairy, pharmaceuticals, or frozen goods, we ensure your cargo stays at the perfect temperature, from pickup to delivery.
              </p>
            </div>
            <div>
              <div className="mt-10">
                {/* Decorative image grid */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl -mr-[16rem]"
                >
                  <div className="absolute transform sm:top-0 sm:left-1/2 sm:translate-x-8 lg:top-1/2 lg:left-1/2 lg:translate-x-8 lg:-translate-y-1/2 -right-[16rem]">
                  <img
            alt=""
            src={homeImg}
            className="max-w-2xl object-cover object-right md:object-center -mr-[16rem]"
          />
                  </div>
                </div>
  
                <a
                  href="#"
                  className="inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700"
                >
                  Shop Collection
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  