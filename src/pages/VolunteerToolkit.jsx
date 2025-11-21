import React from "react";
import { Users, Heart, Shield, Camera, CheckCircle, Award, Share2, AlertTriangle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

export default function VolunteerToolkit() {
  // Set page title
  React.useEffect(() => {
    document.title = "Volunteer Toolkit - Yashlok Welfare Foundation";
  }, []);
  const essentials = [
    "Comfortable clothing (preferably full sleeves)",
    "Mask and gloves (mandatory)",
    "Closed shoes or boots (no slippers/sandals)",
    "Water bottle and light snacks",
    "Cap or hat for sun protection",
    "Personal ID and emergency contact info",
    "Mobile phone with camera (optional, for photos)",
    "Positive energy and a teamwork mindset!"
  ];

  const safetyGuidelines = [
    "Always wear gloves and closed shoes",
    "Do not touch sharp, medical, or hazardous waste",
    "Stay with your team and follow the coordinator's instructions",
    "Avoid entering deep or fast-flowing water areas",
    "Maintain distance from vehicles or moving traffic",
    "Carry hand sanitizer and wash hands after activity",
    "Report any injury or issue immediately to your team lead"
  ];

  const responsibilities = [
    "Arrive on time for the event or session",
    "Listen carefully during the team briefing",
    "Work respectfully with other volunteers and local residents",
    "Handle cleaning tools and awareness materials responsibly",
    "Help with waste segregation and proper disposal",
    "Participate in group photos or documentation when required",
    "Share your experience on social media (optional but encouraged!)"
  ];

  const communicationTips = [
    'Use simple messages like "Please don\'t dump waste into the river" or "Every helmet saves a life"',
    "Always speak politely with local residents and civic staff",
    "Avoid arguments or criticism — keep it positive",
    "Encourage participation — don't force anyone",
    "Represent Yashlok Welfare Foundation with dignity and respect"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      <div className="bg-gradient-to-r from-blue-600 via-teal-600 to-green-600 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[600px] h-[600px] border-4 border-white/10 rounded-full animate-[spin_20s_linear_infinite]"></div>
          <div className="absolute w-[500px] h-[500px] border-4 border-white/10 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
          <div className="absolute w-[400px] h-[400px] border-4 border-white/10 rounded-full animate-[spin_10s_linear_infinite]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <Users className="w-16 h-16 mx-auto mb-6 animate-[rotateIn_1s_ease-out]" />
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 animate-[rotateIn_1s_ease-out]">Volunteer Toolkit</h1>
          <style jsx>{`
            @keyframes rotateIn {
              from {
                opacity: 0;
                transform: rotate(-180deg) scale(0);
              }
              to {
                opacity: 1;
                transform: rotate(0) scale(1);
              }
            }
          `}</style>
          <p className="text-xl">Be the Change. Be a Volunteer.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Intro */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Welcome to the Yashlok Welfare Foundation Volunteer Toolkit! 💚</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Whether you're joining a river clean-up, a road-safety campaign, or helping with community outreach — this guide will help you understand your role and make the most of your volunteering experience.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            At Yashlok Welfare, every volunteer is a changemaker. Your small action can create a big impact — for our rivers, our roads, and our communities.
          </p>
        </div>

        {/* Understanding Your Role */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Understanding Your Role</h2>
          <Card className="shadow-xl">
            <CardContent className="p-8">
              <p className="text-lg text-gray-700 mb-6">
                As a volunteer, you represent the spirit of community service. You'll be part of on-ground teams working towards one or more of the following goals:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Cleaning and restoring polluted rivers and canals",
                  "Spreading road-safety awareness among the public",
                  "Coordinating local awareness campaigns and events",
                  "Supporting photography, media, or documentation tasks",
                  "Encouraging friends, families, and workplaces to get involved"
                ].map((goal, index) => (
                  <div key={index} className="flex items-start gap-3 bg-blue-50 p-4 rounded-lg">
                    <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{goal}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* What to Bring */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">What to Bring (Volunteer Checklist)</h2>
          <Card className="shadow-xl bg-gradient-to-br from-green-50 to-blue-50">
            <CardHeader>
              <CardTitle className="text-2xl">Essentials for Every Event</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {essentials.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Safety Guidelines */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Safety Guidelines</h2>
          <Card className="shadow-xl bg-gradient-to-br from-red-50 to-orange-50">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Shield className="w-8 h-8 text-red-600" />
                Volunteer safety is our top priority
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-6">Follow these simple rules during any clean-up or awareness activity:</p>
              <ul className="space-y-3">
                {safetyGuidelines.map((guideline, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-lg">{guideline}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Responsibilities */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Volunteer Responsibilities</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {responsibilities.map((responsibility, index) => (
              <Card key={index} className="shadow-lg">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">
                    {index + 1}
                  </div>
                  <p className="text-gray-700 mt-1">{responsibility}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Documentation */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">How to Document Your Impact</h2>
          <Card className="shadow-xl">
            <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50">
              <CardTitle className="text-2xl flex items-center gap-2">
                <Camera className="w-8 h-8 text-purple-600" />
                Help us spread awareness beyond the field!
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <p className="text-gray-700 mb-6">Take photos and short videos that show:</p>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                {[
                  "Volunteers in action (with safety gear)",
                  "Before & after shots of clean-up areas",
                  "Awareness posters or road-safety banners",
                  "Group moments and community participation"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 bg-purple-50 p-4 rounded-lg">
                    <Camera className="w-5 h-5 text-purple-600" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-700">
                Send your photos/videos to <a href="mailto:media@yashlokwelfare.org" className="text-blue-600 hover:underline">media@yashlokwelfare.org</a> or tag us on Instagram, Facebook, and LinkedIn
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Communication Tips */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Volunteer Communication Tips</h2>
          <Card className="shadow-xl">
            <CardContent className="p-8">
              <ul className="space-y-4">
                {communicationTips.map((tip, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Share2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-lg">{tip}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Event Day Structure */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Event-Day Structure (What to Expect)</h2>
          <div className="grid md:grid-cols-5 gap-4">
            {[
              { step: "1", title: "Arrival & Registration", desc: "Sign-in and collect volunteer badge" },
              { step: "2", title: "Briefing Session", desc: "Safety rules and task assignment" },
              { step: "3", title: "Activity Time", desc: "Clean-up or awareness (1.5–2 hours)" },
              { step: "4", title: "Group Photo", desc: "Wrap-up and appreciation" },
              { step: "5", title: "Feedback", desc: "Share thoughts and pictures" }
            ].map((item, index) => (
              <Card key={index} className="shadow-lg text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {item.step}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Recognition */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Volunteer Recognition</h2>
          <Card className="shadow-xl bg-gradient-to-br from-yellow-50 to-orange-50">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Award className="w-8 h-8 text-orange-600" />
                Your contribution matters!
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-6">Every volunteer receives:</p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "A participation certificate (via email or event)",
                  "Name mention in campaign highlights (when applicable)",
                  "Eligibility for Volunteer of the Month recognition",
                  "Priority access to future programs and leadership opportunities"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 bg-white p-4 rounded-lg">
                    <Award className="w-6 h-6 text-orange-600" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Leadership Roles */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Leadership Roles for Active Volunteers</h2>
          <Card className="shadow-xl">
            <CardContent className="p-8">
              <p className="text-lg text-gray-700 mb-6">
                If you've volunteered 3+ times, you can apply for special roles:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { title: "Team Leader", desc: "Coordinate field volunteers during drives" },
                  { title: "Awareness Speaker", desc: "Represent Yashlok in local schools & communities" },
                  { title: "Documentation Lead", desc: "Handle event photos, reports, and data" },
                  { title: "Ambassador", desc: "Lead local chapters and represent the foundation" }
                ].map((role, index) => (
                  <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl">
                    <h3 className="font-bold text-xl text-gray-900 mb-2">{role.title}</h3>
                    <p className="text-gray-700">{role.desc}</p>
                  </div>
                ))}
              </div>
              <div className="text-center mt-8">
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 text-lg">
                  Apply for Leadership Role
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Code of Conduct */}
        <div className="mb-16">
          <Card className="shadow-xl border-2 border-red-200">
            <CardHeader className="bg-red-50">
              <CardTitle className="text-2xl text-red-900">Code of Conduct</CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <p className="text-gray-700 mb-6">All Yashlok Welfare volunteers are expected to:</p>
              <ul className="space-y-3">
                {[
                  "Maintain respectful, inclusive, and professional behavior",
                  "Avoid use of alcohol, tobacco, or harmful substances during events",
                  "Follow all safety and environmental rules",
                  "Uphold the foundation's image with integrity and discipline"
                ].map((rule, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-lg">{rule}</span>
                  </li>
                ))}
              </ul>
              <p className="text-red-700 font-semibold mt-6">
                Violations may lead to removal from volunteer activities.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Staying Connected */}
        <div className="mb-16">
          <Card className="shadow-xl">
            <CardHeader className="bg-gradient-to-r from-blue-600 to-green-600 text-white">
              <CardTitle className="text-2xl">Staying Connected</CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <p className="text-gray-700 mb-6">
                Join our volunteer network to stay updated on upcoming drives, webinars, and events.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="font-semibold text-gray-900 mb-2">📧 Email</p>
                  <a href="mailto:volunteer@yashlokwelfare.org" className="text-blue-600 hover:underline">
                    volunteer@yashlokwelfare.org
                  </a>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="font-semibold text-gray-900 mb-2">🌐 Website</p>
                  <p className="text-gray-700">www.yashlokwelfare.org</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <p className="font-semibold text-gray-900 mb-2">📱 WhatsApp / Telegram</p>
                  <p className="text-gray-700">Volunteer Group Link</p>
                </div>
                <div className="bg-pink-50 p-4 rounded-lg">
                  <p className="font-semibold text-gray-900 mb-2">💬 Social Media</p>
                  <p className="text-gray-700">Follow @yashlokwelfare</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Closing */}
        <div className="bg-gradient-to-r from-blue-600 via-teal-600 to-green-600 rounded-3xl p-12 text-white text-center">
          <Heart className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-6">When you give your time, you give hope.</h2>
          <p className="text-xl mb-4">
            Every river cleaned, every safety message shared, and every hour volunteered brings us closer to a better India.
          </p>
          <p className="text-lg mb-10">
            Thank you for being part of Yashlok Welfare Foundation. Together, we make change real. 💚
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to={createPageUrl("GetInvolved")}>
              <Button className="bg-white text-blue-600 hover:bg-gray-100 px-10 py-6 text-lg">
                Join as Volunteer
              </Button>
            </Link>
            <Link to={createPageUrl("Programs")}>
              <Button variant="outline" className="border-2 border-white bg-transparent text-black px-8 py-6 text-lg rounded-xl hover:bg-white/20">
                View Upcoming Events
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}