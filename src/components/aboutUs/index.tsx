
type Props = {};
import homeImg from "../../assets/image001.jpg";
export default function AboutUs({}: Props) {
  return (
    <div className="px-6  mt-8 lg:px-16">
      <div className="flex justify-center text-3xl font-bold text-gray-800 text-center">
        About Us
      </div>
    <section className="bg-gray-100 mt-4" id="aboutus">
      <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          <div className="max-w-lg gap-2 flex flex-col">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              Keeping It Cool, Keeping It Fresh!
            </h2>
            <p className="mt-4 text-gray-600 text-lg">
              At North Star Chiller & Refrigerated Transport, we specialize in refrigerated transport
              services, offering cutting-edge cooling technology and a highly
              efficient fleet to ensure that your products reach their
              destination in pristine condition. With years of experience in the
              cold chain logistics industry, we take pride in our commitment to
              quality, efficiency, and customer satisfaction.
            </p>
            <p>✅ State-of-the-art temperature monitoring</p>
            <p>✅ Dedicated and trained professionals</p>
            <p>✅ Nationwide and regional coverage</p>
          </div>
          <div className="mt-12 md:mt-0">
            <img
              src={homeImg}
              alt="About Us Image"
              className="object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}
