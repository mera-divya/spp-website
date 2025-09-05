import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Target, Eye, Heart, Factory, Users, Award, Briefcase, TrendingUp, CheckCircle, MessageSquare, Package } from "lucide-react";
import { HeroSection } from "@/components/HeroSection";
import heroImage from "@/assets/about-hero-fullcover.jpg";
const About = () => {
  const values = [{
    icon: <Target className="w-8 h-8 text-primary" />,
    title: "Excellence",
    description: "Committed to delivering superior quality products that meet customer expectations and industry standards."
  }, {
    icon: <Heart className="w-8 h-8 text-primary" />,
    title: "Integrity",
    description: "Building trust through transparent business practices, ethical conduct, and reliable service delivery."
  }, {
    icon: <Users className="w-8 h-8 text-primary" />,
    title: "Customer Focus",
    description: "We put our customers at the center, focused on building long-term partnerships through delivering packaging solutions that match their exact needs with quality and reliability."
  }, {
    icon: <TrendingUp className="w-8 h-8 text-primary" />,
    title: "Innovation",
    description: "Continuously evolving our processes and products to meet changing market demands and technological advances."
  }];
  const capabilities = ["Advanced LDPE Film Extrusion Technology", "custom color & flexible sizing", "Automated Bag Making & Converting Lines", "Quality Control & Testing", "Multiple thickness options", "Batch coding & labeling", "Precise cutting & sealing for durability", "Food grade & Pharma grade materials"];
  const milestones = [{
    year: "2005",
    event: "Company founded with a vision to provide reliable, safe, and customized packaging solutions"
  }, {
    year: "2008",
    event: "Expanded into industrial packaging solutions"
  }, {
    year: "2012",
    event: "Achieved ISO 9001:2015 certification"
  }, {
    year: "2018",
    event: "Launched advanced co-extrusion technology"
  }, {
    year: "2021",
    event: "Received ZED certification for zero defect manufacturing"
  }, {
    year: "2024",
    event: "Celebrating nearly 20 years of excellence in LDPE manufacturing"
  }];
  return <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection backgroundImage={heroImage} altText="About Srinivasa Polypack">
        <div className="text-center">
            <Badge variant="secondary" className="mb-6">
              <Factory className="w-4 h-4 mr-2" />
              Established 2005
            </Badge>
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            About Srinivasa Polypack
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            20+ years of excellence in manufacturing premium LDPE polythene bags 
            for pharmaceutical, food and industrial applications across India.
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
                  Founded in 2005, Srinivasa Polypack, our journey began with a clear vision – to provide reliable, safe, and customized packaging solutions that help businesses protect and deliver their products with confidence.
                </p>
                <p>
                  From humble beginnings with a small setup, we have grown into a trusted manufacturer and supplier of LDPE polythene bags, catering to pharmaceutical, industrial, food and commercial sectors. What sets us apart is our focus on quality, customization, and timely delivery.
                </p>
                <p>
                  Over more than two decades, we have grown & invested in modern blown film plants, cutting and sealing machinery, and strict quality control practices to ensure every bag we produce meets the highest standards. Whether it's custom sizes, colors, gauges, or printed branding, we provide packaging tailored to your unique needs.
                </p>
                <p>
                  Today, we take pride in being a dependable packaging partner, combining traditional values & modern technology with a customer-first approach. Our commitment remains the same — to deliver packaging that protects, performs, and adds value to your business.
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
                  
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <Card className="shadow-card">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-primary mb-2">20+</div>
                    <div className="text-muted-foreground">Years Experience</div>
                  </CardContent>
                </Card>
                <Card className="shadow-card">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-primary mb-2">Pan India</div>
                    <div className="text-muted-foreground">Reliable deliveries</div>
                  </CardContent>
                </Card>
              </div>
              <div className="space-y-6 mt-8">
                <Card className="shadow-card">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                    <div className="text-muted-foreground">Round-the-Clock Production</div>
                  </CardContent>
                </Card>
                <Card className="shadow-card">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-primary mb-2">3</div>
                    <div className="text-muted-foreground">Certifications</div>
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
                <p className="text-lg text-muted-foreground leading-relaxed">To be the leading manufacturer of LDPE packaging solutions in India, recognized for our innovation, quality, reliability and customer satisfaction. We envision a future where our products contribute to safer, more efficient supply chains across sectors.</p>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Target className="w-8 h-8 text-primary mr-4" />
                  <h3 className="text-2xl font-bold text-foreground">Our Mission</h3>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To deliver high-quality, customized LDPE packaging with consistent quality, timely service, and a commitment to customer satisfaction and sustainability. We are committed to building long-term partnerships while maintaining the highest standards.
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
              ensuring we deliver value to customers and employees.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => <Card key={index} className="shadow-card hover:shadow-elevated transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">{value.icon}</div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>)}
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
            {capabilities.map((capability, index) => <div key={index} className="flex items-center space-x-3 p-4 bg-background rounded-lg shadow-card">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">{capability}</span>
              </div>)}
          </div>
        </div>
      </section>

      {/* Company Milestones */}
      <section className="section-padding bg-background">
        
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
                <MessageSquare className="w-5 h-5 mr-2" />
                Get Quote now
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary" className="shadow-elevated">
              <Link to="/products">
                <Package className="w-5 h-5 mr-2" />
                view our products
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>;
};
export default About;