export default function Header() {
    return (
      <header className="fixed top-0 left-0 w-full bg-red-400 text-white py-5 shadow-md z-50">
        <nav className="container mx-auto flex justify-between items-center px-4">
          <h1 className="text-3xl font-bold">Frank Yang</h1>
          <ul className="flex space-x-10">
            <li><a href="#home" className="hover:underline text-xl">Home</a></li>
            <li><a href="#about" className="hover:underline text-xl">About</a></li>
            <li><a href="#skills" className="hover:underline text-xl">Skills</a></li>
            <li><a href="#resume" className="hover:underline text-xl">Resume</a></li>
            <li><a href="#projects" className="hover:underline text-xl">Projects</a></li>
            <li><a href="#contact" className="hover:underline text-xl">Contact</a></li>
          </ul>
        </nav>
      </header>
    );
  }