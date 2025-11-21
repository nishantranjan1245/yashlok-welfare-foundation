import React from "react";
import { Eye, Download, CheckCircle, Mail, Phone, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

export default function TransparencyReport() {
  // Set page title
  React.useEffect(() => {
    document.title = "Transparency Report - Yashlok Welfare Foundation";
  }, []);
  const financialAllocation = [
    { category: "Program Implementation", percentage: 65, desc: "Direct campaign & field operations for river cleaning and road safety", color: "bg-blue-600" },
    { category: "Volunteer Support & Training", percentage: 15, desc: "Volunteer logistics, safety gear, workshops, and certifications", color: "bg-green-600" },
    { category: "Awareness & Outreach", percentage: 10, desc: "Printing, digital awareness, and community sessions", color: "bg-purple-600" },
    { category: "Administrative Costs", percentage: 5, desc: "Office, communication, and legal compliance", color: "bg-orange-600" },
    { category: "Monitoring & Reporting", percentage: 5, desc: "Audits, transparency reports, and impact evaluation", color: "bg-pink-600" }
  ];

  const fundSources = [
    { source: "Individual Donations", desc: "Public contributions via website & offline drives", percentage: 42 },
    { source: "Corporate CSR", desc: "Partner companies under CSR programs", percentage: 38 },
    { source: "Institutional Grants", desc: "NGOs, government or civic collaborations", percentage: 10 },
    { source: "Events & Campaign Sponsorships", desc: "Awareness events and volunteer programs", percentage: 8 },
    { source: "Miscellaneous Support", desc: "In-kind materials, volunteer equipment", percentage: 2 }
  ];

  const principles = [
    { title: "Integrity", desc: "All activities align with our mission and are executed ethically." },
    { title: "Accountability", desc: "We maintain detailed documentation for all programs and expenses." },
    { title: "Public Disclosure", desc: "Key reports and audits are publicly available." },
    { title: "Participation", desc: "Volunteers and partners are part of every major initiative." },
    { title: "Compliance", desc: "We adhere strictly to all legal, FCRA, and CSR norms." }
  ];

  const monitoringSteps = [
    { icon: "📋", title: "Pre-Event Planning Reports", desc: "Define objectives, budget, and outcomes" },
    { icon: "📸", title: "On-Ground Documentation", desc: "Photo/video records for every campaign" },
    { icon: "🧾", title: "Post-Event Reports", desc: "Data on volunteers, waste collected, and outreach" },
    { icon: "📊", title: "Quarterly Review Meetings", desc: "Internal assessment of fund utilization and impact" },
    { icon: "🧠", title: "Annual Audit", desc: "Conducted by independent Chartered Accountants" }
  ];

  const governance = [
    { title: "Board of Directors", desc: "Strategic decision-making and legal compliance" },
    { title: "Advisory Panel", desc: "Experts guiding program strategy and partnerships" },
    { title: "Project Leads", desc: "Manage on-ground events and volunteer coordination" },
    { title: "Finance & Audit Committee", desc: "Reviews accounts, budgets, and utilization" },
    { title: "Volunteer Representatives", desc: "Provide feedback and ensure transparency in field operations" }
  ];

  const futureCommitments = [
    "Publish Quarterly Transparency Dashboards on the website",
    "Launch 'Open Data Access' for CSR & donors to view live impact metrics",
    "Introduce Volunteer Impact Tracker for individual contribution logs",
    "Conduct Annual Public Accountability Forum in Mumbai"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-teal-50 to-green-50">
      <div className="bg-gradient-to-r from-blue-600 via-teal-600 to-green-600 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute bottom-0 left-0 w-full h-2 bg-white/30 animate-[progress_3s_ease-out_infinite]"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent animate-[scan_4s_linear_infinite]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <Eye className="w-16 h-16 mx-auto mb-6 animate-[blink_3s_ease-in-out_infinite]" />
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 animate-[reveal_1s_ease-out]">🧾 Transparency Report</h1>
          <style jsx>{`
            @keyframes progress {
              from { width: 0%; }
              to { width: 100%; }
            }
            @keyframes scan {
              0%, 100% { transform: translateX(-100%); }
              50% { transform: translateX(100%); }
            }
            @keyframes blink {
              0%, 100% { opacity: 1; }
              50% { opacity: 0.3; }
            }
            @keyframes reveal {
              from {
                opacity: 0;
                clip-path: inset(0 100% 0 0);
              }
              to {
                opacity: 1;
                clip-path: inset(0 0 0 0);
              }
            }
          `}</style>
          <p className="text-xl">Last Updated: November 2025</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* 1. Introduction */}
        <Card className="shadow-2xl mb-16">
          <CardHeader className="bg-gradient-to-r from-blue-50 to-green-50">
            <CardTitle className="text-3xl">1️⃣ Introduction</CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              At Yashlok Welfare Foundation, transparency is the foundation of our credibility. We believe that every rupee donated and every effort contributed must reflect in measurable, visible change.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              This Transparency Report provides an overview of our fund utilization, governance, monitoring systems, and accountability measures — ensuring that our supporters know exactly how their contributions make a difference.
            </p>
          </CardContent>
        </Card>

        {/* 2. Organizational Overview */}
        <Card className="shadow-2xl mb-16">
          <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50">
            <CardTitle className="text-3xl">2️⃣ Organizational Overview</CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-gray-700 mb-2"><strong>Registered Name:</strong> Yashlok Welfare Foundation</p>
                <p className="text-gray-700 mb-2"><strong>CIN:</strong> U85300MH2017NPL291454</p>
                <p className="text-gray-700 mb-2"><strong>Registered Date:</strong> 20 February 2017</p>
                <p className="text-gray-700 mb-2"><strong>Type:</strong> Section 8 Non-Profit Company</p>
              </div>
              <div>
                <p className="text-gray-700 mb-3"><strong>Key Directors:</strong></p>
                <ul className="space-y-1 text-gray-700 ml-4">
                  <li>• Mr. Alok Prakash Adhikari</li>
                  <li>• Mr. Yashwin Honnaya Bangera</li>
                </ul>
              </div>
            </div>
            <div className="mt-6">
              <p className="text-gray-700 mb-3"><strong>Head Office:</strong></p>
              <p className="text-gray-700">B-405, Mohan Mansion, Gulmohar Road, Chunnabhatti (E), Mumbai, Maharashtra, India – 400022</p>
            </div>
            <div className="mt-6">
              <p className="text-gray-700 mb-3"><strong>Primary Focus Areas:</strong></p>
              <ul className="space-y-1 text-gray-700 ml-4">
                <li>• River Cleaning Awareness</li>
                <li>• Road Safety Campaigns</li>
                <li>• Sustainable Waste Management</li>
                <li>• Community Engagement</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* 3. Guiding Principles */}
        <Card className="shadow-2xl mb-16">
          <CardHeader className="bg-gradient-to-r from-green-50 to-blue-50">
            <CardTitle className="text-3xl">3️⃣ Guiding Principles of Transparency</CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <p className="text-gray-700 mb-6">Our operations are guided by five key principles:</p>
            <div className="grid md:grid-cols-2 gap-6">
              {principles.map((principle, index) => (
                <div key={index} className="bg-white border-2 border-blue-100 rounded-lg p-6">
                  <h3 className="font-bold text-xl text-gray-900 mb-2">{principle.title}</h3>
                  <p className="text-gray-700">{principle.desc}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* 4. Financial Overview */}
        <Card className="shadow-2xl mb-16">
          <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50">
            <CardTitle className="text-3xl">4️⃣ Annual Financial Overview (FY 2024–2025)</CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <div className="overflow-x-auto mb-8">
              <table className="w-full">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">Category</th>
                    <th className="px-6 py-4 text-center font-semibold">Allocation</th>
                    <th className="px-6 py-4 text-left font-semibold">Description</th>
                  </tr>
                </thead>
                <tbody>
                  {financialAllocation.map((item, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-6 py-4 text-gray-900">{item.category}</td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex items-center justify-center gap-3">
                          <div className="flex-1 max-w-xs bg-gray-200 rounded-full h-3">
                            <div className={`${item.color} h-3 rounded-full transition-all duration-500`} style={{ width: `${item.percentage}%` }} />
                          </div>
                          <span className="font-bold text-gray-900 w-12">{item.percentage}%</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-gray-700 text-sm">{item.desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="bg-blue-50 rounded-lg p-6">
              <p className="text-gray-700 mb-4">
                <strong>Total Funds Utilized (FY 2024–25):</strong> ₹XX,XX,XXX<br />
                <span className="text-sm">(Audited report available upon request.)</span>
              </p>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                <Download className="w-5 h-5 mr-2" />
                Download Audited Financial Report PDF
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* 5. Source of Funds */}
        <Card className="shadow-2xl mb-16">
          <CardHeader className="bg-gradient-to-r from-green-50 to-teal-50">
            <CardTitle className="text-3xl">5️⃣ Source of Funds</CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-green-600 to-teal-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Source</th>
                    <th className="px-6 py-4 text-left">Description</th>
                    <th className="px-6 py-4 text-center">FY 2024–2025 Contribution</th>
                  </tr>
                </thead>
                <tbody>
                  {fundSources.map((item, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-6 py-4 font-semibold text-gray-900">{item.source}</td>
                      <td className="px-6 py-4 text-gray-700">{item.desc}</td>
                      <td className="px-6 py-4 text-center font-bold text-green-600">{item.percentage}%</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* 6. Monitoring System */}
        <Card className="shadow-2xl mb-16">
          <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50">
            <CardTitle className="text-3xl">6️⃣ Monitoring & Evaluation System</CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <p className="text-gray-700 mb-6">To ensure accountability, we follow a structured monitoring framework:</p>
            <div className="space-y-4">
              {monitoringSteps.map((step, index) => (
                <div key={index} className="flex items-start gap-4 bg-white border-2 border-purple-100 rounded-lg p-4">
                  <span className="text-3xl">{step.icon}</span>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-1">{step.title}</h3>
                    <p className="text-gray-700">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-gray-700 mt-6 italic">
              Every initiative undergoes review by the Board of Directors for accuracy and compliance.
            </p>
          </CardContent>
        </Card>

        {/* 7. FCRA Compliance */}
        <Card className="shadow-2xl mb-16">
          <CardHeader className="bg-gradient-to-r from-orange-50 to-red-50">
            <CardTitle className="text-3xl">7️⃣ FCRA & Compliance</CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <div className="space-y-3 mb-6">
              <p className="text-gray-700"><strong>FCRA Registration Number:</strong> 083781760</p>
              <ul className="space-y-2 text-gray-700 ml-4">
                <li>• Compliant with Ministry of Home Affairs (India) norms</li>
                <li>• All foreign contributions are reported quarterly as per FCRA regulations</li>
                <li>• No funds are used for political or religious activities</li>
                <li>• Annual FCRA reports are available for public inspection</li>
              </ul>
            </div>
            <Button className="bg-orange-600 hover:bg-orange-700 text-white">
              <Download className="w-5 h-5 mr-2" />
              View FCRA Disclosure Report PDF
            </Button>
          </CardContent>
        </Card>

        {/* 8. Governance */}
        <Card className="shadow-2xl mb-16">
          <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50">
            <CardTitle className="text-3xl">8️⃣ Governance & Decision-Making</CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <p className="text-gray-700 mb-6">Our governance structure ensures checks and balances at every level:</p>
            <div className="grid md:grid-cols-2 gap-6">
              {governance.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-gray-700 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-gray-700 mt-6 italic">
              All board meetings and resolutions are documented and audited annually.
            </p>
          </CardContent>
        </Card>

        {/* 9. Impact Verification */}
        <Card className="shadow-2xl mb-16">
          <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50">
            <CardTitle className="text-3xl">9️⃣ Impact Verification</CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <p className="text-gray-700 mb-6">We believe in measurable impact. All project outcomes are verified using:</p>
            <div className="space-y-4">
              <div className="bg-white border-2 border-green-100 rounded-lg p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2">Quantitative Data</h3>
                <p className="text-gray-700">Waste collected, volunteers engaged, helmets distributed, etc.</p>
              </div>
              <div className="bg-white border-2 border-green-100 rounded-lg p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2">Qualitative Data</h3>
                <p className="text-gray-700">Testimonials, media coverage, and beneficiary feedback</p>
              </div>
              <div className="bg-white border-2 border-green-100 rounded-lg p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2">Third-Party Validation</h3>
                <p className="text-gray-700">Partner reviews and CSR impact audits where applicable</p>
              </div>
            </div>
            <div className="mt-6 text-center">
              <Link to={createPageUrl("AnnualImpactReport")}>
                <span className="text-blue-600 hover:underline">👉 View Annual Impact Report</span>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* 10. Public Disclosure */}
        <Card className="shadow-2xl mb-16">
          <CardHeader className="bg-gradient-to-r from-yellow-50 to-orange-50">
            <CardTitle className="text-3xl">🔟 Public Disclosure & Accessibility</CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <p className="text-gray-700 mb-6">We make the following documents publicly available through our website:</p>
            <ul className="space-y-2 text-gray-700 ml-4 mb-6">
              <li>• Annual Impact Report</li>
              <li>• Financial Audit Statement</li>
              <li>• FCRA Return Summary</li>
              <li>• CSR Partnership Report</li>
              <li>• Board & Governance Summary</li>
            </ul>
            <p className="text-gray-700">
              All documents can be accessed through the Transparency Section or requested via contact@yashlokwelfare.org.
            </p>
          </CardContent>
        </Card>

        {/* 11. Anti-Corruption */}
        <Card className="shadow-2xl mb-16">
          <CardHeader className="bg-gradient-to-r from-red-50 to-pink-50">
            <CardTitle className="text-3xl">11️⃣ Anti-Corruption & Ethical Practices</CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <p className="text-gray-700 mb-6">
              Yashlok Welfare Foundation follows a zero-tolerance policy for fraud, corruption, or misuse of funds.
            </p>
            <ul className="space-y-2 text-gray-700 ml-4 mb-6">
              <li>• Internal financial controls and dual authorization for all transactions</li>
              <li>• Procurement and expenses are documented with proper receipts</li>
              <li>• Anonymous reporting mechanism for ethical concerns</li>
            </ul>
            <Button variant="outline" className="border-2 border-red-600 text-red-600 hover:bg-red-50">
              Report Ethical Concern
            </Button>
          </CardContent>
        </Card>

        {/* 12. Feedback & Grievance */}
        <Card className="shadow-2xl mb-16">
          <CardHeader className="bg-gradient-to-r from-teal-50 to-cyan-50">
            <CardTitle className="text-3xl">12️⃣ Feedback & Grievance Redressal</CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <p className="text-gray-700 mb-6">
              Transparency works best when everyone is heard. We encourage donors, volunteers, and beneficiaries to share feedback or complaints.
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-gray-900">Email:</p>
                  <a href="mailto:feedback@yashlokwelfare.org" className="text-teal-600 hover:underline">
                    feedback@yashlokwelfare.org
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-gray-900">Phone:</p>
                  <span className="text-gray-700">+91-XXXXXXXXXX</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-gray-900">Address:</p>
                  <p className="text-gray-700">
                    B-405, Mohan Mansion, Gulmohar Road,<br />
                    Chunnabhatti (E), Mumbai, Maharashtra, India – 400022
                  </p>
                </div>
              </div>
            </div>
            <p className="text-gray-700 text-sm italic">
              All feedback is acknowledged within 7 working days and addressed within 15–20 business days.
            </p>
          </CardContent>
        </Card>

        {/* 13. Future Commitments */}
        <Card className="shadow-2xl mb-16">
          <CardHeader className="bg-gradient-to-r from-indigo-50 to-purple-50">
            <CardTitle className="text-3xl">13️⃣ Future Commitments (2025–2026)</CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <ul className="space-y-3">
              {futureCommitments.map((commitment, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{commitment}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Closing Message */}
        <Card className="shadow-2xl bg-gradient-to-r from-blue-600 via-teal-600 to-green-600 text-white">
          <CardContent className="p-12 text-center">
            <Eye className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-6">Closing Message</h2>
            <p className="text-xl mb-4">
              At Yashlok Welfare Foundation, transparency is not just a policy — it's our promise. We exist to serve the community with honesty, accountability, and measurable impact.
            </p>
            <p className="text-lg mb-4">
              Every donation, every campaign, and every action is documented, verified, and shared openly.
            </p>
            <p className="text-lg opacity-90">
              Together, we can continue building a cleaner, safer, and more transparent India. 💚
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}