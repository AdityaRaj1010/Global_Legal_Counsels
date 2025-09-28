"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Building2, Globe, /*ExternalLink , Award, Users,*/ TrendingUp, Shield, ChevronLeft, ChevronRight} from "lucide-react";
import Image from "next/image";

// Client data - replace with your actual client information
const clientsData = [
    // {
    //     id: 1,
    //     name: "National Debt Relief, LLC",
    //     logo: "/images/clients/client1.webp", // Replace with actual logo path
    //     industry: "Corporate",
    //     description: "Provides debt relief & settlement services",
    //     caseType: "Intellectual Property",
    //     location: "New York, USA",
    //     yearEstablished: "2009",
    //     // employeeCount: "500+"
    // },
    {
        id: 2,
        name: "Law Offices of Philip H. Dyson",
        logo: "/images/clients/client2.svg",
        industry: "Law Firm",
        description: "Legal Expertise",
        caseType: "Corporate Law",
        location: "California, USA",
        yearEstablished: "1983",
        // employeeCount: "2000+"
    },
    {
        id: 3,
        name: "Klie Law Offices",
        logo: "/images/clients/client3.webp",
        industry: "Law Firm",
        description: "Family law attorney",
        caseType: "Employment Law",
        location: "West Virginia, USA",
        yearEstablished: "2005",
        // employeeCount: "1000+"
    },
    {
        id: 4,
        name: "Ironclad - Attorneys at Law",
        logo: "/images/clients/client4.jpeg",
        industry: "Law Firm",
        description: "Provides legal services",
        caseType: "Business Litigation",
        location: "New York, USA",
        yearEstablished: "2008",
        // employeeCount: "5000+"
    },
    {
        id: 5,
        name: "Platinum Legal",
        logo: "/images/clients/client5.avif",
        industry: "Law Firm",
        description: "Legal Services in Business, Property, Asset & Dispute Resolution",
        caseType: "Real Estate Law",
        location: "Auckland, New Zealand",
        yearEstablished: "2005",
        // employeeCount: "3000+"
    },
    {
        id: 6,
        name: "Erudite Legal",
        logo: "/images/clients/client6.gif",
        industry: "Law Firm",
        description: "Legal services",
        caseType: "Environmental Law",
        location: "Melbourne, Australia",
        // yearEstablished: "2012",
        // employeeCount: "800+"
    },
    {
        id: 7,
        name: "Inter Connects Inc.",
        logo: "/images/clients/client7.jpeg",
        industry: "Technology",
        description: "Delivers Professional Technology Subcontracting and Services",
        caseType: "Immigration Law",
        location: "Arizona, USA",
        yearEstablished: "2015",
        // employeeCount: "300+"
    },
    {
        id: 8,
        name: "CMN Group LLC",
        logo: "/images/clients/client8.png",
        industry: "Construction",
        description: "Infrastructure development",
        caseType: "Civil Litigation",
        location: "Virgina, USA",
        yearEstablished: "2000",
        // employeeCount: "1500+"
    },
    {
        id: 9,
        name: "Skillion Inc.",
        logo: "/images/clients/client9.png",
        industry: "Information Technology & Services",
        description: "Artificial Intelligence for Intelligence Solutions",
        caseType: "Civil Litigation",
        location: "Pennsylvania, USA",
        yearEstablished: "2016",
        // employeeCount: "1500+"
    }
];

const industries = ["All", "Technology", "Healthcare", "Finance", "Manufacturing", "Retail", "Energy", "Education", "Construction"];

