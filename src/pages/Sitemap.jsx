import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Map, Mail, MapPin, Globe, Facebook, Instagram, Linkedin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Sitemap() {
  // Set page title
  React.useEffect(() => {
    document.title = "Sitemap - Yashlok Welfare Foundation";
  }, []);
  const mainPages = [
    { name: "Home", path: "Home", desc: "Overview of the Foundation's mission and latest initiatives. Highlights of River Cleaning & Road Safety programs." },
    { name: "About Us", path: "About", desc: "Our Story • Vision & Mission • Our Team • Core Values & Impact" },
    { name: "Programs", path: "Programs", desc: "River Cleaning Awareness • Road Safety Campaigns • Community Engagement • Sustainable Waste Management" },
    { name: "Get Involved", path: "GetInvolved", desc: "Volunteer • Internship • CSR Collaboration • Partner With Us" },
    { name: "Updates", path: "Updates", desc: "Recent Events • Campaign News • Media Highlights • Press Releases" },
    { name: "Contact Us", path: "Contact", desc: "Address, Email & Phone • Inquiry Form • Social Media Links • Map & Directions" },
    { name: "Donate", path: "Donate", desc: "Online Donation • Bank Details • UPI & CSR Contributions • Impact of Your Support" }
  ];

  const resources = [
    { name: "River Cleaning Checklist", path: "RiverCleaningChecklist", desc: "Step-by-step guide for clean-up activities." },
    { name: "Volunteer Toolkit", path: "VolunteerToolkit", desc: "Guidelines and safety tips for volunteers." },
    { name: "Road Safety Tips", path: "RoadSafetyTips", desc: "Rules and precautions for drivers, riders, and pedestrians." },
    { name: "Annual Impact Report", path: "AnnualImpactReport", desc: "Yearly performance summary and transparency data." },
    { name: "Event Highlights", path: "EventHighlights", desc: "Key moments and achievements from campaigns." },
    { name: "Media & Press Releases", path: "MediaPressReleases", desc: "News coverage, official statements, and downloadable media kits." }
  ];

  const legal = [
    { name: "Privacy Policy", path: "PrivacyPolicy", desc: "How we collect, use, and protect personal data." },
    { name: "Terms of Use", path: "TermsOfUse", desc: "Rules governing website access and usage." },
    { name: "Refund & Donation Policy", path: "RefundDonationPolicy", desc: "Guidelines for online donations, payment security, and refund conditions." },
    { name: "Disclaimer", path: "Disclaimer", desc: "Liability and accuracy terms for website content." },
    { name: "Sitemap", path: "Sitemap", desc: "Full overview of pages and links on the website." },
    { name: "Transparency Report", path: "TransparencyReport", desc: "Fund utilization, audits, governance, and impact verification." }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-teal-50 to-green-50">
      <div className="bg-gradient-to-r from-blue-600 via-teal-600 to-green-600 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 grid grid-cols-10 grid-rows-10 gap-2 opacity-10">
          {Array.from({ length: 100 }).map((_, i) => (
            <div key={i} className="bg-white animate-[gridPop_3s_ease-in-out_infinite]" style={{ animationDelay: `${i * 0.02}s` }}></div>
          ))}
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <Map className="w-16 h-16 mx-auto mb-6 animate-[expandIn_1s_ease-out]" />
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 animate-[expandIn_1s_ease-out]">🌐 Sitemap</h1>
          <style jsx>{`
            @keyframes expandIn {
              from {
                opacity: 0;
                transform: scale(0) rotate(-180deg);
              }
              to {
                opacity: 1;
                transform: scale(1) rotate(0);
              }
            }
            @keyframes gridPop {
              0%, 100% { transform: scale(0); }
              50% { transform: scale(1); }
            }
          `}</style>
          <p className="text-xl">Last Updated: November 2025</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* 1. Main Pages */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">1️⃣ Main Pages</h2>
          <Card className="shadow-xl">
            <CardContent className="p-8">
              <div className="space-y-6">
                {mainPages.map((page, index) => (
                  <div key={index} className="border-b border-gray-100 pb-6 last:border-0 last:pb-0">
                    <Link to={createPageUrl(page.path)} className="group">
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                        {page.name}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">– {page.desc}</p>
                    </Link>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* 2. Resources Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">2️⃣ Resources Section</h2>
          <Card className="shadow-xl">
            <CardContent className="p-8">
              <div className="space-y-6">
                {resources.map((page, index) => (
                  <div key={index} className="border-b border-gray-100 pb-6 last:border-0 last:pb-0">
                    <Link to={createPageUrl(page.path)} className="group">
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-green-600 transition-colors mb-2">
                        {page.name}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">– {page.desc}</p>
                    </Link>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* 3. Legal Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">3️⃣ Legal Section</h2>
          <Card className="shadow-xl">
            <CardContent className="p-8">
              <div className="space-y-6">
                {legal.map((page, index) => (
                  <div key={index} className="border-b border-gray-100 pb-6 last:border-0 last:pb-0">
                    <Link to={createPageUrl(page.path)} className="group">
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors mb-2">
                        {page.name}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">– {page.desc}</p>
                    </Link>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* 4. Quick Access */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">4️⃣ Quick Access Links</h2>
          <Card className="shadow-xl">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h3 className="font-bold text-gray-900 mb-4 text-lg">Main</h3>
                  <ul className="space-y-2 text-sm">
                    {mainPages.map((page, index) => (
                      <li key={index}>
                        <Link to={createPageUrl(page.path)} className="text-blue-600 hover:underline">
                          • {page.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-4 text-lg">Resources</h3>
                  <ul className="space-y-2 text-sm">
                    {resources.map((page, index) => (
                      <li key={index}>
                        <Link to={createPageUrl(page.path)} className="text-green-600 hover:underline">
                          • {page.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-4 text-lg">Legal</h3>
                  <ul className="space-y-2 text-sm">
                    {legal.map((page, index) => (
                      <li key={index}>
                        <Link to={createPageUrl(page.path)} className="text-purple-600 hover:underline">
                          • {page.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* 5. Social Media */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">5️⃣ Social Media Links</h2>
          <Card className="shadow-xl">
            <CardContent className="p-8">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Globe className="w-5 h-5 text-blue-600" />
                  <span className="font-semibold text-gray-700">Website:</span>
                  <a href="https://www.yashlokwelfare.org" className="text-blue-600 hover:underline">
                    www.yashlokwelfare.org
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Facebook className="w-5 h-5 text-blue-600" />
                  <span className="font-semibold text-gray-700">Facebook:</span>
                  <a href="https://facebook.com/yashlokwelfare" className="text-blue-600 hover:underline">
                    facebook.com/yashlokwelfare
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Instagram className="w-5 h-5 text-pink-600" />
                  <span className="font-semibold text-gray-700">Instagram:</span>
                  <a href="https://instagram.com/yashlokwelfare" className="text-blue-600 hover:underline">
                    instagram.com/yashlokwelfare
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Linkedin className="w-5 h-5 text-blue-700" />
                  <span className="font-semibold text-gray-700">LinkedIn:</span>
                  <a href="https://linkedin.com/company/yashlokwelfarefoundation" className="text-blue-600 hover:underline">
                    linkedin.com/company/yashlokwelfarefoundation
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* 6. Contact Information */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">6️⃣ Contact Information</h2>
          <Card className="shadow-xl">
            <CardContent className="p-8">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Address:</p>
                    <p className="text-gray-700">
                      B-405, Mohan Mansion, Gulmohar Road,<br />
                      Chunnabhatti (E), Mumbai, Maharashtra, India – 400022
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Email:</p>
                    <a href="mailto:contact@yashlokwelfare.org" className="text-blue-600 hover:underline">
                      contact@yashlokwelfare.org
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* 7. Navigation Summary Table */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">7️⃣ Site Navigation Summary</h2>
          <Card className="shadow-xl">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gradient-to-r from-blue-600 to-green-600 text-white">
                    <tr>
                      <th className="px-6 py-4 text-left">Category</th>
                      <th className="px-6 py-4 text-left">Pages Included</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white border-b">
                      <td className="px-6 py-4 font-semibold text-gray-900">Main Navigation</td>
                      <td className="px-6 py-4 text-gray-700">Home, About, Programs, Get Involved, Updates, Contact, Donate</td>
                    </tr>
                    <tr className="bg-gray-50 border-b">
                      <td className="px-6 py-4 font-semibold text-gray-900">Resources</td>
                      <td className="px-6 py-4 text-gray-700">River Cleaning Checklist, Volunteer Toolkit, Road Safety Tips, Annual Impact Report, Event Highlights, Media & Press Releases</td>
                    </tr>
                    <tr className="bg-white border-b">
                      <td className="px-6 py-4 font-semibold text-gray-900">Legal</td>
                      <td className="px-6 py-4 text-gray-700">Privacy Policy, Terms of Use, Refund & Donation Policy, Disclaimer, Sitemap</td>
                    </tr>
                    <tr className="bg-gray-50 border-b">
                      <td className="px-6 py-4 font-semibold text-gray-900">Social Media</td>
                      <td className="px-6 py-4 text-gray-700">Facebook, Instagram, LinkedIn</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="px-6 py-4 font-semibold text-gray-900">Contact Info</td>
                      <td className="px-6 py-4 text-gray-700">Address, Email, Phone, Map</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* 8. SEO & Technical Info */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">8️⃣ SEO & Technical Info</h2>
          <Card className="shadow-xl bg-gradient-to-br from-purple-50 to-pink-50">
            <CardContent className="p-8">
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">•</span>
                  <div>
                    <strong className="text-gray-900">XML Sitemap:</strong>
                    <span className="text-gray-700"> www.yashlokwelfare.org/sitemap.xml</span>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">•</span>
                  <div>
                    <strong className="text-gray-900">Updated:</strong>
                    <span className="text-gray-700"> Automatically whenever new pages are added</span>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">•</span>
                  <div>
                    <strong className="text-gray-900">Purpose:</strong>
                    <span className="text-gray-700"> Helps search engines crawl and index all public URLs</span>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Closing Message */}
        <Card className="shadow-2xl bg-gradient-to-r from-blue-600 via-teal-600 to-green-600 text-white">
          <CardContent className="p-12 text-center">
            <h2 className="text-3xl font-bold mb-6">Closing Message</h2>
            <p className="text-xl mb-4">
              Thank you for visiting Yashlok Welfare Foundation's official website. Use this sitemap to easily explore our initiatives, read our impact stories, or get involved in our mission for a cleaner and safer India.
            </p>
            <p className="text-lg opacity-90">
              Together, let's keep our rivers clean and our roads safe. 💚
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}