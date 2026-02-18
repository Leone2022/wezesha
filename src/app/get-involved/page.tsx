"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  ShoppingBag,
  Users,
  Handshake,
  UserPlus,
  Briefcase,
  Send,
  CheckCircle,
  ArrowRight,
  Factory,
  TrendingUp,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

const volunteerSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email required"),
  phone: z.string().min(5, "Phone number is required"),
  interest: z.string().min(1, "Please select an area of interest"),
  experience: z.string().optional(),
  message: z.string().min(10, "Please tell us a bit more about yourself"),
});

type VolunteerForm = z.infer<typeof volunteerSchema>;

const involvementWays = [
  {
    icon: ShoppingBag,
    title: "Buy Our Products",
    description:
      "Support green livelihoods with every purchase. Our eco-friendly products are made by women and youth in our production hubs.",
    cta: "View Products",
    href: "/products",
  },
  {
    icon: Users,
    title: "Volunteer",
    description:
      "Share your skills, time, and expertise to support our training programs, production hubs, and community campaigns.",
    cta: "Apply Below",
    href: "#volunteer-form",
  },
  {
    icon: Handshake,
    title: "Sponsor Programs",
    description:
      "Fund our training programs, community campaigns, and green enterprise development initiatives.",
    cta: "Contact Us",
    href: "/contact",
  },
  {
    icon: UserPlus,
    title: "Become a Member",
    description:
      "Join as a producer or trader in our green production hubs. Access training, tools, workspace, and market linkages.",
    cta: "Learn More",
    href: "#membership",
  },
  {
    icon: Factory,
    title: "Join Our Production Network",
    description:
      "Become part of our green production network — access training, tools, workspace, and raw materials to produce and sell green products.",
    cta: "Contact Us",
    href: "/contact",
  },
  {
    icon: TrendingUp,
    title: "Become a Trade Partner",
    description:
      "Partner with Wezesha as a trade partner — buy our green products for use or resale, or open distribution channels in your market.",
    cta: "Contact Us",
    href: "/contact",
  },
  {
    icon: Briefcase,
    title: "Engage for Consultancy",
    description:
      "Tap into our expertise in green value chains, environmental management, and inclusive business model development.",
    cta: "Contact Us",
    href: "/contact",
  },
];