export default function OurClients() {
    const [selectedIndustry, setSelectedIndustry] = useState("All");
    const [hoveredClient, setHoveredClient] = useState<number | null>(null);
    const [currentPage, setCurrentPage] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const scrollRef = useRef<HTMLDivElement>(null);

    // Filter clients based on selected industry
    const filteredClients = selectedIndustry === "All"
        ? clientsData
        : clientsData.filter(client => client.industry === selectedIndustry);

    // Auto-scroll functionality
    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            if (scrollRef.current) {
                const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
                const isAtEnd = scrollLeft + clientWidth >= scrollWidth - 10;

                if (isAtEnd) {
                    scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
                } else {
                    scrollRef.current.scrollBy({ left: 320, behavior: 'smooth' });
                }
            }
        }, 3000);

        return () => clearInterval(interval);
    }, [isAutoPlaying]);

    const scrollToDirection = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const scrollAmount = direction === 'left' ? -320 : 320;
            scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    const stats = [
        { icon: Building2, value: "300+", label: "Corporate Clients" },
        { icon: Globe, value: "5+", label: "Countries Served" },
        // { icon: Award, value: "50+", label: "Industry Awards" },
        { icon: TrendingUp, value: "98%", label: "Client Retention" }
    ];

    return (
        <section className="py-12 bg-gradient-to-br from-green-900 via-gray-900 to-blue-900 relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-[35%] w-96 h-96 bg-green-500 rounded-full filter blur-3xl opacity-20 animate-pulse" />
                <div className="absolute bottom-0 right-[35%] w-96 h-96 bg-blue-500 rounded-full filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }} />
            </div>
            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <Shield className="w-8 h-8 text-yellow-600" />
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-100">
                            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-yellow-500">Trusted</span> Clients
                        </h2>
                    </div>
                    <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                        We&apos;re honored to serve leading organizations across industries, providing them with
                        exceptional legal counsel and building lasting partnerships based on trust and excellence.
                    </p>
                </motion.div>

                {/* Stats Bar */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12"
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.05 }}
                            className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center group hover:shadow-xl transition-all duration-300"
                        >
                            <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-xl mb-3 group-hover:scale-110 transition-transform">
                                <stat.icon className="w-7 h-7 text-yellow-600" />
                            </div>
                            <h3 className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</h3>
                            <p className="text-sm text-gray-600">{stat.label}</p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Industry Filter */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="flex flex-wrap justify-center gap-3 mb-10"
                >
                    {industries.map((industry) => (
                        <motion.button
                            key={industry}
                            onClick={() => setSelectedIndustry(industry)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${selectedIndustry === industry
                                ? 'bg-gradient-to-r from-yellow-500 to-yellow-600 text-white shadow-lg'
                                : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                                }`}
                        >
                            {industry}
                        </motion.button>
                    ))}
                </motion.div>

                {/* Clients Grid/Carousel */}
                <div className="relative">
                    {/* Navigation Buttons */}
                    <button
                        onClick={() => scrollToDirection('left')}
                        className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white/90 backdrop-blur p-3 rounded-full shadow-lg hover:bg-white transition-all duration-300 hidden md:block"
                        onMouseEnter={() => setIsAutoPlaying(false)}
                        onMouseLeave={() => setIsAutoPlaying(true)}
                    >
                        <ChevronLeft className="cursor-pointer w-6 h-6 text-gray-700" />
                    </button>
                    <button
                        onClick={() => scrollToDirection('right')}
                        className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white/90 backdrop-blur p-3 rounded-full shadow-lg hover:bg-white transition-all duration-300 hidden md:block"
                        onMouseEnter={() => setIsAutoPlaying(false)}
                        onMouseLeave={() => setIsAutoPlaying(true)}
                    >
                        <ChevronRight className="cursor-pointer w-6 h-6 text-gray-700" />
                    </button>

                    {/* Clients Container */}
                    <div
                        ref={scrollRef}
                        className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                        onMouseEnter={() => setIsAutoPlaying(false)}
                        onMouseLeave={() => setIsAutoPlaying(true)}
                    >
                        <AnimatePresence mode="wait">
                            {filteredClients.map((client, index) => (
                                <motion.div
                                    key={`${client.id}-${selectedIndustry}`}
                                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ y: -8 }}
                                    onHoverStart={() => setHoveredClient(client.id)}
                                    onHoverEnd={() => setHoveredClient(null)}
                                    className="flex-shrink-0 w-[300px]"
                                >
                                    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 h-full">
                                        {/* Logo Section */}
                                        <div className="h-40 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
                                            {/* Decorative Background */}
                                            {/* <div className="absolute inset-0 opacity-10">
                                                <div className="absolute -right-8 -top-8 w-32 h-32 bg-yellow-500 rounded-full" />
                                                <div className="absolute -left-8 -bottom-8 w-32 h-32 bg-blue-500 rounded-full" />
                                            </div> */}

                                            {/* Logo Placeholder - Replace with actual Image component */}
                                            <div className="relative w-full h-full flex items-center justify-center">
                                                {/* <div className="w-24 h-24 bg-white rounded-xl shadow-md flex items-center justify-center">
                                                    <Building2 className="w-12 h-12 text-gray-400" />
                                                </div> */}
                                                {/* Uncomment and use this when you have actual logos */}
                                                <Image
                                                        src={client.logo}
                                                        alt={`${client.name}`}
                                                        fill
                                                        className="object-fit object-center bg-black text-white"
                                                        />
                                            </div>
                                        </div>

                                        {/* Client Info */}
                                        <div className="p-6">
                                            <h3 className="text-xl font-bold text-gray-900 mb-2">{client.name}</h3>
                                            <p className="text-sm text-gray-600 mb-2">{client.description}</p>

                                            <div className="space-y-2 mb-4">
                                                <div className="flex items-center gap-2 text-sm">
                                                    <Globe className="w-4 h-4 text-gray-400" />
                                                    <span className="text-gray-600">{client.location}</span>
                                                </div>
                                                {/* <div className="flex items-center gap-2 text-sm">
                                                    <Users className="w-4 h-4 text-gray-400" />
                                                    <span className="text-gray-600">{client.employeeCount} employees</span>
                                                </div> */}
                                            </div>

                                            <div className="flex flex-wrap gap-2">
                                                <span className="px-3 pt-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-medium">
                                                    {client.industry}
                                                </span>
                                                <span className="px-3 pt-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                                                    {client.caseType}
                                                </span>
                                            </div>

                                            {/* Hover Action */}
                                            {/* <AnimatePresence>
                                                {hoveredClient === client.id && (
                                                    <motion.div
                                                        initial={{ opacity: 0, y: 10 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        exit={{ opacity: 0, y: 10 }}
                                                        className="mt-4 pt-4 border-t border-gray-100"
                                                    >
                                                        <button className="w-full px-4 py-2 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white rounded-lg font-medium text-sm hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2">
                                                            View Case Study
                                                            <ExternalLink className="w-4 h-4" />
                                                        </button>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence> */}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </div>

                {/* Trust Indicators */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="mt-16 text-center"
                >
                    <div className="inline-flex items-center gap-8 px-8 py-4 bg-white rounded-2xl shadow-lg border border-gray-100">
                        <div className="flex -space-x-3">
                            {[1, 2, 3, 4, 5].map((i) => (
                                <div
                                    key={i}
                                    className="w-10 h-10 bg-gradient-to-br from-gray-300 to-gray-400 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold"
                                >
                                    {i}
                                </div>
                            ))}
                        </div>
                        <div className="text-left">
                            <p className="text-sm text-gray-600">Trusted by</p>
                            <p className="text-lg font-bold text-gray-900">300+ Global Clients</p>
                        </div>
                        <div className="hidden md:block">
                            <div className="flex items-center gap-1">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <svg
                                        key={star}
                                        className="w-5 h-5 text-yellow-500 fill-current"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                                    </svg>
                                ))}
                            </div>
                            <p className="text-sm text-gray-600 mt-1">4.9/5 Average Rating</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}