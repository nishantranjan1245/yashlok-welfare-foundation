import React, { useState } from "react";
import { MapPin, Mail, Phone, Send, Facebook, Instagram, Linkedin, Clock, Building2, MessageSquare, Briefcase, Newspaper } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function Contact() {
  // Set page title
  React.useEffect(() => {
    document.title = "Contact - Yashlok Welfare Foundation";
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="bg-gradient-to-r from-blue-600 via-teal-600 to-green-600 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 grid grid-cols-12 gap-4 opacity-10">
          {Array.from({ length: 60 }).map((_, i) => (
            <div key={i} className="bg-white rounded-full animate-[pulse_3s_ease-in-out_infinite]" style={{ animationDelay: `${i * 0.1}s` }}></div>
          ))}
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <MessageSquare className="w-16 h-16 mx-auto mb-6 animate-[pulse_2s_ease-in-out_infinite]" />
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 animate-[fadeIn_1s_ease-out]">Contact Us</h1>
          <style jsx>{`
            @keyframes fadeIn {
              from { opacity: 0; }
              to { opacity: 1; }
            }
          `}</style>
          <p className="text-xl max-w-3xl mx-auto mb-4">We'd love to hear from you! 💬</p>
          <p className="text-lg max-w-3xl mx-auto opacity-90">
            Whether you want to volunteer for a river clean-up, partner with us for road-safety campaigns, or simply learn more about our work — we're just a message away.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Our team is always open to collaboration, new ideas, and community participation. Let's join hands for a cleaner, safer India.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Contact Form */}
          <div>
            <Card className="shadow-2xl">
              <CardHeader>
                <CardTitle className="text-3xl">Send Us a Message</CardTitle>
                <p className="text-gray-600 mt-2">Form submissions are responded to within 24–48 hours.</p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      required
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <Select
                      value={formData.subject}
                      onValueChange={(value) => setFormData({...formData, subject: value})}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select subject" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="volunteer">Volunteer</SelectItem>
                        <SelectItem value="csr">CSR Partnership</SelectItem>
                        <SelectItem value="donation">Donation</SelectItem>
                        <SelectItem value="media">Media</SelectItem>
                        <SelectItem value="general">General Inquiry</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us how we can help you..."
                      required
                      rows={6}
                      className="w-full"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white py-6 text-lg"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Submit Message
                  </Button>
                  {submitted && (
                    <div className="bg-green-50 text-green-700 p-4 rounded-lg text-center">
                      Thank you! We'll get back to you soon.
                    </div>
                  )}
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl">Get in Touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Registered Office Address</h3>
                    <p className="text-gray-600">
                      Yashlok Welfare Foundation<br />
                      B-405, Mohan Mansion, Gulmohar Road,<br />
                      Chunnabhati (E), Mumbai,<br />
                      Maharashtra, India – 400022
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <a href="mailto:contact@yashlokwelfare.org" className="text-blue-600 hover:underline">
                      contact@yashlokwelfare.org
                    </a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                    <a href="tel:+919876543210" className="text-blue-600 hover:underline">
                      +91-9876543210
                    </a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Office Hours</h3>
                    <p className="text-gray-600">
                      Monday to Saturday — 10:00 AM to 6:00 PM<br />
                      (Closed on Sundays & Public Holidays)
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl">Connect on Social Media</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">
                  Stay updated with our latest drives, campaigns, and awareness programs. Follow and engage with us online:
                </p>
                <div className="flex gap-4">
                  <a 
                    href="https://facebook.com/yashlokwelfare" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors"
                  >
                    <Facebook className="w-6 h-6 text-white" />
                  </a>
                  <a 
                    href="https://instagram.com/yashlokwelfare" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-full flex items-center justify-center transition-colors"
                  >
                    <Instagram className="w-6 h-6 text-white" />
                  </a>
                  <a 
                    href="https://linkedin.com/company/yashlokwelfarefoundation" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-blue-700 hover:bg-blue-800 rounded-full flex items-center justify-center transition-colors"
                  >
                    <Linkedin className="w-6 h-6 text-white" />
                  </a>
                </div>
                <p className="text-sm text-gray-500 mt-4">
                  Join our community, share posts, and help us spread awareness about river cleaning and road safety.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Special Contact Sections */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="shadow-xl bg-gradient-to-br from-purple-50 to-purple-100">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center">
                  <Briefcase className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">For CSR Partnerships</h3>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                If you represent a corporate, institution, or organization looking to collaborate under CSR or community engagement programs, please reach out directly at:
              </p>
              <a href="mailto:csr@yashlokwelfare.org" className="text-purple-700 hover:underline font-semibold text-lg">
                📧 csr@yashlokwelfare.org
              </a>
              <p className="text-sm text-gray-600 mt-4">
                We'll get back to you with our partnership proposal and available collaboration models.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-xl bg-gradient-to-br from-orange-50 to-orange-100">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center">
                  <Newspaper className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">For Media & Press</h3>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                For interviews, coverage, or event stories, connect with our communications team:
              </p>
              <a href="mailto:media@yashlokwelfare.org" className="text-orange-700 hover:underline font-semibold text-lg">
                📧 media@yashlokwelfare.org
              </a>
              <p className="text-sm text-gray-600 mt-4">
                You can also request high-resolution images, impact reports, and press releases for publication.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Map & Directions */}
        <Card className="shadow-2xl mb-12">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <Building2 className="w-6 h-6" />
              Map & Directions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">
              📍 We are located near Chunnabhati (E), Mumbai — easily accessible by local train and road transport.
            </p>
            <p className="text-gray-600 mb-4">
              Use Google Maps: "Yashlok Welfare Foundation, Chunnabhati East, Mumbai"
            </p>
            <div className="bg-gray-200 h-64 rounded-xl flex items-center justify-center">
              <p className="text-gray-600">
                <a 
                  href="https://maps.google.com/?q=Yashlok+Welfare+Foundation+Chunnabhati+Mumbai" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline font-semibold"
                >
                  Open in Google Maps
                </a>
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Final CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-3xl p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">
            Let's make a cleaner, safer India — together.
          </h2>
          <p className="text-xl mb-10">
            Every message, every idea, every hand that joins makes a difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-blue-600 hover:bg-gray-100 px-10 py-6 text-lg">
              Volunteer With Us
            </Button>
<Button
      variant="outline"
      className="border-2 border-white bg-transparent text-black px-8 py-6 text-lg rounded-xl hover:bg-white/20"
    >Parnter Now
    </Button>
            <Button
                  variant="outline"
                  className="border-2 border-white bg-transparent text-black px-8 py-6 text-lg rounded-xl hover:bg-white/20"
                >Donate Now
                </Button>
          </div>
        </div>
      </div>
    </div>
  );
}