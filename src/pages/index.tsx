
import Layout from "@/components/layout/Layout";
import { HeroSection } from "@/components/ui/hero-section";
import { ServiceCard } from "@/components/ui/service-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProjectCard } from "@/components/ui/project-card";
import { TestimonialCard } from "@/components/ui/testimonial-card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Construction, Briefcase, Wrench, ChevronRight, MapPin, Phone, Mail } from "lucide-react";

const Index = () => {
  // Sample data for services
  const services = [
    {
      title: "Engineering",
      description: "Expert engineering solutions tailored to your project requirements with precision and innovation.",
      icon: <Wrench className="h-6 w-6" />,
      link: "/services#engineering",
    },
    {
      title: "Procurement",
      description: "Efficient procurement services ensuring quality materials and equipment at competitive prices.",
      icon: <Briefcase className="h-6 w-6" />,
      link: "/services#procurement",
    },
    {
      title: "Construction",
      description: "Professional construction management delivering projects on time, within budget, and to specification.",
      icon: <Construction className="h-6 w-6" />,
      link: "/services#construction",
    },
  ];

  // Sample data for featured projects
  const featuredProjects = [
    {
      id: "1",
      title: "Metropolitan Office Tower",
      category: "Commercial Construction",
      location: "Lagos, Nigeria",
      imageUrl: "https://images.unsplash.com/photo-1486718448742-163732cd1544?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      completed: true,
    },
    {
      id: "2",
      title: "Riverside Bridge Project",
      category: "Infrastructure",
      location: "Port Harcourt, Nigeria",
      imageUrl: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      completed: true,
    },
    {
      id: "3",
      title: "Healthcare Complex",
      category: "Institutional",
      location: "Accra, Ghana",
      imageUrl: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      completed: false,
    },
  ];

  // Sample testimonials
  const testimonials = [
    {
      quote: "Enors Associates exceeded our expectations with their professionalism and attention to detail. Our project was completed ahead of schedule and within budget.",
      author: "John Smith",
      position: "CEO",
      company: "TechInnovate Ltd.",
      avatarUrl: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      quote: "Working with Enors was a seamless experience. Their team's expertise and commitment to excellence is unmatched in the industry.",
      author: "Sarah Johnson",
      position: "Project Director",
      company: "Global Infrastructures",
      avatarUrl: "https://randomuser.me/api/portraits/women/2.jpg",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <HeroSection
        title="Building Tomorrow's Infrastructure Today"
        subtitle="Enors Associates Global Resources Limited provides world-class engineering, procurement, and construction services to clients across various industries."
        cta={{
          primary: {
            text: "Request a Quote",
            href: "/contact",
          },
          secondary: {
            text: "Learn More",
            href: "/about",
          },
        }}
        imageUrl="https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
      />

      {/* About Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-enors-blue mb-6">
                Excellence in Engineering, Procurement, & Construction
              </h2>
              <p className="text-gray-600 mb-6">
                Enors Associates Global Resources Limited is a leading EPC company committed to delivering exceptional services and solutions to our clients worldwide. With a team of expert professionals, we ensure that every project meets the highest standards of quality and efficiency.
              </p>
              <p className="text-gray-600 mb-8">
                Our mission is to deliver innovative and sustainable solutions that exceed client expectations while maintaining the highest standards of safety, quality, and environmental responsibility.
              </p>
              <Button asChild className="bg-enors-orange hover:bg-enors-red text-white">
                <Link to="/about" className="inline-flex items-center">
                  About Our Company
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1486718448742-163732cd1544?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Enors Associates Team"
                className="rounded-lg shadow-lg w-full h-auto"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded shadow-lg hidden md:block">
                <div className="text-4xl font-bold text-enors-blue">25+</div>
                <div className="text-gray-600">Years of Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Our Services"
            subtitle="We provide comprehensive EPC services tailored to meet the unique needs of each client and project."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                link={service.link}
              />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button asChild variant="outline" className="border-enors-blue text-enors-blue hover:bg-enors-blue hover:text-white">
              <Link to="/services" className="inline-flex items-center">
                View All Services
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Our Projects"
            subtitle="Explore our portfolio of completed and ongoing projects that showcase our expertise and capabilities."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                id={project.id}
                title={project.title}
                category={project.category}
                location={project.location}
                imageUrl={project.imageUrl}
                completed={project.completed}
              />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button asChild variant="outline" className="border-enors-blue text-enors-blue hover:bg-enors-blue hover:text-white">
              <Link to="/projects" className="inline-flex items-center">
                View All Projects
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Client Testimonials"
            subtitle="See what our clients say about our services and commitment to excellence."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                quote={testimonial.quote}
                author={testimonial.author}
                position={testimonial.position}
                company={testimonial.company}
                avatarUrl={testimonial.avatarUrl}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-enors-blue py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-gray-100 max-w-2xl mx-auto mb-8">
            Contact us today to discuss how Enors Associates can bring your project to life with our expert engineering, procurement, and construction services.
          </p>
          <Button asChild className="bg-enors-orange hover:bg-enors-red text-white px-8 py-6 text-lg">
            <Link to="/contact">Request a Quote</Link>
          </Button>
        </div>
      </section>

      {/* Contact Info Preview */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
              <MapPin className="h-10 w-10 text-enors-orange mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
              <p className="text-gray-600">
                123 Business Avenue, Suite 100<br />
                Lagos, Nigeria
              </p>
            </div>
            
            <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
              <Phone className="h-10 w-10 text-enors-orange mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Call Us</h3>
              <p className="text-gray-600">
                <a href="tel:+2341234567890" className="hover:text-enors-blue transition-colors">
                  +234 123 456 7890
                </a>
              </p>
            </div>
            
            <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
              <Mail className="h-10 w-10 text-enors-orange mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Email Us</h3>
              <p className="text-gray-600">
                <a href="mailto:info@enorsassociates.com" className="hover:text-enors-blue transition-colors">
                  info@enorsassociates.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
