
type Props = {}

export default function ContactUs({}: Props) {
  return (
    <div className="px-6  mt-8 lg:px-16">
      <div className="flex justify-center text-3xl font-bold text-gray-800 text-center">
        Contact Us
      </div>
    <section className="bg-primary mt-8  h-full flex items-center text-white">
        
    <div className="grid  md:grid-cols-2 gap-12 items-center">
      <div>
        <h2 className="text-2xl font-bold leading-tight">
          <span className="text-gray-900">Please Drop a Message</span>
        </h2>
        <p className="mt-4 text-gray-900">
          Get in touch and let me know how I can help. Fill out the form and
          I'll be in touch as soon as possible.
        </p>
  
        <div className="mt-6 space-y-4">
          <div className="flex items-start space-x-4">
            <span className="text-xl text-gray">📍</span>
            <div>
              <p className="text-gray-900 font-semibold">Address:</p>
              <p className="text-gray-900">Abu Dhabi</p>
            </div>
          </div>


          <div className="flex items-start space-x-4">
            <span className="text-xl text-gray-900">📞</span>
            <div>
              <p className="text-gray-900 font-semibold">Phone:</p>
              <p className="text-gray-900">************</p>
            </div>
          </div>
  
          <div className="flex items-start space-x-4">
            <span className="text-xl text-gray-900">✉️</span>
            <div>
              <p className="text-gray-900 font-semibold">Email:</p>
              <p className="text-gray-900">support@abdul.com</p>
              <p className="text-gray-900">test@hotmail.com</p>
            </div>
          </div>
        </div>
  
        
      </div>
  
      <div className="bg-gray-100 p-8 rounded-xl shadow-lg">
        <form>
          <div className="mb-4">
            <label className="block text-gray-900 mb-2">Name</label>
            <input type="text" placeholder="e.g John Doe" className="w-full px-4 py-3 bg-white text-gray-900 rounded-lg border border-gray-600 outline-none" />
          </div>
  
          <div className="mb-4">
            <label className="block text-gray-900 mb-2">Email<span className="text-xs">(Required)</span></label>
            <input type="email" placeholder="e.g johndoe@mail.com" className="w-full px-4 py-3 bg-white text-gray-900 rounded-lg border border-gray-600 outline-none" />
          </div>
  
          <div className="mb-4">
            <label className="block text-gray-900 mb-2">Phone</label>
            <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3 bg-white text-gray-900 rounded-lg border border-gray-600 outline-none" />
          </div>
  
          <div className="mb-4">
            <label className="block text-gray-900 mb-2">Message<span className="text-xs">(Required)</span></label>
            <textarea placeholder="Write message..." className="w-full px-4 py-3 bg-white text-gray-900 rounded-lg border border-gray-600 outline-none h-24"></textarea>
          </div>
  
          <button type="submit" className="w-full text-white bg-gray-900 font-semibold py-3 rounded-lg hover:bg-gray-300 transition">
            SEND
          </button>
        </form>
      </div>
    </div>
  </section>
  </div>
  )
}