import homeImg from "../../assets/image001.jpg";
import ImageSlider from "../../components/ImageSlider";

export default function Home() {
  return (
    <div className="relative isolate overflow-hidden py-24 sm:py-32">
      <div className="mx-auto px-6 lg:px-16 -z-1">
        <div className="flex flex-row gap-6 justify-between items-center max-sm:flex-col max-sm:items-start">
          <div className="max-w-[60%] max-sm:max-w-[100%]">
            <h1 className="text-6xl font-bold tracking-tight text-gray-900 max-sm:text-4xl">
              North Star Chiller & Refrigerated
            </h1>
            <p className="mt-6 text-xl text-gray-500">
              Delivering freshness, reliability, and precision in
              temperature-controlled logistics. Whether it's dairy,
              pharmaceuticals, or frozen goods, we ensure your cargo stays at
              the perfect temperature, from pickup to delivery.
            </p>

            <button
              type="submit"
              className="w-auto px-4 mt-6 text-white bg-gray-900 font-semibold py-3 rounded-lg hover:bg-gray-300 transition"
            >
              Get a Quote Today!
            </button>
          </div>

          <div aria-hidden="true" className="pointer-events-none flex-none">
            <ImageSlider />
            <img
              alt=""
              src={homeImg}
              className="max-w-2xl object-cover object-right md:object-center -mr-[16rem]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
