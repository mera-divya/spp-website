import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Users, Building2, Star, Quote, Award, TrendingUp, Globe, Phone, Heart, CheckCircle } from "lucide-react";
import skplLogo from "@/assets/client-logos/skpl-logo.jpg";
import sanzymelogo from "@/assets/client-logos/sanzyme-biologics-logo.jpg";
import leePharmaLogo from "@/assets/client-logos/lee-pharma-logo.jpg";
import salicylatesLogo from "@/assets/client-logos/salicylates-chemicals-logo.jpg";
import biologicalELogo from "@/assets/client-logos/biological-e-logo.jpg";
import vintageCoffeeLogo from "@/assets/client-logos/vintage-coffee-logo.jpg";
import schneiderElectricLogo from "@/assets/client-logos/schneider-electric-logo.jpg";
import clariantIndiaLogo from "@/assets/client-logos/clariant-india-logo.jpg";
const Clients = () => {
  const clients = [{
    name: "Sri Krishna Pharmaceuticals Ltd",
    logo: skplLogo,
    location: "India"
  }, {
    name: "Sanzyme Biologics Pvt Ltd",
    logo: sanzymelogo,
    location: "India"
  }, {
    name: "Lee Pharma Ltd",
    logo: leePharmaLogo,
    location: "India"
  }, {
    name: "Salicylates and Chemicals Pvt Ltd",
    logo: salicylatesLogo,
    location: "India"
  }, {
    name: "Biological E. Limited",
    logo: biologicalELogo,
    location: "India"
  }, {
    name: "Vintage Coffee Pvt Ltd",
    logo: vintageCoffeeLogo,
    location: "India"
  }, {
    name: "Schneider Electric India Pvt Ltd",
    logo: schneiderElectricLogo,
    location: "India"
  }, {
    name: "Clariant India Pvt Ltd",
    logo: clariantIndiaLogo,
    location: "India"
  }];
  const testimonials = [{
    name: "Dr. Rajesh Kumar",
    position: "Quality Manager",
    company: "PharmaCorp Industries",
    testimonial: "Srinivasa Polypack has been our trusted partner for pharmaceutical packaging for over 8 years. Their consistent quality and timely delivery have been crucial for our operations. The ISO-certified processes give us confidence in their products.",
    rating: 5,
    industry: "Pharmaceutical"
  }, {
    name: "Priya Sharma",
    position: "Procurement Head",
    company: "Industrial Solutions Ltd",
    testimonial: "The heavy-duty LDPE bags from Srinivasa Polypack have exceeded our expectations. Their technical team worked closely with us to develop custom solutions for our industrial applications. Excellent service and product quality.",
    rating: 5,
    industry: "Industrial"
  }, {
    name: "Amit Patel",
    position: "Operations Director",
    company: "Food Processing Co",
    testimonial: "We've been using their food-grade LDPE bags for our packaging needs. The FDA-compliant materials and consistent quality have helped us maintain our food safety standards. Highly recommend their services.",
    rating: 5,
    industry: "Food Processing"
  }, {
    name: "Sarah Thompson",
    position: "Supply Chain Manager",
    company: "Global Export House",
    testimonial: "As an export company, we need packaging that meets international standards. Srinivasa Polypack delivers exactly that. Their products have helped us expand our reach to multiple countries with confidence.",
    rating: 5,
    industry: "Export"
  }];
  const partnershipBenefits = [{
    icon: <CheckCircle className="w-6 h-6 text-primary" />,
    title: "Dedicated Support",
    description: "Personalized service and quick resolution of queries."
  }, {
    icon: <TrendingUp className="w-6 h-6 text-primary" />,
    title: "Scalable Solutions",
    description: "Flexible production capacity to accommodate growing business requirements."
  }, {
    icon: <Award className="w-6 h-6 text-primary" />,
    title: "Quality Assurance",
    description: "Guaranteed quality with comprehensive testing and certification documentation."
  }, {
    icon: <Globe className="w-6 h-6 text-primary" />,
    title: "Global Standards",
    description: "Products manufactured to international standards for domestic and export markets."
  }];
  const stats = [{
    number: "85%",
    label: "Repeat Orders",
    description: "Customer satisfaction and loyalty"
  }, {
    number: "10+",
    label: "Years Partnership",
    description: "Building relationships that last"
  }, {
    number: "97%",
    label: "On - Time Delivery",
    description: "Commitment to reliability"
  }];
  return <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient text-primary-foreground section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-6">
              <Users className="w-4 h-4 mr-2" />
              Trusted by Industry Leaders
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Our Valued Clients
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">Building long-term partnerships with leading pharmaceutical, industrial, and food processing companies across India.</p>
          </div>
        </div>
      </section>

      {/* Client Stats */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            {stats.map((stat, index) => <Card key={index} className="shadow-card text-center">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-xl font-semibold text-foreground mb-2">{stat.label}</div>
                  <div className="text-sm text-muted-foreground">{stat.description}</div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Client Categories */}
      <section className="section-padding section-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">Our Major Clients</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We serve diverse industries with specialized LDPE packaging solutions 
              tailored to their unique requirements and regulatory standards.
            </p>
          </div>

          {/* Client Logos Grid */}
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-8">Trusted by Leading Companies</h3>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {clients.map((client, index) => {
            const initials = client.name.split(' ').map(word => word[0]).join('').slice(0, 3);
            return <Card key={index} className="shadow-card hover:shadow-elevated transition-all duration-300 group">
                  <CardContent className="p-6 text-center">
                    {/* Logo or initials */}
                    <div className="w-32 h-16 mx-auto mb-4 flex items-center justify-center">
                      {client.logo ? <img src={client.logo} alt={`${client.name} logo`} className={`max-w-full max-h-full ${client.name.includes('Sri Krishna') || client.name.includes('Biological E') ? 'object-cover scale-125' : 'object-contain'}`} /> : <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center border-2 border-primary/20">
                          <span className="text-lg font-bold text-primary">{initials}</span>
                        </div>}
                    </div>
                    {/* Company name */}
                    <h4 className="font-semibold text-foreground text-sm mb-1">
                      {client.name}
                    </h4>
                    {/* Location */}
                    
                  </CardContent>
                </Card>;
          })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      

      {/* Partnership Benefits */}
      <section className="section-padding section-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
              Partnership Benefits
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Why leading companies choose Srinivasa Polypack as their 
              trusted LDPE packaging partner.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnershipBenefits.map((benefit, index) => <Card key={index} className="shadow-card hover:shadow-elevated transition-shadow text-center">
                <CardContent className="p-6">
                  <div className="mb-4 flex justify-center">{benefit.icon}</div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Client Success Story */}
      

      {/* CTA Section */}
      <section className="section-padding hero-gradient text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Join Our Success Stories
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Become part of our growing family of satisfied clients who trust 
            Srinivasa Polypack for their LDPE packaging requirements.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="shadow-elevated">
              <Link to="/contact">
                <Phone className="w-5 h-5 mr-2" />
                Start Partnership
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/20 hover:bg-white/10">
              
            </Button>
          </div>
        </div>
      </section>
    </div>;
};
export default Clients;