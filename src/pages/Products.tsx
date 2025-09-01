import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import {
  Package,
  Pill,
  Factory,
  Utensils,
  Settings,
  CheckCircle,
  Ruler,
  Palette,
  Shield,
  Phone,
  Box,
  Printer
} from "lucide-react";
import { HeroSection } from "@/components/HeroSection";
import bagsShowcase from "@/assets/ldpe-bags-showcase.jpg";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("food-grade");

  const categories = [
    {
      id: "food-grade",
      name: "Food Grade",
      icon: <Utensils className="w-5 h-5" />,
      description: "Food-safe bags meeting international safety standards"
    },
    {
      id: "custom-packaging",
      name: "Custom Packaging",
      icon: <Box className="w-5 h-5" />,
      description: "Bespoke packaging solutions designed for your unique requirements"
    },
    {
      id: "printed-bags",
      name: "Printed Polythene Bags",
      icon: <Printer className="w-5 h-5" />,
      description: "High-quality printed bags with custom designs and branding"
    },
    {
      id: "custom",
      name: "Custom Solutions",
      icon: <Settings className="w-5 h-5" />,
      description: "Tailored LDPE bags for specific requirements"
    }
  ];

  const products = {
    "food-grade": [
      {
        name: "LDPE Polythene Bags",
        description: "Premium quality Low Density Polyethylene bags for diverse packaging applications.",
        specifications: [
          "Thickness: 25-150 microns",
          "Sizes: 4x6 inches to 18x24 inches",
          "Colors: Clear, Natural",
          "Features: Freezer safe, microwave safe",
          "Compliance: FDA 21 CFR 177.1520"
        ],
        applications: ["Fresh produce", "Frozen foods", "Bakery items", "Meat packaging"],
        certifications: ["FDA Approved", "EU 10/2011", "BfR Recommendations"]
      },
      {
        name: "Polythene Sheets",
        description: "Flexible polythene sheets for covering, wrapping, and protective applications.",
        specifications: [
          "Structure: Multi-layer coextruded",
          "Thickness: 80-200 microns",
          "Oxygen transmission: <1 cc/m²/day",
          "Colors: Clear, Silver metallized",
          "Features: Puncture resistant, heat sealable"
        ],
        applications: ["Meat products", "Seafood", "Cheese", "Ready meals"],
        certifications: ["FDA Food Contact", "HACCP Compliant", "Kosher Certified"]
      }
    ],
    "custom-packaging": [
      {
        name: "Custom Packaging Solutions",
        description: "Custom LDPE packaging solutions tailored to any size, color, and thickness to meet your exact requirements",
        specifications: [
          "Material: Multi-layer LDPE/LLDPE blends",
          "Thickness: 50-300 microns",
          "Barrier options: Oxygen, moisture, aroma barriers",
          "Closure types: Heat seal, zipper, spout, valve",
          "Print capability: Up to 10 colors"
        ],
        applications: ["Liquid products", "Powder packaging", "Granular materials", "Pet food", "Cosmetics"],
        certifications: ["FDA Food Contact", "BPA Free", "Custom validation available"]
      }
    ],
    "printed-bags": [
      {
        name: "Printed Polythene Bags",
        description: "High-quality printed polythene bags customized in any color with your logo, address, PCB number, and thickness for a professional brand identity",
        specifications: [
          "Colors: Up to 8 colors + varnish",
          "Print area: Full surface coverage available",
          "Registration: ±0.5mm accuracy",
          "Finish options: Matte, gloss, soft touch",
          "Minimum order: 10,000 pieces per design"
        ],
        applications: ["Retail packaging", "Promotional bags", "Brand marketing", "Product identification"],
        certifications: ["Color matching standards", "Food contact inks", "Migration test compliant"]
      }
    ],
    custom: [
      {
        name: "Antistatic Polythene Bags",
        description: "Static-dissipative packaging solutions for Pharma products & electronic components ensuring safety & reliability.",
        specifications: [
          "Printing: Up to 10 colors flexographic",
          "Finish: Matte, Gloss, Metallic options",
          "Minimum order: 10,000 pieces",
          "Lead time: 2-3 weeks",
          "Features: Custom sizes, colors, designs"
        ],
        applications: ["Promotional packaging", "Retail bags", "Brand marketing", "Product identification"],
        certifications: ["Color matching standards", "Print quality ISO", "Brand compliance"]
      },
      {
        name: "Rolls",
        description: "Continuous polythene film rolls for automated packaging and industrial processes.",
        specifications: [
          "Layers: 3-7 layer coextrusion",
          "Barriers: Oxygen, moisture, light",
          "Thickness: 100-300 microns",
          "Features: Enhanced protection",
          "Customization: Per application"
        ],
        applications: ["Sensitive chemicals", "Pharmaceutical APIs", "Electronic components", "Research materials"],
        certifications: ["Custom validation", "Performance testing", "Regulatory compliance"]
      },
      {
        name: "VCI Polythene Bags",
        description: "Also called anti-rustic bags. Provides corrosion protection for metal parts during storage & transport",
        specifications: [
          "Shapes: Gusset, stand-up, formed",
          "Features: Zippers, valves, spouts", 
          "Sizes: As per requirement",
          "Colors: Full color range",
          "Minimum order: 5,000 pieces"
        ],
        applications: ["Liquid packaging", "Powder containment", "Bulk materials", "Specialized storage"],
        certifications: ["Design validation", "Performance testing", "Quality assurance"]
      },
      {
        name: "Self Seal Covers",
        description: "Convenient self-sealing polythene covers with adhesive strips for quick and secure packaging.",
        specifications: [
          "Material: Self-adhesive LDPE",
          "Sizes: Various standard sizes",
          "Features: Easy peel, secure seal",
          "Applications: Document protection",
          "Minimum order: 1,000 pieces"
        ],
        applications: ["Document storage", "Product protection", "Mailing", "Archive storage"],
        certifications: ["Adhesive strength tested", "Long-term storage suitable", "Non-toxic adhesive"]
      }
    ]
  };

  const features = [
    {
      icon: <Shield className="w-6 h-6 text-primary" />,
      title: "Quality Assured",
      description: "All products manufactured under ISO 9001:2015 quality management system"
    },
    {
      icon: <Palette className="w-6 h-6 text-primary" />,
      title: "Custom Colors",
      description: "Wide range of standard and custom colors to match your brand requirements"
    },
    {
      icon: <Ruler className="w-6 h-6 text-primary" />,
      title: "Custom Sizes", 
      description: "Flexible manufacturing to produce bags in any size as per your specifications"
    },
    {
      icon: <Package className="w-6 h-6 text-primary" />,
      title: "Flexible Packaging",
      description: "Various packaging options including bulk, retail packs, and custom bundling"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection 
        backgroundImage={bagsShowcase}
        altText="LDPE Products Showcase"
      >
        <div className="text-center">
          <Badge variant="secondary" className="mb-6">
            <Package className="w-4 h-4 mr-2" />
            Premium LDPE Products
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Our Product Range
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Comprehensive selection of high-quality LDPE polythene bags designed for 
            pharmaceutical, industrial, and food-grade applications.
          </p>
        </div>
      </HeroSection>

      {/* Product Categories */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
              Product Categories
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore our diverse range of LDPE solutions tailored for different industries and applications.
            </p>
          </div>

          <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 mb-12">
              {categories.map((category) => (
                <TabsTrigger 
                  key={category.id} 
                  value={category.id}
                  className="flex items-center space-x-2 p-4"
                >
                  {category.icon}
                  <span className="hidden sm:inline">{category.name}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {categories.map((category) => (
              <TabsContent key={category.id} value={category.id}>
                <div className="mb-8 text-center">
                  <h3 className="text-2xl font-bold text-foreground mb-2">{category.name} Products</h3>
                  <p className="text-muted-foreground">{category.description}</p>
                </div>

                <div className="grid gap-8">
                  {products[category.id as keyof typeof products].map((product, index) => (
                    <Card key={index} className="shadow-card hover:shadow-elevated transition-shadow">
                      <CardHeader>
                        <CardTitle className="text-2xl text-foreground">{product.name}</CardTitle>
                        <p className="text-muted-foreground">{product.description}</p>
                      </CardHeader>
                      <CardContent>
                        <div className="grid lg:grid-cols-3 gap-8">
                          {/* Specifications */}
                          <div>
                            <h4 className="font-semibold text-foreground mb-3">Specifications</h4>
                            <ul className="space-y-2">
                              {product.specifications.map((spec, specIndex) => (
                                <li key={specIndex} className="flex items-start space-x-2">
                                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                                  <span className="text-muted-foreground text-sm">{spec}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Applications */}
                          <div>
                            <h4 className="font-semibold text-foreground mb-3">Applications</h4>
                            <div className="flex flex-wrap gap-2">
                              {product.applications.map((app, appIndex) => (
                                <Badge key={appIndex} variant="secondary" className="text-xs">
                                  {app}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          {/* Certifications */}
                          <div>
                            <h4 className="font-semibold text-foreground mb-3">Certifications</h4>
                            <div className="space-y-2">
                              {product.certifications.map((cert, certIndex) => (
                                <Badge key={certIndex} variant="outline" className="text-xs mr-2 mb-2">
                                  <CheckCircle className="w-3 h-3 mr-1" />
                                  {cert}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>

                        <div className="mt-6 pt-6 border-t border-border">
                          <Button asChild className="hero-gradient">
                            <Link to="/contact">
                              <Phone className="w-4 h-4 mr-2" />
                              Request Quote for {product.name}
                            </Link>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding section-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
              Product Features
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Every product we manufacture comes with these standard features and benefits.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="shadow-card hover:shadow-elevated transition-shadow text-center">
                <CardContent className="p-6">
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

      {/* CTA Section */}
      <section className="section-padding hero-gradient text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Need Custom Solutions?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Our experienced team can develop custom LDPE packaging solutions 
            tailored to your specific requirements and industry standards.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="shadow-elevated">
              <Link to="/contact">
                <Phone className="w-5 h-5 mr-2" />
                Discuss Requirements
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/20 hover:bg-white/10">
              <Link to="/quality">
                <CheckCircle className="w-5 h-5 mr-2" />
                View Quality Standards
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;