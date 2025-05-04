
import Layout from "@/components/layout/Layout";

const TermsOfService = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold text-center text-enors-blue mb-8">Terms of Service</h1>
        
        <div className="prose prose-lg mx-auto">
          <p className="mb-6">
            Last updated: May 4, 2025
          </p>
          
          <h2 className="text-2xl font-semibold text-enors-blue mt-8 mb-4">1. Acceptance of Terms</h2>
          <p className="mb-4">
            By accessing or using the services of Enors Associates Global Resources Limited ("we," "our," or "us"), 
            you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
          </p>
          
          <h2 className="text-2xl font-semibold text-enors-blue mt-8 mb-4">2. Description of Services</h2>
          <p className="mb-4">
            Enors Associates provides engineering, procurement, and construction services as described on our website. 
            Our services are subject to availability and may change without notice.
          </p>
          
          <h2 className="text-2xl font-semibold text-enors-blue mt-8 mb-4">3. Project Agreements</h2>
          <p className="mb-4">
            All services provided by Enors Associates will be governed by specific project agreements. These agreements will outline:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li className="mb-2">Scope of work and deliverables</li>
            <li className="mb-2">Project timeline and milestones</li>
            <li className="mb-2">Payment terms and conditions</li>
            <li className="mb-2">Warranties and guarantees</li>
            <li className="mb-2">Client responsibilities</li>
          </ul>
          
          <h2 className="text-2xl font-semibold text-enors-blue mt-8 mb-4">4. Intellectual Property</h2>
          <p className="mb-4">
            All content on our website including text, graphics, logos, and images is the property of Enors Associates 
            and is protected by copyright laws. Project-specific intellectual property rights will be addressed in individual project agreements.
          </p>
          
          <h2 className="text-2xl font-semibold text-enors-blue mt-8 mb-4">5. Limitation of Liability</h2>
          <p className="mb-4">
            To the maximum extent permitted by law, Enors Associates will not be liable for any indirect, incidental, 
            special, consequential, or punitive damages arising from your use of our services.
          </p>
          
          <h2 className="text-2xl font-semibold text-enors-blue mt-8 mb-4">6. Contact Information</h2>
          <p className="mb-4">
            If you have questions about these Terms of Service, please contact us at:
          </p>
          <p className="mb-4">
            Enors Associates Global Resources Limited<br />
            Email: legal@enorsassociates.com<br />
            Phone: +234 1234 567 890
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default TermsOfService;
