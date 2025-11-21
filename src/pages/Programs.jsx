import React from "react";
import { Droplet, Shield, Calendar, MapPin, Target, Users, CheckCircle, TrendingUp, ArrowRight, Leaf, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Card, CardContent } from "@/components/ui/card";

export default function Programs() {
  // Set page title
  React.useEffect(() => {
    document.title = "Programs - Yashlok Welfare Foundation";
  }, []);

  const riverObjectives = [
    "Reduce waste dumping and pollution in river areas",
    "Encourage responsible waste management at the community level",
    "Restore natural water flow and riparian vegetation where possible",
    "Promote civic responsibility through awareness campaigns"
  ];

  const riverActivities = [
    { 
      title: "Community Clean-Up Drives", 
      description: "Volunteers join hands to clean riverbanks, lakes, and drainage outlets.",
      icon: Users
    },
    { 
      title: "Segregation & Disposal", 
      description: "Collected waste is sorted and handed to authorized municipal or recycling agencies.",
      icon: CheckCircle
    },
    { 
      title: "Awareness Campaigns", 
      description: "On-ground events and social media campaigns highlight pollution prevention and sustainability practices.",
      icon: TrendingUp
    },
    { 
      title: "River Monitoring & Reporting", 
      description: "Local volunteers help track river pollution levels, report illegal dumping, and maintain progress logs.",
      icon: Target
    },
    { 
      title: "Plantation Drives", 
      description: "Saplings and native plants are placed along banks to prevent erosion and promote biodiversity.",
      icon: Leaf
    }
  ];

  const roadObjectives = [
    "Reduce accidents through awareness and community education",
    "Promote helmet and reflector use for two-wheeler riders and workers",
    "Engage with local traffic departments for on-ground collaboration",
    "Build a culture of responsibility and safe mobility in cities"
  ];

  const roadActivities = [
    { 
      title: "Awareness Drives", 
      description: "Conducted at public areas, signals, and community zones to promote safe driving practices.",
      icon: Users
    },
    { 
      title: "Reflector & Helmet Distribution", 
      description: "Provide high-visibility safety gear to delivery riders, auto drivers, and cyclists.",
      icon: Shield
    },
    { 
      title: "Community Workshops", 
      description: "Sessions on traffic rules, pedestrian safety, and prevention of distracted or drunk driving.",
      icon: Target
    },
    { 
      title: "Night Safety Campaigns", 
      description: "Focused drives on visibility and reflective gear for those working or traveling at night.",
      icon: AlertTriangle
    }
  ];

  const upcomingEvents = [
    {
      date: "March 15, 2025",
      title: "Mithi River Clean-Up Drive",
      location: "Mumbai, Maharashtra",
      volunteers: "200+ Expected"
    },
    {
      date: "March 22, 2025",
      title: "Road Safety Awareness Week",
      location: "Navi Mumbai",
      volunteers: "100+ Expected"
    },
    {
      date: "April 5, 2025",
      title: "Community Clean-Up Marathon",
      location: "Multiple Locations",
      volunteers: "500+ Expected"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="bg-gradient-to-r from-[#2b6be5] via-[#1b919e] to-[#0e9680] text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-[float_6s_ease-in-out_infinite]"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-[float_8s_ease-in-out_infinite_reverse]"></div>
          <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-2xl animate-[pulse_4s_ease-in-out_infinite]"></div>
          <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-white/5 rounded-full blur-2xl animate-[pulse_5s_ease-in-out_infinite]"></div>
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)] animate-[spin_20s_linear_infinite]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="animate-[fadeInUp_0.8s_ease-out]">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 animate-[scaleIn_0.8s_ease-out] drop-shadow-2xl">Our Programs</h1>
            <div className="h-1 w-32 mx-auto bg-white/50 rounded-full mb-6 animate-[expandWidth_1s_ease-out]"></div>
          </div>
          <style jsx>{`
            @keyframes scaleIn {
              from {
                opacity: 0;
                transform: scale(0.8);
              }
              to {
                opacity: 1;
                transform: scale(1);
              }
            }
            @keyframes float {
              0%, 100% { transform: translateY(0px); }
              50% { transform: translateY(-20px); }
            }
            @keyframes fadeInUp {
              from {
                opacity: 0;
                transform: translateY(30px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
            @keyframes expandWidth {
              from {
                width: 0;
              }
              to {
                width: 8rem;
              }
            }
            @keyframes pulse {
              0%, 100% {
                transform: scale(1);
                opacity: 0.3;
              }
              50% {
                transform: scale(1.2);
                opacity: 0.5;
              }
            }
            @keyframes spin {
              from {
                transform: rotate(0deg);
              }
              to {
                transform: rotate(360deg);
              }
            }
          `}</style>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed animate-[fadeInUp_1s_ease-out_0.2s_both]">
            At Yashlok Welfare Foundation, we design and execute programs that bring together communities, volunteers, and civic bodies to solve two major urban challenges — river pollution and road accidents.
          </p>
          <p className="text-lg mt-4 max-w-3xl mx-auto opacity-90 animate-[fadeInUp_1s_ease-out_0.4s_both]">
            Each program focuses on awareness, action, and sustained change through participation and partnership.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* River Cleaning Program */}
        <div className="mb-32">
          <div className="text-center mb-12">
            <div className="inline-block p-4 bg-blue-100 rounded-full mb-4">
              <Droplet className="w-12 h-12 text-blue-600" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              River Cleaning & Restoration Program
            </h2>
            <p className="text-xl text-blue-600 font-semibold mb-6">Revive Rivers, Restore Life.</p>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 leading-relaxed">
                India's rivers and local water bodies are under constant pressure from pollution, waste dumping, and neglect. Through our River Cleaning & Restoration Program, we organize large-scale and local clean-up drives, awareness campaigns, and community engagement activities to bring rivers back to life.
              </p>
            </div>
          </div>

          {/* Objectives */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Objectives</h3>
            <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {riverObjectives.map((obj, index) => (
                <div key={index} className="flex items-start gap-3 bg-white p-4 rounded-xl shadow">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">{obj}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Key Activities */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Key Activities</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {riverActivities.map((activity, index) => (
                <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                      <activity.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <h4 className="font-bold text-lg text-gray-900 mb-2">{activity.title}</h4>
                    <p className="text-sm text-gray-600">{activity.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Community Impact */}
          <div className="bg-gradient-to-r from-blue-600 via-teal-600 to-green-600 text-white rounded-3xl p-12">
            <h3 className="text-3xl font-bold mb-8 text-center">Community Impact</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">12+</div>
                <p className="opacity-90">Clean-up drives conducted across Maharashtra</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">3,000+ kg</div>
                <p className="opacity-90">Waste removed from local water bodies</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">1,200+</div>
                <p className="opacity-90">Volunteers and residents involved</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">Partnership</div>
                <p className="opacity-90">With local civic bodies for continuous maintenance</p>
              </div>
            </div>
          </div>

          {/* Volunteer Opportunities */}
          <div className="bg-blue-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Volunteer Opportunities</h3>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-2">
                <ArrowRight className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                <span className="text-gray-700">Participate in clean-up events</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                <span className="text-gray-700">Coordinate logistics and volunteer groups</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                <span className="text-gray-700">Help in documentation and awareness photography</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                <span className="text-gray-700">Assist in waste segregation and collection</span>
              </li>
            </ul>
            <div className="flex flex-wrap gap-4">
              <Link to={createPageUrl("GetInvolved")}>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  Join a River Clean-Up
                </Button>
              </Link>
              <Link to={createPageUrl("GetInvolved")}>
                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                  Become a Volunteer
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Road Safety Program */}
        <div className="mb-32">
          <div className="text-center mb-12">
            <div className="inline-block p-4 bg-orange-100 rounded-full mb-4">
              <Shield className="w-12 h-12 text-orange-600" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Road Safety Awareness Program
            </h2>
            <p className="text-xl text-orange-600 font-semibold mb-6">Safe Roads, Safe Lives.</p>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 leading-relaxed">
                India witnesses one of the highest numbers of road accidents globally — many preventable through awareness and behavioral change. Our Road Safety Awareness Program aims to educate citizens, drivers, and communities about road safety norms, safe driving practices, and the importance of helmets and visibility.
              </p>
            </div>
          </div>

          {/* Objectives */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Objectives</h3>
            <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {roadObjectives.map((obj, index) => (
                <div key={index} className="flex items-start gap-3 bg-white p-4 rounded-xl shadow">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">{obj}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Key Activities */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Key Activities</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {roadActivities.map((activity, index) => (
                <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                      <activity.icon className="w-6 h-6 text-orange-600" />
                    </div>
                    <h4 className="font-bold text-lg text-gray-900 mb-2">{activity.title}</h4>
                    <p className="text-sm text-gray-600">{activity.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Community Impact */}
          <div className="bg-gradient-to-r from-blue-600 via-teal-600 to-green-600 text-white rounded-3xl p-12">
            <h3 className="text-3xl font-bold mb-8 text-center">Community Impact</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">400+</div>
                <p className="opacity-90">Helmets and reflectors distributed</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">20+</div>
                <p className="opacity-90">Awareness workshops conducted</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">1,000+</div>
                <p className="opacity-90">Drivers and riders reached</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">Improved</div>
                <p className="opacity-90">Visibility & safety for delivery personnel</p>
              </div>
            </div>
          </div>

          {/* Volunteer Opportunities */}
          <div className="bg-orange-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Volunteer Opportunities</h3>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-2">
                <ArrowRight className="w-5 h-5 text-orange-600 flex-shrink-0 mt-1" />
                <span className="text-gray-700">Conduct awareness campaigns and field events</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-5 h-5 text-orange-600 flex-shrink-0 mt-1" />
                <span className="text-gray-700">Help distribute safety kits and materials</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-5 h-5 text-orange-600 flex-shrink-0 mt-1" />
                <span className="text-gray-700">Design posters, visuals, and social awareness content</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-5 h-5 text-orange-600 flex-shrink-0 mt-1" />
                <span className="text-gray-700">Support coordination and communication teams</span>
              </li>
            </ul>
            <div className="flex flex-wrap gap-4">
              <Link to={createPageUrl("GetInvolved")}>
                <Button className="bg-orange-600 hover:bg-orange-700 text-white">
                  Join the Campaign
                </Button>
              </Link>
              <Link to={createPageUrl("Donate")}>
                <Button variant="outline" className="border-orange-600 text-orange-600 hover:bg-orange-50">
                  Support Safety Kits
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Program Approach */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Program Approach</h2>
            <p className="text-lg text-gray-600">From awareness to lasting impact</p>
          </div>
          <div className="bg-gradient-to-r from-blue-600 via-teal-600 to-green-600 text-white rounded-3xl p-12">
            <div className="flex flex-wrap justify-center items-center gap-8 text-center">
              <div className="flex flex-col items-center">
                <div className="text-3xl font-bold mb-2">1. Awareness</div>
              </div>
              <div className="text-3xl">→</div>
              <div className="flex flex-col items-center">
                <div className="text-3xl font-bold mb-2">2. Action</div>
              </div>
              <div className="text-3xl">→</div>
              <div className="flex flex-col items-center">
                <div className="text-3xl font-bold mb-2">3. Impact</div>
              </div>
              <div className="text-3xl">→</div>
              <div className="flex flex-col items-center">
                <div className="text-3xl font-bold mb-2">4. Continuity</div>
              </div>
            </div>
            <p className="text-center text-lg mt-8 opacity-90">
              We don't stop at one-time campaigns — every event is followed by monitoring, feedback, and collaboration with civic authorities to ensure that awareness turns into consistent, responsible behavior.
            </p>
          </div>
        </div>

        {/* Partnership Opportunities */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Partnership Opportunities</h2>
            <p className="text-lg text-gray-600">Collaborate with us for greater impact</p>
          </div>
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
            <p className="text-lg text-gray-700 mb-6">
              Corporates, institutions, and individuals can collaborate with Yashlok Welfare Foundation through:
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">CSR Partnerships</h4>
                  <p className="text-gray-600">Funding tools, safety kits, or logistics</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Adopt a River Program</h4>
                  <p className="text-gray-600">Long-term local water body restoration</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Road Safety Sponsorships</h4>
                  <p className="text-gray-600">Branded awareness campaigns</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Community Programs</h4>
                  <p className="text-gray-600">Joint initiatives with local communities</p>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to={createPageUrl("GetInvolved")}>
                <Button className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white px-8">
                  Partner With Us
                </Button>
              </Link>
              <Link to={createPageUrl("Contact")}>
                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8">
                  Contact Our CSR Desk
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
          <p className="text-lg text-gray-600">Join us at our next program</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {upcomingEvents.map((event, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-2 text-blue-600 mb-4">
                <Calendar className="w-5 h-5" />
                <span className="font-semibold">{event.date}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{event.title}</h3>
              <div className="flex items-center gap-2 text-gray-600 mb-2">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">{event.location}</span>
              </div>
              <p className="text-sm text-green-600 font-semibold">{event.volunteers}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link to={createPageUrl("GetInvolved")}>
            <Button className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white px-10 py-6 text-lg">
              Register for an Event
            </Button>
          </Link>
        </div>

        {/* Closing Note */}
        <div className="mt-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-3xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Mission</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Every river cleaned and every accident prevented brings us one step closer to a cleaner and safer India. Join our mission — because change begins when we act together.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to={createPageUrl("GetInvolved")}>
              <Button className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4">
                Get Involved
              </Button>
            </Link>
<Link to={createPageUrl("Donate")}>
    <Button
      variant="outline"
      className="border-2 border-white text-white bg-white/5 hover:bg-white/10 px-8 py-4 rounded-xl"
    >
      Donate Now
    </Button>
  </Link>

  {/* Volunteer Today – same style as Donate Now */}
  <Link to={createPageUrl("GetInvolved")}>
    <Button
      variant="outline"
      className="border-2 border-white text-white bg-white/5 hover:bg-white/10 px-8 py-4 rounded-xl"
    >
      Volunteer Today
    </Button>
  </Link>
          </div>
        </div>
      </div>
    </div>
  );
}