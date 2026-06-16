import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import EmailSection from './components/EmailSection';
import Footer from './components/Footer';
// import AchievementsSection from './components/AchievementsSection';
import Education from './components/Education';
import Cursor from './components/Cursor';
import Skill from './components/Skill';


export default function App() {
  return (
    <main className="relative flex min-h-screen flex-col overflow-hidden bg-slate-950">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        
        <div className="absolute -left-24 top-16 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl" />
        <div className="absolute right-0 top-1/3 h-80 w-80 rounded-full bg-pink-500/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>
      <Navbar />
      <div className="relative mx-auto w-full max-w-7xl px-4 pt-24 sm:px-6 lg:px-8">
        <HeroSection />
        {/* <AchievementsSection /> */}
        <AboutSection />
        <Education />
        <Skill />
        <ProjectsSection />
        <EmailSection />
      </div>
       
      <Footer />
      <Cursor />
    </main>
  );
}
