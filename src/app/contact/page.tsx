"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  Facebook,
  Linkedin,
  Youtube,
  Clock,
  User,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { contactInfo } from "@/data/siteData";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email required"),
  phone: z.string().optional(),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactForm = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactForm) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Contact form:", data);
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
              Contact Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-heading text-white mt-2 mb-4">
              Get in Touch
            </h1>
            <p className="text-lg text-neutral-300 leading-relaxed">
              Have a question, want to order products, or interested in
              partnering with us? We&apos;d love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold font-heading text-neutral-900 mb-6">
                Contact Information
              </h2>

              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-green-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-green-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-1">
                      Factory
                    </h3>
                    <p className="text-neutral-600 text-sm">
                      {contactInfo.factory.address}
                    </p>
                    <p className="text-neutral-600 text-sm">
                      {contactInfo.factory.city}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-green-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-green-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-1">
                      Training Centre
                    </h3>
                    <p className="text-neutral-600 text-sm">
                      {contactInfo.trainingCentre.address}
                    </p>
                    <p className="text-neutral-600 text-sm">
                      {contactInfo.trainingCentre.city}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-green-primary/10 flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-green-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-1">
                      Email
                    </h3>
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="text-green-primary hover:underline text-sm"
                    >
                      {contactInfo.email}
                    </a>
                    <br />
                    <a
                      href={`mailto:${contactInfo.contactPerson.email}`}
                      className="text-green-primary hover:underline text-sm"
                    >
                      {contactInfo.contactPerson.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-green-primary/10 flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-green-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-1">
                      Phone
                    </h3>
                    <a
                      href={`tel:${contactInfo.phone}`}
                      className="text-green-primary hover:underline text-sm"
                    >
                      {contactInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-green-primary/10 flex items-center justify-center shrink-0">
                    <User className="w-6 h-6 text-green-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-1">
                      Contact Person
                    </h3>
                    <p className="text-neutral-600 text-sm">
                      {contactInfo.contactPerson.name}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-green-primary/10 flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-green-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-1">
                      Working Hours
                    </h3>
                    <p className="text-neutral-600 text-sm">
                      Monday - Friday: 8:00 AM - 5:00 PM
                    </p>
                    <p className="text-neutral-600 text-sm">
                      Saturday: 8:00 AM - 1:00 PM
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <h3 className="font-semibold text-neutral-900 mb-3">
                Follow Us
              </h3>
              <div className="flex gap-3">
                <a
                  href={contactInfo.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-green-primary/10 flex items-center justify-center text-green-primary hover:bg-green-primary hover:text-white transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href={contactInfo.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-green-primary/10 flex items-center justify-center text-green-primary hover:bg-green-primary hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href={contactInfo.social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-green-primary/10 flex items-center justify-center text-green-primary hover:bg-green-primary hover:text-white transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-bold font-heading text-neutral-900 mb-6">
                Send Us a Message
              </h2>

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
                    Message Sent!
                  </h3>
                  <p className="text-neutral-600">
                    Thank you for reaching out. We&apos;ll get back to you
                    shortly.
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
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        {...register("phone")}
                        className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:border-green-primary focus:ring-2 focus:ring-green-primary/20 outline-none transition-all"
                        placeholder="+263 ..."
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-semibold text-neutral-700 mb-1.5"
                      >
                        Subject *
                      </label>
                      <select
                        id="subject"
                        {...register("subject")}
                        className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:border-green-primary focus:ring-2 focus:ring-green-primary/20 outline-none transition-all bg-white"
                      >
                        <option value="">Select a subject</option>
                        <option value="general">General Enquiry</option>
                        <option value="products">Product Order</option>
                        <option value="bulk-order">Bulk Order</option>
                        <option value="training">Training Programs</option>
                        <option value="partnership">Partnership</option>
                        <option value="volunteer">Volunteering</option>
                        <option value="media">Media Enquiry</option>
                        <option value="other">Other</option>
                      </select>
                      {errors.subject && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.subject.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-neutral-700 mb-1.5"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      rows={6}
                      {...register("message")}
                      className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:border-green-primary focus:ring-2 focus:ring-green-primary/20 outline-none transition-all resize-none"
                      placeholder="How can we help you?"
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
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Maps */}
      <section className="py-20 lg:py-28 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="Our Locations"
            title="Find Us"
            description="Visit our factory or training centre in Bulawayo."
          />

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            <div className="rounded-2xl overflow-hidden shadow-md">
              <div className="bg-white p-4">
                <h3 className="font-bold text-neutral-900">Factory</h3>
                <p className="text-sm text-neutral-600">
                  {contactInfo.factory.address}, {contactInfo.factory.city}
                </p>
              </div>
              <div className="aspect-[16/9] bg-neutral-200">
                <iframe
                  title="Wezesha Industries Factory Location"
                  src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3800!2d${contactInfo.factory.coordinates.lng}!3d${contactInfo.factory.coordinates.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDA5JzA5LjAiUyAyOMKwMzQnMDAuMSJF!5e0!3m2!1sen!2szw!4v1!5m2!1sen!2szw`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-md">
              <div className="bg-white p-4">
                <h3 className="font-bold text-neutral-900">Training Centre</h3>
                <p className="text-sm text-neutral-600">
                  {contactInfo.trainingCentre.address},{" "}
                  {contactInfo.trainingCentre.city}
                </p>
              </div>
              <div className="aspect-[16/9] bg-neutral-200">
                <iframe
                  title="Wezesha Industries Training Centre Location"
                  src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3800!2d${contactInfo.trainingCentre.coordinates.lng}!3d${contactInfo.trainingCentre.coordinates.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDA4JzQ4LjEiUyAyOMKwMzQnNDguMCJF!5e0!3m2!1sen!2szw!4v1!5m2!1sen!2szw`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
