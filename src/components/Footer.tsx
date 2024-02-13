export default function Footer() {
  return (
    <footer className="border border-t-2 border-t-blue-800 shadow-xl mt-5 text-black p-4">
      <div className="container mx-auto flex flex-wrap justify-center gap-8">
        <div className="flex flex-col items-center mb-4">
          <span className="font-bold text-lg mb-1">Watch Brands</span>
          <a href="#" className="hover:text-gray-300">
            Rolex
          </a>
          <a href="#" className="hover:text-gray-300">
            Casio
          </a>
          <a href="#" className="hover:text-gray-300">
            Omega
          </a>
        </div>

        <div className="flex flex-col items-center mb-4">
          <span className="font-bold text-lg mb-2">Watch Types</span>
          <a href="#" className="hover:text-gray-300">
            Dive Watches
          </a>
          <a href="#" className="hover:text-gray-300">
            Chronographs
          </a>
          <a href="#" className="hover:text-gray-300">
            Vintage Watches
          </a>
        </div>

        <div className="flex flex-col items-center mb-4">
          <span className="font-bold text-lg mb-2">Contact Us</span>
          <a href="#" className="hover:text-gray-300">
            support@example.com
          </a>
          <a href="#" className="hover:text-gray-300">
            555-1234
          </a>
        </div>
      </div>

      <p className="text-center mt-2">
        &copy; 2024 Watch Shop. All Rights Reserved.
      </p>
    </footer>
  );
}
