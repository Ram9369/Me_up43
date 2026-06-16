'use client';
import React, { useTransition, useState } from 'react';
import Image from 'react';
import TabButton from './TabButton';

const TAB_DATA = [
  {
    title: 'Skills',
    id: 'skills',
    items: [
      'React',
      'Next.js',
      'Tailwind CSS',
      'Framer Motion',
      'Node.js',
      'PostgreSQL',
    ],
  },
  {
    title: 'Education',
    id: 'education',
    items: [
      {
        title: 'Fullstack Academy of Code',
        subtitle: 'Software engineering bootcamp',
      },
      {
        title: 'University of California, Santa Cruz',
        subtitle: 'Computer science foundations',
      },
    ],
  },
  {
    title: 'Certifications',
    id: 'certifications',
    items: [
      {
        title: 'AWS Cloud Practitioner',
        subtitle: 'Cloud fundamentals and deployment',
      },
      {
        title: 'Google Professional Cloud Developer',
        subtitle: 'Modern application delivery',
      },
    ],
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState('skills');
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  const activeTab = TAB_DATA.find((item) => item.id === tab) ?? TAB_DATA[0];

  return (
    <section className="py-16 text-white" id="about">
      <div className="grid items-center gap-10 rounded-[2rem] border border-white/10 bg-white/5 p-4 shadow-xl shadow-black/20 md:grid-cols-2 md:p-6 lg:p-8">
        <div className="relative mx-auto w-full max-w-md overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/60 p-3">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-pink-500/10" />
          <img
            src="/images/about-image.png"
            width={520}
            height={520}
            alt="About me illustration"
            className="relative z-10 h-auto w-full rounded-[1.5rem]"
          />
        </div>
        <div className="text-left">
          <span className="rounded-full border  border-blue-500/30 bg-blue-500/10 px-5 py-2 text-xl tracking-[0.3em] text-blue-400 uppercase">
            •About Me
          </span>
          <h2 className="mb-4 mt-6 text-xl font-bold text-white sm:text-2xl">
            Hi, I'm Ram Pratap Maurya 👨‍💻
          </h2>

          <div className=" rounded-2xl border border-white/10 bg-slate-950/60 p-3">
            <div className="inline-flex items-center justify-center gap-2 mt-3 px-6 py-3 font-semibold text-white   transition hover:-translate-y-1">
              A Full Stack Developer focused on building modern web
              applications, scalable backend systems, and AI-powered solutions.
              I enjoy transforming ideas into seamless digital experiences using
              React, Node.js, Express.js, MongoDB, and modern development tools.
              From crafting responsive user interfaces to designing efficient
              APIs, I love every part of the development process.
            </div>{' '}
            <div className="inline-flex items-center justify-center gap-2  px-6  font-semibold text-white   transition hover:-translate-y-1">
              My goal is to create software that is not only functional but also
              intuitive, impactful, and enjoyable to use. When I'm not coding,
              you'll find me exploring new technologies, solving programming
              challenges, and continuously improving my skills as a developer.
            </div>
          </div>

          <div className="mt-2 rounded-2xl border border-white/10 bg-slate-950/60 p-5">
            <h1>🎯 Career Objective</h1>
            To secure a challenging role in a forward-thinking tech company
            where I can apply my full-stack skills, grow as an engineer, and
            contribute to impactful, user-centric products.
          </div>
          <div className="mt-2 rounded-2xl border border-white/10 bg-slate-950/60 p-5">
            <p> • Full-stack web development (MERN)</p>
            <p> • Data Structures & Algorithms</p>
            <p> • Clean, scalable & accessible code</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
