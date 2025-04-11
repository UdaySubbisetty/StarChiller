
type Props = {};

export default function WhyUs({}: Props) {
  const listData = [
    {
      title: "Precision Cooling Technology",
      message:
        "Advanced refrigeration systems that ensure consistent temperature control.",
    },
    {
      title: "24/7 Real-Time Tracking",
      message: "Stay updated on your shipment’s status at all times.",
    },
    {
      title: "Experienced & Certified Drivers",
      message: "Professionals trained to handle temperature-sensitive cargo.",
    },
    {
      title: "Eco-Friendly Fleet",
      message:
        "Sustainable, energy-efficient vehicles for responsible transportation.",
    },
    {
      title: "Nationwide Coverage",
      message:
        "Serving businesses across multiple regions with reliable delivery.",
    },
  ];
  return (
    <section className="text-gray-700 body-font mt-10">
      <div className="flex justify-center text-3xl font-bold text-gray-800 text-center">
        Why Us?
      </div>
      <div className="container px-5 py-12 mx-auto">
        <div className="flex flex-wrap text-center">
          {listData.map((item) => (
            <div className="p-4  md:w-1/4 sm:w-1/2" key={item.title}>
              <div className="px-4 py-6 bg-gray-100  shadow-xs hover:scale-110 duration-500 flex flex-col gap-4 rounded-md h-[12rem] items-center justify-center">
                <h2 className="text-xl font-[600] text-gray-900">
                  {item.title}
                </h2>
                <p className="text-gray-900 text-sm">{item.message}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
