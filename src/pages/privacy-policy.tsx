
import Layout from "@/components/layout/Layout";

const PrivacyPolicy = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold text-center text-enors-blue mb-8">Privacy Policy</h1>
        
        <div className="prose prose-lg mx-auto">
          <p className="mb-6">
            Last updated: May 4, 2025
          </p>
          
          <h2 className="text-2xl font-semibold text-enors-blue mt-8 mb-4">1. Introduction</h2>
          <p className="mb-4">
            Enors Associates Global Resources Limited ("we," "our," or "us") is committed to protecting your privacy. 
            This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
          </p>
          
          <h2 className="text-2xl font-semibold text-enors-blue mt-8 mb-4">2. Information We Collect</h2>
          <p className="mb-4">
            We may collect information about you in a variety of ways including:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li className="mb-2">Personal Data: Name, email address, phone number, company information, and other contact details you provide when using our services or communicating with us.</li>
            <li className="mb-2">Usage Data: Information about how you use our website, including IP address, browser type, pages visited, time spent, and other diagnostic data.</li>
            <li className="mb-2">Cookies and Tracking Technologies: We use cookies and similar tracking technologies to enhance your experience on our site.</li>
          </ul>
          
          <h2 className="text-2xl font-semibold text-enors-blue mt-8 mb-4">3. How We Use Your Information</h2>
          <p className="mb-4">
            We may use the information we collect about you to:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li className="mb-2">Provide, maintain, and improve our services</li>
            <li className="mb-2">Process and complete transactions</li>
            <li className="mb-2">Send you technical notices, updates, and support messages</li>
            <li className="mb-2">Respond to your comments, questions, and requests</li>
            <li className="mb-2">Analyze trends, usage, and activities in connection with our services</li>
          </ul>
          
          <h2 className="text-2xl font-semibold text-enors-blue mt-8 mb-4">4. Contact Us</h2>
          <p className="mb-4">
            If you have questions or concerns about this Privacy Policy, please contact us at:
          </p>
          <p className="mb-4">
            Enors Associates Global Resources Limited<br />
            Email: privacy@enorsassociates.com<br />
            Phone: +234 1234 567 890
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default PrivacyPolicy;
