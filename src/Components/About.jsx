import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="relative px-6 md:px-12 py-24 bg-gradient-to-br from-indigo-950 via-purple-900 to-blue-900 text-white overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-32 -right-32 w-[28rem] h-[28rem] bg-purple-600/20 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Illustration */}
        <div
          data-aos="fade-right"
          className="flex justify-center transform hover:scale-105 transition duration-500"
        >
          <img
            src="/R_Praneeth_Portfolio/developer-illustration.svg"
            alt="Developer Illustration"
            className="w-72 md:w-[26rem] drop-shadow-[0_0_25px_rgba(56,189,248,0.7)] animate-float"
          />
        </div>

     {/* Text Content */}
<div
  data-aos="fade-left"
  className="backdrop-blur-xl bg-white/10 border border-cyan-400/30 shadow-2xl rounded-3xl p-10"
>
  <h2 className="text-4xl md:text-5xl font-extrabold text-cyan-300 mb-6">
    About Me
    <span className="block w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mt-3 rounded-full animate-pulse"></span>
  </h2>

{/* Professional Summary */}
<p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-6">
  Full Stack Software Engineer with <span className="font-semibold text-cyan-300">4 years of experience</span> 
  across the <span className="text-cyan-300">entire Software Development Life Cycle (SDLC)</span>, 
  with strong expertise in <span className="text-cyan-300">Core Java</span> and 
  <span className="text-cyan-300"> Spring-based enterprise applications</span>. 
  Experienced in building <span className="text-pink-400">secure</span>, 
  <span className="text-cyan-300"> scalable</span>, and 
  <span className="text-purple-400"> high-performance systems</span> across 
  <span className="text-pink-400"> healthcare</span> and 
  <span className="text-purple-400"> fintech</span> domains.
</p>

{/* Technical Strengths */}
<p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-6">
  Technically proficient in backend development using 
  <span className="text-cyan-300"> Spring Boot</span>, 
  <span className="text-cyan-300"> Spring Security</span>, 
  <span className="text-cyan-300"> Spring MVC</span>, 
  <span className="text-cyan-300"> Spring Batch</span>, and 
  <span className="text-cyan-300"> Hibernate</span>, with experience in 
  <span className="italic"> event-driven architectures</span> using 
  <span className="text-cyan-300"> Kafka</span> and 
  <span className="text-cyan-300"> RabbitMQ</span>. 
  Skilled in working with <span className="text-cyan-300">PostgreSQL</span>, 
  <span className="text-cyan-300"> MySQL</span>, and 
  <span className="text-cyan-300"> Oracle</span> databases.
</p>

{/* Domain Expertise */}
<p className="text-lg md:text-xl text-gray-200 leading-relaxed">
  Experienced in building responsive user interfaces using 
  <span className="text-cyan-300"> Angular</span>, 
  <span className="text-cyan-300"> JavaScript</span>, and 
  <span className="text-cyan-300"> TypeScript</span>, and deploying applications on 
  <span className="text-cyan-300"> AWS</span> and 
  <span className="text-cyan-300"> Pivotal Cloud Foundry</span> using 
  <span className="text-cyan-300"> Docker</span>, 
  <span className="text-cyan-300"> Kubernetes</span>, and 
  <span className="text-cyan-300"> CI/CD pipelines</span>. 
  Passionate about building <span className="text-pink-400">reliable enterprise systems</span> 
  with a strong focus on <span className="text-cyan-300">performance</span>, 
  <span className="text-cyan-300"> security</span>, and 
  <span className="text-cyan-300"> maintainability</span>.
</p>

</div>

      </div>
    </section>
  );
}
