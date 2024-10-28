export default function Projects() {
    return (
      <section id="projects" className="bg-white h-screen relative z-10 flex items-top justify-center border-8 border-red-400 rounded-bl-[50px] rounded-br-[50px] rounded-tl-[50px] rounded-tr-[50px]">
        <div>
          <div className="sticky top-16 z-20 bg-white h-16 flex items-center justify-center">
            <h2 className="text-red-400 text-3xl font-bold">Projects</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
            <div className="p-4 bg-white rounded shadow">
              <h3 className="font-semibold">Project 1</h3>
              <p className="mt-2">Description of the project...</p>
              <a href="#" className="text-blue-500">View Project</a>
            </div>
            <div className="p-4 bg-white rounded shadow">
              <h3 className="font-semibold">Project 2</h3>
              <p className="mt-2">Description of the project...</p>
              <a href="#" className="text-blue-500">View Project</a>
            </div>
            <div className="p-4 bg-white rounded shadow">
              <h3 className="font-semibold">Project 2</h3>
              <p className="mt-2">Description of the project...</p>
              <a href="#" className="text-blue-500">View Project</a>
            </div>
          </div>  
        </div>
        
      </section>
    );
  }