import React from "react";
import { Newspaper, Calendar, Download, ExternalLink, Mail, Phone, Globe } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function MediaPressReleases() {
  // Set page title
  React.useEffect(() => {
    document.title = "Media & Press Releases - Yashlok Welfare Foundation";
  }, []);
  const newsFeatures = [
    {
      date: "October 18, 2025",
      publication: "Mumbai Local Times",
      headline: "250 Volunteers Join Mithi River Clean-Up Drive Organized by Yashlok Welfare Foundation",
      content: "Over 250 volunteers participated in a large-scale clean-up drive along the Mithi River. The campaign successfully removed more than 300 kg of waste, marking one of the city's most impactful citizen-led initiatives this year.",
      quote: "Clean rivers are not just an environmental need — they're a community responsibility",
      speaker: "Alok Prakash Adhikari, Director, Yashlok Welfare Foundation"
    },
    {
      date: "August 2025",
      publication: "Eco India Journal",
      headline: "NGO Launches Reflector Safety Campaign for Delivery Riders",
      content: "Yashlok Welfare Foundation launched a road-safety campaign distributing helmets and reflectors to 150+ delivery partners across Navi Mumbai. The initiative focused on reducing night-time accidents.",
      quote: "Every small act of safety can save a life — that's our message to every commuter",
      speaker: "Yashwin Honnaya Bangera, Co-Founder"
    },
    {
      date: "June 2025",
      publication: "CSR Connect Online",
      headline: "Corporate-NGO Collaboration Drives River Restoration Efforts in Mumbai",
      content: "In partnership with corporate CSR units, Yashlok Welfare Foundation conducted five river clean-up events and awareness drives under its 'Adopt a River' program.",
      highlights: [
        "Over 1,200 participants joined across five weekends",
        "CSR partners sponsored logistics and safety gear"
      ]
    }
  ];

  const pressReleases = [
    {
      date: "December 10, 2025",
      title: "Yashlok Welfare Foundation Announces 'Adopt a River Stretch' Initiative",
      location: "Mumbai",
      content: "Yashlok Welfare Foundation launched its 'Adopt a River Stretch' program to empower citizens, corporates, and local bodies to take ownership of local water bodies. The initiative encourages long-term monitoring, periodic clean-ups, and awareness creation for river restoration."
    },
    {
      date: "September 5, 2025",
      title: "Yashlok Welfare Foundation Expands Road Safety Awareness Drive Across Maharashtra",
      location: "Mumbai",
      content: "As part of National Road Safety Week, the Foundation has expanded its awareness program to 10 new cities, distributing 1,000 helmets and 700 reflector kits. The campaign was conducted in collaboration with local traffic departments and CSR partners."
    },
    {
      date: "May 22, 2025",
      title: "Yashlok Welfare Foundation Partners with Corporates for Zero Waste Mumbai Project",
      location: "Mumbai",
      content: "A multi-stakeholder project launched by Yashlok Welfare Foundation aims to promote zero waste management and river cleanliness through citizen and CSR collaboration."
    }
  ];

  const campaigns = [
    { campaign: "Drive Safe, Ride Safe", featured: "Green India CSR Blog", date: "March 2025" },
    { campaign: "Clean Rivers, Clean Lives", featured: "India Civic Action Network", date: "April 2025" },
    { campaign: "Zero Waste Communities", featured: "MyCityNews", date: "July 2025" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-teal-50 to-green-50">
      <div className="bg-gradient-to-r from-blue-600 via-teal-600 to-green-600 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={i} className="absolute text-white/30 font-mono text-xs animate-[typewriter_5s_steps(40)_infinite]" style={{ top: `${i * 5}%`, left: `${Math.random() * 100}%`, animationDelay: `${i * 0.2}s` }}>
              █████████████████
            </div>
          ))}
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <Newspaper className="w-16 h-16 mx-auto mb-6 animate-[slideDown_1s_ease-out]" />
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 animate-[slideDown_1s_ease-out]">📰 Media & Press Releases</h1>
          <style jsx>{`
            @keyframes slideDown {
              from {
                opacity: 0;
                transform: translateY(-50px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
            @keyframes typewriter {
              0%, 100% { opacity: 0.3; }
              50% { opacity: 0.8; }
            }
          `}</style>
          <p className="text-xl">Spreading Awareness. Creating Impact.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-16">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            At Yashlok Welfare Foundation, we believe that awareness multiplies impact. Through our media collaborations and press outreach, we share stories of transformation — about citizens cleaning rivers, communities driving road safety, and volunteers changing lives.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Here, you'll find highlights of our recent media features, official press releases, and coverage by partner publications.
          </p>
        </div>

        {/* In the News */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">🗞️ 1️⃣ In the News</h2>
          <div className="space-y-8">
            {newsFeatures.map((news, index) => (
              <Card key={index} className="shadow-2xl">
                <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                    <div className="flex items-center gap-2 text-blue-600">
                      <Calendar className="w-5 h-5" />
                      <span className="font-semibold">{news.date}</span>
                    </div>
                    <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                      📰 {news.publication}
                    </span>
                  </div>
                  <CardTitle className="text-2xl">{news.headline}</CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                  <p className="text-gray-700 mb-6 leading-relaxed">{news.content}</p>
                  
                  {news.highlights && (
                    <div className="bg-blue-50 rounded-lg p-4 mb-6">
                      <p className="font-semibold text-gray-900 mb-2">Highlight:</p>
                      <ul className="space-y-2">
                        {news.highlights.map((highlight, idx) => (
                          <li key={idx} className="text-gray-700 flex items-start gap-2">
                            <span className="text-blue-600">•</span>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {news.quote && (
                    <div className="border-l-4 border-blue-600 pl-6 py-4 bg-gray-50 rounded mb-6">
                      <p className="text-gray-700 italic mb-2">"{news.quote}"</p>
                      <p className="text-sm text-gray-600">— {news.speaker}</p>
                    </div>
                  )}

                  <div className="flex gap-3">
                    <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Read Full Article
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Press Releases */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">📢 2️⃣ Press Releases (Official Statements)</h2>
          <div className="space-y-6">
            {pressReleases.map((release, index) => (
              <Card key={index} className="shadow-xl">
                <CardContent className="p-8">
                  <div className="flex items-center gap-2 text-gray-600 mb-3">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{release.location}, {release.date}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{release.title}</h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">{release.content}</p>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                    <Download className="w-4 h-4 mr-2" />
                    Download PDF Press Release
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Media Contact */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">🧠 3️⃣ Media Contact Information</h2>
          <Card className="shadow-2xl bg-gradient-to-br from-purple-50 to-pink-50">
            <CardContent className="p-8">
              <p className="text-lg text-gray-700 mb-6">
                For press inquiries, interviews, event coverage, or high-resolution images, please contact:
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-purple-600" />
                  <a href="mailto:media@yashlokwelfare.org" className="text-lg text-purple-700 hover:underline">
                    media@yashlokwelfare.org
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-purple-600" />
                  <span className="text-lg text-gray-700">+91-XXXXXXXXXX</span>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="w-5 h-5 text-purple-600" />
                  <span className="text-lg text-gray-700">www.yashlokwelfare.org</span>
                </div>
              </div>
              <div className="bg-white rounded-lg p-6">
                <p className="font-semibold text-gray-900 mb-3">Media Spokespersons:</p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Alok Prakash Adhikari, Director</li>
                  <li>• Yashwin Honnaya Bangera, Co-Founder</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Media Kit */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">🎬 4️⃣ Media Kit (Available for Download)</h2>
          <Card className="shadow-xl">
            <CardContent className="p-8">
              <p className="text-lg text-gray-700 mb-6">
                We provide a ready-to-use Media Kit for journalists and partners containing:
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                {[
                  "Organization Profile (PDF)",
                  "High-Resolution Logos",
                  "Project Photographs",
                  "Past Campaign Highlights",
                  "Annual Impact Summary"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2 text-gray-700">
                    <span className="text-green-600">✓</span>
                    {item}
                  </div>
                ))}
              </div>
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                <Download className="w-5 h-5 mr-2" />
                Download Media Kit ZIP
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Featured Campaigns */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">💡 5️⃣ Featured Campaign Mentions</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {campaigns.map((campaign, index) => (
              <Card key={index} className="shadow-xl">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg text-gray-900 mb-2">"{campaign.campaign}"</h3>
                  <p className="text-gray-600 text-sm mb-2">Featured in {campaign.featured}</p>
                  <p className="text-gray-500 text-sm">{campaign.date}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="outline" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50">
              View All Mentions
            </Button>
          </div>
        </div>

        {/* Upcoming Announcements */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">🗓️ 6️⃣ Upcoming Media Announcements</h2>
          <Card className="shadow-xl">
            <CardContent className="p-8">
              <p className="text-lg text-gray-700 mb-6">Stay tuned for our upcoming announcements:</p>
              <ul className="space-y-3 mb-6">
                {[
                  "January 2026: Launch of 'Road to Zero Accidents' program",
                  "February 2026: 'River Care Month' clean-up awareness series",
                  "March 2026: CSR Partner Conclave on Sustainable Impact"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-gray-700">
                    <span className="text-blue-600 mt-1">•</span>
                    {item}
                  </li>
                ))}
              </ul>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                Subscribe for Updates
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Closing */}
        <div className="bg-gradient-to-r from-blue-600 via-teal-600 to-green-600 rounded-3xl p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-6">Closing Message</h2>
          <p className="text-xl mb-4">
            At Yashlok Welfare Foundation, media plays a key role in magnifying impact. Every story shared inspires someone to take action — to clean a river, wear a helmet, or volunteer for change.
          </p>
          <p className="text-lg opacity-90">
            We thank our media partners for helping us turn awareness into collective action.
          </p>
        </div>
      </div>
    </div>
  );
}