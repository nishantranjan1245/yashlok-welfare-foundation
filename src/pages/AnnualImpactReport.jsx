import React from "react";
import { TrendingUp, Droplet, Shield, Users, Award, FileText, Download, CheckCircle, Heart, Target } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

export default function AnnualImpactReport() {
  // Set page title
  React.useEffect(() => {
    document.title = "Annual Impact Report - Yashlok Welfare Foundation";
  }, []);
  const riverImpact = [
    { metric: "Clean-Up Drives", value: "12+", sublabel: "organized across Mumbai and nearby regions" },
    { metric: "Waste Collected", value: "3,500+ kg", sublabel: "properly disposed of" },
    { metric: "River Stretches", value: "5", sublabel: "monitored for waste and pollution" },
    { metric: "Communities", value: "4", sublabel: "adopted for sustained awareness" }
  ];

  const roadSafetyImpact = [
    { metric: "Safety Campaigns", value: "20+", sublabel: "across Mumbai suburbs" },
    { metric: "Helmets Distributed", value: "500+", sublabel: "to delivery riders" },
    { metric: "Citizens Educated", value: "1,000+", sublabel: "on pedestrian and driving safety" },
    { metric: "Collaborations", value: "Multiple", sublabel: "with Mumbai Traffic Police" }
  ];

  const volunteerStats = [
    { label: "Total Volunteers Engaged", value: "1,500+" },
    { label: "CSR & Institutional Partners", value: "12+" },
    { label: "New Volunteers This Year", value: "450+" },
    { label: "Community Awareness Events", value: "30+" }
  ];

  const eventsSummary = [
    { category: "River Clean-Up Drives", events: 12, participants: "1,200+", outcome: "3,500 kg waste removed" },
    { category: "Road Safety Sessions", events: 20, participants: "1,000+", outcome: "500 helmets distributed" },
    { category: "Community Workshops", events: 10, participants: "800+", outcome: "Awareness on segregation" },
    { category: "CSR Partner Campaigns", events: 5, participants: "600+", outcome: "Joint clean-up/safety drives" }
  ];

  const financialBreakdown = [
    { category: "Program Implementation", percentage: 65, color: "bg-blue-600" },
    { category: "Volunteer & Training", percentage: 15, color: "bg-green-600" },
    { category: "Awareness & Outreach", percentage: 10, color: "bg-purple-600" },
    { category: "Administrative Costs", percentage: 5, color: "bg-orange-600" },
    { category: "Reporting & Monitoring", percentage: 5, color: "bg-pink-600" }
  ];

  const partners = [
    "Local municipal corporations (MCGM, NMMC)",
    "Traffic Police Departments",
    "Resident Welfare Associations",
    "School eco-clubs and college NSS teams",
    "Corporate CSR units supporting sustainability"
  ];

  const futurePlans = [
    'Expand "Adopt a River" program for sustained local monitoring',
    'Launch "Drive Safe, Ride Safe" campaign in 10+ new locations',
    "Introduce Volunteer Leadership Training across Maharashtra",
    "Publish River Impact Index 2025 for data-driven reporting"
  ];

  const recognitions = [
    "Featured in Mumbai Local Times for Mithi River Clean-Up",
    'Recognized by local traffic authorities for "Safe Roads Campaign 2025"',
    "CSR Excellence Mention in Green India Forum Report 2025"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-teal-50 to-green-50">
      <div className="bg-gradient-to-r from-blue-600 via-teal-600 to-green-600 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-white/10 via-transparent to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <FileText className="w-16 h-16 mx-auto mb-6 animate-[zoomIn_1s_ease-out]" />
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 animate-[zoomIn_1s_ease-out]">📊 Annual Impact Report</h1>
          <style jsx>{`
            @keyframes zoomIn {
              from {
                opacity: 0;
                transform: scale(0.5);
              }
              to {
                opacity: 1;
                transform: scale(1);
              }
            }
          `}</style>
          <p className="text-xl mb-2">Measuring Change. Inspiring Action.</p>
          <p className="text-lg opacity-90">2024–2025</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Intro Section */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-16">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            At Yashlok Welfare Foundation, we believe that transparency and accountability build trust. Each year, we measure and share the real impact of our initiatives — from cleaning polluted rivers to promoting safer roads.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            This Annual Impact Report highlights the collective efforts of our volunteers, partners, and supporters who helped make a tangible difference in our environment and communities.
          </p>
        </div>

        {/* 1. Overview of the Year */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">🧭 1️⃣ Overview of the Year (2024–2025)</h2>
          <Card className="shadow-2xl">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Focus:</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { icon: Droplet, label: "River Cleaning & Restoration", color: "blue" },
                  { icon: Shield, label: "Road Safety Awareness", color: "orange" },
                  { icon: Users, label: "Community Engagement", color: "green" },
                  { icon: TrendingUp, label: "Sustainable Waste Management", color: "purple" }
                ].map((item, index) => (
                  <div key={index} className={`bg-${item.color}-50 p-6 rounded-xl text-center`}>
                    <item.icon className={`w-12 h-12 mx-auto mb-3 text-${item.color}-600`} />
                    <p className="font-semibold text-gray-900">{item.label}</p>
                  </div>
                ))}
              </div>
              <p className="text-gray-700 mt-6">
                Despite challenges, our team continued to organize community-driven campaigns and spread awareness through on-ground and digital initiatives.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* 2. River Cleaning Impact */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            🌊 2️⃣ River Cleaning & Restoration Impact
          </h2>
          
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">Key Highlights</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {riverImpact.map((item, index) => (
              <Card key={index} className="shadow-xl text-center">
                <CardContent className="p-8">
                  <div className="text-4xl font-bold text-blue-600 mb-2">{item.value}</div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">{item.metric}</h3>
                  <p className="text-sm text-gray-600">{item.sublabel}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <h3 className="text-2xl font-semibold text-gray-900 mb-6">Community Involvement</h3>
          <Card className="shadow-xl mb-8">
            <CardContent className="p-8">
              <ul className="space-y-3">
                {[
                  "1,200+ volunteers participated in river clean-ups",
                  "Awareness sessions conducted in residential societies and schools",
                  "Collaborations with civic authorities for waste segregation and disposal"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <h3 className="text-2xl font-semibold text-gray-900 mb-6">Environmental Outcomes</h3>
          <Card className="shadow-xl">
            <CardContent className="p-8">
              <ul className="space-y-3">
                {[
                  "Reduction in visible waste and debris in targeted stretches",
                  "Improved awareness on household waste segregation",
                  "Engagement of youth and local residents in ongoing river care efforts"
                ].map((outcome, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <TrendingUp className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{outcome}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* 3. Road Safety Impact */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            🚦 3️⃣ Road Safety Awareness Impact
          </h2>
          
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">Key Highlights</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {roadSafetyImpact.map((item, index) => (
              <Card key={index} className="shadow-xl text-center">
                <CardContent className="p-8">
                  <div className="text-4xl font-bold text-orange-600 mb-2">{item.value}</div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">{item.metric}</h3>
                  <p className="text-sm text-gray-600">{item.sublabel}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <h3 className="text-2xl font-semibold text-gray-900 mb-6">Outreach Activities</h3>
          <Card className="shadow-xl mb-8">
            <CardContent className="p-8">
              <ul className="space-y-3">
                {[
                  "Walkathons, poster competitions, and street plays conducted",
                  "Night visibility awareness drives for two-wheeler riders",
                  "Road-safety messages shared through digital campaigns"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <h3 className="text-2xl font-semibold text-gray-900 mb-6">Community Outcomes</h3>
          <Card className="shadow-xl">
            <CardContent className="p-8">
              <ul className="space-y-3">
                {[
                  "Improved helmet and seatbelt compliance in awareness zones",
                  "Local delivery partners adopted reflective gear as routine",
                  "Strong partnerships with traffic departments and CSR sponsors"
                ].map((outcome, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <TrendingUp className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{outcome}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* 4. Volunteer Participation */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            👥 4️⃣ Volunteer & Community Participation
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {volunteerStats.map((stat, index) => (
              <Card key={index} className="shadow-xl bg-gradient-to-br from-purple-50 to-pink-50">
                <CardContent className="p-8 text-center">
                  <div className="text-4xl font-bold text-purple-600 mb-2">{stat.value}</div>
                  <p className="font-semibold text-gray-900">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="text-lg text-gray-700">
            Volunteers contributed their time, energy, and ideas to make each campaign successful. Many went on to become local ambassadors, leading initiatives in their areas.
          </p>
        </div>

        {/* 5. Events Summary */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">🧰 5️⃣ Awareness Campaigns & Events Summary</h2>
          <Card className="shadow-2xl">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gradient-to-r from-blue-600 to-green-600 text-white">
                    <tr>
                      <th className="px-6 py-4 text-left">Category</th>
                      <th className="px-6 py-4 text-center">Events</th>
                      <th className="px-6 py-4 text-center">Participants</th>
                      <th className="px-6 py-4 text-left">Outcome</th>
                    </tr>
                  </thead>
                  <tbody>
                    {eventsSummary.map((event, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="px-6 py-4 font-semibold text-gray-900">{event.category}</td>
                        <td className="px-6 py-4 text-center font-bold text-blue-600">{event.events}</td>
                        <td className="px-6 py-4 text-center font-bold text-green-600">{event.participants}</td>
                        <td className="px-6 py-4 text-gray-700">{event.outcome}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* 6. Partnerships */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">💚 6️⃣ Partnerships & Collaborations</h2>
          <Card className="shadow-2xl">
            <CardContent className="p-8">
              <p className="text-lg text-gray-700 mb-6">
                We are proud to have worked with several civic bodies, CSR partners, and community groups who helped amplify our impact:
              </p>
              <ul className="space-y-3">
                {partners.map((partner, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{partner}</span>
                  </li>
                ))}
              </ul>
              <p className="text-gray-700 mt-6">
                These collaborations have strengthened our long-term goals for a cleaner, safer environment.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* 7. Impact Stories */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">📸 7️⃣ Impact Stories</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="shadow-xl">
              <CardContent className="p-8">
                <p className="text-gray-700 italic mb-4">
                  "I joined a clean-up at Mithi River — the transformation was visible in just hours. It made me realize how collective action matters."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center text-white font-bold">
                    S
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Sana, Volunteer</div>
                    <div className="text-sm text-gray-600">Mumbai</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-xl">
              <CardContent className="p-8">
                <p className="text-gray-700 italic mb-4">
                  "Our delivery staff are now more conscious about safety after Yashlok's awareness drive. Reflectors really save lives."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold">
                    C
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">CSR Partner</div>
                    <div className="text-sm text-gray-600">Navi Mumbai</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* 8. Future Plans */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">🌱 8️⃣ Sustainability & Future Plans</h2>
          <Card className="shadow-2xl">
            <CardHeader className="bg-gradient-to-r from-green-600 to-teal-600 text-white">
              <CardTitle className="text-2xl">Our Focus for 2025–2026:</CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <ul className="space-y-3 mb-6">
                {futurePlans.map((plan, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Target className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-lg">{plan}</span>
                  </li>
                ))}
              </ul>
              <p className="text-gray-700 font-semibold">
                We aim to grow our impact beyond events — towards consistent, measurable change.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* 9. Financial Transparency */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">📈 9️⃣ Financial Transparency (Summary)</h2>
          <Card className="shadow-2xl">
            <CardHeader>
              <CardTitle className="text-2xl">Fund Allocation Summary</CardTitle>
              <p className="text-gray-600 mt-2">Indicative summary – for website transparency; detailed audited reports can be linked separately</p>
            </CardHeader>
            <CardContent className="p-8">
              <div className="overflow-x-auto mb-8">
                <table className="w-full">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold">Category</th>
                      <th className="px-6 py-4 text-right font-semibold">Percentage Allocation</th>
                    </tr>
                  </thead>
                  <tbody>
                    {financialBreakdown.map((item, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="px-6 py-4 text-gray-900">{item.category}</td>
                        <td className="px-6 py-4 text-right">
                          <div className="flex items-center justify-end gap-3">
                            <div className="flex-1 max-w-xs bg-gray-200 rounded-full h-3">
                              <div 
                                className={`${item.color} h-3 rounded-full transition-all duration-500`}
                                style={{ width: `${item.percentage}%` }}
                              />
                            </div>
                            <span className="font-bold text-gray-900 w-12">{item.percentage}%</span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded">
                <p className="text-gray-700 mb-2">
                  <strong>Note:</strong> Yashlok Welfare Foundation operates as a non-profit. All funds are utilized only for project-related purposes.
                </p>
                <Button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white">
                  <Download className="w-5 h-5 mr-2" />
                  View Detailed Financial Report PDF
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* 10. Recognition */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            🏆 10️⃣ Recognition & Media Mentions
          </h2>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {recognitions.map((recognition, index) => (
              <Card key={index} className="shadow-xl bg-gradient-to-br from-yellow-50 to-orange-50">
                <CardContent className="p-8 text-center">
                  <Award className="w-12 h-12 mx-auto mb-4 text-yellow-600" />
                  <p className="text-gray-700 font-semibold">{recognition}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center">
            <Link to={createPageUrl("MediaPressReleases")}>
              <Button variant="outline" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50">
                View Media Coverage
              </Button>
            </Link>
          </div>
        </div>

        {/* 11. Thank You */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">🤝 11️⃣ Thank You to Our Supporters</h2>
          <Card className="shadow-2xl bg-gradient-to-br from-purple-50 to-pink-50">
            <CardContent className="p-12 text-center">
              <Heart className="w-16 h-16 mx-auto mb-6 text-pink-600" />
              <p className="text-xl text-gray-700 mb-4">
                This impact was made possible by every volunteer, donor, and partner who stood with us. Your trust and participation drive our mission forward.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                Together, we're cleaning rivers, saving lives, and shaping a safer, sustainable tomorrow.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to={createPageUrl("Donate")}>
                  <Button className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white px-10 py-6 text-lg">
                    Donate Now
                  </Button>
                </Link>
                <Link to={createPageUrl("GetInvolved")}>
                  <Button variant="outline" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-10 py-6 text-lg">
                    Volunteer
                  </Button>
                </Link>
                <Link to={createPageUrl("GetInvolved")}>
                  <Button variant="outline" className="border-2 border-green-600 text-green-600 hover:bg-green-50 px-10 py-6 text-lg">
                    Partner With Us
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Closing Message */}
        <div className="bg-gradient-to-r from-blue-600 via-teal-600 to-green-600 rounded-3xl p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-6">Closing Message</h2>
          <p className="text-xl mb-4">
            Impact is not measured by numbers alone — it's seen in cleaner rivers, safer roads, and inspired citizens.
          </p>
          <p className="text-lg opacity-90">
            We thank you for being part of our journey and invite you to continue supporting our mission in the years ahead.
          </p>
        </div>
      </div>
    </div>
  );
}