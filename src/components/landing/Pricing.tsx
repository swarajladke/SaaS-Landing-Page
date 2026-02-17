"use client";

import { Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import { motion } from "framer-motion";
import Link from "next/link";

const plans = [
    {
        name: "Starter",
        price: "$0",
        description: "Perfect for hobbyists and students starting their first project.",
        features: ["Up to 3 projects", "Basic analytics", "Community support", "Free updates"],
        buttonText: "Start for Free",
        popular: false
    },
    {
        name: "Professional",
        price: "$29",
        description: "Ideal for growing businesses and individuals who need more power.",
        features: ["Unlimited projects", "Advanced analytics", "Priority support", "Custom domains", "API access"],
        buttonText: "Get Started",
        popular: true
    },
    {
        name: "Enterprise",
        price: "$99",
        description: "Built for teams and organizations with complex requirements.",
        features: ["Everything in Pro", "Custom SLAs", "Dedicated account manager", "SSO & SAML", "Advanced security"],
        buttonText: "Contact Sales",
        popular: false
    }
];

export function Pricing() {
    return (
        <section id="pricing" className="py-24 bg-background">
            <Container>
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
                        Simple, transparent pricing
                    </h2>
                    <p className="max-w-2xl mx-auto text-muted text-lg">
                        Choose the plan that's right for you and start building today.
                        No hidden fees, cancel anytime.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`relative flex flex-col p-8 rounded-2xl border ${plan.popular
                                ? "border-primary shadow-xl ring-1 ring-primary"
                                : "border-border bg-background"
                                }`}
                        >
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                                    Most Popular
                                </div>
                            )}

                            <div className="mb-8">
                                <h3 className="text-xl font-bold text-foreground mb-2">{plan.name}</h3>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-4xl font-bold">{plan.price}</span>
                                    <span className="text-muted text-sm italic">/month</span>
                                </div>
                                <p className="mt-4 text-muted text-sm leading-relaxed">{plan.description}</p>
                            </div>

                            <ul className="flex-1 space-y-4 mb-8">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-3 text-sm text-foreground/80">
                                        <Check className="w-4 h-4 text-primary shrink-0" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <Link href="/signup">
                                <Button
                                    variant={plan.popular ? "primary" : "outline"}
                                    className="w-full"
                                >
                                    {plan.buttonText}
                                </Button>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
