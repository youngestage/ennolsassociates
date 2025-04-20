
import Layout from "@/components/layout/Layout";
import { ServiceRequestForm } from "@/components/forms/ServiceRequestForm";

const ConstructionServices = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center text-enors-blue mb-8">Construction Services</h1>
        
        <div className="max-w-3xl mx-auto space-y-8">
          <section className="prose max-w-none">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Excellence in Construction</h2>
            <p className="text-gray-600">
              Our construction services combine cutting-edge technology with proven expertise to deliver projects of any scale. We pride ourselves on quality, safety, and timely delivery.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="p-6 bg-white rounded-lg shadow-sm border">
                <h3 className="text-xl font-semibold text-enors-blue mb-3">Project Management</h3>
                <p className="text-gray-600">End-to-end project management and coordination services.</p>
              </div>
              
              <div className="p-6 bg-white rounded-lg shadow-sm border">
                <h3 className="text-xl font-semibold text-enors-blue mb-3">Site Development</h3>
                <p className="text-gray-600">Comprehensive site preparation and development services.</p>
              </div>
              
              <div className="p-6 bg-white rounded-lg shadow-sm border">
                <h3 className="text-xl font-semibold text-enors-blue mb-3">Building Construction</h3>
                <p className="text-gray-600">Expert construction services for all building types.</p>
              </div>
              
              <div className="p-6 bg-white rounded-lg shadow-sm border">
                <h3 className="text-xl font-semibold text-enors-blue mb-3">Quality Assurance</h3>
                <p className="text-gray-600">Rigorous quality control throughout construction.</p>
              </div>
            </div>
          </section>
          
          <section className="mt-12">
            <h2 className="text-2xl font-semibold text-center text-gray-900 mb-8">Request Construction Services</h2>
            <ServiceRequestForm serviceType="construction" className="bg-white p-6 rounded-lg shadow-sm border" />
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default ConstructionServices;
