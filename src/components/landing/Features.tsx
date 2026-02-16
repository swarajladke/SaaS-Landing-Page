"use client";

import { motion } from "framer-motion";
import { Box, GraduationCap, Github, Layers, Zap, Tablet } from "lucide-react";
import { Container } from "@/components/layout/Container";

const features = [
    {
        icon: <Box className="w-6 h-6 text-white" />,
        title: "Fully Customizable",
        description: "A good design is not only aesthetic but pleasing, but also functional. It should be conducive to solving the problem.",
        gradient: "from-[#FFB295] to-[#FF5BF3]"
    },
    {
        icon: <GraduationCap className="w-6 h-6 text-white" />,
        title: "Fully Customizable",
        description: "A goods design is not only aesthetic but pleasing, but also functional. It should be conducive to solving the problem.",
        gradient: "from-[#7000FF] to-[#FF5BF3]"
    },
    {
        icon: <Github className="w-6 h-6 text-white" />,
        title: "Fully Customizable",
        description: "A good design is not only aesthetic but pleasing, but also functional. It should be conducive to solving the problem.",
        gradient: "from-[#FFB23F] to-[#FF5BF3]"
    },
    {
        icon: <Layers className="w-6 h-6 text-white" />,
        title: "Fully Customizable",
        description: "A good design is not only aesthetic but pleasing, but also functional. It should be conducive to solving the problem.",
        gradient: "from-[#00E5FF] to-[#7000FF]"
    },
    {
        icon: <Zap className="w-6 h-6 text-white" />,
        title: "Fully Customizable",
        description: "A good design is not only aesthetic but pleasing, but also functional. It should be conducive to solving the problem.",
        gradient: "from-[#FFB23F] to-[#7000FF]"
    },
    {
        icon: <Tablet className="w-6 h-6 text-white" />,
        title: "Fully Customizable",
        description: "A good design is not only aesthetic but pleasing, but also functional. It should be conducive to solving the problem.",
        gradient: "from-[#7000FF] to-[#00E5FF]"
    }
];

export function Features() {
    return (
        <section id="features" className="py-32 bg-[#050505]">
            <Container>
                <div className="mb-20">
                    <h2 className="text-6xl font-bold text-white mb-6 tracking-tight">
                        Feature Boxes
                    </h2>
                    <p className="max-w-xl text-white/50 text-base leading-relaxed tracking-wide">
                        A good design is not only aesthetic but pleasing, but also <br className="hidden md:block" />
                        functional. It should be conducive to solving the problem.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="p-10 rounded-3xl border border-white/10 bg-white/5 hover:-translate-y-2 transition-transform group cursor-pointer"
                        >
                            <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary transition-colors">
                                <div className="p-3">
                                    {feature.icon}
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                            <p className="text-slate-400 leading-relaxed text-sm">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
