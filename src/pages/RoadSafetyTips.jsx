import React from "react";
import { Shield, AlertTriangle, Phone } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function RoadSafetyTips() {
  // Set page title
  React.useEffect(() => {
    document.title = "Road Safety Tips - Yashlok Welfare Foundation";
  }, []);
  const categories = [
    {
      title: "For Two-Wheeler Riders",
      icon: "🛵",
      tips: [
        "Always wear a helmet — even for short distances",
        "Make sure your helmet strap is fastened properly",
        "Avoid speeding or overtaking from the wrong side",
        "Do not use mobile phones while riding",
        "Wear reflective jackets or bright clothing at night",
        "Use rear-view mirrors and check blind spots before turning",
        "Keep your vehicle serviced and brakes in good condition",
        "Never drive under the influence of alcohol or drugs",
        "Follow lane discipline and obey traffic lights"
      ]
    },
    {
      title: "For Car Drivers",
      icon: "🚗",
      tips: [
        "Always wear your seatbelt, and ensure all passengers do the same",
        "Do not exceed speed limits",
        "Avoid using phones — even hands-free, if possible",
        "Keep a safe distance from the vehicle ahead",
        "Do not drink and drive — even 'just a little' can be fatal",
        "Use indicators before every turn or lane change",
        "Be patient — don't honk unnecessarily or cut lanes",
        "Check mirrors and blind spots before reversing",
        "Give way to ambulances, pedestrians, and cyclists"
      ]
    },
    {
      title: "For Pedestrians",
      icon: "🚶",
      tips: [
        "Always use zebra crossings or pedestrian bridges",
        "Look both sides before crossing the road",
        "Avoid using mobile phones or earphones while walking near roads",
        "Walk on the left side or footpath (if available)",
        "Make yourself visible at night with bright or reflective clothing",
        "Teach children to hold hands while crossing",
        "Never jump over road dividers or cross between moving vehicles"
      ]
    },
    {
      title: "For Cyclists",
      icon: "🚴",
      tips: [
        "Wear a helmet and bright clothes",
        "Use a front light and rear reflector for night rides",
        "Keep both hands on the handle — avoid carrying heavy bags",
        "Ride in a single file, not side-by-side",
        "Follow all traffic signals and road rules",
        "Avoid using earphones or phones while cycling",
        "Maintain your cycle regularly (brakes, tires, chain)"
      ]
    },
    {
      title: "For Delivery Riders & Commercial Drivers",
      icon: "🛺",
      tips: [
        "Always wear helmets and reflective vests while riding",
        "Never drive under fatigue — rest when needed",
        "Avoid phone calls while driving (use only hands-free for navigation)",
        "Follow lane discipline and avoid wrong-side shortcuts",
        "Keep vehicle documents and license updated",
        "Report accidents immediately to authorities",
        "Respect traffic lights, even when roads look empty"
      ]
    },
    {
      title: "Night-Time Safety",
      icon: "🌙",
      tips: [
        "Use headlights and taillights properly",
        "Avoid tinted visors or dark glasses at night",
        "Stay alert for pedestrians and cyclists without lights",
        "Keep safe distance — visibility is reduced in low light",
        "Never overtake in poorly lit areas",
        "Use reflective stickers or bands for visibility"
      ]
    }
  ];

  const emergencyContacts = [
    { service: "Ambulance", number: "108", icon: "🚑" },
    { service: "Police Helpline", number: "100", icon: "🚓" },
    { service: "Fire Helpline", number: "101", icon: "🚒" },
    { service: "Women Helpline", number: "1091", icon: "📞" },
    { service: "Road Accident Helpline (NHAI)", number: "1033", icon: "🆘" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-teal-50 to-green-50">
      <div className="bg-gradient-to-r from-blue-600 via-teal-600 to-green-600 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-[flash_3s_ease-in-out_infinite]"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%)] bg-[length:20px_20px] animate-[scrollBg_20s_linear_infinite]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <Shield className="w-16 h-16 mx-auto mb-6 animate-[shake_2s_ease-in-out_infinite]" />
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">Road Safety Tips</h1>
          <style jsx>{`
            @keyframes flash {
              0%, 100% { opacity: 0; transform: translateX(-100%); }
              50% { opacity: 1; transform: translateX(100%); }
            }
            @keyframes shake {
              0%, 100% { transform: translateX(0); }
              25% { transform: translateX(-5px); }
              75% { transform: translateX(5px); }
            }
            @keyframes scrollBg {
              0% { background-position: 0 0; }
              100% { background-position: 1000px 1000px; }
            }
          `}</style>
          <p className="text-xl">Safe Roads. Safe Lives.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Intro */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-16 text-center">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Every year, thousands of lives are lost on Indian roads — most due to simple mistakes that can be prevented. At Yashlok Welfare Foundation, we believe awareness is the first step toward safety.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            This page provides essential road safety tips for pedestrians, drivers, and commuters — to help make every journey safe and responsible.
          </p>
        </div>

        {/* Safety Tips by Category */}
        <div className="space-y-12 mb-16">
          {categories.map((category, index) => (
            <Card key={index} className="shadow-2xl">
              <CardHeader className={`bg-gradient-to-r ${
                index % 3 === 0 ? 'from-orange-50 to-red-50' :
                index % 3 === 1 ? 'from-blue-50 to-purple-50' :
                'from-green-50 to-teal-50'
              }`}>
                <CardTitle className="text-3xl flex items-center gap-3">
                  <span className="text-4xl">{category.icon}</span>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-4">
                  {category.tips.map((tip, tipIndex) => (
                    <div key={tipIndex} className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                      <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-xs font-bold">✓</span>
                      </div>
                      <span className="text-gray-700">{tip}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 bg-blue-50 border-l-4 border-blue-600 p-4 rounded">
                  <p className="text-blue-900 font-semibold">
                    Remember: Your family is waiting for you — {category.title.toLowerCase().includes('rider') || category.title.toLowerCase().includes('driver') ? 'drive' : category.title.toLowerCase().includes('cyclist') ? 'ride' : 'travel'} responsibly.
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* For Parents & Schools */}
        <Card className="shadow-2xl mb-16">
          <CardHeader className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
            <CardTitle className="text-3xl">👨‍👩‍👧‍👦 For Parents & Schools</CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <p className="text-lg text-gray-700 mb-6">
              Children learn by observing adults. Teach them the basics of road safety from a young age:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Stop, Look, and Cross — make it a habit",
                "Never cross roads alone below age 10",
                "Use school transport that follows safety norms",
                "Wear helmets even as pillion riders",
                "Encourage schools to conduct road-safety awareness sessions"
              ].map((tip, index) => (
                <div key={index} className="flex items-start gap-3 bg-purple-50 p-4 rounded-lg">
                  <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                  <span className="text-gray-700">{tip}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Emergency Situations */}
        <Card className="shadow-2xl mb-16">
          <CardHeader className="bg-gradient-to-r from-red-600 to-orange-600 text-white">
            <CardTitle className="text-3xl flex items-center gap-2">
              <AlertTriangle className="w-8 h-8" />
              Emergency Situations
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <p className="text-lg text-gray-700 mb-6">If you witness an accident:</p>
            <ul className="space-y-3 mb-6">
              {[
                "Stay calm — ensure your safety first",
                "Call emergency helplines immediately",
                "Do not crowd or obstruct emergency responders",
                "Offer first aid only if you are trained",
                "Share photos or video evidence responsibly if needed by police"
              ].map((step, index) => (
                <li key={index} className="flex items-start gap-3">
                  <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-lg">{step}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Spreading Awareness */}
        <Card className="shadow-2xl mb-16">
          <CardHeader className="bg-gradient-to-r from-green-600 to-teal-600 text-white">
            <CardTitle className="text-3xl">📢 Spreading Awareness</CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <p className="text-lg text-gray-700 mb-6">You can make a difference:</p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Share safety tips with family, friends, and coworkers",
                "Support road-safety campaigns in your area",
                "Encourage use of helmets, seatbelts, and reflectors",
                "Volunteer for Yashlok Welfare Foundation's awareness drives",
                "Use social media responsibly to promote safety messages"
              ].map((action, index) => (
                <div key={index} className="flex items-start gap-3 bg-green-50 p-4 rounded-lg">
                  <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                  <span className="text-gray-700">{action}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Emergency Contacts */}
        <Card className="shadow-2xl mb-16">
          <CardHeader className="bg-gray-900 text-white">
            <CardTitle className="text-3xl flex items-center gap-2">
              <Phone className="w-8 h-8" />
              Emergency Contacts (India)
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {emergencyContacts.map((contact, index) => (
                <div key={index} className="bg-gradient-to-br from-red-50 to-orange-50 p-6 rounded-xl text-center border-2 border-red-200">
                  <div className="text-4xl mb-3">{contact.icon}</div>
                  <h3 className="font-bold text-xl text-gray-900 mb-2">{contact.service}</h3>
                  <a href={`tel:${contact.number}`} className="text-3xl font-bold text-red-600 hover:text-red-700">
                    {contact.number}
                  </a>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Closing Message */}
        <div className="bg-gradient-to-r from-blue-600 via-teal-600 to-green-600 rounded-3xl p-12 text-white text-center">
          <Shield className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-6">Every road connects lives — let's make every journey safe.</h2>
          <p className="text-xl mb-10">
            At Yashlok Welfare Foundation, we believe that responsibility on the road is an act of kindness. Drive safe, ride safe, and help build a culture of care on India's roads.
          </p>
        </div>
      </div>
    </div>
  );
}