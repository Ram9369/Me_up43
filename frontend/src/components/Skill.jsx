import { motion } from "framer-motion";

const languages = [
  { name: "C", level: 80 },
  { name: "Java", level: 78 },
  { name: "Python", level: 50 },
  { name: "JavaScript", level: 88 },
];

  const webSkills = [
  { name: "React.js", level: 85 },
  { name: "JavaScript", level: 88 },
  { name: "Node.js", level: 80 },
  { name: "MongoDB", level: 78 },
  { name: "Tailwind CSS", level: 90 },
];


const proficiency = [
  { name: "Frontend", value: 90 },
  { name: "Backend", value: 80 },
  { name: "DSA", value: 75 },
  { name: "AI Proj.", value: 70 },
];

const tools = [
  "React",
  "MongoDB",
  "Git",
  "GitHub",
  "VS Code",
  "JavaScript",
  "Node.js",
  "Express",
];
const icons={
  "React": "⚛️",
  "MongoDB": "🍃",
  "Git": "🎨",
  "GitHub": "🐙",
  "VS Code": "💻",
  "JavaScript": "📜",
  "Node.js": "🟢",
  "Express": "🔵"
};

function ProgressBar({ name, level }) {
  return (
    <div className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="font-medium">{name}</span>
        <span className="text-blue-400">{level}%</span>
      </div>

      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="h-full rounded-full bg-gradient-to-r from-blue-500 via-sky-500 to-purple-500"
        />
      </div>
    </div>
  );
}

function CircularProgress({ value, label }) {
  const radius = 48;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;

  return (
    <motion.div
      whileHover={{ scale: 1.08 }}
      className="flex flex-col items-center"
    >
      <svg width="120" height="120">
        <circle
          cx="60"
          cy="60"
          r={radius}
          stroke="rgba(255,255,255,.1)"
          strokeWidth="8"
          fill="none"
        />

        <motion.circle
          cx="60"
          cy="60"
          r={radius}
          stroke="url(#gradient)"
          strokeWidth="8"
          fill="none"
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          whileInView={{ strokeDashoffset: offset }}
          transition={{ duration: 1.5 }}
          transform="rotate(-90 60 60)"
        />

        <defs>
          <linearGradient id="gradient">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
        </defs>
      </svg>

      <div className="-mt-20 text-center">
        <h3 className="text-2xl font-bold">{value}%</h3>
        <p className="text-gray-400 text-sm">{label}</p>
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative min-h-screen overflow-hidden bg-[#030712] py-24 text-white"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 h-96 w-96 bg-blue-500/20 blur-[180px]" />
      <div className="absolute bottom-0 right-0 h-96 w-96 bg-purple-500/20 blur-[180px]" />

      {/* Grid Background */}
      <div
        className="absolute inset-0 opacity-10 "
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 ">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
           <span className="rounded-full border  border-blue-500/30 bg-blue-500/10 px-5 py-2 text-xl tracking-[0.3em] text-blue-400 uppercase">
            •Skills⚡
          </span>

          <h2 className="mt-6 text-5xl font-black">
            
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              My Professional Skill Matrix
            </span>
          </h2>

          <p className="mt-4 text-gray-400">
            Tools and technologies I use to build scalable applications.
          </p>
        </motion.div>

        {/* Main Cards */}
        <div className="grid gap-8 lg:grid-cols-3 ">
          {/* Languages */}
          <motion.div
            whileHover={{ y: -10 }}
            className="rounded-[2rem] border border-blue-500/20 bg-white/[0.03] p-8 backdrop-blur-xl  hover:border-blue-500/40 hover:shadow-[0_0_20px_rgba(56,189,248,0.3)]"
          >
            <h3 className="mb-8 text-xl font-bold">
              💻 Programming Languages
            </h3>

            {languages.map((skill) => (
              <ProgressBar key={skill.name} {...skill} />
            ))}
          </motion.div>

          {/* Proficiency */}
          <motion.div
            whileHover={{ y: -10 }}
            className="rounded-[2rem] border border-blue-500/20 bg-white/[0.03] p-8 backdrop-blur-xl  hover:border-blue-500/40 hover:shadow-[0_0_20px_rgba(56,189,248,0.3)]"
          >
            <h3 className="mb-10 text-xl font-bold">
              🌐 Core Proficiency
            </h3>

            <div className="flex justify-center gap-6 flex-wrap">
              {proficiency.map((item) => (
                <CircularProgress
                  key={item.name}
                  value={item.value}
                  label={item.name}
                />
              ))}
            </div>
          </motion.div>

          {/* Web Development */}
          <motion.div
            whileHover={{ y: -10 }}
            className="rounded-[2rem] border border-purple-500/20 bg-white/[0.03] p-8 backdrop-blur-xl  hover:border-purple-500/40 hover:shadow-[0_0_20px_rgba(147,51,234,0.3)]"
          >
            <h3 className="mb-8 text-xl font-bold">
              🚀 Development
            </h3>

            {webSkills.map((skill) => (
              <ProgressBar key={skill.name} {...skill} />
            ))}
          </motion.div>
        </div>

        {/* Tools Section */}
        <div className="mt-20">
          <h3 className="mb-10 text-center text-2xl font-bold">
            Tools & Technologies
          </h3>

          <div className="grid grid-cols-2 gap-5 md:grid-cols-4 lg:grid-cols-8">
            {tools.map((tool, index) => (
              <motion.div
                key={tool}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                whileHover={{
                  y: -8,
                  scale: 1.05,
                }}
                className="group rounded-3xl border border-white/10 bg-gradient-to-r from-[#172554] via-[#0c4a6e] to-[#3b0764] p-6 text-center backdrop-blur-lg hover:border-blue-500/40 hover:shadow-[0_0_20px_rgba(56,189,248,0.3)]"
              >
                <div className="mb-3 text-2xl">
                  {icons[tool]}
                </div>

                <h4 className="font-semibold">{tool}</h4>

                <div className="mt-3 h-1 w-0 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}