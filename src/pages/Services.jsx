import React from "react";
import "../styles/Service.css"; 

const Service = () => {
  const services = [
    {
      icon: "📱",
      title: "App Development",
      description:
        "Transform your ideas into powerful mobile applications. We develop custom iOS and Android apps that are intuitive, feature-rich, and designed to engage your target audience while delivering real business value.",
    },
    {
      icon: "🌐",
      title: "Web Development",
      description:
        "We specialize in creating modern, responsive websites using the latest technologies and best practices. Our development team ensures your site is fast, secure, and built to scale, providing an exceptional user experience across all devices.",
    },
    {
      icon: "🤖",
      title: "AI Integrations",
      description:
        "Enhance your applications with cutting-edge AI capabilities. We integrate machine learning, natural language processing, and other AI technologies to automate processes, gain insights, and create intelligent features that set your solution apart.",
    },
    {
      icon: "🗄️",
      title: "Database Design",
      description:
        "We architect robust database solutions that efficiently manage your data. Our expertise includes designing scalable schemas, optimizing queries, and implementing secure data storage systems that power your applications effectively.",
    },
  ];

  return (
    <div className="service-container">
      <div className="service-header">
        <h1>Our Services</h1>
        <h2>Transforming Visions into Digital Reality</h2>
        <p>
          Empowering businesses with innovative digital solutions, leveraging
          state-of-the-art technology to accelerate growth and maximize
          potential.
        </p>
      </div>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-content">
              <span className="service-icon">{service.icon}</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
