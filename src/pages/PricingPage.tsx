import { Check } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const PricingPage = () => {
  const plans = [
    {
      name: "Starter",
      price: "$2,999",
      period: "one-time",
      description: "Perfect for startups and small businesses looking to establish their digital presence",
      features: [
        "Logo Design & Brand Guidelines",
        "5-Page Website",
        "Mobile Responsive Design",
        "Basic SEO Setup",
        "Social Media Graphics (5)",
        "2 Rounds of Revisions",
        "1 Month Support"
      ],
      highlighted: false
    },
    {
      name: "Professional",
      price: "$6,999",
      period: "one-time",
      description: "Comprehensive solution for growing businesses ready to scale their brand",
      features: [
        "Complete Brand Identity Package",
        "10-Page Custom Website",
        "Advanced SEO Optimization",
        "Company Profile Design",
        "Social Media Strategy",
        "Email Marketing Templates",
        "Content Management System",
        "3 Months Support",
        "Unlimited Revisions"
      ],
      highlighted: true,
      badge: "Most Popular"
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "project-based",
      description: "Tailored solutions for established companies with complex requirements",
      features: [
        "Everything in Professional",
        "Custom Website Development",
        "E-commerce Integration",
        "Marketing Campaign Strategy",
        "Video Production",
        "Ongoing Brand Consultation",
        "Dedicated Account Manager",
        "Priority Support",
        "Custom Analytics Dashboard",
        "Quarterly Strategy Reviews"
      ],
      highlighted: false
    }
  ];

  const addons = [
    { name: "Additional Website Pages", price: "$299/page" },
    { name: "Logo Animation", price: "$499" },
    { name: "Social Media Management", price: "$999/month" },
    { name: "Content Writing", price: "$149/page" },
    { name: "Photography Services", price: "$799/day" },
    { name: "Video Production", price: "$2,499/video" }
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-brand-blue/5 via-brand-violet/5 to-brand-purple/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Simple,{" "}
              <span className="bg-gradient-to-r from-brand-blue via-brand-violet to-brand-purple bg-clip-text text-transparent">
                Transparent Pricing
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Choose the package that fits your needs. All plans include our quality guarantee and expert support.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {plans.map((plan, index) => (
                <Card
                  key={index}
                  className={`relative hover:shadow-elegant transition-all duration-300 animate-fade-in-up ${
                    plan.highlighted ? "border-brand-blue border-2 hover:-translate-y-4" : "hover:-translate-y-2"
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {plan.badge && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <Badge className="bg-gradient-to-r from-brand-blue to-brand-violet text-white px-4 py-1">
                        {plan.badge}
                      </Badge>
                    </div>
                  )}
                  <CardHeader className="text-center pb-8">
                    <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                    <div className="mb-4">
                      <span className="text-4xl font-bold bg-gradient-to-r from-brand-blue to-brand-violet bg-clip-text text-transparent">
                        {plan.price}
                      </span>
                      {plan.period && (
                        <span className="text-muted-foreground ml-2">/ {plan.period}</span>
                      )}
                    </div>
                    <CardDescription>{plan.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      className={`w-full ${
                        plan.highlighted
                          ? "bg-gradient-to-r from-brand-blue via-brand-violet to-brand-purple text-white hover:shadow-elegant"
                          : ""
                      }`}
                      variant={plan.highlighted ? "default" : "outline"}
                    >
                      {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Additional Services</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {addons.map((addon, index) => (
                <Card
                  key={index}
                  className="hover:shadow-elegant transition-all duration-300 hover:-translate-y-1"
                >
                  <CardContent className="p-6 flex justify-between items-center">
                    <span className="font-medium">{addon.name}</span>
                    <span className="text-brand-blue font-semibold">{addon.price}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Pricing FAQ</h2>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">What's included in the support period?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Support includes bug fixes, minor content updates, and technical assistance. Major redesigns or new features are quoted separately.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Do you offer payment plans?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Yes! We offer flexible payment plans with 50% upfront and 50% upon project completion. Enterprise clients can arrange custom payment terms.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">How long does a typical project take?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Starter projects typically take 2-3 weeks, Professional packages 4-6 weeks, and Enterprise solutions are scoped individually based on requirements.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;
