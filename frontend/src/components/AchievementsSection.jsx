// import React from "react";
// import CountUp from "react-countup";
// import { SparklesIcon } from "@heroicons/react/24/outline";

// const achievementsList = [
//   {
//     metric: "Projects Shipped",
//     value: 100,
//     postfix: "+",
//     note: "Responsive builds and polished interactions",
//   },
//   {
//     metric: "Users Reached",
//     value: 100000,
//     prefix: "~",
//     note: "Products designed to scale",
//   },
//   {
//     metric: "Awards",
//     value: 7,
//     note: "Recognition for design and delivery",
//   },
//   {
//     metric: "Years",
//     value: 5,
//     note: "Experience turning ideas into UI",
//   },
// ];

// const AchievementsSection = () => {
//   return (
//     <section className="py-6 sm:py-12">
//       <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-bold text-slate-300">
//         <SparklesIcon className="h-7 w-7 text-purple-300" />
//         Achievements
//       </div>

//       <div className="mt-3 grid gap-4 rounded-[2rem] border border-white/10 bg-white/5 p-4 shadow-xl shadow-black/20 sm:grid-cols-2 sm:p-6 xl:grid-cols-4">
//         {achievementsList.map((achievement, index) => (
//           <div
//             key={index}
//             className="flex flex-col justify-between rounded-3xl border border-white/5 bg-slate-950/60 p-6"
//           >
//             <div>
//               <h2 className="flex items-center text-4xl font-bold text-white">
//                 {achievement.prefix || ""}
//                 <CountUp
//                   end={achievement.value}
//                   duration={2.5}
//                   separator=","
//                 />
//                 {achievement.postfix || ""}
//               </h2>

//               <p className="mt-2 text-base font-semibold text-slate-200">
//                 {achievement.metric}
//               </p>
//             </div>

//             <p className="mt-4 text-sm leading-6 text-slate-400">
//               {achievement.note}
//             </p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default AchievementsSection;
