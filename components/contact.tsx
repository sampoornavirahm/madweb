"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { Mail, Phone, MapPin } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export function Contact() {
  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-2xl mx-auto px-4"
      >
        <Card>
          <CardHeader>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <span>{siteConfig.contact.email}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary" />
                <span>{siteConfig.contact.phone}</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-primary" />
                <span>{siteConfig.contact.address}</span>
              </div>
            </div>
          </CardHeader>
        </Card>
      </motion.div>
    </section>
  );
}