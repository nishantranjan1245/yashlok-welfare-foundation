import React from "react";
import { DollarSign, Mail, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

export default function RefundDonationPolicy() {
  // Set page title
  React.useEffect(() => {
    document.title = "Refund & Donation Policy - Yashlok Welfare Foundation";
  }, []);
  const sections = [
    {
      number: "1️⃣",
      title: "Introduction",
      content: "At Yashlok Welfare Foundation, we deeply value your trust and generosity. Every contribution, big or small, helps us in fulfilling our mission — to make India's rivers cleaner and roads safer through awareness and action.\n\nThis Refund & Donation Policy explains how we handle online and offline donations, payment confirmations, and refund requests (if any).\n\nBy donating through our website (www.yashlokwelfare.org), you agree to the terms mentioned below."
    },
    {
      number: "2️⃣",
      title: "Purpose of Donations",
      content: "All donations received by Yashlok Welfare Foundation are used solely for:\n• River cleaning and restoration activities\n• Road-safety awareness programs\n• Volunteer mobilization and training\n• Awareness materials and logistics support\n• Event and campaign implementation\n\nThe Foundation does not use donations for any personal, political, or non-charitable purposes."
    },
    {
      number: "3️⃣",
      title: "Donation Process",
      content: "• Donations can be made online via secure payment gateways such as Razorpay, Stripe, or PayU\n• We also accept bank transfers, cheques, and UPI payments\n• Once your payment is successful, you will receive a confirmation email and digital receipt within 24–48 hours\n• Donations made in India are governed by the Income Tax Act, 1961 and FCRA regulations (for foreign contributions, if applicable)\n• All donations are recorded in the Foundation's official accounts and audited annually"
    },
    {
      number: "4️⃣",
      title: "Refund Policy",
      content: "Since all contributions are used for charitable and community-based work, donations once made cannot normally be refunded. However, we understand that genuine errors can happen. Refunds will be considered only under the following circumstances:\n\nA. Duplicate Payment:\nIf you made an accidental duplicate transaction for the same donation.\n\nB. Technical Error:\nIf a transaction was charged but not recorded or confirmed due to technical failure.\n\nC. Unauthorized Transaction:\nIf you find that a transaction was processed without your authorization (subject to verification).\n\nIn such cases, please contact us within 7 working days of the transaction with the following details:\n• Donor Name\n• Transaction ID / Payment Reference\n• Donation Date & Amount\n• Contact Email / Phone Number\n\n📧 Email: donate@yashlokwelfare.org\n\nOnce verified, eligible refunds will be processed within 10–15 business days via the original mode of payment."
    },
    {
      number: "5️⃣",
      title: "Cancellation of Donation",
      content: "If you wish to cancel a recurring donation or standing instruction:\n• Send a written request to donate@yashlokwelfare.org at least 7 days before the next scheduled payment\n• Confirmation of cancellation will be shared by email"
    },
    {
      number: "6️⃣",
      title: "Tax Exemption Receipts",
      content: "• Donors (individuals or corporates) will receive a digital receipt for each donation\n• This receipt can be used for accounting or tax declaration purposes (as per current laws)\n• Yashlok Welfare Foundation is a registered non-profit organization under Section 8 of the Companies Act, 2013 (CIN: U85300MH2017NPL291454)\n\n(Note: If 80G certification is obtained in the future, this section can be updated to include tax benefits.)"
    },
    {
      number: "7️⃣",
      title: "Transparency Commitment",
      content: "We maintain full transparency in the utilization of funds. Donations are used strictly for program-related expenses, including:\n• Tools and materials for river cleaning\n• Safety kits for road-safety campaigns\n• Volunteer logistics and event organization\n• Awareness materials, printing, and digital campaigns\n\nOur Annual Impact Report and financial summaries are publicly available for review."
    },
    {
      number: "8️⃣",
      title: "Corporate & CSR Donations",
      content: "Corporates, institutions, or partners contributing under CSR should note that:\n• Donations are accepted through authorized banking channels only\n• Acknowledgment and utilization reports can be provided upon request\n• MoU / CSR agreements will define project-specific fund usage and deliverables\n\n📧 CSR Contact: csr@yashlokwelfare.org"
    },
    {
      number: "9️⃣",
      title: "Security of Payment Information",
      content: "All online payments are processed using SSL encryption through authorized payment gateways. Yashlok Welfare Foundation does not store or access your credit/debit card details.\n\nWe rely on verified payment processors to ensure the safety and confidentiality of all financial data."
    },
    {
      number: "🔟",
      title: "Dispute Resolution",
      content: "In case of any dispute related to donation or refund, the decision of Yashlok Welfare Foundation shall be final. We will make every effort to resolve such matters amicably and promptly.\n\nJurisdiction: Mumbai, Maharashtra (India)"
    },
    {
      number: "11️⃣",
      title: "Contact for Donation Queries",
      content: "For donation receipts, refunds, cancellations, or related issues, please contact us."
    },
    {
      number: "12️⃣",
      title: "Policy Updates",
      content: "This policy may be updated periodically to reflect changes in payment processing systems, laws, or organizational practices. All updates will be posted on this page with the revised date."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-teal-50 to-green-50">
      <div className="bg-gradient-to-r from-blue-600 via-teal-600 to-green-600 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="absolute top-1/2 left-1/2 w-4 h-4 bg-white/30 rounded-full animate-[orbit_4s_linear_infinite]" style={{ animationDelay: `${i * 0.5}s`, '--orbit-radius': `${100 + i * 20}px` }}></div>
            ))}
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <DollarSign className="w-16 h-16 mx-auto mb-6 animate-[swing_2s_ease-in-out_infinite]" />
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 animate-[swing_2s_ease-in-out_infinite]">💰 Refund & Donation Policy</h1>
          <style jsx>{`
            @keyframes swing {
              0%, 100% { transform: rotate(0deg); }
              25% { transform: rotate(15deg); }
              75% { transform: rotate(-15deg); }
            }
            @keyframes orbit {
              from {
                transform: translate(-50%, -50%) rotate(0deg) translateX(var(--orbit-radius)) rotate(0deg);
              }
              to {
                transform: translate(-50%, -50%) rotate(360deg) translateX(var(--orbit-radius)) rotate(-360deg);
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
              <CardHeader className="bg-gradient-to-r from-green-50 to-blue-50">
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
                  <a href="mailto:donate@yashlokwelfare.org" className="text-green-600 hover:underline">
                    donate@yashlokwelfare.org
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

        {/* View Annual Impact Report Link */}
        <div className="mt-8 text-center">
          <Link to={createPageUrl("AnnualImpactReport")}>
            <span className="text-blue-600 hover:underline">👉 View Annual Impact Report</span>
          </Link>
        </div>

        {/* Closing Statement */}
        <Card className="shadow-2xl mt-8 bg-gradient-to-r from-blue-600 via-teal-600 to-green-600 text-white">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Closing Statement</h3>
            <p className="text-lg leading-relaxed mb-4">
              We appreciate your generosity and faith in our mission. Your donations help us clean rivers, promote road safety, and create sustainable change across communities.
            </p>
            <p className="text-lg leading-relaxed">
              Every rupee counts — and every contribution is used with integrity, transparency, and accountability. Thank you for your continued support. 💚
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}