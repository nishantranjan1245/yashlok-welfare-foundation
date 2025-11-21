import React from "react";
import { AlertTriangle, Mail, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

export default function Disclaimer() {
  // Set page title
  React.useEffect(() => {
    document.title = "Disclaimer - Yashlok Welfare Foundation";
  }, []);
  const sections = [
    {
      number: "1️⃣",
      title: "General Information",
      content: "The website www.yashlokwelfare.org is owned and operated by Yashlok Welfare Foundation, a registered non-profit organization under Section 8 of the Companies Act, 2013 (CIN: U85300MH2017NPL291454).\n\nAll information provided on this website is intended for general awareness and public benefit purposes only. While we strive to keep content accurate and updated, Yashlok Welfare Foundation makes no warranties or guarantees regarding the completeness, reliability, or accuracy of any information shared on the site."
    },
    {
      number: "2️⃣",
      title: "No Professional or Legal Advice",
      content: "The materials on this website — including articles, updates, toolkits, and awareness content — are not meant to replace professional, legal, or governmental advice. They are for educational and informational purposes related to river cleaning, road safety, and community welfare.\n\nUsers are advised to verify relevant laws, regulations, or safety norms with appropriate authorities before acting upon any information found here."
    },
    {
      number: "3️⃣",
      title: "External Links Disclaimer",
      content: "Our website may contain links to other websites or resources operated by third parties (for example: government portals, CSR partners, or external NGOs). These links are provided only for convenience and information.\n\nYashlok Welfare Foundation does not control, endorse, or take responsibility for the content, accuracy, or privacy practices of these external sites. Visiting any external link from our website is at your own discretion and risk."
    },
    {
      number: "4️⃣",
      title: "Event Participation Disclaimer",
      content: "Participation in any event, campaign, or activity organized by Yashlok Welfare Foundation is entirely voluntary. While every effort is made to ensure volunteer safety and smooth operations, the Foundation shall not be held liable for any personal injury, loss, or damage incurred during participation, travel, or third-party engagement.\n\nVolunteers are expected to follow all safety guidelines and instructions issued by team coordinators."
    },
    {
      number: "5️⃣",
      title: "Donation Disclaimer",
      content: "All donations made to Yashlok Welfare Foundation are voluntary and used exclusively for charitable, environmental, and awareness-based activities. The Foundation does not guarantee any material, financial, or tax-related benefits unless specifically mentioned under applicable laws.\n\nRefunds are subject to our Refund & Donation Policy."
    },
    {
      number: "6️⃣",
      title: "Media & Content Disclaimer",
      content: "Photographs, videos, testimonials, and reports displayed on the website are either:\n• Original media created by Yashlok Welfare Foundation, or\n• Shared with consent from volunteers, partners, or event participants\n\nUnauthorized copying, editing, or redistribution of any such content without prior written permission is strictly prohibited."
    },
    {
      number: "7️⃣",
      title: "Limitation of Liability",
      content: "Under no circumstances shall Yashlok Welfare Foundation, its directors, employees, or volunteers be held liable for any direct, indirect, or incidental damages arising from:\n• Use of the website or its content\n• Technical errors, downtime, or data loss\n• Reliance on any material presented online, or\n• Third-party website links and interactions\n\nThis includes, but is not limited to, loss of profits, goodwill, data, or any intangible loss."
    },
    {
      number: "8️⃣",
      title: "Website Availability",
      content: "While we make every effort to keep the website functional and accessible, Yashlok Welfare Foundation does not guarantee uninterrupted access. Maintenance, updates, or unforeseen technical issues may occasionally cause temporary downtime.\n\nWe appreciate your understanding during such instances."
    },
    {
      number: "9️⃣",
      title: "Copyright & Fair Use",
      content: "All materials on this website, including text, logos, graphics, and multimedia, are protected by copyright laws. Content may be shared or quoted only for educational, awareness, or non-commercial purposes, provided that appropriate credit is given to Yashlok Welfare Foundation and the original source is clearly cited.\n\nCommercial reproduction or modification without permission is strictly prohibited."
    },
    {
      number: "🔟",
      title: "Policy Updates",
      content: "Yashlok Welfare Foundation reserves the right to modify or update this Disclaimer at any time, without prior notice. Any such changes will be posted on this page along with the revised date. Users are encouraged to check this page periodically for updates."
    },
    {
      number: "11️⃣",
      title: "Contact Information",
      content: "If you have any questions or concerns about this Disclaimer, please reach out to us."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-teal-50 to-green-50">
      <div className="bg-gradient-to-r from-blue-600 via-teal-600 to-green-600 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)] animate-[ripple_3s_ease-out_infinite]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <AlertTriangle className="w-16 h-16 mx-auto mb-6 animate-[bounce_2s_ease-in-out_infinite]" />
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 animate-[bounce_2s_ease-in-out_infinite]">⚠️ Disclaimer</h1>
          <style jsx>{`
            @keyframes bounce {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(-20px); }
            }
            @keyframes ripple {
              0% { transform: scale(0.8); opacity: 1; }
              100% { transform: scale(2); opacity: 0; }
            }
          `}</style>
          <p className="text-xl">Last Updated: November 2025</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="space-y-6">
          {sections.map((section, index) => (
            <Card key={index} className="shadow-xl">
              <CardHeader className="bg-gradient-to-r from-orange-50 to-red-50">
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
        <Card className="shadow-2xl mt-8 bg-gradient-to-br from-orange-50 to-red-50">
          <CardContent className="p-8">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-orange-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-gray-900">Email:</p>
                  <a href="mailto:legal@yashlokwelfare.org" className="text-orange-600 hover:underline">
                    legal@yashlokwelfare.org
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-orange-600 flex-shrink-0 mt-1" />
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

        {/* Link to Refund Policy */}
        <div className="mt-8 text-center">
          <Link to={createPageUrl("RefundDonationPolicy")}>
            <span className="text-blue-600 hover:underline">View Refund & Donation Policy</span>
          </Link>
        </div>

        {/* Closing Statement */}
        <Card className="shadow-2xl mt-8 bg-gradient-to-r from-blue-600 via-teal-600 to-green-600 text-white">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Closing Statement</h3>
            <p className="text-lg leading-relaxed">
              By using this website, you acknowledge that you have read and understood this Disclaimer. Your continued use of www.yashlokwelfare.org implies acceptance of all terms mentioned herein. Yashlok Welfare Foundation aims to share knowledge responsibly — with honesty, transparency, and a focus on positive social impact.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}