import React from "react";
import { Calendar, MapPin, Users, ArrowRight, Droplet, Shield, Award, Video, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

export default function Updates() {
  // Set page title
  React.useEffect(() => {
    document.title = "Updates - Yashlok Welfare Foundation";
  }, []);

  const updates = [
    {
      title: "Mithi River Clean-Up Drive – Mumbai",
      date: "October 2025",
      location: "Mumbai, Maharashtra",
      tagline: "Our largest clean-up drive yet",
      description: "Over 250 volunteers gathered at the Mithi River bank for our latest clean-up initiative. Together, they removed more than 300 kg of plastic waste and debris, restoring flow and improving local water quality. The drive also included an awareness walk where participants shared messages about proper waste disposal and river conservation.",
      image: "/image/image-4.jpg",
      highlights: [
        "Volunteers from schools, colleges, and corporate CSR teams participated",
        "All waste was segregated and handed over to municipal collectors",
        "Supported by local civic bodies and eco-conscious citizens"
      ],
      volunteers: "250+",
      impact: "300 kg waste removed",
      hashtags: "#CleanRivers #YashlokWelfare #MithiRiverDrive",
      icon: Droplet,
      color: "blue"
    },
    {
      title: "Reflector Awareness Campaign – Navi Mumbai",
      date: "September 2025",
      location: "Navi Mumbai",
      tagline: "Promoting safer roads at night",
      description: "To promote safer roads at night, Yashlok Welfare Foundation distributed 150+ reflector kits and helmets to delivery riders and daily commuters. Volunteers also conducted short awareness talks on night visibility, traffic rules, and responsible riding.",
      image: "/image/image-5.jpg",
      highlights: [
        "150+ delivery partners trained in road safety",
        "Reflective stickers and safety vests provided free of cost",
        "Collaboration with local traffic police and RTO department"
      ],
      volunteers: "50+",
      impact: "150 safety kits distributed",
      hashtags: "#SafeRoads #RoadSafetyAwareness #DriveSafeIndia",
      icon: Shield,
      color: "orange"
    },
    {
      title: "Community Clean-Up Week – Mumbai Suburbs",
      date: "July 2025",
      location: "Kurla, Chunnabhatti, and Chembur",
      tagline: "Clean Streets, Clean Rivers",
      description: "As part of our 'Clean Streets, Clean Rivers' initiative, we launched a week-long clean-up drive across 3 suburban areas — Kurla, Chunnabhatti, and Chembur. More than 400 volunteers participated and collected 2,000+ kg of waste from roadside drains and river stretches.",
      image: "/image/image-6.jpg",
      highlights: [
        "Local shop owners and residents joined spontaneously",
        "Awareness posters on 'Don't Dump Waste in Rivers' displayed publicly",
        "Waste collected was handed to recycling units"
      ],
      volunteers: "400+",
      impact: "2,000 kg waste removed",
      hashtags: "#CleanMumbai #YashlokAction #CommunityWeek",
      icon: Users,
      color: "green"
    },
    {
      title: "Road Safety Walkathon – Andheri",
      date: "April 2025",
      location: "Andheri, Mumbai",
      tagline: "Safe Roads, Safe Lives",
      description: "To raise awareness about pedestrian safety and responsible driving, Yashlok Welfare Foundation organized a Road Safety Walkathon with 300+ participants. The event featured placards, slogans, and interactive activities promoting safe road behavior.",
      image: "/image/image-7.jpg",
      highlights: [
        "Distribution of safety leaflets and reflectors",
        "Street plays demonstrating safe road behavior",
        "Media coverage by local news outlets",
        "Supported by Mumbai Traffic Police and local schools"
      ],
      volunteers: "300+",
      impact: "Community-wide awareness",
      hashtags: "#SafeLives #WalkForSafety #YashlokWelfare",
      icon: Shield,
      color: "purple"
    },
    {
      title: "Clean River Talk Series – Online Webinar",
      date: "March 2025",
      location: "Online",
      tagline: "Rivers for Life: Protecting Our Urban Waterways",
      description: "In collaboration with environmental experts, Yashlok Welfare Foundation hosted an online talk session titled 'Rivers for Life: Protecting Our Urban Waterways.' The event covered urban pollution challenges, sustainable water management, and volunteer engagement opportunities.",
      image: "/image/image-8.jpg",
      highlights: [
        "Environmental Activists and Civic Planners spoke",
        "Community Volunteers from Clean River Projects shared experiences",
        "Launch of our 'Adopt a River Stretch' initiative",
        "Importance of waste segregation before disposal emphasized"
      ],
      volunteers: "Online participants",
      impact: "Knowledge sharing",
      hashtags: "#CleanWaterIndia #Sustainability #RiverAwareness",
      icon: Video,
      color: "indigo"
    },
    {
      title: "Helmet Awareness Day – Kurla",
      date: "January 2025",
      location: "Kurla Junction, Mumbai",
      tagline: "Helmet On, Life On",
      description: "To mark National Road Safety Month, our volunteers conducted an awareness drive at Kurla junction, distributing helmets and safety pamphlets to riders. The campaign aimed to reduce head injury cases and encourage safe riding practices.",
      image: "/image/image-9.jpg",
      highlights: [
        "120+ helmets distributed",
        "350+ commuters engaged in awareness interaction",
        "Partnership with local helmet vendors for discounts"
      ],
      volunteers: "40+",
      impact: "120 helmets distributed",
      hashtags: "#HelmetOnLifeOn #YashlokSafety #SaferMumbai",
      icon: Shield,
      color: "red"
    }
  ];

  const upcomingEvents = [
    { title: "River Clean-Up Drive", date: "December 2025", location: "Chunnabhatti Stretch", icon: Droplet },
    { title: "Road Safety Marathon", date: "January 2026", location: "Mumbai", icon: Shield },
    { title: "Zero Waste Community Workshop", date: "February 2026", location: "TBA", icon: Award }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-teal-50 to-green-50">
      <div className="bg-gradient-to-r from-blue-600 via-teal-600 to-green-600 text-white py-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent animate-[slideRight_2s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent animate-[slideLeft_2s_ease-in-out_infinite]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 animate-[slideInLeft_1s_ease-out]">Latest Updates & Activities</h1>
          <style jsx>{`
            @keyframes slideInLeft {
              from {
                opacity: 0;
                transform: translateX(-100px);
              }
              to {
                opacity: 1;
                transform: translateX(0);
              }
            }
            @keyframes slideRight {
              0%, 100% { transform: translateX(-100%); }
              50% { transform: translateX(100%); }
            }
            @keyframes slideLeft {
              0%, 100% { transform: translateX(100%); }
              50% { transform: translateX(-100%); }
            }
          `}</style>
          <p className="text-xl max-w-4xl mx-auto leading-relaxed">
            At Yashlok Welfare Foundation, we believe that every small action creates ripples of change.
          </p>
          <p className="text-lg mt-4 max-w-3xl mx-auto opacity-90">
            Our updates highlight the on-ground efforts, awareness campaigns, and community programs we conduct to make our rivers cleaner and our roads safer. Stay connected with our journey, explore our impact stories, and see how volunteers like you are making a difference every day.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Recent Updates */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Recent Updates & Campaigns</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto" />
          </div>

          <div className="space-y-12">
            {updates.map((update, index) => (
              <Card key={index} className="shadow-2xl overflow-hidden hover:shadow-3xl transition-shadow">
                <div className={`h-2 bg-gradient-to-r ${
                  update.color === 'blue' ? 'from-blue-400 to-blue-600' :
                  update.color === 'orange' ? 'from-orange-400 to-orange-600' :
                  update.color === 'green' ? 'from-green-400 to-green-600' :
                  update.color === 'purple' ? 'from-purple-400 to-purple-600' :
                  update.color === 'indigo' ? 'from-indigo-400 to-indigo-600' :
                  'from-red-400 to-red-600'
                }`} />
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-2">
                    <div className="h-64 md:h-auto">
                      <img 
                        src={update.image}
                        alt={update.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-8 md:p-10">
                      <div className="flex flex-wrap gap-4 mb-4">
                        <div className="flex items-center gap-2 text-blue-600">
                          <Calendar className="w-4 h-4" />
                          <span className="text-sm font-semibold">{update.date}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <MapPin className="w-4 h-4" />
                          <span className="text-sm">{update.location}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3 mb-4">
                        <div className={`w-12 h-12 bg-gradient-to-br ${
                          update.color === 'blue' ? 'from-blue-400 to-blue-600' :
                          update.color === 'orange' ? 'from-orange-400 to-orange-600' :
                          update.color === 'green' ? 'from-green-400 to-green-600' :
                          update.color === 'purple' ? 'from-purple-400 to-purple-600' :
                          update.color === 'indigo' ? 'from-indigo-400 to-indigo-600' :
                          'from-red-400 to-red-600'
                        } rounded-full flex items-center justify-center flex-shrink-0`}>
                          <update.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                            {update.title}
                          </h3>
                          <p className="text-gray-600 italic">{update.tagline}</p>
                        </div>
                      </div>
                      
                      <p className="text-gray-700 leading-relaxed mb-6">
                        {update.description}
                      </p>
                      
                      <div className="bg-gray-50 rounded-xl p-4 mb-6">
                        <h4 className="font-bold text-gray-900 mb-3">Highlights:</h4>
                        <ul className="space-y-2">
                          {update.highlights.map((highlight, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                              <span className="text-green-600 font-bold">✓</span>
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="flex flex-wrap gap-4 mb-4">
                        <div className="bg-blue-50 rounded-lg px-4 py-2">
                          <div className="flex items-center gap-2 text-blue-700">
                            <Users className="w-4 h-4" />
                            <span className="text-sm font-semibold">{update.volunteers} Volunteers</span>
                          </div>
                        </div>
                        <div className="bg-green-50 rounded-lg px-4 py-2">
                          <div className="flex items-center gap-2 text-green-700">
                            <TrendingUp className="w-4 h-4" />
                            <span className="text-sm font-semibold">{update.impact}</span>
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-sm text-gray-500">{update.hashtags}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
            <p className="text-lg text-gray-600">Mark your calendar and join us</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {upcomingEvents.map((event, index) => (
              <Card key={index} className="shadow-xl hover:shadow-2xl transition-shadow">
                <CardContent className="p-8 text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${
                    index === 0 ? 'from-blue-400 to-blue-600' :
                    index === 1 ? 'from-orange-400 to-orange-600' :
                    'from-green-400 to-green-600'
                  } rounded-full flex items-center justify-center`}>
                    <event.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                  <div className="flex items-center justify-center gap-2 text-blue-600 mb-2">
                    <Calendar className="w-4 h-4" />
                    <span className="font-semibold">{event.date}</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-gray-600">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{event.location}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link to={createPageUrl("GetInvolved")}>
              <Button className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white px-10 py-6 text-lg">
                Register as a Volunteer
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Media Mentions */}
        <div className="mb-20">
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 md:p-12 text-center">
            <Award className="w-16 h-16 mx-auto mb-6 text-purple-600" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Media Mentions</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Our recent activities have been covered in local newspapers, blogs, and civic forums for creating visible community impact. We're proud to share our journey and inspire others to join the movement for cleaner rivers and safer roads.
            </p>
          </div>
        </div>

        {/* Final CTA */}
        <div className="bg-gradient-to-r from-blue-600 via-teal-600 to-green-600 rounded-3xl p-12 text-white text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Want to be Part of Our Next Update?
          </h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto">
            Every campaign begins with one step — your participation. Join our next clean-up or awareness drive and be part of the change.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to={createPageUrl("GetInvolved")}>
              <Button className="bg-white text-blue-600 hover:bg-gray-100 px-10 py-6 text-lg">
                Join the Movement
              </Button>
            </Link>
            <Link to={createPageUrl("Donate")}>
              <Button
                    variant="outline"
                    className="border-2 border-white bg-transparent text-black px-8 py-6 text-lg rounded-xl hover:bg-white/20"
                  >Donate Now
                  </Button>
            </Link>
            <Link to={createPageUrl("Programs")}>
<Button
      variant="outline"
      className="border-2 border-white bg-transparent text-black px-8 py-6 text-lg rounded-xl hover:bg-white/20"
    >View All Events
    </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}