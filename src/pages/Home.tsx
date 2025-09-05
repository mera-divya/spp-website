import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  CheckCircle, 
  Shield, 
  Users, 
  Award,
  ArrowRight,
  Phone,
  Factory,
  Recycle,
  Star,
  Settings
} from "lucide-react";
import { HeroSection } from "@/components/HeroSection";
import heroImage from "@/assets/blown-film-extrusion-hero.jpg";
import vciPolytheneBags from "@/assets/vci-polythene-bags.jpg";
import printedPolytheneBags from "@/assets/printed-polythene-bags.jpg";
import polytheneSheetsNew from "@/assets/polythene-sheets-new.jpg";
import antistaticBagsNew from "@/assets/antistatic-bags-new.jpg";
import mediumBlackLdpeRolls from "@/assets/medium-black-ldpe-rolls.jpg";
import polytheneSheets from "@/assets/polythene-sheets.jpg";
import selfSealCoversClear from "@/assets/self-seal-covers-clear.jpg";
import customPackagingSolutions from "@/assets/custom-packaging-solutions.jpg";
import isoLogoNew from "@/assets/iso-logo-new.jpg";
import zedLogoNew from "@/assets/zed-logo-new.jpg";
import msmeLogoNew from "@/assets/msme-logo-new.jpg";

const Home = () => {
  const features = [
    {
      icon: <Factory className="w-8 h-8 text-primary" />,
      title: "Advanced Manufacturing",
      description: "State-of-the-art facilities with cutting-edge technology for premium LDPE production."
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Quality Assured", 
      description: "ISO 9001:2015 certified processes ensuring consistent quality and reliability."
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Industry Expertise",
      description: "Decades of experience serving pharmaceutical and industrial clients worldwide."
    },
    {
      icon: <Settings className="w-8 h-8 text-primary" />,
      title: "Customization",
      description: "Tailored LDPE packaging solutions designed to meet your specific requirements and specifications."
    }
  ];

  const products = [
    {
      title: "LDPE Polythene Bags",
      description: "Premium quality Low Density Polyethylene bags for diverse packaging applications.",
      image: polytheneSheets
    },
    {
      title: "Antistatic Polythene Bags",
      description: "Static-dissipative packaging solutions for Pharma products & electronic components ensuring safety & reliability.",
      image: antistaticBagsNew
    },
    {
      title: "Rolls",
      description: "Continuous polythene film rolls for automated packaging and industrial processes.",
      image: mediumBlackLdpeRolls
    },
    {
      title: "Polythene Sheets",
      description: "Flexible polythene sheets for covering, wrapping, and protective applications.",
      image: polytheneSheetsNew
    },
    {
      title: "VCI Polythene Bags",
      description: "Also called anti-rustic bags. Provides corrosion protection for metal parts during storage & transport",
      image: vciPolytheneBags
    },
    {
      title: "Self Seal Covers",
      description: "Convenient self-sealing polythene covers with adhesive strips for quick and secure packaging.",
      image: selfSealCoversClear
    },
    {
      title: "Custom Packaging Solutions",
      description: "Custom LDPE packaging solutions tailored to any size, color, and thickness to meet your exact requirements",
      image: customPackagingSolutions
    },
    {
      title: "Printed Polythene Bags",
      description: "High-quality printed polythene bags customized in any color with your logo, address, PCB number, and thickness for a professional brand identity",
      image: printedPolytheneBags
    }
  ];

  const stats = [
    { number: "20 +", label: "Years Experience" },
    { number: "3", label: "Certifications" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection 
        backgroundImage={heroImage}
        altText="Blown Film Plant in Operation - Srinivasa Polypack"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge variant="secondary" className="mb-6">
              <Star className="w-4 h-4 mr-2" />
              ISO 9001:2015 Certified
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Premium LDPE 
              <span className="block text-blue-200">Polythene Bags</span>
            </h1>
            <p className="text-xl mb-8 text-blue-100 max-w-lg">
              Leading manufacturer and supplier of high-quality LDPE polythene bags for 
              pharmaceutical and industrial applications across India.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" variant="secondary" className="shadow-elevated">
                <Link to="/products">
                  View Our Products
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="secondary" className="shadow-elevated">
                <Link to="/contact">
                  <Phone className="w-5 h-5 mr-2" />
                  Get Quote Now
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </HeroSection>

      {/* Stats Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-md md:max-w-2xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding section-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
              Why Choose Srinivasa Polypack?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Combining decades of expertise with cutting-edge technology to deliver 
              superior LDPE packaging solutions that exceed industry standards.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="shadow-card hover:shadow-elevated transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Products Showcase */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
              Our Product Range
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive selection of LDPE polythene bags designed for diverse 
              pharmaceutical, food and industrial applications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <Card key={index} className="shadow-card hover:shadow-elevated transition-shadow overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-foreground">
                    {product.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{product.description}</p>
                  <Button asChild variant="outline" className="w-full bg-blue-100 border-blue-400 text-black hover:bg-blue-200 hover:border-blue-500 hover:text-black">
                    <Link to="/products">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="section-padding section-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
                Uncompromising Quality Standards
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Our commitment to excellence is reflected in our comprehensive quality 
                management system and internationally recognized certifications.
              </p>
              
              <div className="space-y-4 mb-8">
                {[
                  "ISO 9001:2015 Quality Management System",
                  "ZED (Zero Defect Zero Effect) Certification", 
                  "MSME (Micro, Small & Medium Enterprises) Registered"
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>

            </div>

            <div className="flex gap-4 justify-center">
              <img 
                src={isoLogoNew}
                alt="ISO 9001:2015 Quality Management System Certification Logo"
                className="rounded-2xl shadow-elevated w-40 h-40 object-contain"
              />
              <img 
                src={zedLogoNew}
                alt="ZED (Zero Defect Zero Effect) Certification Logo"
                className="rounded-2xl shadow-elevated w-40 h-40 object-contain"
              />
              <img 
                src={msmeLogoNew}
                alt="MSME (Micro, Small & Medium Enterprises) Government of India Certification Logo"
                className="rounded-2xl shadow-elevated w-40 h-40 object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding hero-gradient text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Ready to Partner with Us?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Get in touch today for custom LDPE packaging solutions tailored to your requirements.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="shadow-elevated">
              <Link to="/contact">
                <Phone className="w-5 h-5 mr-2" />
                Request Quote
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary" className="shadow-elevated">
              <Link to="/about">
                Learn About Us
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;