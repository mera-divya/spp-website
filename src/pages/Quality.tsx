import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Award, Shield, CheckCircle, Microscope, FileCheck, Users, Settings, TrendingUp, Target, Clock, Phone, Download } from "lucide-react";
import { HeroSection } from "@/components/HeroSection";
import qualityStandardsHero from "@/assets/quality-standards-hero.jpg";
const Quality = () => {
  const certifications = [{
    title: "ISO 9001:2015",
    description: "Quality Management System certification ensuring consistent quality and customer satisfaction.",
    scope: "Design, manufacturing and supply of LDPE polythene bags",
    validity: "Valid until 2027",
    benefits: ["Systematic quality approach", "Continuous improvement process", "Customer focus", "Risk-based thinking"]
  }, {
    title: "ZED Certification",
    description: "Zero Defect Zero Effect certification promoting quality and environmental consciousness.",
    scope: "Manufacturing processes and environmental compliance",
    validity: "Bronze level certified",
    benefits: ["Zero defect manufacturing", "Environmental protection", "Resource optimization", "Sustainable practices"]
  }, {
    title: "MSME Registration",
    description: "Micro, Small & Medium Enterprises registration supporting Indian manufacturing.",
    scope: "Government recognized manufacturing unit",
    validity: "Active registration",
    benefits: ["Government support", "Priority sector lending", "Subsidy eligibility", "Market development"]
  }];
  const qualityProcesses = [{
    icon: <Settings className="w-8 h-8 text-primary" />,
    title: "Raw Material Testing",
    description: "Comprehensive testing of all incoming raw materials including virgin LDPE resins, additives, and colorants.",
    steps: ["Virgin LDPE granules only", "Food grade certification", "Certificate of Analysis (COA) verification"]
  }, {
    icon: <Microscope className="w-8 h-8 text-primary" />,
    title: "Production Quality Control",
    description: "Continuous monitoring and control of manufacturing processes to ensure consistent quality output.",
    steps: ["Extrusion parameter monitoring", "Film thickness measurement", "Color consistency checks", "Seal strength testing", "Dimensional accuracy"]
  }, {
    icon: <FileCheck className="w-8 h-8 text-primary" />,
    title: "Final Product Testing",
    description: "Rigorous testing of finished products to validate compliance with specifications and standards.",
    steps: ["Visual quality check", "Leak testing", "Print quality check", "Batch code & labeling verification", "Print quality inspection"]
  }];
  const testParameters = [{
    category: "Physical Properties",
    tests: ["Thickness measurement (±5 microns accuracy)", "Tensile strength (MD & TD)", "Elongation at break", "Puncture resistance", "Tear propagation resistance"]
  }, {
    category: "Barrier Properties",
    tests: ["Water vapor transmission rate", "Oxygen transmission rate", "Gas permeability testing", "Moisture barrier evaluation", "UV light transmission"]
  }, {
    category: "Thermal Properties",
    tests: ["Heat seal strength", "Seal integrity testing", "Heat resistance evaluation", "Cold temperature flexibility", "Thermal stability assessment"]
  }, {
    category: "Chemical Compatibility",
    tests: ["Chemical resistance testing", "Migration studies", "Extractable analysis", "Leachable evaluation", "Compatibility assessment"]
  }];
  const qualityBenefits = [{
    icon: <Target className="w-6 h-6 text-primary" />,
    title: "Consistent Quality",
    description: "Standardized processes ensuring every batch meets the same high-quality standards."
  }, {
    icon: <Clock className="w-6 h-6 text-primary" />,
    title: "Reliable Delivery",
    description: "Quality management enables predictable production schedules and on-time delivery."
  }, {
    icon: <Shield className="w-6 h-6 text-primary" />,
    title: "Risk Mitigation",
    description: "Comprehensive quality controls minimize risks and ensure regulatory compliance."
  }, {
    icon: <Users className="w-6 h-6 text-primary" />,
    title: "Customer Satisfaction",
    description: "Quality-first approach results in higher customer satisfaction and long-term partnerships."
  }];
  return <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection backgroundImage={qualityStandardsHero} altText="Quality Standards Laboratory">
        <div className="text-center">
          <Badge variant="secondary" className="mb-6">
            <Award className="w-4 h-4 mr-2" />
            Quality Excellence
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Quality Standards
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Our commitment to excellence is reflected in our comprehensive quality management 
            system and internationally recognized certifications.
          </p>
        </div>
      </HeroSection>

      {/* Certifications */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
              Our Certifications
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Industry-recognized certifications that validate our commitment to quality, 
              environmental responsibility, and customer satisfaction.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => <Card key={index} className="shadow-card hover:shadow-elevated transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-foreground">{cert.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{cert.description}</p>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Scope:</h4>
                    <p className="text-sm text-muted-foreground">{cert.scope}</p>
                  </div>
                  
                  <div>
                    
                    
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Benefits:</h4>
                    <ul className="space-y-1">
                      {cert.benefits.map((benefit, benefitIndex) => <li key={benefitIndex} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{benefit}</span>
                        </li>)}
                    </ul>
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Quality Processes */}
      <section className="section-padding section-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
              Quality Control Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our systematic approach to quality ensures every product meets the highest 
              standards from raw materials to final delivery.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {qualityProcesses.map((process, index) => <Card key={index} className="shadow-card hover:shadow-elevated transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {process.icon}
                    <h3 className="text-xl font-semibold ml-3 text-foreground">
                      {process.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground mb-4">{process.description}</p>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Key Steps:</h4>
                    <ul className="space-y-2">
                      {process.steps.map((step, stepIndex) => <li key={stepIndex} className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground text-sm">{step}</span>
                        </li>)}
                    </ul>
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Testing Parameters */}
      <section className="section-padding bg-background">
        
      </section>

      {/* Quality Benefits */}
      <section className="section-padding section-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
              Quality Benefits
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              How our quality management system delivers value to our customers 
              and ensures long-term success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {qualityBenefits.map((benefit, index) => <Card key={index} className="shadow-card hover:shadow-elevated transition-shadow text-center">
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

      {/* Quality Policy */}
      <section className="section-padding bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="shadow-elevated">
            <CardContent className="p-8 lg:p-12 text-center">
              <Award className="w-16 h-16 text-primary mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Quality Policy</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                "At Srinivasa Polypack, we are committed to manufacturing and supplying LDPE polythene bags 
                that consistently meet or exceed customer expectations and regulatory requirements. We achieve 
                this through continuous improvement of our quality management system, employee training, 
                and adoption of best practices in manufacturing excellence."
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                
                <Button asChild size="lg">
                  <Link to="/contact">
                    <Phone className="w-5 h-5 mr-2" />
                    Discuss Quality Requirements
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding hero-gradient text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Quality You Can Trust
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Partner with us for LDPE packaging solutions backed by rigorous quality 
            standards and proven manufacturing excellence.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="shadow-elevated">
              <Link to="/contact">
                <Phone className="w-5 h-5 mr-2" />
                Discuss Your Requirements
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary" className="shadow-elevated">
              <Link to="/products">
                <CheckCircle className="w-5 h-5 mr-2" />
                View Our Products
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>;
};
export default Quality;