export default function GetInvolvedPage() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<VolunteerForm>({
    resolver: zodResolver(volunteerSchema),
  });

  const onSubmit = async (data: VolunteerForm) => {
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Volunteer application:", data);
    setSubmitted(true);
  };

  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-green-dark to-green-darker py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-green-primary/10 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="text-green-light text-sm font-semibold tracking-wider uppercase">
              Get Involved
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-heading text-white mt-2 mb-4">
              Join Our Movement
            </h1>
            <p className="text-lg text-neutral-300 leading-relaxed">
              There are many ways to be part of the green revolution. Find the
              pathway that suits you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Ways to Get Involved */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="Ways to Participate"
            title="Choose Your Path"
            description="Whether you buy, volunteer, sponsor, or partner — every contribution counts."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {involvementWays.map((way, index) => (
              <motion.div
                key={way.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-neutral-50 rounded-xl p-6 lg:p-8 hover:shadow-xl hover:bg-white transition-all duration-300 border border-transparent hover:border-green-primary/20 flex flex-col"
              >
                <div className="w-14 h-14 rounded-xl bg-green-primary/10 flex items-center justify-center mb-5">
                  <way.icon className="w-7 h-7 text-green-primary" />
                </div>
                <h3 className="text-xl font-bold font-heading text-neutral-900 mb-3">
                  {way.title}
                </h3>
                <p className="text-neutral-600 text-sm leading-relaxed mb-6 flex-1">
                  {way.description}
                </p>
                <Button href={way.href} variant="outline" size="sm">
                  {way.cta}
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Section */}
      <section className="py-20 lg:py-28 bg-neutral-50" id="membership">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-green-primary text-sm font-semibold tracking-wider uppercase">
                Membership
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold font-heading text-neutral-900 mt-2 mb-6">
                Become a Green Producer or Trader
              </h2>
              <p className="text-neutral-600 leading-relaxed mb-6">
                Join our network of 125+ members who are earning sustainable
                livelihoods through green production and trade. As a member, you
                get access to:
              </p>
              <div className="space-y-3 mb-8">
                {[
                  "Training in green production techniques",
                  "Access to production workspace and tools",
                  "Raw materials and supply chain support",
                  "Market linkages and sales channels",
                  "Business mentorship and support",
                  "Community of practice and peer learning",
                ].map((benefit) => (
                  <div key={benefit} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-primary shrink-0" />
                    <span className="text-neutral-700">{benefit}</span>
                  </div>
                ))}
              </div>
              <Button
                href="/contact"
                icon={<ArrowRight className="w-5 h-5" />}
                iconPosition="right"
              >
                Apply for Membership
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-green-primary/10 to-gold/10 border border-green-primary/20 overflow-hidden flex items-center justify-center">
                <img
                  src="/images/gallery/wezeshalogo2.png"
                  alt="Wezesha Industries membership"
                  className="w-2/3 h-auto object-contain opacity-80"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Volunteer Form */}
      <section className="py-20 lg:py-28 bg-white" id="volunteer-form">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="Volunteer"
            title="Apply to Volunteer"
            description="Share your skills and make a meaningful difference in our communities."
          />

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-green-primary/5 border border-green-primary/20 rounded-2xl p-8 lg:p-12 text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-primary/10 flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-green-primary" />
              </div>
              <h3 className="text-2xl font-bold font-heading text-neutral-900 mb-2">
                Application Received!
              </h3>
              <p className="text-neutral-600">
                Thank you for your interest in volunteering with us. We&apos;ll
                be in touch soon.
              </p>
            </motion.div>
          ) : (
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="bg-neutral-50 rounded-2xl p-6 lg:p-10 space-y-6"
            >
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-neutral-700 mb-1.5"
                  >
                    Full Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    {...register("name")}
                    className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:border-green-primary focus:ring-2 focus:ring-green-primary/20 outline-none transition-all"
                    placeholder="Your full name"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.name.message}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-neutral-700 mb-1.5"
                  >
                    Email *
                  </label>
                  <input
                    id="email"
                    type="email"
                    {...register("email")}
                    className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:border-green-primary focus:ring-2 focus:ring-green-primary/20 outline-none transition-all"
                    placeholder="your@email.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold text-neutral-700 mb-1.5"
                  >
                    Phone Number *
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    {...register("phone")}
                    className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:border-green-primary focus:ring-2 focus:ring-green-primary/20 outline-none transition-all"
                    placeholder="+263 ..."
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.phone.message}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="interest"
                    className="block text-sm font-semibold text-neutral-700 mb-1.5"
                  >
                    Area of Interest *
                  </label>
                  <select
                    id="interest"
                    {...register("interest")}
                    className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:border-green-primary focus:ring-2 focus:ring-green-primary/20 outline-none transition-all bg-white"
                  >
                    <option value="">Select an area</option>
                    <option value="training">Training & Facilitation</option>
                    <option value="production">Production Support</option>
                    <option value="marketing">Marketing & Communications</option>
                    <option value="admin">Administration</option>
                    <option value="fundraising">Fundraising</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.interest && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.interest.message}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor="experience"
                  className="block text-sm font-semibold text-neutral-700 mb-1.5"
                >
                  Relevant Experience
                </label>
                <input
                  id="experience"
                  type="text"
                  {...register("experience")}
                  className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:border-green-primary focus:ring-2 focus:ring-green-primary/20 outline-none transition-all"
                  placeholder="Brief summary of relevant experience"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-neutral-700 mb-1.5"
                >
                  Tell Us About Yourself *
                </label>
                <textarea
                  id="message"
                  rows={4}
                  {...register("message")}
                  className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:border-green-primary focus:ring-2 focus:ring-green-primary/20 outline-none transition-all resize-none"
                  placeholder="Why are you interested in volunteering with Wezesha?"
                />
                {errors.message && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                size="lg"
                className="w-full justify-center"
                icon={<Send className="w-5 h-5" />}
                iconPosition="right"
              >
                {isSubmitting ? "Submitting..." : "Submit Application"}
              </Button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
