export default function Home() {
    return (
      <section id="Home" className="bg-red-400 h-screen flex items-center justify-center">
      <div className="flex justify-between w-full max-w-5xl px-8">
        {/* Left Side: Welcome Message */}
        <div className="text-white">
          <h2 className="text-5xl font-bold mb-4">Welcome</h2>
          <p className="text-3xl">
            Frank Yang, Computer Science and Physics student at UNSW
          </p>
        </div>

        {/* Right Side: Floating Rounded Rectangle with Image */}
        <div className="relative">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden w-64 h-64 flex items-center justify-center">
            <img 
              src="your-image-url.jpg" 
              alt="Profile Image" 
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
    );
  }