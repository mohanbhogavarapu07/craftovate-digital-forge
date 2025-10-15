import Contact from "@/components/Contact";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";

const ContactPage = () => {
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
    }
  ];

  return (
    <div className="pt-24">
      <Contact />
      
      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-muted-foreground">
                Find answers to common questions about our services, process, and pricing.
              </p>
            </div>
            <div className="space-y-12">
              {faqs.map((section, sectionIndex) => (
                <div key={sectionIndex} className="animate-fade-in-up" style={{ animationDelay: `${sectionIndex * 100}ms` }}>
                  <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <span className="w-2 h-8 bg-gradient-to-b from-brand-blue to-brand-violet rounded-full" />
                    {section.category}
                  </h3>
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
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
