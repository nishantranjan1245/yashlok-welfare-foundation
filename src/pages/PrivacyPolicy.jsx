import React from "react";
import { Shield, Mail, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function PrivacyPolicy() {
  // Set page title
  React.useEffect(() => {
    document.title = "Privacy Policy - Yashlok Welfare Foundation";
  }, []);
  const sections = [
    {
      number: "1️⃣",
      title: "Introduction",
      content: "Welcome to Yashlok Welfare Foundation. We value your trust and are committed to protecting your privacy. This Privacy Policy explains how we collect, use, store, and protect your personal information when you visit our website — www.yashlokwelfare.org — or interact with us through forms, donations, or volunteering activities. By using our website or sharing your information, you agree to the practices described in this policy."
    },
    {
      number: "2️⃣",
      title: "Information We Collect",
      content: "We may collect the following types of information from visitors, volunteers, and donors:\n\nA. Personal Information:\n• Name, email address, and phone number (via contact/volunteer forms)\n• Address and identification details (for CSR or FCRA compliance, if applicable)\n• Payment details (processed securely through our donation partners)\n\nB. Non-Personal Information:\n• Browser type, device type, IP address, and pages visited (for analytics)\n• Cookies or similar technologies used to improve user experience\n\nWe do not collect sensitive personal data unless required by law or for donation verification."
    },
    {
      number: "3️⃣",
      title: "How We Use the Information",
      content: "Your data helps us serve you better. We use collected information to:\n• Respond to your queries and contact requests\n• Process volunteer registrations or donation receipts\n• Share updates about our programs, events, or campaigns\n• Improve website performance and user experience\n• Maintain legal and accounting records for compliance\n\nWe never sell, rent, or share your personal information with any unauthorized third party."
    },
    {
      number: "4️⃣",
      title: "Donation & Payment Information",
      content: "All online donations made on our website are processed through secure third-party payment gateways such as Razorpay, Stripe, or PayU. We do not store your credit/debit card information on our servers.\n\nTransaction details are used only for:\n• Generating payment confirmations and receipts\n• Accounting and FCRA/CSR reporting (as required by Indian law)\n\nAll payment data is encrypted and transmitted securely using SSL technology."
    },
    {
      number: "5️⃣",
      title: "Cookies & Analytics",
      content: "Our website may use cookies or analytics tools (like Google Analytics) to understand user behavior and improve site performance.\n\nYou can disable cookies through your browser settings. Analytics data is anonymous and used only for internal review — not for advertising or tracking users personally."
    },
    {
      number: "6️⃣",
      title: "Email Communication",
      content: "If you subscribe to our newsletter or submit your email through any form, you may receive periodic updates about:\n• Upcoming events and volunteer opportunities\n• Impact reports or donation appeals\n• Foundation announcements\n\nYou can unsubscribe anytime by clicking the 'unsubscribe' link in our emails or by contacting us directly at contact@yashlokwelfare.org."
    },
    {
      number: "7️⃣",
      title: "Data Protection & Security",
      content: "We take reasonable precautions to protect your personal data from unauthorized access, loss, or misuse. Our systems use secure hosting and SSL encryption for data transfer.\n\nHowever, no internet transmission is 100% secure — we encourage users to avoid sharing confidential or financial details outside secure forms."
    },
    {
      number: "8️⃣",
      title: "Third-Party Links",
      content: "Our website may include links to external websites (like CSR partners, government portals, or social media platforms). We are not responsible for the privacy practices or content of those websites. Please review their privacy policies before sharing any personal data."
    },
    {
      number: "9️⃣",
      title: "Access & Control Over Your Information",
      content: "You have the right to:\n• Request access to your personal data held by us\n• Request correction or deletion of inaccurate data\n• Withdraw consent for communications\n\nFor any such requests, please contact us at privacy@yashlokwelfare.org. We will respond within 10–15 business days as per applicable Indian data protection norms."
    },
    {
      number: "🔟",
      title: "Legal Compliance",
      content: "Yashlok Welfare Foundation operates under Indian law and complies with:\n• The Information Technology Act, 2000\n• IT (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011\n• FCRA norms (for donations received from abroad, where applicable)\n\nWe cooperate with law enforcement or government authorities when required by law."
    },
    {
      number: "11️⃣",
      title: "Updates to This Policy",
      content: "We may update this Privacy Policy from time to time to reflect operational, legal, or regulatory changes. All updates will be posted on this page with the new effective date."
    },
    {
      number: "12️⃣",
      title: "Contact Us",
      content: "If you have any questions, feedback, or privacy-related concerns, please reach out to us."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-teal-50 to-green-50">
      <div className="bg-gradient-to-r from-blue-600 via-teal-600 to-green-600 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 backdrop-blur-sm"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <Shield className="w-16 h-16 mx-auto mb-6 animate-[fadeInBlur_1.5s_ease-out]" />
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 animate-[fadeInBlur_1.5s_ease-out]">🔒 Privacy Policy</h1>
          <style jsx>{`
            @keyframes fadeInBlur {
              from {
                opacity: 0;
                filter: blur(10px);
              }
              to {
                opacity: 1;
                filter: blur(0);
              }
            }
          `}</style>
          <p className="text-xl">Last Updated: November 2025</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="space-y-6">
          {sections.map((section, index) => (
            <Card key={index} className="shadow-xl">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-gray-50">
                <CardTitle className="text-2xl flex items-center gap-3">
                  <span>{section.number}</span>
                  <span>{section.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">{section.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact Card */}
        <Card className="shadow-2xl mt-8 bg-gradient-to-br from-blue-50 to-purple-50">
          <CardContent className="p-8">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-gray-900">Email:</p>
                  <a href="mailto:privacy@yashlokwelfare.org" className="text-blue-600 hover:underline">
                    privacy@yashlokwelfare.org
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-gray-900">Address:</p>
                  <p className="text-gray-700">
                    B-405, Mohan Mansion, Gulmohar Road,<br />
                    Chunnabhati (E), Mumbai, Maharashtra, India – 400022
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Closing Statement */}
        <Card className="shadow-2xl mt-8 bg-gradient-to-r from-blue-600 to-green-600 text-white">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Closing Statement</h3>
            <p className="text-lg leading-relaxed">
              Your trust is important to us. At Yashlok Welfare Foundation, we ensure your personal information is handled with transparency, care, and respect. Together, we can build a cleaner, safer, and more responsible society — online and offline.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}