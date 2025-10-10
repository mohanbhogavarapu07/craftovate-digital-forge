import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const FAQPage = () => {
  const faqs = [
    {
      category: "General",
      questions: [
        {
          q: "What services does Craftovate offer?",
          a: "We offer comprehensive digital services including branding & identity design, website design & development, company profiles, marketing collateral, digital strategy, content creation, and ongoing support."
        },
        {
          q: "What industries do you work with?",
          a: "We work with clients across various industries including technology, e-commerce, healthcare, finance, retail, and professional services. Our diverse experience allows us to adapt our approach to any sector."
        },
        {
          q: "Where is Craftovate located?",
          a: "We're based in San Francisco, CA, but we work with clients globally. Our team operates with a remote-first approach, allowing us to collaborate with businesses anywhere in the world."
        }
      ]
    },
    {
      category: "Process & Timeline",
      questions: [
        {
          q: "What is your typical project process?",
          a: "Our process typically includes: 1) Discovery & Research, 2) Strategy & Planning, 3) Design & Development, 4) Review & Refinement, 5) Launch & Delivery, 6) Ongoing Support. Each phase includes client collaboration and feedback."
        },
        {
          q: "How long does a project take?",
          a: "Timeline varies by project scope. A basic website takes 2-3 weeks, comprehensive branding projects take 4-6 weeks, and enterprise solutions are scoped individually. We'll provide a detailed timeline during our initial consultation."
        },
        {
          q: "Can you work with tight deadlines?",
          a: "Yes! We offer rush services for projects with urgent timelines. Contact us to discuss your deadline and we'll let you know if we can accommodate it. Rush projects may incur additional fees."
        }
      ]
    },
    {
      category: "Pricing & Payment",
      questions: [
        {
          q: "How much do your services cost?",
          a: "Our pricing varies based on project scope and complexity. We offer packages starting at $2,999 for starter projects, $6,999 for professional packages, and custom pricing for enterprise solutions. Check our Pricing page for details."
        },
        {
          q: "Do you require a deposit?",
          a: "Yes, we typically require 50% upfront to begin work, with the remaining 50% due upon project completion. For larger projects, we can arrange milestone-based payments."
        },
        {
          q: "What payment methods do you accept?",
          a: "We accept bank transfers, credit cards (Visa, Mastercard, AmEx), PayPal, and for enterprise clients, we can accommodate purchase orders and net payment terms."
        }
      ]
    },
    {
      category: "Design & Development",
      questions: [
        {
          q: "What platforms do you develop websites on?",
          a: "We build custom websites using modern technologies like React, Next.js, and WordPress, depending on your needs. We focus on creating fast, secure, and scalable solutions."
        },
        {
          q: "Will my website be mobile-friendly?",
          a: "Absolutely! All our websites are fully responsive and optimized for mobile, tablet, and desktop devices. We follow mobile-first design principles to ensure great experiences across all screen sizes."
        },
        {
          q: "Do you provide website hosting?",
          a: "We can recommend and set up hosting solutions tailored to your needs. We work with reliable hosting providers and can manage hosting on your behalf or transfer everything to your preferred provider."
        },
        {
          q: "Can you redesign my existing website?",
          a: "Yes! We offer website redesign services to modernize your online presence while preserving your existing content and SEO value. We'll conduct a thorough audit and create a strategy for improvement."
        }
      ]
    },
    {
      category: "Branding",
      questions: [
        {
          q: "What's included in a brand identity package?",
          a: "Our brand identity packages typically include logo design, color palette, typography selection, brand guidelines, business cards, letterhead, and social media templates. Enterprise packages include additional collateral."
        },
        {
          q: "How many logo concepts will I receive?",
          a: "We typically present 3-5 initial logo concepts based on our research and strategy. You'll have the opportunity to provide feedback, and we'll refine your chosen direction through multiple revision rounds."
        },
        {
          q: "Do I own the rights to my brand assets?",
          a: "Yes! Upon final payment, you receive full ownership and rights to all brand assets, including source files. We provide comprehensive file packages in various formats for all your needs."
        }
      ]
    },
    {
      category: "Support & Maintenance",
      questions: [
        {
          q: "Do you offer ongoing support after project completion?",
          a: "Yes! All projects include a support period (length varies by package). We also offer monthly maintenance plans for ongoing updates, security monitoring, and technical support."
        },
        {
          q: "What if I need changes after the project is complete?",
          a: "Minor updates during the support period are included. For changes outside the support period or major modifications, we offer competitive hourly rates or can provide a custom quote."
        },
        {
          q: "Can you train my team to manage the website?",
          a: "Absolutely! We provide comprehensive training on managing your website content, updating pages, and handling basic tasks. We also provide documentation and video tutorials."
        }
      ]
    }
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-brand-blue/5 via-brand-violet/5 to-brand-purple/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Frequently Asked{" "}
              <span className="bg-gradient-to-r from-brand-blue via-brand-violet to-brand-purple bg-clip-text text-transparent">
                Questions
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Find answers to common questions about our services, process, and pricing.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-12">
            {faqs.map((section, sectionIndex) => (
              <div key={sectionIndex} className="animate-fade-in-up" style={{ animationDelay: `${sectionIndex * 100}ms` }}>
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <span className="w-2 h-8 bg-gradient-to-b from-brand-blue to-brand-violet rounded-full" />
                  {section.category}
                </h2>
                <Card className="overflow-hidden">
                  <Accordion type="single" collapsible className="w-full">
                    {section.questions.map((faq, index) => (
                      <AccordionItem key={index} value={`item-${sectionIndex}-${index}`}>
                        <AccordionTrigger className="px-6 hover:no-underline hover:bg-muted/50 transition-colors">
                          <span className="text-left font-medium">{faq.q}</span>
                        </AccordionTrigger>
                        <AccordionContent className="px-6 pb-4 text-muted-foreground">
                          {faq.a}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-brand-blue/10 via-brand-violet/10 to-brand-purple/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h2 className="text-3xl font-bold mb-6">Still Have Questions?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              We're here to help! Get in touch with our team and we'll be happy to answer any questions you have.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-gradient-to-r from-brand-blue via-brand-violet to-brand-purple text-white hover:shadow-elegant">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQPage;
