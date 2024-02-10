import React from "react";

function Project() {
  const ProjectData = [
    {
      id: 1,
      imageSrc: "/Img/proj.png",
      title: "Russia Visa Center",
      description: "Russia Visa Center, providing you with a hassle-free experience from start to finish. With intuitive features such as document submission, appointment scheduling, and real-time status updates.",
      links: "demo.com",
      tech:[{id:1,name:'HTML'},{id:2,name:'CSS'},{id:3,name:'JS'},{id:4,name:'MUI'},{id:5,name:'REACT JS'},{id:6,name:'REDUX'},{id:7,name:'REDUX-THUNK'}],
      sourcecode: "#",
    },
    {
      id: 2,
      imageSrc: "/Img/pro.png",
      title: "Mercurius Travel",
      description: "Mercurius Travel connects you with a world of adventure, offering personalized recommendations, seamless booking options, and insider tips tailored to your preferences. ",
      links: "demo.com",
      tech:[{id:1,name:'HTML'},{id:2,name:'CSS'},{id:3,name:'JS'},{id:4,name:'MUI'},{id:5,name:'REACT JS'},{id:6,name:'REDUX'},{id:7,name:'REDUX-THUNK'}],
      sourcecode: "#",
    },
    {
      id: 3,
      imageSrc: "/Img/projectt.png",
      title: "E-Commerce Web app",
      description:"developer-friendly platform, meticulously crafted to provide seamless integration and customization options. With our API-first approach, you can effortlessly build, scale, and innovate your e-commerce experience.",
      links: "demo.com",
      tech:[{id:1,name:'HTML'},{id:2,name:'CSS'},{id:3,name:'JS'},{id:4,name:'MUI'},{id:5,name:'REACT JS'},{id:6,name:'REDUX'},{id:7,name:'REDUX-THUNK'}],
      sourcecode: "#",
    },
    {
      id: 4,
      imageSrc: "/Img/proje.png",
      title: "Queue Zilla Web app",
      description:"QueueZilla is a comprehensive Queue management system that provides you the flexibility to configure your new queueing system in minutes and start using it without the need for expensive hardware.",
      links: "demo.com",
      tech:[{id:1,name:'HTML'},{id:2,name:'CSS'},{id:3,name:'JS'},{id:4,name:'BOOTSTRAP'}],
      sourcecode: "#",
    },
    {
      id: 5,
      imageSrc: "/Img/project4.png",
      title: "Appointment Management System(Visa)",
      description:"Our innovative platform offers a user-friendly interface for both applicants and administrators, ensuring smooth scheduling, tracking, and management of visa appointments.",
      links: "demo.com",
      tech:[{id:1,name:'HTML'},{id:2,name:'CSS'},{id:3,name:'JS'},{id:4,name:'BOOTSTRAP'}],
      sourcecode: "#",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center py-5">
      {ProjectData.map((pro) => (
        <div className="relative flex flex-col w-full max-w-[35rem] rounded-xl bg-white text-gray-700 shadow-lg m-4 border text-gray-700"
          key={pro.id}
        >
          <div className="relative mx-2 mt-2 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
            <img src={pro.imageSrc} alt={pro.title} />
          </div>
          <div className="p-6">
            <h5 className="font-sans text-xl font-medium leading-snug text-blue-gray-900">
              {pro.title}
            </h5>
            <p className="font-sans text-base leading-relaxed text-gray-700">
              {pro.description}
            </p>
          </div>
          <div className="p-6 pt-3 flex">
            <button className="w-full rounded-lg bg-blue-500 py-3.5 px-7 text-center font-sans text-sm font-bold uppercase text-white shadow-md transition-all hover:shadow-lg focus:opacity-[0.85] active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 me-4">
              Source Code
            </button>
            <button className="w-full rounded-lg bg-blue-500 py-3.5 px-7 text-center font-sans text-sm font-bold uppercase text-white shadow-md transition-all hover:shadow-lg focus:opacity-[0.85] active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 me-4">
              Live Links
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Project;
