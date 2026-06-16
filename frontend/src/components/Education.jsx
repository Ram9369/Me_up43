import { motion } from 'framer-motion';

const education = [
  {
    year: '2023 - Present',
    title: 'Bachelor of Technology (B.Tech)',
    institute: 'Maa Pateshwari, Rajkiya Engineering College, Gonda',
    branch: 'Computer Science and Engineering',
    status: 'Pursuing',
    cgpa : '...',       
    subjects : [
      'DSA',
      'DBMS',
      'Operating Systems',
      'Computer Networks',
      'OOP',
      'Web Tech',
    ],
  },
  {
    year: '2021 - 2022',
    title: 'Senior Secondary (12th)',
    institute: 'Higher Secondary School',
    branch: 'PCM ',
    status: 'Completed',
    percentage:'78.5%',
    subjects: [
      'Mathematics',
      'Physics',
      'Chemistry',
      'Computer Science',
    ],
  },
  {
    year: '2019 - 2020',
    title: 'Secondary (10th)',
    institute: 'High School',
    branch: 'Science',
    status: 'Completed',
    percentage:'86.5%',
    subjects: [
      'Mathematics',
      'Physics',
      'Chemistry',
      'Biology',
    ],
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="relative overflow-hidden bg-[#030712] py-24"
    >
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-blue-500/20 blur-[140px]" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-purple-500/20 blur-[140px]" />

      <div className="mx-auto max-w-6xl px-6">
        {/* Heading */}
        <div className="mb-20 text-center">
          <span className="rounded-full border  border-blue-500/30 bg-blue-500/10 px-5 py-2 text-xl tracking-[0.3em] text-blue-400 uppercase">
            • Education📖
          </span>

          <h2 className="mt-6 text-5xl font-bold text-white">
            My Academic{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Journey
            </span>
          </h2>

          <p className="mt-4 text-zinc-400">
            Foundations that shape my engineering mindset.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mx-auto max-w-4xl">
          <div className="absolute left-2.5 top-0 h-full w-[2px] bg-gradient-to-b from-blue-500 to-purple-500" />

          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative mb-10 flex gap-8"
            >
              {/* Dot */}
              <div className="relative z-10 mt-6 h-5 w-5 rounded-full border-4 border-[#030712] bg-blue-500 shadow-[0_0_20px_#3b82f6]  "  />

              {/* Card */}
              <div className="flex-1 rounded-[1.5rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition hover:border-blue-500/40 hover:shadow-[0_0_20px_rgba(56,189,248,0.3)] transition duration-500 hover:scale-105">
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-sm font-semibold text-blue-400">
                    {item.year}
                  </span>

                  <span className="rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-1 text-xs text-purple-300">
                    {item.status}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white">
                  {item.title}
                </h3>

                <p className="mt-3 text-lg font-medium text-zinc-200">
                  {item.institute}
                </p>

                <p className="mt-1 text-zinc-400">{item.branch}</p>

                {item.skills && (
                  <div className="mt-6 flex flex-wrap gap-2">
                    {item.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-zinc-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}

                {item.cgpa && (
                  <p className="mt-2 text-zinc-300">
                    🎓 Current CGPA:{' '}
                    <span className="font-semibold text-white">
                      {item.cgpa}
                    </span>
                  </p>

                )}

                {item.percentage && (
                    <p className="mt-2 text-zinc-300">
                        🎓 Percentage:{' '}
                        <span className="font-semibold text-white">
                            {item.percentage}
                        </span>
                    </p>
                )}

                 {item.subjects && (
                  <p className="mt-6 text-zinc-300">
                    📖 Subjects:{' '}
                    <span className="font-semibold text-white">
                      {item.subjects.join(', ')}
                    </span>
                  </p>
                )}
                
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}