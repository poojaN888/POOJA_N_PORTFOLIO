import React from "react";

export default function Experience() {
  const experienceData = [
    {
      role: "Software Development Engineer",
      company: "Mastercard",
      date: "Feb 2024 – Present | Saint Louis, MO",
      icon: "💻",
      color: "from-cyan-400 to-blue-500",
      tasks: [
        "Working on the Stand-In Self-Service platform built with Java, Spring Boot microservices, and Kafka to support high-availability transaction processing during issuer outages.",
"Designed REST APIs, Spring Batch jobs, and database integrations (PostgreSQL, Oracle) while improving performance, resiliency, and scalability.",
"Contributed to Java 17 and Spring Boot 3.x migration, CI/CD automation, cloud deployments, and production monitoring using PCF, Jenkins, Splunk, and Dynatrace.",
"Automated CI/CD with AWS CodePipeline, integrated monitoring with Prometheus/Grafana, and optimized PostgreSQL data models for high-volume transactions.",
      ],
    },
    {
      role: "Operational Excellence-Technical Intern",
      company: "Fagron Sterile Services",
      date: "Aug 2023 – Jan 2024 | Wichita, KS",
      icon: "🏦",
      color: "from-green-400 to-emerald-500",
      tasks: [
        "Developed Java and SQL-based data processing utilities to clean, validate, and transform large operational datasets for reporting and analytics.",
      "Built Power BI dashboards to visualize KPIs and operational trends, enabling leadership to make data-driven decisions.",
      "Supported continuous improvement initiatives by translating business requirements into technical logic and tracking delivery using ClickUp.",
      ],
    },
    {
      role: "Java Developer",
      company: "Reece Group",
      date: "Dec 2021 – July 2022 | Hyderabad, India",
      icon: "📡",
      color: "from-purple-400 to-pink-500",
      tasks: [
       "Worked on backend development using Java, Spring Boot, and Kafka to process and reconcile customer and order data across distributed systems.",
      "Developed REST APIs, database integrations with Oracle, and deployed microservices on Pivotal Cloud Foundry with Jenkins CI/CD pipelines.",
      "Contributed to frontend modernization by migrating AngularJS components to Angular 8 and building responsive web interfaces.",
      ],
    },
   
  ];

  return (
    <section
      id="experience"
      className="relative px-6 md:px-12 py-20 bg-gradient-to-b from-gray-950 via-purple-950 to-blue-900 text-white"
    >
      {/* Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
          Experience
        </h2>
        <p className="text-gray-400 mt-3">My career growth and milestones</p>
      </div>

      {/* Timeline Vertical Style */}
      <div className="relative max-w-3xl mx-auto">
        {/* Vertical line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-green-400 via-blue-500 to-purple-500"></div>

        {experienceData.map((exp, i) => (
          <div
            key={i}
            className={`mb-16 flex ${
              i % 2 === 0 ? "justify-start" : "justify-end"
            } relative`}
          >
            {/* Connector Dot */}
            <div
              className={`absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-r ${exp.color} shadow-xl`}
            >
              <span className="text-2xl">{exp.icon}</span>
            </div>

            {/* Card */}
            <div
              className={`w-[45%] p-6 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl ${
                i % 2 === 0 ? "ml-16 text-left" : "mr-16 text-right"
              }`}
            >
              <h3 className="text-xl font-bold text-cyan-300">{exp.role}</h3>
              <p className="text-sm text-gray-400 mb-3">
                {exp.company} | {exp.date}
              </p>
              <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
                {exp.tasks.map((task, idx) => (
                  <li key={idx}>{task}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

