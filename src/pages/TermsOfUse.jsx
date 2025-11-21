import React from "react";
import { FileText, Mail, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function TermsOfUse() {
  // Set page title
  React.useEffect(() => {
    document.title = "Terms of Service - Yashlok Welfare Foundation";
  }, []);
  const sections = [
    {
      number: "1️⃣",
      title: "Introduction",
      content: 'Welcome to Yashlok Welfare Foundation ("the Foundation", "we", "our", or "us"). These Terms of Use govern your access and use of our website — www.yashlokwelfare.org — and all associated pages, forms, and features.\n\nBy accessing or using this website, you agree to be bound by these Terms. If you do not agree, please discontinue using our site.'
    },
    {
      number: "2️⃣",
      title: "Purpose of the Website",
      content: "The Yashlok Welfare Foundation website is intended to:\n• Provide information about our programs, campaigns, and initiatives\n• Allow individuals to register as volunteers or partners\n• Facilitate online donations for charitable purposes\n• Share updates, reports, and awareness materials\n\nThe website is for public awareness and social welfare purposes only. It cannot be used for any commercial, political, or unlawful activity."
    },
    {
      number: "3️⃣",
      title: "Intellectual Property Rights",
      content: 'All content on this website — including text, images, logos, graphics, icons, data, and media — is the intellectual property of Yashlok Welfare Foundation unless stated otherwise.\n\nYou may:\n✅ View, share, or quote content for educational or awareness purposes, provided you give proper credit to "Yashlok Welfare Foundation."\n\nYou may NOT:\n❌ Copy, reproduce, sell, or distribute content for commercial gain\n❌ Use our logo or brand identity without prior written permission\n❌ Modify or misuse any material that could harm our reputation or mislead others\n\nAll intellectual property rights are protected under the Indian Copyright Act, 1957.'
    },
    {
      number: "4️⃣",
      title: "Volunteer & Partner Participation",
      content: "By submitting any volunteer, internship, or partnership form on this website, you agree that:\n• The information provided is accurate and truthful\n• Your participation is voluntary and subject to Foundation approval\n• The Foundation reserves the right to verify details or deny participation if needed\n• Any event participation will follow our Volunteer Code of Conduct and Safety Guidelines\n\nYashlok Welfare Foundation is not responsible for personal belongings or third-party liabilities during volunteer activities."
    },
    {
      number: "5️⃣",
      title: "Donations & Payments",
      content: "• All donations made through our website are processed via secure, authorized payment gateways (such as Razorpay, Stripe, or PayU)\n• Donors are requested to provide valid contact and payment details to generate official receipts\n• Donations once made are non-refundable, except in cases of duplicate transactions or verified payment errors\n• The Foundation ensures that all funds are used solely for charitable, environmental, and road-safety purposes\n\nFor refund or payment-related issues, please contact us at donate@yashlokwelfare.org."
    },
    {
      number: "6️⃣",
      title: "Accuracy of Information",
      content: "We make every effort to ensure that the information on our website is accurate and updated. However, occasional errors, typographical issues, or outdated data may appear.\n\nYashlok Welfare Foundation does not guarantee the absolute accuracy, completeness, or reliability of the website's content. Users are encouraged to verify information directly by contacting us."
    },
    {
      number: "7️⃣",
      title: "External Links",
      content: "Our website may contain links to external websites, partners, or government resources. These are provided for convenience and information only.\n\nWe do not control, endorse, or take responsibility for the content or privacy practices of external sites. Visiting external links is at the user's own discretion."
    },
    {
      number: "8️⃣",
      title: "Limitation of Liability",
      content: "Yashlok Welfare Foundation, its directors, team members, or volunteers shall not be liable for:\n• Any direct or indirect damages arising from use of the website\n• Technical errors, delays, or service interruptions\n• Loss of data or unauthorized access caused by third-party systems\n• Misuse or unauthorized use of the Foundation's name, content, or materials\n\nThe website is provided 'as is' and 'as available' — without any warranties, expressed or implied."
    },
    {
      number: "9️⃣",
      title: "User Responsibilities",
      content: "By using this website, you agree to:\n• Use the site only for lawful and non-commercial purposes\n• Not upload or transmit any harmful content, malware, or misleading information\n• Not impersonate any person or entity related to the Foundation\n• Respect other users and follow basic digital etiquette\n\nViolation of these terms may lead to restricted access or legal action."
    },
    {
      number: "🔟",
      title: "Data Protection & Privacy",
      content: "We respect your privacy and handle your data as per our Privacy Policy. By using this website, you consent to our data collection and usage practices described therein."
    },
    {
      number: "11️⃣",
      title: "Changes to Terms",
      content: 'We reserve the right to modify or update these Terms of Use at any time. Updated terms will be posted on this page with the "Last Updated" date. Continued use of the website after changes implies acceptance of the revised Terms.'
    },
    {
      number: "12️⃣",
      title: "Governing Law & Jurisdiction",
      content: "These Terms are governed by and construed in accordance with the laws of India. Any disputes arising from this website shall be subject to the exclusive jurisdiction of the courts in Mumbai, Maharashtra."
    },
    {
      number: "13️⃣",
      title: "Contact Us",
      content: "For questions, clarifications, or concerns related to these Terms, please contact us."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-teal-50 to-green-50">
      <div className="bg-gradient-to-r from-blue-600 via-teal-600 to-green-600 text-white py-20 relative overflow-hidden" style={{ perspective: '1000px' }}>
        <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <FileText className="w-16 h-16 mx-auto mb-6 animate-[flip_1.2s_ease-out]" />
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 animate-[flip_1.2s_ease-out]">⚖️ Terms of Use</h1>
          <style jsx>{`
            @keyframes flip {
              from {
                opacity: 0;
                transform: rotateY(-180deg);
              }
              to {
                opacity: 1;
                transform: rotateY(0);
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
              <CardHeader className="bg-gradient-to-r from-green-50 to-gray-50">
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
        <Card className="shadow-2xl mt-8 bg-gradient-to-br from-green-50 to-blue-50">
          <CardContent className="p-8">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-gray-900">Email:</p>
                  <a href="mailto:legal@yashlokwelfare.org" className="text-green-600 hover:underline">
                    legal@yashlokwelfare.org
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
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
        <Card className="shadow-2xl mt-8 bg-gradient-to-r from-blue-600 via-teal-600 to-green-600 text-white">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Closing Statement</h3>
            <p className="text-lg leading-relaxed">
              By using this website, you acknowledge that you have read, understood, and agreed to the above Terms of Use. We thank you for your trust and for being part of Yashlok Welfare Foundation's mission to create a cleaner and safer India.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}