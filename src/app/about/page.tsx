"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Target,
  Eye,
  Heart,
  Users,
  Shield,
  CheckCircle,
  Lightbulb,
  Handshake,
  Leaf,
  Mail,
  LinkedinIcon,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { timeline, teamMembers, values, sdgGoals } from "@/data/siteData";

export default function AboutPage() {
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
            className="max-w-3xl mx-auto text-center"
          >
            <span className="text-green-light text-sm font-semibold tracking-wider uppercase">
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-heading text-white mt-2 mb-4">
              Our Story
            </h1>
            <p className="text-lg text-neutral-300 leading-relaxed">
              From a small community recycling initiative to a leading social
              enterprise — discover the journey of Wezesha Industries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-green-primary text-sm font-semibold tracking-wider uppercase">
                The Beginning
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold font-heading text-neutral-900 mt-2 mb-6">
                From Waste Collectors to Green Catalysts
              </h2>
              <div className="space-y-4 text-neutral-600 leading-relaxed">
                <p>
                  Wezesha Industries began in 2013 as The Recycling Middlemen
                  (TRM), a for-profit waste collection enterprise in Bulawayo.
                  By 2015, TRM had grown into one of the city&apos;s largest formal
                  suppliers of cardboard and plastic. But behind that success
                  was an uncomfortable truth: the industry was built on an
                  invisible, exploited network of informal waste-pickers.
                </p>
                <p>
                  That turning point led founder Sinqobile Ndlovu to the
                  University of Cape Town as a Bertha Scholar for Social
                  Innovation. Living and working alongside waste-pickers, she
                  helped co-create a new identity — &ldquo;Above Ground Miners&rdquo; —
                  that reflected their true economic value. This sparked the
                  evolution into The Above Ground Mining Project (TAGMP), and
                  ultimately into Wezesha Industries in 2022.
                </p>
                <p>
                  &ldquo;Wezesha&rdquo; — a KiSwahili word meaning &lsquo;To Empower&rsquo; — captures
                  our mission perfectly. Today, trading as <em>The Above Ground
                  Mining Project</em> and <em>Eco-preneur Hub</em>, we are a green
                  transition catalyst, incubator, and accelerator that produces
                  innovative green products while teaching communities to do the
                  same.
                </p>
                <p>
                  We do this by helping women and youths to develop and monetise green skills.
                </p>
                <p>
                  Our products help communities make climate action a fashionable part of everyday life.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <img
                  src="/images/gallery/about.jpg"
                  alt="Wezesha Industries founding story"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 lg:py-28 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="Our Journey"
            title="Milestones That Define Us"
            description="A decade of impact, innovation, and inclusive growth."
          />

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-green-primary/20 md:-translate-x-0.5" />

            <div className="space-y-12">
              {timeline.map((event, index) => (
                <motion.div
                  key={event.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex flex-col md:flex-row items-start gap-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-green-primary rounded-full -translate-x-2 md:-translate-x-2 mt-1.5 ring-4 ring-white z-10" />

                  {/* Content */}
                  <div
                    className={`ml-12 md:ml-0 md:w-1/2 ${
                      index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                    }`}
                  >
                    <span className="inline-block bg-green-primary text-white text-sm font-bold px-3 py-1 rounded-full mb-2">
                      {event.year}
                    </span>
                    <h3 className="text-xl font-bold font-heading text-neutral-900 mb-2">
                      {event.title}
                    </h3>
                    <p className="text-neutral-600 leading-relaxed">
                      {event.description}
                    </p>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block md:w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-green-dark rounded-2xl p-8 lg:p-10 text-white"
            >
              <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-green-light" />
              </div>
              <h3 className="text-2xl font-bold font-heading mb-4">
                Our Mission
              </h3>
              <p className="text-neutral-200 leading-relaxed">
                &ldquo;To build resilient communities by facilitating access to
                inclusive, decent, and gender-centric entrepreneurship
                opportunities, positioning women and youth as the primary
                engines of green value chains.&rdquo;
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-gold rounded-2xl p-8 lg:p-10 text-white"
            >
              <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold font-heading mb-4">
                Our Vision
              </h3>
              <p className="text-white/90 leading-relaxed">
                &ldquo;To empower communities to make climate action part of
                everyday life.&rdquo;
              </p>
            </motion.div>
          </div>

          {/* The Wezesha Growth Model */}
          <div className="mb-20">
            <SectionHeading
              subtitle="How We Work"
              title="The Wezesha Growth Model"
              description="We operate at three levels — fast-tracking launches, nurturing start-ups, and scaling innovations."
            />
            <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
              {[
                {
                  number: "01",
                  title: "The Catalyst",
                  description:
                    "We fast-track the launch of green business models (MVPs), helping women and youth transition from 'wanna-preneurs' to 'hustler-preneurs' with increased speed and reduced capital risk.",
                },
                {
                  number: "02",
                  title: "The Incubator",
                  description:
                    "We act as a 'nursery' for early-stage start-ups, offering the structural foundation and mentorship necessary to survive the fragile initial phases of business.",
                },
                {
                  number: "03",
                  title: "The Accelerator",
                  description:
                    "We scale grassroots innovations into market-ready products, integrating emerging enterprises into resilient, sustainable value chains.",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-neutral-50 rounded-xl p-8 border border-neutral-100 hover:shadow-lg hover:bg-white transition-all duration-300"
                >
                  <span className="text-5xl font-extrabold font-heading text-green-primary/20">
                    {item.number}
                  </span>
                  <h4 className="text-xl font-bold font-heading text-neutral-900 mt-2 mb-3">
                    {item.title}
                  </h4>
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Values */}
          <SectionHeading
            subtitle="Our Values"
            title="What We Stand For"
            description="The principles that guide everything we do."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const iconMap: Record<string, React.ReactNode> = {
                heart: <Heart className="w-6 h-6" />,
                users: <Users className="w-6 h-6" />,
                shield: <Shield className="w-6 h-6" />,
                "check-circle": <CheckCircle className="w-6 h-6" />,
                lightbulb: <Lightbulb className="w-6 h-6" />,
                handshake: <Handshake className="w-6 h-6" />,
                leaf: <Leaf className="w-6 h-6" />,
              };

              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="bg-neutral-50 rounded-xl p-6 hover:shadow-lg hover:bg-white transition-all duration-300 border border-transparent hover:border-green-primary/20"
                >
                  <div className="w-12 h-12 rounded-xl bg-green-primary/10 text-green-primary flex items-center justify-center mb-4">
                    {iconMap[value.icon]}
                  </div>
                  <h4 className="text-lg font-bold font-heading text-neutral-900 mb-2">
                    {value.title}
                  </h4>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SDG Alignment */}
      <section className="py-20 lg:py-28 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="Global Goals"
            title="SDG Alignment"
            description="Our work contributes to the United Nations Sustainable Development Goals."
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
            {sdgGoals.map((goal, index) => (
              <motion.div
                key={goal.number}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="rounded-xl p-5 text-white text-center hover:scale-105 transition-transform duration-300"
                style={{ backgroundColor: goal.color }}
              >
                <span className="text-3xl font-bold font-heading block mb-1">
                  {goal.number}
                </span>
                <h4 className="text-sm font-semibold mb-1">{goal.title}</h4>
                <p className="text-xs text-white/80 leading-relaxed">
                  {goal.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="Our Team"
            title="Meet the People Behind the Mission"
            description="Dedicated individuals driving green economic transformation."
          />

          <div className="max-w-2xl mx-auto">
            {teamMembers.map((member) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-neutral-50 rounded-2xl p-8 lg:p-10"
              >
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                  <div className="w-24 h-24 rounded-full bg-green-primary/10 flex items-center justify-center shrink-0">
                    <span className="text-green-primary font-bold text-3xl">
                      {member.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold font-heading text-neutral-900">
                      {member.name}
                    </h3>
                    <p className="text-green-primary font-semibold mb-4">
                      {member.role}
                    </p>
                    <p className="text-neutral-600 leading-relaxed mb-4">
                      {member.bio}
                    </p>
                    <div className="flex gap-3">
                      {member.linkedin && (
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-full bg-green-primary/10 flex items-center justify-center text-green-primary hover:bg-green-primary hover:text-white transition-colors"
                          aria-label={`${member.name} on LinkedIn`}
                        >
                          <LinkedinIcon className="w-5 h-5" />
                        </a>
                      )}
                      {member.email && (
                        <a
                          href={`mailto:${member.email}`}
                          className="w-10 h-10 rounded-full bg-green-primary/10 flex items-center justify-center text-green-primary hover:bg-green-primary hover:text-white transition-colors"
                          aria-label={`Email ${member.name}`}
                        >
                          <Mail className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-green-dark text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
            Want to Know More?
          </h2>
          <p className="text-neutral-300 text-lg mb-8">
            Download our complete company profile or get in touch with us
            directly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="gold" size="lg">
              Contact Us
            </Button>
            <Button
              href="/get-involved"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-green-dark"
            >
              Get Involved
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
