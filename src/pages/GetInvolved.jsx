import React from "react";
import { Users, Handshake, Heart, CheckCircle, Award, Briefcase, UserPlus, Share2, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

export default function GetInvolved() {
  // Set page title
  React.useEffect(() => {
    document.title = "Get Involved - Yashlok Welfare Foundation";
  }, []);

  const ways = [
    {
      icon: Users,
      title: "Volunteer With Us",
      tagline: "Your time and effort can clean rivers and save lives",
      description: "Volunteers are the heart of Yashlok Welfare Foundation. Every clean-up drive, road-safety awareness event, and outreach program is powered by citizens like you.",
      activities: [
        "Join river clean-up drives and waste segregation teams",
        "Participate in road-safety campaigns and awareness rallies",
        "Help with logistics, photography, content creation, or event coordination",
        "Spread awareness online — share, post, and inspire"
      ],
      benefits: [
        "Certificate of participation",
        "Experience of real community work",
        "Recognition on our website and social media",
        "A chance to lead local campaigns in your area"
      ],
      cta: "Sign Up as a Volunteer",
      color: "blue"
    },
    {
      icon: Handshake,
      title: "Corporate Partnership (CSR)",
      tagline: "When businesses act, communities change",
      description: "Partner with us to create long-term, measurable impact through your CSR initiatives. Your company can help support clean rivers and safer roads while fulfilling its sustainability goals.",
      activities: [
        "Sponsor river cleaning or road-safety campaigns",
        "Provide cleaning tools, safety gear, or awareness materials",
        "Support logistics, volunteer management, or awareness kits",
        "Collaborate on employee volunteering and green workplace initiatives"
      ],
      benefits: [
        "Transparent operations and measurable results",
        "Alignment with SDGs (Clean Water, Sustainable Cities)",
        "Branding & visibility in all outreach materials",
        "Detailed impact reports and documentation"
      ],
      cta: "Partner With Us",
      color: "purple"
    },
    {
      icon: Heart,
      title: "Donate",
      tagline: "Your contribution funds cleaner rivers and safer communities",
      description: "Even small donations make a big difference. Funds are used to purchase safety gear, cleaning tools, awareness materials, and logistics for our on-ground programs.",
      activities: [
        "₹500 → Provides road-safety kits for 5 riders",
        "₹2,500 → Funds one river clean-up event logistics",
        "₹10,000 → Trains and equips 10 community volunteers",
        "All donations are used transparently and accounted for"
      ],
      benefits: [
        "Tax-deductible donations (80G)",
        "Transparent impact reports",
        "Recognition on our website",
        "Direct contribution to measurable change"
      ],
      cta: "Donate Now",
      color: "pink"
    }
  ];

  const additionalWays = [
    {
      icon: Briefcase,
      title: "Internship Opportunities",
      tagline: "Learn. Serve. Grow.",
      description: "We offer internship programs for young changemakers who want to gain hands-on experience in community work, campaign management, and NGO operations.",
      roles: [
        "Field Coordination (on-site campaign management)",
        "Content & Media (social impact storytelling)",
        "Research & Reporting (data, documentation, reports)",
        "CSR Communication & Partnerships"
      ],
      duration: "3 to 6 months (part-time / remote options available)",
      cta: "Apply for Internship"
    },
    {
      icon: UserPlus,
      title: "Community Ambassador",
      tagline: "Be the voice of change in your locality",
      description: "Community Ambassadors represent Yashlok Welfare Foundation in their neighborhoods, helping to organize local awareness drives, mini clean-ups, and road-safety events.",
      roles: [
        "Organize small awareness sessions and clean-up drives",
        "Engage local volunteers and residents",
        "Share updates and stories from your area",
        "Be recognized as a local change leader"
      ],
      cta: "Apply to be an Ambassador"
    }
  ];

  const otherWays = [
    { icon: Share2, text: "Share our posts on social media to spread awareness" },
    { icon: Users, text: "Refer a friend or coworker to volunteer or donate" },
    { icon: Lightbulb, text: "Invite us to conduct a road-safety talk in your office or community" },
    { icon: Award, text: "Offer technical or creative skills (graphic design, photography, web support, etc.)" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-teal-50 to-green-50">
      <div className="bg-gradient-to-r from-blue-600 via-teal-600 to-green-600 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent animate-[shimmer_3s_ease-in-out_infinite]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 animate-[bounceIn_1s_ease-out]">Get Involved</h1>
          <style jsx>{`
            @keyframes bounceIn {
              0% {
                opacity: 0;
                transform: scale(0.3) translateY(-50px);
              }
              50% {
                opacity: 1;
                transform: scale(1.05);
              }
              70% {
                transform: scale(0.9);
              }
              100% {
                transform: scale(1);
              }
            }
            @keyframes shimmer {
              0%, 100% { transform: translateX(-100%); }
              50% { transform: translateX(100%); }
            }
          `}</style>
          <p className="text-xl max-w-4xl mx-auto leading-relaxed">
            At Yashlok Welfare Foundation, we believe that real change starts with people — people who care, take action, and inspire others to do the same.
          </p>
          <p className="text-lg mt-4 max-w-3xl mx-auto opacity-90">
            You don't need to be an expert — just someone who believes in cleaner rivers and safer roads. Join us as a volunteer, partner, donor, or ambassador, and help us create visible impact in our communities.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Main Ways to Contribute */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Ways to Contribute
          </h2>
          <p className="text-lg text-gray-600">
            Choose how you'd like to support our mission
          </p>
        </div>

        <div className="space-y-12 mb-20">
          {ways.map((way, index) => (
            <Card key={index} className="shadow-2xl overflow-hidden">
              <div className={`h-2 bg-gradient-to-r ${
                way.color === 'blue' ? 'from-blue-400 to-blue-600' :
                way.color === 'purple' ? 'from-purple-400 to-purple-600' :
                'from-pink-400 to-pink-600'
              }`} />
              <CardContent className="p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <div className={`w-16 h-16 bg-gradient-to-br ${
                      way.color === 'blue' ? 'from-blue-400 to-blue-600' :
                      way.color === 'purple' ? 'from-purple-400 to-purple-600' :
                      'from-pink-400 to-pink-600'
                    } rounded-2xl flex items-center justify-center mb-6`}>
                      <way.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-3">{way.title}</h3>
                    <p className="text-lg text-gray-600 italic mb-6">{way.tagline}</p>
                    <p className="text-gray-700 leading-relaxed mb-6">{way.description}</p>
                    
                    <h4 className="font-bold text-gray-900 mb-3">What You Can Do:</h4>
                    <ul className="space-y-2 mb-6">
                      {way.activities.map((activity, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                            way.color === 'blue' ? 'text-blue-600' :
                            way.color === 'purple' ? 'text-purple-600' :
                            'text-pink-600'
                          }`} />
                          <span className="text-gray-700">{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-gray-900 mb-4">Benefits:</h4>
                    <div className="space-y-3 mb-8">
                      {way.benefits.map((benefit, idx) => (
                        <div key={idx} className={`p-4 rounded-xl ${
                          way.color === 'blue' ? 'bg-blue-50' :
                          way.color === 'purple' ? 'bg-purple-50' :
                          'bg-pink-50'
                        }`}>
                          <div className="flex items-start gap-3">
                            <Award className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                              way.color === 'blue' ? 'text-blue-600' :
                              way.color === 'purple' ? 'text-purple-600' :
                              'text-pink-600'
                            }`} />
                            <span className="text-gray-700">{benefit}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <Button className={`w-full ${
                      way.color === 'blue' ? 'bg-blue-600 hover:bg-blue-700' :
                      way.color === 'purple' ? 'bg-purple-600 hover:bg-purple-700' :
                      'bg-pink-600 hover:bg-pink-700'
                    } text-white py-6 text-lg`}>
                      {way.cta}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Ways */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              More Ways to Get Involved
            </h2>
            <p className="text-lg text-gray-600">
              Opportunities for deeper engagement
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {additionalWays.map((way, index) => (
              <Card key={index} className="shadow-xl">
                <CardHeader>
                  <div className={`w-16 h-16 bg-gradient-to-br ${
                    index === 0 ? 'from-orange-400 to-orange-600' : 'from-green-400 to-green-600'
                  } rounded-2xl flex items-center justify-center mb-4`}>
                    <way.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl">{way.title}</CardTitle>
                  <p className="text-gray-600 italic">{way.tagline}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-6 leading-relaxed">{way.description}</p>
                  
                  {way.roles && (
                    <>
                      <h4 className="font-bold text-gray-900 mb-3">Available Roles:</h4>
                      <ul className="space-y-2 mb-6">
                        {way.roles.map((role, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">{role}</span>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                  
                  {way.duration && (
                    <p className="text-gray-700 mb-6">
                      <strong>Duration:</strong> {way.duration}
                    </p>
                  )}
                  
                  <Button className={`w-full ${
                    index === 0 ? 'bg-orange-600 hover:bg-orange-700' : 'bg-green-600 hover:bg-green-700'
                  } text-white`}>
                    {way.cta}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Other Ways to Contribute */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Other Ways to Contribute
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {otherWays.map((way, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg flex items-start gap-4 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <way.icon className="w-6 h-6 text-white" />
                </div>
                <p className="text-gray-700 leading-relaxed">{way.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-3xl p-12 text-white text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Join the Movement
          </h2>
          <p className="text-xl mb-4 max-w-3xl mx-auto">
            Together, we can make a visible impact — one clean river and one safe road at a time.
          </p>
          <p className="text-lg mb-10 opacity-90">Your participation matters.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-blue-600 hover:bg-gray-100 px-10 py-6 text-lg">
              Volunteer Now
            </Button>
            <Button
                  variant="outline"
                  className="border-2 border-white bg-transparent text-black px-8 py-6 text-lg rounded-xl hover:bg-white/20"
                >Partner With Us
                </Button>
            <Link to={createPageUrl("Donate")}>
              <Button
                    variant="outline"
                    className="border-2 border-white bg-transparent text-black px-8 py-6 text-lg rounded-xl hover:bg-white/20"
                  >Donate Today
                  </Button>
            </Link>
          </div>
        </div>

        {/* Contact */}
        <div className="mt-12 text-center">
          <p className="text-gray-700 mb-2 font-semibold">Contact for Participation</p>
          <a href="mailto:contact@yashlokwelfare.org" className="text-blue-600 hover:underline text-lg">
            📧 contact@yashlokwelfare.org
          </a>
        </div>
      </div>
    </div>
  );
}