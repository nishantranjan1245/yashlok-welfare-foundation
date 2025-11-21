import React, { useState } from "react";
import { Heart, Shield, CheckCircle, Droplet, Users, TrendingUp, Gift, Award, DollarSign, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function Donate() {
  // Set page title
  React.useEffect(() => {
    document.title = "Donate - Yashlok Welfare Foundation";
  }, []);

  const [selectedAmount, setSelectedAmount] = useState(null);
  const [customAmount, setCustomAmount] = useState("");

  const donationImpact = [
    { amount: 500, impact: "Provides road-safety reflectors for 5 riders", icon: Shield },
    { amount: 1000, impact: "Buys cleaning tools for one clean-up drive", icon: Droplet },
    { amount: 2500, impact: "Funds logistics for one awareness campaign", icon: Users },
    { amount: 5000, impact: "Supports one full community clean-up event", icon: TrendingUp },
    { amount: 10000, impact: "Helps organize a large-scale river clean-up with volunteer kits", icon: Award }
  ];

  const donationMethods = [
    { method: "Online Payment", icon: CreditCard, description: "Donate via secure payment gateway (Razorpay / Stripe / PayU)" },
    { method: "UPI Donation", icon: DollarSign, description: "UPI ID: yashlokwelfare@upi" },
    { method: "Offline Donations", icon: Gift, description: "For cheque or in-kind donations, contact: donate@yashlokwelfare.org" }
  ];

  const handleDonate = () => {
    const amount = selectedAmount || customAmount;
    if (amount) {
      alert(`Thank you for your generous donation of ₹${amount}! (Payment integration coming soon)`);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-teal-50 to-green-50">
      <div className="bg-gradient-to-r from-blue-600 via-teal-600 to-green-600 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/20 rounded-full animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite]"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-white/20 rounded-full animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite] animation-delay-500"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <Heart className="w-16 h-16 mx-auto mb-6 animate-[heartbeat_1.5s_ease-in-out_infinite]" />
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 animate-[glow_2s_ease-in-out_infinite]">Donate & Support Our Mission</h1>
          <style jsx>{`
            @keyframes heartbeat {
              0%, 100% { transform: scale(1); }
              10%, 30% { transform: scale(1.1); }
              20%, 40% { transform: scale(1); }
            }
            @keyframes glow {
              0%, 100% { text-shadow: 0 0 10px rgba(255,255,255,0.5); }
              50% { text-shadow: 0 0 20px rgba(255,255,255,0.8), 0 0 30px rgba(255,255,255,0.6); }
            }
          `}</style>
          <p className="text-xl max-w-4xl mx-auto mb-4">
            Every small contribution helps us build a cleaner and safer India.
          </p>
          <p className="text-lg max-w-3xl mx-auto opacity-90">
            When you donate to Yashlok Welfare Foundation, you are directly supporting our community programs — from river cleaning drives to road-safety awareness campaigns.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Intro */}
        <div className="text-center mb-16">
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Your donation helps us buy cleaning tools, distribute safety helmets and reflectors, print awareness materials, and organize impactful community drives. Together, we can make every drop cleaner and every road safer.
          </p>
        </div>

        {/* Why Support Matters */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Your Support Matters
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              At Yashlok Welfare Foundation, we run all our programs through volunteer participation and public support. Unlike large funded institutions, our impact depends on the kindness and contribution of people like you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Droplet, title: "River Clean-up Drives", description: "Organize river and canal clean-up drives across different regions" },
              { icon: Shield, title: "Safety Equipment", description: "Purchase safety kits, helmets, and reflectors for delivery riders and commuters" },
              { icon: Users, title: "Awareness Workshops", description: "Conduct workshops on responsible waste disposal and safe road behavior" },
              { icon: Gift, title: "Volunteer Supplies", description: "Provide cleaning tools, gloves, masks, and logistics for volunteers" },
              { icon: TrendingUp, title: "Information Materials", description: "Print and distribute materials to educate the public" },
              { icon: Award, title: "Community Impact", description: "Create lasting change through sustained engagement" }
            ].map((item, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-orange-400 rounded-full flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Donation Impact Table */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Choose Your Donation Impact
            </h2>
            <p className="text-lg text-gray-600">See how your contribution creates real change</p>
          </div>

          <Card className="shadow-2xl overflow-hidden">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gradient-to-r from-pink-600 to-orange-600 text-white">
                    <tr>
                      <th className="px-6 py-4 text-left text-lg font-semibold">Contribution</th>
                      <th className="px-6 py-4 text-left text-lg font-semibold">What It Supports</th>
                    </tr>
                  </thead>
                  <tbody>
                    {donationImpact.map((item, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <item.icon className="w-6 h-6 text-pink-600" />
                            <span className="text-xl font-bold text-gray-900">₹{item.amount}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-gray-700">{item.impact}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="bg-gray-50 px-6 py-4 text-center text-sm text-gray-600">
                You may choose any amount as per your capacity.
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Donation Form */}
        <div className="max-w-4xl mx-auto mb-20">
          <Card className="shadow-2xl">
            <CardHeader className="text-center bg-gradient-to-r from-pink-50 to-orange-50">
              <CardTitle className="text-3xl">Make a Donation</CardTitle>
              <p className="text-gray-600 mt-2">Your contribution creates lasting impact</p>
            </CardHeader>
            <CardContent className="p-8">
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Choose an amount</h3>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  {donationImpact.map((level, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setSelectedAmount(level.amount);
                        setCustomAmount("");
                      }}
                      className={`p-4 rounded-xl border-2 transition-all text-center ${
                        selectedAmount === level.amount
                          ? 'border-pink-600 bg-pink-50 shadow-lg'
                          : 'border-gray-200 hover:border-pink-300'
                      }`}
                    >
                      <level.icon className={`w-8 h-8 mx-auto mb-2 ${
                        selectedAmount === level.amount ? 'text-pink-600' : 'text-gray-400'
                      }`} />
                      <div className="font-bold text-xl text-gray-900">₹{level.amount}</div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Or enter a custom amount</h3>
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600 text-lg">₹</span>
                    <Input
                      type="number"
                      placeholder="Enter amount"
                      value={customAmount}
                      onChange={(e) => {
                        setCustomAmount(e.target.value);
                        setSelectedAmount(null);
                      }}
                      className="pl-10 text-lg h-14"
                    />
                  </div>
                </div>
              </div>

              {(selectedAmount || customAmount) && (
                <div className="bg-gradient-to-r from-pink-50 to-orange-50 rounded-xl p-6 mb-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-gray-600">Your donation</div>
                      <div className="text-3xl font-bold text-gray-900">
                        ₹{selectedAmount || customAmount}
                      </div>
                    </div>
                    <CheckCircle className="w-12 h-12 text-green-500" />
                  </div>
                  <p className="text-sm text-gray-600 mt-4">
                    {donationImpact.find(l => l.amount === selectedAmount)?.impact || 
                     "Your contribution will help sustain our programs and create lasting impact."}
                  </p>
                </div>
              )}

              <Button
                onClick={handleDonate}
                disabled={!selectedAmount && !customAmount}
                className="w-full bg-gradient-to-r from-pink-600 to-orange-600 hover:from-pink-700 hover:to-orange-700 text-white py-6 text-lg disabled:opacity-50"
              >
                <Heart className="w-5 h-5 mr-2" />
                Proceed to Secure Payment
              </Button>

              <p className="text-center text-sm text-gray-500 mt-4">
                Secure payment • Transparent Impact Reporting
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Ways to Donate */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Ways to Donate
            </h2>
            <p className="text-lg text-gray-600">Choose your preferred donation method</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {donationMethods.map((method, index) => (
              <Card key={index} className="shadow-xl hover:shadow-2xl transition-shadow">
                <CardContent className="p-8 text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${
                    index === 0 ? 'from-blue-400 to-blue-600' :
                    index === 1 ? 'from-green-400 to-green-600' :
                    'from-purple-400 to-purple-600'
                  } rounded-full flex items-center justify-center`}>
                    <method.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-xl text-gray-900 mb-3">{method.method}</h3>
                  <p className="text-gray-600">{method.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Transparency */}
        <div className="mb-20">
          <Card className="shadow-2xl bg-gradient-to-br from-blue-50 to-green-50">
            <CardContent className="p-12">
              <div className="text-center mb-8">
                <CheckCircle className="w-16 h-16 mx-auto mb-4 text-green-600" />
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Donation Transparency</h2>
                <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                  We believe in complete transparency and accountability.
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
                  <p className="text-gray-700">Every rupee used for on-ground impact</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-green-600 mb-2">Verified</div>
                  <p className="text-gray-700">Proper records and receipts for every donation</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-purple-600 mb-2">Reports</div>
                  <p className="text-gray-700">Annual utilization reports available on request</p>
                </div>
              </div>
              <p className="text-center text-gray-600 mt-8">
                Donations to Yashlok Welfare Foundation are used solely for public welfare purposes — river cleaning, waste management, and road safety awareness.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* CSR Support */}
        <div className="mb-20">
          <Card className="bg-gradient-to-r from-blue-600 via-teal-600 to-green-600 text-white rounded-3xl p-12">
            <CardContent className="p-12 text-center">
              <Award className="w-16 h-16 mx-auto mb-6" />
              <h2 className="text-3xl font-bold mb-4">Corporate & CSR Support</h2>
              <p className="text-xl mb-8 opacity-90">
                Companies and institutions can also contribute through CSR partnerships or annual sponsorships. Support us in implementing community campaigns under your CSR portfolio.
              </p>
              <Button className="bg-white text-purple-600 hover:bg-gray-100 px-10 py-6 text-lg">
                Partner Through CSR
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Testimonials */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              What Our Donors Say
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <p className="text-gray-700 italic mb-4">
                  "Our contribution helped fund a clean-up at Mithi River. The transformation was incredible — knowing your money creates real change feels amazing."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center text-white font-bold">
                    R
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Ritu Sharma</div>
                    <div className="text-sm text-gray-600">Donor</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardContent className="p-8">
                <p className="text-gray-700 italic mb-4">
                  "We sponsored safety kits for 100 riders. It's inspiring to see how simple support can save lives."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold">
                    A
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Aditya Verma</div>
                    <div className="text-sm text-gray-600">CSR Partner</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Final CTA */}
        <div className="bg-gradient-to-r from-blue-600 via-teal-600 to-green-600 rounded-3xl p-12 text-white text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Every donation counts.
          </h2>
          <p className="text-xl mb-4">
            Your support fuels every clean-up, every safety campaign, and every small act of change.
          </p>
          <p className="text-lg mb-10 opacity-90">
            Let's build a cleaner, safer tomorrow — together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-pink-600 hover:bg-gray-100 px-10 py-6 text-lg">
              Donate Now
            </Button>
            <Button variant="outline" className="border-2 border-white bg-transparent text-black px-8 py-6 text-lg rounded-xl hover:bg-white/20">
              Partner With Us
            </Button>
            <Button variant="outline" className="border-2 border-white bg-transparent text-black px-8 py-6 text-lg rounded-xl hover:bg-white/20">
              Volunteer
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}