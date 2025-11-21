import React from "react";
import { Droplet, CheckCircle, AlertTriangle, Users, Camera, FileText, Heart } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

export default function RiverCleaningChecklist() {
  // Set page title
  React.useEffect(() => {
    document.title = "River Cleaning Checklist - Yashlok Welfare Foundation";
  }, []);
  const preparationSteps = [
    "Identify the specific river stretch or water body to be cleaned",
    "Get local municipal or environmental permissions if required",
    "Inform nearby communities and residents about the initiative",
    "Assign team leads — for waste collection, safety, logistics, and first aid"
  ];

  const equipment = [
    "Gloves (rubber or reusable)",
    "Safety boots / closed shoes",
    "Masks (preferably N95 or cloth)",
    "Garbage bags (biodegradable or heavy-duty)",
    "Waste segregation bins (Dry / Wet / Hazardous)",
    "First Aid Kit",
    "Drinking water bottles",
    "Banners / Placards for awareness",
    "Cleaning tools: grabbers, rakes, bamboo sticks, shovels",
    "Reflective vests for visibility (if near roads or traffic areas)"
  ];

  const safetyReminders = [
    "Always wear gloves and avoid direct contact with waste",
    "Do not enter deep or fast-flowing water",
    "Avoid electrical poles, broken glass, or medical waste",
    "Report injuries or accidents immediately to team coordinators",
    "Use sunscreen and hats for sun protection"
  ];

  const awarenessIdeas = [
    '"Clean Rivers, Clean Lives"',
    '"Don\'t Dump, Let Rivers Breathe"',
    '"Be the Change You Wish to See"'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      <div className="bg-gradient-to-r from-blue-600 via-teal-600 to-green-600 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute w-full h-full opacity-30">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="absolute w-full h-32 bg-gradient-to-b from-white/20 to-transparent animate-[wave_3s_ease-in-out_infinite]" style={{ top: `${i * 25}%`, animationDelay: `${i * 0.5}s` }}></div>
            ))}
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <Droplet className="w-16 h-16 mx-auto mb-6 animate-[drop_2s_ease-in-out_infinite]" />
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">River Cleaning Checklist</h1>
          <style jsx>{`
            @keyframes wave {
              0%, 100% { transform: translateY(0) scaleY(1); }
              50% { transform: translateY(20px) scaleY(1.1); }
            }
            @keyframes drop {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(10px); }
            }
          `}</style>
          <p className="text-xl">Clean Rivers • Clean Communities • Cleaner Future</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Intro */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-16">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            River cleaning is not just an event — it's a collective action for protecting our planet. At Yashlok Welfare Foundation, we follow a systematic and safe approach for every clean-up activity to ensure both impact and volunteer safety.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            This checklist helps volunteers and community groups plan and conduct river or canal clean-ups effectively and responsibly.
          </p>
        </div>

        {/* Before Clean-Up */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
              1
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Before the Clean-Up (Preparation Phase)</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="shadow-xl">
              <CardHeader className="bg-blue-50">
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-6 h-6 text-blue-600" />
                  A. Planning
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-3">
                  {preparationSteps.map((step, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{step}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-xl">
              <CardHeader className="bg-green-50">
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="w-6 h-6 text-green-600" />
                  B. Equipment & Materials
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-2">
                  {equipment.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold">•</span>
                      <span className="text-gray-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-xl">
              <CardHeader className="bg-purple-50">
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-6 h-6 text-purple-600" />
                  C. Team Briefing
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Explain safety instructions and area boundaries</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Assign volunteers in small teams (5–10 per zone)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Appoint documentation lead for records</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Ensure all participants have emergency contacts</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* During Clean-Up */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
              2
            </div>
            <h2 className="text-3xl font-bold text-gray-900">During the Clean-Up (Execution Phase)</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="shadow-xl">
              <CardHeader className="bg-gradient-to-r from-red-50 to-orange-50">
                <CardTitle className="text-2xl">A. Safety First</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Always wear gloves and closed footwear</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Avoid picking sharp or hazardous objects directly by hand</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Stay hydrated and take small breaks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Keep children away from risky or slippery zones</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Follow the team leader's instructions at all times</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-xl">
              <CardHeader className="bg-gradient-to-r from-green-50 to-blue-50">
                <CardTitle className="text-2xl">B. Waste Segregation</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Separate Plastic / Metal / Glass / Organic waste at source</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Avoid mixing recyclable and non-recyclable materials</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Report any chemical, medical, or electronic waste immediately</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-xl">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50">
                <CardTitle className="text-2xl">C. Collection & Disposal</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Use designated garbage bags for each waste type</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Do not dump waste back near drains or on roads</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Hand over waste to authorized municipal collectors</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-xl">
              <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50">
                <CardTitle className="flex items-center gap-2">
                  <Camera className="w-6 h-6" />
                  D. Documentation
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Camera className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Take before-and-after photos of the site</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Camera className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Record number of volunteers, waste collected (kg), and duration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Camera className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Capture quotes and feedback from participants</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* After Clean-Up */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
              3
            </div>
            <h2 className="text-3xl font-bold text-gray-900">After the Clean-Up (Post-Event Phase)</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="shadow-xl">
              <CardHeader className="bg-orange-50">
                <CardTitle>A. Proper Disposal</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Ensure all waste is transferred to municipal disposal facility</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Clean up gloves, tools, and materials for reuse</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Sanitize hands and equipment after the event</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-xl">
              <CardHeader className="bg-blue-50">
                <CardTitle>B. Feedback & Reporting</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Conduct a short debrief session with volunteers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Collect feedback on what went well and improvements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Submit final report with data (waste, volunteers, location, date)</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-xl">
              <CardHeader className="bg-green-50">
                <CardTitle>C. Awareness Follow-Up</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Post results and images on social media</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Thank volunteers and partners publicly</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Plan the next clean-up event in the same area</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Safety Reminders */}
        <div className="mb-16">
          <Card className="shadow-2xl bg-gradient-to-br from-red-50 to-orange-50">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <AlertTriangle className="w-8 h-8 text-red-600" />
                Volunteer Safety Reminders
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {safetyReminders.map((reminder, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-lg">{reminder}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Awareness Ideas */}
        <div className="mb-16">
          <Card className="shadow-2xl">
            <CardHeader className="bg-gradient-to-r from-blue-600 to-green-600 text-white">
              <CardTitle className="text-2xl">Awareness Ideas</CardTitle>
              <p className="text-white/90 mt-2">To make the drive more engaging</p>
            </CardHeader>
            <CardContent className="p-8">
              <div className="space-y-4">
                <p className="text-gray-700">
                  <strong>Conduct short talks</strong> on waste segregation and water pollution.
                </p>
                <div>
                  <p className="text-gray-700 font-semibold mb-3">Use banners with slogans like:</p>
                  <div className="grid md:grid-cols-3 gap-4">
                    {awarenessIdeas.map((slogan, index) => (
                      <div key={index} className="bg-gradient-to-br from-blue-50 to-green-50 rounded-lg p-4 text-center">
                        <p className="text-blue-900 font-bold text-lg">{slogan}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <p className="text-gray-700">
                  <strong>Invite local residents</strong> to participate.
                </p>
                <p className="text-gray-700">
                  <strong>Share your clean-up story online</strong> to inspire others.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Closing Message */}
        <div className="bg-gradient-to-r from-blue-600 via-teal-600 to-green-600 rounded-3xl p-12 text-white text-center">
          <Heart className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-6">Cleaning a river is not a one-time task</h2>
          <p className="text-xl mb-4 max-w-3xl mx-auto">
            It's a continuous commitment to protect nature. Every clean-up brings us one step closer to restoring India's rivers and building a culture of responsibility.
          </p>
          <p className="text-lg mb-10">
            Let's act together. Join the next River Clean-Up with Yashlok Welfare Foundation!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to={createPageUrl("GetInvolved")}>
              <Button className="bg-white text-blue-600 hover:bg-gray-100 px-10 py-6 text-lg">
                Register as Volunteer
              </Button>
            </Link>
            <Link to={createPageUrl("GetInvolved")}>
              <Button variant="outline" className="border-2 border-white bg-transparent text-black px-8 py-6 text-lg rounded-xl hover:bg-white/20">
                Partner With Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}