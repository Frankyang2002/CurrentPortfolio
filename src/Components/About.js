export default function About() {
    return (
      <section id="about" className="bg-white h-screen relative z-10 flex items-top justify-center rounded-bl-[50px] rounded-br-[50px] rounded-tl-[50px] rounded-tr-[50px] border-8 border-red-400">
        <div>
        <div className="sticky top-16 z-20 bg-white h-16 flex items-center justify-center">
          <h2 className="text-red-400 text-3xl font-bold">About Me</h2>
        </div>
          <p className="text-gray-800 text-xl">Hello I am a current student at University of New South Wales</p>
        </div>
      </section>
    );
  }