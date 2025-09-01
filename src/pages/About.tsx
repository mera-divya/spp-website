import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Target,
  Eye,
  Heart,
  Factory,
  Users,
  Award,
  Briefcase,
  TrendingUp,
  CheckCircle
} from "lucide-react";
import { HeroSection } from "@/components/HeroSection";
import heroImage from "@/assets/hero-manufacturing.jpg";

const About = () => {
  const values = [
    {
      icon: <Target className="w-8 h-8 text-primary" />,
      title: "Excellence",
      description: "Committed to delivering superior quality products that exceed customer expectations and industry standards."
    },
    {
      icon: <Heart className="w-8 h-8 text-primary" />,
      title: "Integrity",
      description: "Building trust through transparent business practices, ethical conduct, and reliable service delivery."
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Customer Focus",
      description: "Placing our customers at the heart of everything we do, ensuring their success drives our innovation."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-primary" />,
      title: "Innovation",
      description: "Continuously evolving our processes and products to meet changing market demands and technological advances."
    }
  ];

  const capabilities = [
    "Advanced LDPE Film Extrusion Technology",
    "Multi-Layer Co-Extrusion Capabilities", 
    "Automated Bag Making & Converting Lines",
    "Quality Control Laboratory & Testing",
    "Custom Color Matching & Formulation",
    "Flexible Production Scheduling",
    "Large Scale Manufacturing Capacity",
    "Specialized Pharmaceutical Grade Production"
  ];

  const milestones = [
    { year: "1998", event: "Company founded with a vision to serve pharmaceutical industry" },
    { year: "2005", event: "Expanded into industrial packaging solutions" },
    { year: "2012", event: "Achieved ISO 9001:2015 certification" },
    { year: "2018", event: "Launched advanced co-extrusion technology" },
    { year: "2021", event: "Received ZED certification for zero defect manufacturing" },
    { year: "2024", event: "Celebrating 25+ years of excellence in LDPE manufacturing" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection 
        backgroundImage={heroImage}
        altText="About Srinivasa Polypack"
      >
        <div className="text-center">
          <Badge variant="secondary" className="mb-6">
            <Factory className="w-4 h-4 mr-2" />
            Established 1998
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            About Srinivasa Polypack
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            25+ years of excellence in manufacturing premium LDPE polythene bags 
            for pharmaceutical and industrial applications across India and beyond.
          </p>
        </div>
      </HeroSection>

      {/* Company Story */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
                Our Story
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground">
                <p>
                  Founded in 1998, Srinivasa Polypack began as a small family business with a 
                  big vision: to become India's most trusted manufacturer of LDPE polythene bags 
                  for the pharmaceutical and industrial sectors.
                </p>
                <p>
                  Over more than two decades, we have grown from a modest operation to a 
                  state-of-the-art manufacturing facility, serving over 500 clients across 
                  various industries while maintaining our commitment to quality and innovation.
                </p>
                <p>
                  Today, we stand as a testament to the power of dedication, combining 
                  traditional values with modern technology to deliver packaging solutions 
                  that protect what matters most to our customers.
                </p>
              </div>
              
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="hero-gradient">
                  <Link to="/products">
                    <Briefcase className="w-5 h-5 mr-2" />
                    Our Products
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link to="/contact">
                    <Users className="w-5 h-5 mr-2" />
                    Meet Our Team
                  </Link>
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <Card className="shadow-card">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-primary mb-2">25+</div>
                    <div className="text-muted-foreground">Years Experience</div>
                  </CardContent>
                </Card>
                <Card className="shadow-card">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-primary mb-2">500+</div>
                    <div className="text-muted-foreground">Happy Clients</div>
                  </CardContent>
                </Card>
              </div>
              <div className="space-y-6 mt-8">
                <Card className="shadow-card">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-primary mb-2">50K+</div>
                    <div className="text-muted-foreground">Daily Production</div>
                  </CardContent>
                </Card>
                <Card className="shadow-card">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-primary mb-2">3</div>
                    <div className="text-muted-foreground">ISO Certifications</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding section-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="shadow-card">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Eye className="w-8 h-8 text-primary mr-4" />
                  <h3 className="text-2xl font-bold text-foreground">Our Vision</h3>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To be the leading manufacturer of LDPE packaging solutions in India, 
                  recognized globally for our innovation, quality, and sustainable practices. 
                  We envision a future where our products contribute to safer, more efficient 
                  supply chains across pharmaceutical and industrial sectors.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Target className="w-8 h-8 text-primary mr-4" />
                  <h3 className="text-2xl font-bold text-foreground">Our Mission</h3>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To deliver superior LDPE polythene bags that exceed customer expectations 
                  through continuous innovation, stringent quality control, and exceptional 
                  service. We are committed to building long-term partnerships while 
                  maintaining the highest standards of environmental responsibility.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide our decisions and define our culture, 
              ensuring we deliver value to customers, employees, and stakeholders.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="shadow-card hover:shadow-elevated transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">{value.icon}</div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing Capabilities */}
      <section className="section-padding section-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
              Manufacturing Capabilities
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Advanced technology and processes that enable us to deliver 
              consistent, high-quality LDPE packaging solutions at scale.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((capability, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 bg-background rounded-lg shadow-card">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">{capability}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Milestones */}
      <section className="section-padding bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-muted-foreground">
              Key milestones that mark our evolution into a leading LDPE manufacturer.
            </p>
          </div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-center space-x-6 p-6 bg-muted/30 rounded-xl">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-primary-foreground font-bold">{milestone.year}</span>
                  </div>
                </div>
                <div>
                  <p className="text-lg text-muted-foreground">{milestone.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding hero-gradient text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Partner with Experience
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Join hundreds of satisfied customers who trust Srinivasa Polypack 
            for their LDPE packaging requirements.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="shadow-elevated">
              <Link to="/contact">
                <Users className="w-5 h-5 mr-2" />
                Start Partnership
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/20 hover:bg-white/10">
              <Link to="/quality">
                <Award className="w-5 h-5 mr-2" />
                View Certifications
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;