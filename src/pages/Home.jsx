import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Button } from "@/components/ui/button";
import { 
  Droplet, 
  Shield, 
  Users, 
  Target, 
  Eye, 
  Heart,
  TrendingUp,
  Trash2,
  ShieldCheck,
  UserCheck,
  MapPin,
  ArrowRight,
  Quote
} from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  // Set page title
  React.useEffect(() => {
    document.title = "Yashlok Welfare Foundation – Empowering Communities";
  }, []);

  const impactStats = [
    { icon: Droplet, label: "River Cleaning Drives Conducted", value: "12+", color: "from-blue-500 to-teal-600" },
    { icon: Trash2, label: "Waste Removed", value: "3,000+ kg", color: "from-green-500 to-emerald-600" },
    { icon: ShieldCheck, label: "Helmets & Reflectors Distributed", value: "400+", color: "from-teal-500 to-cyan-600" },
    { icon: UserCheck, label: "Active Volunteers", value: "1,250+", color: "from-cyan-500 to-blue-600" },
    { icon: MapPin, label: "Communities Engaged", value: "20+", color: "from-emerald-500 to-green-600" },
  ];

  const focusAreas = [
    {
      icon: Droplet,
      title: "River Cleaning & Restoration",
      description: "We organize community-driven river and canal clean-ups, awareness campaigns on waste segregation, and restoration of water bodies through local partnerships and volunteer action.",
      color: "blue"
    },
    {
      icon: Shield,
      title: "Road Safety Awareness",
      description: "We conduct awareness campaigns for pedestrians, drivers, and delivery riders — focusing on safe driving habits, helmet and reflector use, and community-level road-safety sessions.",
      color: "orange"
    }
  ];

  const recentUpdates = [
    {
      title: "River Cleaning Drive at Mithi River",
      description: "Over 250 volunteers joined!",
      image: "/image/image.jpg"
    },
    {
      title: "Reflector Awareness Campaign",
      description: "150 safety kits distributed to delivery riders.",
      image: "/image/image-2.jpg"
    },
    {
      title: "Community Clean-Up Week",
      description: "3 locations cleaned, 2,000 kg waste removed.",
      image: "/image/image-3.jpg"
    }
  ];

  const testimonials = [
    {
      quote: "I joined Yashlok Welfare for a river clean-up — it changed how I see waste and water. It's not just about cleaning, it's about ownership.",
      author: "Rahul",
      role: "Volunteer – Mumbai"
    },
    {
      quote: "Their road-safety campaigns made our community safer for kids and riders. Small steps, big change.",
      author: "Anita",
      role: "Resident – Navi Mumbai"
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-teal-50 to-green-50">
        {/* Animated Background with Particles */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(to right, rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                             linear-gradient(to bottom, rgba(59, 130, 246, 0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }} />
        </div>

        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full"
            style={{
              background: i % 3 === 0 ? '#3b82f6' : i % 3 === 1 ? '#14b8a6' : '#10b981',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: 0.3,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}

        {/* Floating Animated Icons */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-[15%] left-[8%]"
            animate={{
              y: [0, -30, 0],
              rotate: [0, 10, 0],
              opacity: [0.4, 0.7, 0.4]
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <Droplet className="w-16 h-16 text-blue-400" />
          </motion.div>

          <motion.div
            className="absolute top-[25%] right-[10%]"
            animate={{
              y: [0, -40, 0],
              rotate: [0, -15, 0],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          >
            <Shield className="w-14 h-14 text-teal-400" />
          </motion.div>

          <motion.div
            className="absolute bottom-[20%] left-[12%]"
            animate={{
              y: [0, -25, 0],
              scale: [1, 1.1, 1],
              opacity: [0.4, 0.7, 0.4]
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          >
            <Heart className="w-12 h-12 text-green-400 fill-green-300" />
          </motion.div>

          <motion.div
            className="absolute top-[45%] right-[15%]"
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          >
            <Users className="w-14 h-14 text-cyan-400" />
          </motion.div>
        </div>

        {/* Multiple Gradient Orbs with Different Animations */}
        <motion.div
          className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-blue-400/40 to-cyan-300/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 30, 0],
            y: [0, -20, 0]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-teal-400/40 to-green-300/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
            x: [0, -40, 0],
            y: [0, 30, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-indigo-300/30 to-purple-300/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.2, 0.4, 0.2],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center z-10">
          {/* Premium Badge with Glassmorphism */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-xl px-6 py-3 rounded-full shadow-2xl mb-8 border border-blue-200/50 hover:shadow-blue-200/50 transition-all group cursor-default"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="relative"
            >
              <Droplet className="w-5 h-5 text-blue-600" />
              <motion.div
                className="absolute inset-0 bg-blue-400 rounded-full blur-md"
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
            <span className="text-sm font-bold text-gray-800 tracking-wide">Non-Profit Organization</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="relative"
            >
              <Heart className="w-5 h-5 text-rose-500 fill-rose-500" />
              <motion.div
                className="absolute inset-0 bg-rose-400 rounded-full blur-md"
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h1 
              className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <motion.span
                className="inline-block text-gray-900 drop-shadow-sm"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Clean Rivers.
              </motion.span>{" "}
              <motion.span
                className="inline-block text-gray-900 drop-shadow-sm"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                Safer Roads.
              </motion.span>
              <br />
              <motion.span 
                className="relative inline-block"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-teal-600 to-green-600 animate-gradient font-extrabold">
                  Stronger Communities.
                </span>
                <motion.div
                  className="absolute -inset-2 bg-gradient-to-r from-blue-400/20 via-teal-400/20 to-green-400/20 blur-2xl -z-10"
                  animate={{
                    opacity: [0.5, 0.8, 0.5],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </motion.span>
            </motion.h1>

            <style jsx>{`
              @keyframes gradient {
                0%, 100% { background-position: 0% 50%; }
                50% { background-position: 100% 50%; }
              }
              .animate-gradient {
                background-size: 200% auto;
                animation: gradient 5s linear infinite;
              }
            `}</style>

            <motion.p 
              className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Yashlok Welfare Foundation works to restore rivers, promote responsible road behavior, and inspire community-driven change for a cleaner, safer India.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <Link to={createPageUrl("Programs")}>
                <motion.div 
                  whileHover={{ scale: 1.05, y: -5 }} 
                  whileTap={{ scale: 0.98 }}
                  className="relative"
                >
                  <Button className="bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 hover:from-blue-700 hover:via-cyan-700 hover:to-teal-700 text-white px-8 py-6 text-lg shadow-2xl hover:shadow-blue-500/50 transition-all relative overflow-hidden group border-0">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600"
                      initial={{ x: '100%' }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.4 }}
                    />
                    <span className="relative z-10 flex items-center font-semibold">
                      Join a Clean-Up
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                    {/* Shine effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                      animate={{ x: ['-100%', '200%'] }}
                      transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
                    />
                  </Button>
                </motion.div>
              </Link>
              <Link to={createPageUrl("Donate")}>
                <motion.div 
                  whileHover={{ scale: 1.05, y: -5 }} 
                  whileTap={{ scale: 0.98 }}
                >
                  <Button variant="outline" className="border-2 border-green-600 text-green-600 hover:bg-gradient-to-r hover:from-green-50 hover:to-emerald-50 px-8 py-6 text-lg hover:shadow-lg hover:shadow-green-500/30 transition-all font-semibold relative overflow-hidden group">
                    <Heart className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                    Support Our Work
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-green-100/50 to-emerald-100/50 opacity-0 group-hover:opacity-100"
                      transition={{ duration: 0.3 }}
                    />
                  </Button>
                </motion.div>
              </Link>
              <Link to={createPageUrl("GetInvolved")}>
                <motion.div 
                  whileHover={{ scale: 1.05, y: -5 }} 
                  whileTap={{ scale: 0.98 }}
                >
                  <Button variant="outline" className="border-2 border-cyan-600 text-cyan-600 hover:bg-gradient-to-r hover:from-cyan-50 hover:to-blue-50 px-8 py-6 text-lg hover:shadow-lg hover:shadow-cyan-500/30 transition-all font-semibold relative overflow-hidden group">
                    <Users className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                    Volunteer
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-cyan-100/50 to-blue-100/50 opacity-0 group-hover:opacity-100"
                      transition={{ duration: 0.3 }}
                    />
                  </Button>
                </motion.div>
              </Link>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-gray-600"
            >
              <motion.div 
                className="flex items-center gap-2"
                whileHover={{ scale: 1.1 }}
              >
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <ShieldCheck className="w-5 h-5 text-teal-600" />
                </motion.div>
                <span className="font-medium">100% Transparent</span>
              </motion.div>
              <div className="w-1 h-1 bg-gray-400 rounded-full" />
              <motion.div 
                className="flex items-center gap-2"
                whileHover={{ scale: 1.1 }}
              >
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Heart className="w-5 h-5 text-rose-600 fill-rose-500" />
                </motion.div>
                <span className="font-medium">Registered Non-Profit</span>
              </motion.div>
              <div className="w-1 h-1 bg-gray-400 rounded-full" />
              <motion.div 
                className="flex items-center gap-2"
                whileHover={{ scale: 1.1 }}
              >
                <motion.div
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Users className="w-5 h-5 text-blue-600" />
                </motion.div>
                <span className="font-medium">1,250+ Active Volunteers</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Animated Wave at Bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-24 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 1440 120" preserveAspectRatio="none">
            <motion.path
              fill="url(#wave-gradient)"
              d="M0,50 C240,80 480,20 720,50 C960,80 1200,20 1440,50 L1440,120 L0,120 Z"
              animate={{
                d: [
                  "M0,50 C240,80 480,20 720,50 C960,80 1200,20 1440,50 L1440,120 L0,120 Z",
                  "M0,20 C240,50 480,80 720,20 C960,50 1200,80 1440,20 L1440,120 L0,120 Z",
                  "M0,50 C240,80 480,20 720,50 C960,80 1200,20 1440,50 L1440,120 L0,120 Z"
                ]
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
            <defs>
              <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="50%" stopColor="#14b8a6" />
                <stop offset="100%" stopColor="#10b981" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              About <span className="text-blue-600">Yashlok Welfare Foundation</span>
            </motion.h2>
            <motion.div 
              className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto mb-8"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            />
            <motion.p 
              className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              Founded in 2017, Yashlok Welfare Foundation is a non-profit organization dedicated to river cleaning, waste management awareness, and road-safety education across India. We bring citizens, volunteers, and partners together to make cities cleaner and roads safer through sustained awareness drives, clean-up campaigns, and advocacy efforts.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50 relative overflow-hidden">
        {/* Animated background circles */}
        <motion.div
          className="absolute top-10 right-10 w-64 h-64 bg-blue-200/30 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-10 left-10 w-64 h-64 bg-green-200/30 rounded-full blur-3xl"
          animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, delay: 2 }}
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Our Focus Areas
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Two critical pillars of our mission to create sustainable change
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {focusAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${area.color === 'blue' ? 'from-blue-400 to-teal-600' : 'from-green-400 to-emerald-600'} rounded-2xl flex items-center justify-center mb-6`}>
                  <area.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{area.title}</h3>
                <p className="text-gray-600 leading-relaxed">{area.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div 
              className="bg-gradient-to-br from-blue-50 to-teal-100 rounded-2xl p-10 hover:shadow-2xl transition-shadow"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Target className="w-12 h-12 text-blue-600 mb-6" />
              </motion.div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                To engage citizens and communities in building a cleaner environment and a safer road culture through awareness, participation, and sustainable practices.
              </p>
            </motion.div>
            <motion.div 
              className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl p-10 hover:shadow-2xl transition-shadow"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Eye className="w-12 h-12 text-green-600 mb-6" />
              </motion.div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                A nation where rivers run clean, roads are safe, and every citizen contributes to protecting nature and life.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-teal-600 to-green-600 text-white relative overflow-hidden">
        {/* Animated wave patterns */}
        <div className="absolute inset-0 opacity-10">
          <motion.div
            className="absolute w-full h-full"
            animate={{ 
              backgroundPosition: ['0% 0%', '100% 100%'],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            style={{
              backgroundImage: 'radial-gradient(circle, white 2px, transparent 2px)',
              backgroundSize: '50px 50px'
            }}
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Our Impact Since 2017
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-300"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Driving real change through community participation
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {impactStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-all"
              >
                <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${stat.color} rounded-full flex items-center justify-center`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-sm text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-green-50/30" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              How We Work
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Our systematic approach to creating lasting impact
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { number: "01", title: "Identify Local Issues", description: "We collaborate with citizens and civic bodies to locate polluted river stretches and accident-prone zones." },
              { number: "02", title: "Take Action", description: "Volunteers participate in clean-ups, awareness walks, and safety campaigns." },
              { number: "03", title: "Sustain & Educate", description: "We ensure ongoing engagement with local communities for lasting change." }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="text-7xl font-bold text-blue-100 mb-4">{step.number}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Updates */}
      <section className="py-20 bg-gradient-to-br from-teal-50 to-green-50 relative overflow-hidden">
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-teal-200/30 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], x: [0, 50, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Recent Updates
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-600"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Stay informed with our latest activities and stories
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-10">
            {recentUpdates.map((update, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={update.image} 
                    alt={update.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{update.title}</h3>
                  <p className="text-gray-600">{update.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link to={createPageUrl("Updates")}>
              <Button variant="outline" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-6 text-lg">
                Read More Updates
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 to-green-50/20" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Volunteer Voices
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-600"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Hear from those making a difference
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-8 relative"
              >
                <Quote className="w-12 h-12 text-blue-300 mb-4" />
                <p className="text-lg text-gray-700 mb-6 italic leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-teal-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.author[0]}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">{testimonial.author}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-teal-600 to-green-600 text-white relative overflow-hidden">
        {/* Animated background elements */}
        <motion.div
          className="absolute top-0 left-0 w-full h-full opacity-10"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}
        />
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            animate={{ rotate: [0, 5, -5, 0] }}
            whileHover={{ scale: 1.1 }}
          >
            <Heart className="w-16 h-16 mx-auto mb-6" />
          </motion.div>
          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Join Hands for a Cleaner, Safer India
          </motion.h2>
          <p className="text-xl mb-4">
            Together, we can protect our rivers and make every journey safe.
          </p>
          <p className="text-lg mb-10 opacity-90">
            Your small step can create a lasting impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to={createPageUrl("GetInvolved")}>
              <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-6 text-lg shadow-xl">
                Volunteer Now
              </Button>
            </Link>
            <Link to={createPageUrl("Donate")}>
    <Button
      variant="outline"
      className="border-2 border-white bg-transparent text-black px-8 py-6 text-lg rounded-xl hover:bg-white/20"
    >
      Donate Now
    </Button>
  </Link>


  <Link to={createPageUrl("Contact")}>
    <Button
      variant="outline"
      className="border-2 border-white bg-transparent text-black px-8 py-6 text-lg rounded-xl hover:bg-white/20"
    >
      Contact Us
    </Button>
  </Link>

          </div>
        </div>
      </section>
    </div>
  );
}