// src/data/experience.js
const experience = [
  {
    company: "Mastercard",
    role: "Software Development Engineer",
    date: "Feb 2024 – Present",
    location: "St Louis, MO",
    points: [
      "Working on the Stand-In Self-Service platform built with Java, Spring Boot microservices, and Kafka to support high-availability transaction processing during issuer outages.",
"Designed REST APIs, Spring Batch jobs, and database integrations (PostgreSQL, Oracle) while improving performance, resiliency, and scalability.",
"Contributed to Java 17 and Spring Boot 3.x migration, CI/CD automation, cloud deployments, and production monitoring using PCF, Jenkins, Splunk, and Dynatrace.",
"Automated CI/CD with AWS CodePipeline, integrated monitoring with Prometheus/Grafana, and optimized PostgreSQL data models for high-volume transactions.",
    ],
  },
  {
    company: "Fagron Sterile Services",
    role: "Operational Excellence-Technical Intern",
    date: "Aug 2023 – Jan 2024",
    location: "Wichita, KS",
    points: [
      "Developed Java and SQL-based data processing utilities to clean, validate, and transform large operational datasets for reporting and analytics.",
      "Built Power BI dashboards to visualize KPIs and operational trends, enabling leadership to make data-driven decisions.",
      "Supported continuous improvement initiatives by translating business requirements into technical logic and tracking delivery using ClickUp.",
    ],
  },
  {
    company: "Reece Group",
    role: "Java Developer",
    date: "Dec 2020 – July 2021",
    location: "Hyderabad, India",
    points: [
      "Worked on backend development using Java, Spring Boot, and Kafka to process and reconcile customer and order data across distributed systems.",
      "Developed REST APIs, database integrations with Oracle, and deployed microservices on Pivotal Cloud Foundry with Jenkins CI/CD pipelines.",
      "Contributed to frontend modernization by migrating AngularJS components to Angular 8 and building responsive web interfaces.",
    ],
  },
];

export default experience;
