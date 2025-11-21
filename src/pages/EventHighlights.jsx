import React from "react";
import { Calendar, MapPin, Users, Camera, Video, Image as ImageIcon, FileText, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

export default function EventHighlights() {
  // Set page title
  React.useEffect(() => {
    document.title = "Event Highlights - Yashlok Welfare Foundation";
  }, []);
  const riverEvents = [
    {
      title: "Mithi River Clean-Up Drive",
      location: "Mumbai",
      date: "October 2025",
      volunteers: "250+",
      impact: "300+ kg waste collected",
      image: "/image/image-4.jpg",
      highlights: [
        "Joint initiative with local civic bodies",
        "Segregation & safe disposal of all collected waste",
        "Local media coverage in Mumbai Local Times",
        "Volunteers from colleges, RWAs, and CSR teams"
      ]
    },
    {
      title: "Community Clean-Up Week",
      location: "Kurla, Chunnabhatti & Chembur",
      date: "July 2025",
      volunteers: "400+",
      impact: "2,000 kg waste removed",
      image: "/image/image-3.jpg",
      highlights: [
        "Collaboration with residents and shopkeepers",
        "Awareness posters on 'Don't Dump Waste in Rivers'",
        "Waste handed over to municipal recyclers",
        "Featured in CSR Connect Online"
      ]
    },
    {
      title: "'Adopt a River Stretch' Pilot Project",
      location: "Various Locations",
      date: "May 2025",
      volunteers: "Local Communities",
      impact: "30% cleanliness improvement",
      image: "/image/image-10.jpg",
      highlights: [
        "Local communities take ownership of nearby river areas",
        "Each group monitors cleanliness monthly",
        "Partners: Local RWAs + Corporate CSR Teams",
        "Sustained engagement and visible improvement"
      ]
    }
  ];

  const roadSafetyEvents = [
    {
      title: "Reflector Awareness Drive",
      location: "Navi Mumbai",
      date: "September 2025",
      volunteers: "50+",
      impact: "150+ kits distributed",
      image: "/image/image-5.jpg",
      highlights: [
        "Supported by Mumbai Traffic Police",
        "Reflective vests provided to riders",
        "Media coverage in Eco India Journal",
        "Interactive street sessions on safe riding"
      ]
    },
    {
      title: "Road Safety Walkathon",
      location: "Andheri",
      date: "April 2025",
      volunteers: "300+",
      impact: "Community-wide awareness",
      image: "/image/image-7.jpg",
      highlights: [
        "Collaboration with schools & residents' associations",
        "Reflective wristbands distributed to participants",
        "Coverage by Times Civic Watch Mumbai",
        "Participants carried placards and performed skits"
      ]
    },
    {
      title: "Helmet Awareness Day",
      location: "Kurla Junction",
      date: "January 2025",
      volunteers: "40+",
      impact: "120 helmets distributed",
      image: "/image/image-9.jpg",
      highlights: [
        "National Road Safety Month observance",
        "Increased awareness on head injury prevention",
        "Volunteers documented real commuter feedback",
        "Traffic safety leaflets shared"
      ]
    }
  ];

  const communityEvents = [
    {
      title: "World Environment Day Celebration",
      date: "June 2025",
      participants: "80",
      description: "A special awareness session on 'Rivers & Responsibility' featuring experts and youth volunteers. 80 participants pledged to reduce plastic use and support community cleaning efforts.",
      activities: ["Pledge signing", "Poster creation contest", "River Clean-Up planning discussion"]
    },
    {
      title: "Volunteer Orientation Workshop",
      date: "February 2025",
      participants: "60",
      description: "Organized for new volunteers — explaining roles, safety guidelines, and awareness campaign methods. 60 new members onboarded into the Yashlok volunteer network.",
      activities: ["Waste segregation techniques", "Safety during clean-up", "Road-safety communication tips"]
    }
  ];

  const csrEvents = [
    {
      title: "Corporate Clean-Up Drive with GreenTech Pvt. Ltd.",
      date: "August 2025",
      participants: "100 employees",
      impact: "250 kg waste collected in 3 hours",
      description: "A collaborative drive under CSR partnership — team-building + social impact combined.",
      benefits: ["Team-building + social impact", "CSR acknowledgment certificate issued"]
    },
    {
      title: "Zero Waste Awareness Session",
      location: "Mahim",
      date: "March 2025",
      participants: "120+ residents",
      description: "Awareness program focusing on segregation and reducing single-use plastic. Supported by the local ward office and civic partners.",
      activities: ["Live demonstration on waste segregation", "Distribution of reusable cloth bags"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-teal-50 to-green-50">
      <div className="bg-gradient-to-r from-blue-600 via-teal-600 to-green-600 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-white/10 to-transparent animate-[slideInRight_2s_ease-out]"></div>
          <div className="absolute top-1/4 left-10 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-[float_4s_ease-in-out_infinite]"></div>
          <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-[float_6s_ease-in-out_infinite_reverse]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <Camera className="w-16 h-16 mx-auto mb-6 animate-[slideInRight_1s_ease-out]" />
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 animate-[slideInRight_1s_ease-out]">🎉 Event Highlights</h1>
          <style jsx>{`
            @keyframes slideInRight {
              from {
                opacity: 0;
                transform: translateX(100px);
              }
              to {
                opacity: 1;
                transform: translateX(0);
              }
            }
            @keyframes float {
              0%, 100% { transform: translateY(0) translateX(0); }
              50% { transform: translateY(-20px) translateX(20px); }
            }
          `}</style>
          <p className="text-xl">From Awareness to Action.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-16">
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Every event is a story of change — powered by volunteers, communities, and partners.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            At Yashlok Welfare Foundation, our events bring people together to clean rivers, promote road safety, and spread awareness for a cleaner, safer India. Here's a look at some of our most impactful events and campaigns.
          </p>
        </div>

        {/* River Cleaning Events */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">🟩 1️⃣ River Cleaning Events</h2>
          <div className="space-y-12">
            {riverEvents.map((event, index) => (
              <Card key={index} className="shadow-2xl overflow-hidden">
                <div className="grid md:grid-cols-2">
                  <div className="h-64 md:h-auto">
                    <img 
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-8">
                    <div className="flex flex-wrap gap-3 mb-4">
                      <div className="flex items-center gap-2 text-blue-600">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm font-semibold">{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{event.location}</span>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">🌊 {event.title}</h3>
                    <div className="flex flex-wrap gap-4 mb-6">
                      <div className="bg-blue-50 rounded-lg px-4 py-2">
                        <div className="flex items-center gap-2 text-blue-700">
                          <Users className="w-4 h-4" />
                          <span className="text-sm font-semibold">{event.volunteers} Volunteers</span>
                        </div>
                      </div>
                      <div className="bg-green-50 rounded-lg px-4 py-2">
                        <span className="text-sm font-semibold text-green-700">{event.impact}</span>
                      </div>
                    </div>
                    <div className="space-y-2 mb-6">
                      <p className="font-semibold text-gray-900">Highlights:</p>
                      {event.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <span className="text-green-600 mt-1">✓</span>
                          <span className="text-gray-700 text-sm">{highlight}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                        <ImageIcon className="w-4 h-4 mr-2" />
                        View Photos
                      </Button>
                      <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                        <Video className="w-4 h-4 mr-2" />
                        Watch Clip
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Road Safety Events */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">🚦 2️⃣ Road Safety Awareness Events</h2>
          <div className="space-y-12">
            {roadSafetyEvents.map((event, index) => (
              <Card key={index} className="shadow-2xl overflow-hidden">
                <div className="grid md:grid-cols-2">
                  <div className="h-64 md:h-auto">
                    <img 
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-8">
                    <div className="flex flex-wrap gap-3 mb-4">
                      <div className="flex items-center gap-2 text-orange-600">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm font-semibold">{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{event.location}</span>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">🚴 {event.title}</h3>
                    <div className="flex flex-wrap gap-4 mb-6">
                      <div className="bg-orange-50 rounded-lg px-4 py-2">
                        <div className="flex items-center gap-2 text-orange-700">
                          <Users className="w-4 h-4" />
                          <span className="text-sm font-semibold">{event.volunteers} Volunteers</span>
                        </div>
                      </div>
                      <div className="bg-green-50 rounded-lg px-4 py-2">
                        <span className="text-sm font-semibold text-green-700">{event.impact}</span>
                      </div>
                    </div>
                    <div className="space-y-2 mb-6">
                      <p className="font-semibold text-gray-900">Highlights:</p>
                      {event.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <span className="text-orange-600 mt-1">✓</span>
                          <span className="text-gray-700 text-sm">{highlight}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <Button variant="outline" className="border-orange-600 text-orange-600 hover:bg-orange-50">
                        <ImageIcon className="w-4 h-4 mr-2" />
                        View Photos
                      </Button>
                      <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                        <Video className="w-4 h-4 mr-2" />
                        Campaign Recap
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Community Events */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">🧑‍🤝‍🧑 3️⃣ Volunteer & Community Engagement Events</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {communityEvents.map((event, index) => (
              <Card key={index} className="shadow-xl">
                <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50">
                  <div className="flex items-center gap-2 text-purple-600 mb-2">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm font-semibold">{event.date}</span>
                  </div>
                  <CardTitle className="text-2xl">🌏 {event.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="bg-purple-50 rounded-lg px-4 py-2 inline-block mb-4">
                    <span className="text-purple-700 font-semibold">{event.participants} participants</span>
                  </div>
                  <p className="text-gray-700 mb-4">{event.description}</p>
                  <div className="space-y-2">
                    <p className="font-semibold text-gray-900">Activities:</p>
                    {event.activities.map((activity, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <span className="text-purple-600">•</span>
                        <span className="text-gray-700 text-sm">{activity}</span>
                      </div>
                    ))}
                  </div>
                  <Button variant="outline" className="mt-6 border-purple-600 text-purple-600 hover:bg-purple-50">
                    <FileText className="w-4 h-4 mr-2" />
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CSR Events */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">🏆 4️⃣ CSR & Partnership Events</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {csrEvents.map((event, index) => (
              <Card key={index} className="shadow-xl">
                <CardHeader className="bg-gradient-to-r from-blue-50 to-green-50">
                  <div className="flex items-center gap-2 text-blue-600 mb-2">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm font-semibold">{event.date}</span>
                  </div>
                  <CardTitle className="text-xl">🤝 {event.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="bg-blue-50 rounded-lg px-4 py-2 inline-block mb-4">
                    <span className="text-blue-700 font-semibold">{event.participants}</span>
                  </div>
                  <p className="text-gray-700 mb-4">{event.description}</p>
                  {event.impact && (
                    <div className="bg-green-50 rounded-lg p-4 mb-4">
                      <p className="text-green-700 font-semibold">Results: {event.impact}</p>
                    </div>
                  )}
                  {event.benefits && (
                    <div className="space-y-2 mb-4">
                      {event.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <span className="text-green-600">✓</span>
                          <span className="text-gray-700 text-sm">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  )}
                  {event.activities && (
                    <div className="space-y-2 mb-4">
                      <p className="font-semibold text-gray-900">Highlights:</p>
                      {event.activities.map((activity, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <span className="text-blue-600">•</span>
                          <span className="text-gray-700 text-sm">{activity}</span>
                        </div>
                      ))}
                    </div>
                  )}
                  <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                    <ImageIcon className="w-4 h-4 mr-2" />
                    View Photos
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">📅 5️⃣ Upcoming Events</h2>
          <Card className="shadow-2xl">
            <CardContent className="p-8">
              <div className="space-y-4 mb-8">
                {[
                  { event: "River Cleaning Marathon", location: "Mithi River (Mumbai)", date: "December 2025" },
                  { event: "Road Safety Marathon", subtitle: "Drive Safe India", date: "January 2026" },
                  { event: "Zero Waste Communities Awareness Drive", date: "February 2026" }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                    <Calendar className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-lg text-gray-900">{item.event}</h3>
                      {item.subtitle && <p className="text-gray-600 text-sm">"{item.subtitle}"</p>}
                      {item.location && <p className="text-gray-600 text-sm">{item.location}</p>}
                      <p className="text-blue-600 font-semibold text-sm mt-1">{item.date}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to={createPageUrl("GetInvolved")}>
                  <Button className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white px-10 py-6 text-lg">
                    Register as Volunteer
                  </Button>
                </Link>
                <Link to={createPageUrl("GetInvolved")}>
                  <Button variant="outline" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-10 py-6 text-lg">
                    Partner With Us
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Closing */}
        <div className="bg-gradient-to-r from-blue-600 via-teal-600 to-green-600 rounded-3xl p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-6">Closing Message</h2>
          <p className="text-xl mb-4">
            Every event at Yashlok Welfare Foundation is more than an activity — it's a movement led by citizens who care for their city, their rivers, and each other's safety.
          </p>
          <p className="text-lg opacity-90">
            We thank every volunteer, partner, and supporter who made these events successful. Together, we continue our mission to make India cleaner, safer, and more aware.
          </p>
        </div>
      </div>
    </div>
  );
}