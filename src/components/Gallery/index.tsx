type Props = {};
import image001 from "../../assets/image001.jpg";
import image002 from "../../assets/image002.jpg";
import image003 from "../../assets/image003.jpg";

export default function Gallery({}: Props) {
  const galleryImages = [image001, image002, image003];
  return (
    <section className="text-gray-700 body-font" id="gallery">
      <div className="flex justify-center text-3xl font-bold text-gray-800 text-center pt-10">
        Gallery
      </div>

      <div className="grid grid-cols-1 place-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {galleryImages.map((image) => (
          <div className="group relative" key={image}>
            <img
              src={image}
              alt="Image 1"
              className="aspect-[3/3] h-80 object-cover rounded-lg transition-transform transform scale-100 hover:110 duration-500 group-hover:scale-105"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
