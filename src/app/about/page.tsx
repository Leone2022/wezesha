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
              From a small community recycling initiative to a leading, green social
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
                Our Story
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold font-heading text-neutral-900 mt-2 mb-6">
                From Waste Collectors to Green Catalysts
              </h2>
              <div className="space-y-6 text-neutral-600 leading-relaxed">
                <div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-3">
                    The Origin: The Recycling Middlemen (2013 – 2015)
                  </h3>
                  <p>
                    The story of Wezesha Industries began in 2013 with The
                    Recycling Middlemen (TRM), a formerly registered for-profit
                    enterprise which offered recyclable waste collection services to
                    companies in Bulawayo. By 2015, after partnering with the
                    Youth Press Bureau, TRM had grown into one of Bulawayo&apos;s
                    largest, formal suppliers of cardboard and plastic to National
                    Waste Collections.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-3">
                    The Turning Point: A Crisis of Conscience
                  </h3>
                  <p className="mb-4">
                    Despite the commercial success of TRM, our founder, Sinqobile,
                    began to witness a troubling reality: formal industry success was
                    driven by waste cartels that had power over an invisible, exploited network of informal
                    waste-pickers. The &quot;aha&quot; moment was a visceral one.
                  </p>
                  <p className="mb-4">
                    During a routine collection, the TRM team encountered a scene of tragic
                    desperation where two, male waste-pickers had fought violently over
                    the very materials TRM was contracted to collect. This
                    encounter exposed a sector governed by exclusion, where
                    women often laboured in hazardous conditions with their
                    children in tow, earning as little as $3 USD a month.
                  </p>
                  <p>
                    This crisis of conscience stripped away the corporate veneer of
                    the recycling industry, revealing that the traditional business model
                    was not just competitive—it was fundamentally predatory. It became clear that
                    profit could no longer be decoupled from the dignity of the people at the margins.
                    This realization became the catalyst for Wezesha Industries, shifting the focus from
                    simply managing waste to co-creating an inclusive ecosystem that transforms
                    &quot;waste-picking&quot; into a path for gainful, formal entrepreneurship.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-3">
                    Beyond the Labels: Redefining Circumstantial Entrepreneurship
                  </h3>
                  <p className="mb-4">
                    Driven to find a more equitable model, Sinqobile pursued postgraduate research
                    at the University of Cape Town as a Bertha Scholar for Social Innovation &amp;
                    Entrepreneurship. Her approach was radical and deeply personal; she adopted an
                    ethnographic methodology, living and working alongside informal waste-pickers
                    whom she identified not as victims, but as &quot;circumstantial social entrepreneurs.&quot;
                  </p>
                  <p>
                    Through this collaborative immersion, a new identity emerged. The community
                    rejected derogatory labels often used to describe informal waste pickers such as
                    izibhonda (&quot;crazy, homeless people&quot;) and co-created a term that reflected their
                    true economic value: &quot;Above Ground Miners.&quot; This linguistic shift sparked a total
                    transformation in mission, evolving her previous company into The Above Ground
                    Mining Project (TAGMP)—an action-research pilot dedicated to building formal
                    market linkages and dismantling negative stereotypes.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-3">
                    The Evolution: The Birth of Wezesha (2021–2022)
                  </h3>
                  <p className="mb-4">
                    Between 2021 and 2022, supported by a seed grant from the FREE Fund (Women
                    Win, Netherlands), TAGMP began rapid-testing a green economy social enterprise
                    model designed to empower differently-abled adolescent girls, young women, and
                    youth to take up gainful opportunities in the recycling space.
                  </p>
                  <p>
                    The project successfully trained 120 young women in green skills and thereafter
                    incubated MVPs that produced a variety of upcycled products including sweeping
                    brooms made from PET plastic waste. This successful testing phase led to the
                    formalization of the Wezesha Industries&apos; business model in 2022.
                  </p>
                </div>
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
