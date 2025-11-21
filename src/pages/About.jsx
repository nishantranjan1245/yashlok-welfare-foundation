import React from "react";
import { Users, Heart, Target, TrendingUp, Eye, Shield, CheckCircle, Droplet, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  // Set page title
  React.useEffect(() => {
    document.title = "About - Yashlok Welfare Foundation";
  }, []);

  const values = [
    { icon: Users, title: "Community First", description: "We believe people-led action brings lasting change." },
    { icon: Shield, title: "Transparency", description: "All our operations and finances are open and accountable." },
    { icon: TrendingUp, title: "Sustainability", description: "We focus on long-term impact rather than short-term results." },
    { icon: CheckCircle, title: "Safety", description: "Every program prioritizes participant safety and public responsibility." },
    { icon: Heart, title: "Inclusivity", description: "We welcome volunteers and partners from all backgrounds." }
  ];

  const milestones = [
    { number: "12+", label: "River Cleaning Drives", sublabel: "across Maharashtra" },
    { number: "3,000+ kg", label: "Waste Collected", sublabel: "and properly disposed" },
    { number: "1,200+", label: "Volunteers", sublabel: "participated" },
    { number: "400+", label: "Safety Kits", sublabel: "helmets and reflectors distributed" },
    { number: "20+", label: "Awareness Events", sublabel: "with local communities" }
  ];

  const approach = [
    { step: "01", title: "Identify Local Issues", description: "Collaborate with communities and civic bodies to spot polluted river stretches and high-risk road zones." },
    { step: "02", title: "Mobilize Volunteers", description: "Train and equip volunteers for awareness and action activities." },
    { step: "03", title: "Execute Campaigns", description: "Conduct clean-ups, outreach events, and awareness programs on ground." },
    { step: "04", title: "Sustain & Scale", description: "Follow up with community groups and replicate successful initiatives." }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 via-teal-600 to-green-600 text-white py-24 relative overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4yIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTEwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] animate-[slidePattern_20s_linear_infinite]"></div>
        </div>
        
        {/* Floating Orbs */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl animate-[float_8s_ease-in-out_infinite]"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl animate-[float_10s_ease-in-out_infinite] animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white rounded-full blur-2xl animate-[pulse_6s_ease-in-out_infinite]"></div>
        </div>

        {/* Animated Particles */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-[20%] w-3 h-3 bg-white rounded-full opacity-60 animate-[particle_15s_ease-in-out_infinite]"></div>
          <div className="absolute top-40 right-[30%] w-2 h-2 bg-white rounded-full opacity-40 animate-[particle_12s_ease-in-out_infinite] animation-delay-3000"></div>
          <div className="absolute bottom-32 left-[40%] w-4 h-4 bg-white rounded-full opacity-50 animate-[particle_18s_ease-in-out_infinite] animation-delay-5000"></div>
          <div className="absolute top-[60%] right-[20%] w-2 h-2 bg-white rounded-full opacity-70 animate-[particle_14s_ease-in-out_infinite] animation-delay-7000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 animate-[fadeInScale_1s_ease-out] drop-shadow-2xl">
            About Yashlok Welfare Foundation
          </h1>
          <style jsx>{`
            @keyframes fadeInScale {
              from {
                opacity: 0;
                transform: scale(0.9) translateY(20px);
              }
              to {
                opacity: 1;
                transform: scale(1) translateY(0);
              }
            }
            @keyframes slideInBar {
              from {
                width: 0;
                opacity: 0;
              }
              to {
                width: 6rem;
                opacity: 1;
              }
            }
            @keyframes float {
              0%, 100% { 
                transform: translateY(0px) translateX(0px) scale(1); 
              }
              33% { 
                transform: translateY(-30px) translateX(20px) scale(1.1); 
              }
              66% { 
                transform: translateY(20px) translateX(-20px) scale(0.9); 
              }
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
            @keyframes slidePattern {
              from {
                transform: translateX(0) translateY(0);
              }
              to {
                transform: translateX(60px) translateY(60px);
              }
            }
            @keyframes particle {
              0%, 100% {
                transform: translateY(0) translateX(0);
                opacity: 0;
              }
              10% {
                opacity: 1;
              }
              90% {
                opacity: 1;
              }
              50% {
                transform: translateY(-100px) translateX(50px);
              }
            }
            .animation-delay-2000 {
              animation-delay: 2s;
            }
            .animation-delay-3000 {
              animation-delay: 3s;
            }
            .animation-delay-5000 {
              animation-delay: 5s;
            }
            .animation-delay-7000 {
              animation-delay: 7s;
            }
          `}</style>
          <div className="w-24 h-1 bg-white mx-auto mb-6 animate-[slideInBar_1.2s_ease-out] shadow-lg" />
          <p className="text-xl max-w-4xl mx-auto leading-relaxed animate-[fadeInUp_1.4s_ease-out] drop-shadow-lg">
            A non-profit organization committed to building a cleaner and safer India through community-driven river cleaning and road-safety awareness programs.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Intro Section */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-16">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Yashlok Welfare Foundation is a non-profit organization committed to building a cleaner and safer India through community-driven river cleaning and road-safety awareness programs. Founded in 2017, the foundation has been mobilizing citizens, volunteers, and local partners to restore polluted water bodies and reduce road accidents by promoting responsible behavior and civic participation.
          </p>
        </div>

        {/* Our Journey */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto" />
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-3xl p-8 md:p-12">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Established in Mumbai in 2017, Yashlok Welfare Foundation began with a simple idea — <strong>"change starts with awareness and collective action."</strong>
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Starting with small clean-up drives and local road-safety sessions, the foundation has now grown into a movement connecting hundreds of volunteers across different communities. Over the years, we've successfully organized multiple river restoration projects, awareness walks, and safe-driving campaigns — spreading the message that protecting nature and saving lives is a shared responsibility.
            </p>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <Card className="shadow-xl bg-gradient-to-br from-blue-50 to-blue-100">
            <CardContent className="p-10">
              <Target className="w-16 h-16 text-blue-600 mb-6" />
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                To engage communities and citizens in protecting India's natural water resources and promoting road safety awareness through action-oriented campaigns, sustainable initiatives, and collaboration.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-xl bg-gradient-to-br from-green-50 to-green-100">
            <CardContent className="p-10">
              <Eye className="w-16 h-16 text-green-600 mb-6" />
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                A future where rivers flow clean, roads are safe, and every community contributes to environmental and social well-being.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Core Values */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600">The principles that guide everything we do</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-400 to-green-400 rounded-full flex items-center justify-center">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-sm text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* What We Do */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">What We Do</h2>
            <p className="text-lg text-gray-600">Projects that combine environmental action with civic awareness</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <Droplet className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">River Cleaning & Restoration</h3>
              <p className="text-gray-600 leading-relaxed">
                We organize clean-up drives, promote waste segregation, and restore local water bodies through plantation, awareness, and public participation.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Road Safety Awareness</h3>
              <p className="text-gray-600 leading-relaxed">
                We conduct awareness drives for pedestrians, drivers, and delivery workers — promoting helmet use, night visibility, and safer road habits through workshops and field campaigns.
              </p>
            </div>
          </div>
        </div>

        {/* Our Approach */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Approach</h2>
            <p className="text-lg text-gray-600">How we create lasting impact in communities</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {approach.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="text-5xl font-bold text-blue-100 mb-4">{item.step}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Our Team */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Team</h2>
            <p className="text-lg text-gray-600">Leadership driving our mission forward</p>
          </div>
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Directors</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-center gap-4 p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-2xl flex-shrink-0">
                  A
                </div>
                <div>
                  <h4 className="font-bold text-xl text-gray-900">Alok Prakash Adhikari</h4>
                  <p className="text-gray-600">Director & Co-founder</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center text-white font-bold text-2xl flex-shrink-0">
                  Y
                </div>
                <div>
                  <h4 className="font-bold text-xl text-gray-900">Yashwin Honnaya Bangera</h4>
                  <p className="text-gray-600">Director & Co-founder</p>
                </div>
              </div>
            </div>
            <p className="text-lg text-gray-700">
              We are supported by a growing network of volunteers, field coordinators, and community partners who make every campaign possible.
            </p>
          </div>
        </div>

        {/* Partnerships */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Partnerships & Collaborations</h2>
            <p className="text-lg text-gray-600">Working together for greater impact</p>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 md:p-12">
            <p className="text-lg text-gray-700 mb-6">We collaborate with:</p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <p className="text-gray-700">Local municipal bodies and civic departments</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <p className="text-gray-700">Corporate CSR partners supporting sustainability & safety</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <p className="text-gray-700">Resident welfare associations and volunteer communities</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <p className="text-gray-700">NGOs & eco-clubs working on waste management and environment protection</p>
              </div>
            </div>
            <p className="text-lg text-gray-700 mt-6">
              Together, we ensure every project is impactful, transparent, and community-centered.
            </p>
          </div>
        </div>

        {/* Milestones */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Milestones & Achievements</h2>
            <p className="text-lg text-gray-600">Our impact since 2017</p>
          </div>
          <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-3xl p-12">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {milestones.map((milestone, index) => (
                <div key={index} className="text-center text-white">
                  <Award className="w-12 h-12 mx-auto mb-4 opacity-80" />
                  <div className="text-4xl font-bold mb-2">{milestone.number}</div>
                  <div className="font-semibold mb-1">{milestone.label}</div>
                  <div className="text-sm opacity-90">{milestone.sublabel}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Closing Section */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Join Our Journey
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            At Yashlok Welfare Foundation, we believe that awareness and action together can shape a better tomorrow. Each small effort — whether cleaning a riverbank or sharing road-safety knowledge — contributes to a cleaner environment and safer roads for everyone.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#" className="inline-block">
              <button className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white px-10 py-4 rounded-lg text-lg font-semibold transition-all">
                Join Us
              </button>
            </a>
            <a href="#" className="inline-block">
              <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-10 py-4 rounded-lg text-lg font-semibold transition-all">
                Partner Now
              </button>
            </a>
            <a href="#" className="inline-block">
              <button className="border-2 border-green-600 text-green-600 hover:bg-green-50 px-10 py-4 rounded-lg text-lg font-semibold transition-all">
                Donate
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}