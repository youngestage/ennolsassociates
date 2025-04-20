
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";

const ServicesPage = () => {
  const services = [
    {
      title: "Engineering",
      description: "Comprehensive engineering solutions for complex projects",
      link: "/services/engineering",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Procurement",
      description: "Strategic procurement and supply chain management",
      link: "/services/procurement",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Construction",
      description: "Expert construction services for projects of any scale",
      link: "/services/construction",
      image: "https://images.unsplash.com/photo-1486718448742-163732cd1544?auto=format&fit=crop&q=80&w=800",
    },
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center text-enors-blue">Our Services</h1>
        <p className="mt-4 text-center text-gray-600 max-w-2xl mx-auto">
          We provide comprehensive engineering, procurement, and construction solutions tailored to meet your specific needs.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.map((service) => (
            <Link
              key={service.title}
              to={service.link}
              className="group bg-white rounded-lg shadow-sm overflow-hidden border transition-transform hover:scale-105"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={service.image}
                  alt={service.title}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-enors-blue mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
                <div className="mt-4 text-enors-orange group-hover:text-enors-red font-medium">
                  Learn More →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default ServicesPage;
