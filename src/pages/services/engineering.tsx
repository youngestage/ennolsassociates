
import Layout from "@/components/layout/Layout";
import { ServiceRequestForm } from "@/components/forms/ServiceRequestForm";

const EngineeringServices = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center text-enors-blue mb-8">Engineering Services</h1>
        
        <div className="max-w-3xl mx-auto space-y-8">
          <section className="prose max-w-none">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Engineering Expertise</h2>
            <p className="text-gray-600">
              At Enors Associates, we provide comprehensive engineering solutions tailored to your specific needs. Our team of experienced engineers combines innovative thinking with proven methodologies to deliver exceptional results.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="p-6 bg-white rounded-lg shadow-sm border">
                <h3 className="text-xl font-semibold text-enors-blue mb-3">Design & Planning</h3>
                <p className="text-gray-600">Comprehensive design services and detailed project planning for optimal results.</p>
              </div>
              
              <div className="p-6 bg-white rounded-lg shadow-sm border">
                <h3 className="text-xl font-semibold text-enors-blue mb-3">Technical Consultation</h3>
                <p className="text-gray-600">Expert advice and solutions for complex engineering challenges.</p>
              </div>
              
              <div className="p-6 bg-white rounded-lg shadow-sm border">
                <h3 className="text-xl font-semibold text-enors-blue mb-3">Structural Analysis</h3>
                <p className="text-gray-600">Detailed structural assessment and optimization services.</p>
              </div>
              
              <div className="p-6 bg-white rounded-lg shadow-sm border">
                <h3 className="text-xl font-semibold text-enors-blue mb-3">Quality Assurance</h3>
                <p className="text-gray-600">Rigorous quality control and assurance processes.</p>
              </div>
            </div>
          </section>
          
          <section className="mt-12">
            <h2 className="text-2xl font-semibold text-center text-gray-900 mb-8">Request Engineering Services</h2>
            <ServiceRequestForm serviceType="engineering" className="bg-white p-6 rounded-lg shadow-sm border" />
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default EngineeringServices;
