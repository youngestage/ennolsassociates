
import Layout from "@/components/layout/Layout";
import { ServiceRequestForm } from "@/components/forms/ServiceRequestForm";

const QuoteRequestPage = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold text-center text-enors-blue mb-4">Request a Quote</h1>
        <p className="text-center text-gray-600 mb-12">
          Tell us about your project, and our team will get back to you with a detailed quote.
        </p>
        <ServiceRequestForm className="bg-white shadow-lg rounded-lg p-8" />
      </div>
    </Layout>
  );
};

export default QuoteRequestPage;
