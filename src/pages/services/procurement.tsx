
import Layout from "@/components/layout/Layout";
import { ServiceRequestForm } from "@/components/forms/ServiceRequestForm";

const ProcurementServices = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center text-enors-blue mb-8">Procurement Services</h1>
        
        <div className="max-w-3xl mx-auto space-y-8">
          <section className="prose max-w-none">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Strategic Procurement Solutions</h2>
            <p className="text-gray-600">
              Our procurement services ensure you get the best value for your investments. We manage the entire procurement process, from vendor selection to delivery coordination.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="p-6 bg-white rounded-lg shadow-sm border">
                <h3 className="text-xl font-semibold text-enors-blue mb-3">Vendor Management</h3>
                <p className="text-gray-600">Comprehensive vendor selection and relationship management.</p>
              </div>
              
              <div className="p-6 bg-white rounded-lg shadow-sm border">
                <h3 className="text-xl font-semibold text-enors-blue mb-3">Supply Chain Optimization</h3>
                <p className="text-gray-600">Streamlined supply chain processes for maximum efficiency.</p>
              </div>
              
              <div className="p-6 bg-white rounded-lg shadow-sm border">
                <h3 className="text-xl font-semibold text-enors-blue mb-3">Cost Management</h3>
                <p className="text-gray-600">Strategic cost optimization and negotiation services.</p>
              </div>
              
              <div className="p-6 bg-white rounded-lg shadow-sm border">
                <h3 className="text-xl font-semibold text-enors-blue mb-3">Quality Control</h3>
                <p className="text-gray-600">Rigorous quality assurance for all procured items.</p>
              </div>
            </div>
          </section>
          
          <section className="mt-12">
            <h2 className="text-2xl font-semibold text-center text-gray-900 mb-8">Request Procurement Services</h2>
            <ServiceRequestForm serviceType="procurement" className="bg-white p-6 rounded-lg shadow-sm border" />
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default ProcurementServices;
