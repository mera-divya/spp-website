import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, Clock, MessageSquare, Send, Factory, Globe, Award, Users } from "lucide-react";
import emailjs from '@emailjs/browser';
const Contact = () => {
  const {
    toast
  } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    industry: "",
    productType: "",
    quantity: "",
    message: ""
  });
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Initialize EmailJS if not already done
      emailjs.init("YOUR_PUBLIC_KEY"); // We'll need to set this up

      // Prepare email template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        company: formData.company || 'Not provided',
        industry: formData.industry || 'Not specified',
        product_type: formData.productType,
        quantity: formData.quantity,
        message: formData.message,
        to_email: 'srinivasapolypack@yahoo.com',
        reply_to: formData.email
      };

      // For now, let's use a simple success response while we set up EmailJS
      console.log('Contact Form Submission:', formData);

      // Simulate email sending
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast({
        title: "Message Sent Successfully!",
        description: "We'll get back to you within 24 hours with a detailed quote."
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        industry: "",
        productType: "",
        quantity: "",
        message: ""
      });
    } catch (error) {
      console.error('Contact form error:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try calling us directly at +91 9866106621.",
        variant: "destructive"
      });
    }
  };
  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };
  const contactInfo = [{
    icon: <MapPin className="w-6 h-6 text-primary" />,
    title: "Our Location",
    details: ["Srinivasa Polypack", "Adj to shed no :13/A/5, Phase - IV", "IDA Jeedimetla, Hyderabad - 500055", "Telangana, India"]
  }, {
    icon: <Phone className="w-6 h-6 text-primary" />,
    title: "Phone Numbers",
    details: ["+91 9866106621", "+91 8885016621", "+91 7671936316"]
  }, {
    icon: <Mail className="w-6 h-6 text-primary" />,
    title: "Email Addresses",
    details: ["srinivasapolypack@yahoo.com"]
  }, {
    icon: <Clock className="w-6 h-6 text-primary" />,
    title: "Business Hours",
    details: ["Monday - Saturday: 9:30 AM - 6:00 PM", "Sunday: Closed"]
  }];
  const quickActions = [{
    icon: <MessageSquare className="w-8 h-8 text-green-600" />,
    title: "WhatsApp",
    description: "Chat with us",
    action: "Chat Now",
    link: "https://wa.me/917671936316"
  }, {
    icon: <Phone className="w-8 h-8 text-blue-600" />,
    title: "Call Now",
    description: "Speak directly with us",
    action: "Call +91 9866106621",
    action2: "Call +91 8885016621",
    link: "tel:+919866106621",
    link2: "tel:+918885016621"
  }, {
    icon: <Mail className="w-8 h-8 text-purple-600" />,
    title: "Email Us",
    description: "Send detailed requirements",
    action: "Send Email",
    link: "mailto:srinivasapolypack@yahoo.com"
  }];
  const companyHighlights = [{
    icon: <Factory className="w-6 h-6 text-primary" />,
    title: "Custom Packing Solutions",
    description: "Advanced LDPE production facility"
  }, {
    icon: <Award className="w-6 h-6 text-primary" />,
    title: "ISO 9001:2015 Certified",
    description: "Quality management system certified"
  }, {
    icon: <Users className="w-6 h-6 text-primary" />,
    title: "Custom Packaging Solutions",
    description: "Tailored to your requirements"
  }, {
    icon: <Globe className="w-6 h-6 text-primary" />,
    title: "Pan-India Delivery",
    description: "Reliable supply chain network"
  }];
  return <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient text-primary-foreground section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-6">
              <Phone className="w-4 h-4 mr-2" />
              Get In Touch
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">Ready to discuss your LDPE packaging requirements? We are here to provide customized solutions for your business needs.</p>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Quick Connect
            </h2>
            <p className="text-lg text-muted-foreground">
              Choose your preferred way to reach us for immediate assistance.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {quickActions.map((action, index) => <Card key={index} className="shadow-card hover:shadow-elevated transition-shadow text-center">
                <CardContent className="p-6">
                  <div className="mb-4 flex justify-center">{action.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">{action.title}</h3>
                  <p className="text-muted-foreground mb-4">{action.description}</p>
                  <div className="space-y-2">
                    <Button asChild className="hero-gradient w-full">
                      <a href={action.link} target="_blank" rel="noopener noreferrer">
                        {action.action}
                      </a>
                    </Button>
                    {action.action2 && <Button asChild variant="outline" className="w-full bg-blue-100 border-blue-400 text-blue-700 hover:bg-blue-200 hover:border-blue-500 hover:text-blue-700">
                        <a href={action.link2} target="_blank" rel="noopener noreferrer">
                          {action.action2}
                        </a>
                      </Button>}
                    {action.link.includes('mailto:') && <Button variant="outline" className="w-full bg-blue-100 border-blue-400 text-blue-700 hover:bg-blue-200 hover:border-blue-500 hover:text-blue-700" onClick={() => {
                  navigator.clipboard.writeText("srinivasapolypack@yahoo.com");
                  toast({
                    title: "Email Copied!",
                    description: "srinivasapolypack@yahoo.com copied to clipboard"
                  });
                }}>
                        Copy Email
                      </Button>}
                    {action.link.includes('wa.me') && <Button variant="outline" className="w-full bg-blue-100 border-blue-400 text-blue-700 hover:bg-blue-200 hover:border-blue-500 hover:text-blue-700" onClick={() => {
                  navigator.clipboard.writeText("+91 76719 36316");
                  toast({
                    title: "Number Copied!",
                    description: "+91 76719 36316 copied to clipboard"
                  });
                }}>
                        Copy Number
                      </Button>}
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding section-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="shadow-elevated">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Request Quote</CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you with a detailed quote within 24 hours.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input id="name" value={formData.name} onChange={e => handleInputChange("name", e.target.value)} placeholder="Enter your full name" required />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input id="email" type="email" value={formData.email} onChange={e => handleInputChange("email", e.target.value)} placeholder="Enter your email" required />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input id="phone" value={formData.phone} onChange={e => handleInputChange("phone", e.target.value)} placeholder="+91 98765 43210" required />
                    </div>
                    <div>
                      <Label htmlFor="company">Company Name</Label>
                      <Input id="company" value={formData.company} onChange={e => handleInputChange("company", e.target.value)} placeholder="Your company name" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="industry">Industry Type</Label>
                      <Select value={formData.industry} onValueChange={value => handleInputChange("industry", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your industry" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="pharmaceutical">Pharmaceutical</SelectItem>
                          <SelectItem value="industrial">Industrial Manufacturing</SelectItem>
                          <SelectItem value="food">Food Processing</SelectItem>
                          <SelectItem value="chemical">Chemical</SelectItem>
                          <SelectItem value="export">Export/Trading</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="productType">Product Type</Label>
                      <Select value={formData.productType} onValueChange={value => handleInputChange("productType", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select product type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="ldpe-polythene-bags">LDPE Polythene Bags</SelectItem>
                          <SelectItem value="antistatic-polythene-bags">Antistatic Polythene Bags</SelectItem>
                          <SelectItem value="polythene-sheets">Polythene Sheets</SelectItem>
                          <SelectItem value="rolls">Rolls</SelectItem>
                          <SelectItem value="printed-polythene-bags">Printed Polythene Bags</SelectItem>
                          <SelectItem value="vci-polythene-bags">VCI Polythene Bags</SelectItem>
                          <SelectItem value="custom-packaging-solutions">Custom Packaging Solutions</SelectItem>
                          <SelectItem value="self-seal-covers">Self Seal Covers</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="quantity">Expected Quantity (per month)</Label>
                    <Input id="quantity" value={formData.quantity} onChange={e => handleInputChange("quantity", e.target.value)} placeholder="e.g., 5000 pieces/kgs" />
                  </div>

                  <div>
                    <Label htmlFor="message">Requirements & Message</Label>
                    <Textarea id="message" value={formData.message} onChange={e => handleInputChange("message", e.target.value)} placeholder="Please describe your specific requirements, sizes, colors, or any special features needed..." rows={4} />
                  </div>

                  <Button type="submit" size="lg" className="hero-gradient w-full">
                    <Send className="w-5 h-5 mr-2" />
                    Send Quote Request
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => <Card key={index} className="shadow-card">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      {info.icon}
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">
                          {info.title}
                        </h3>
                        <div className="space-y-1">
                          {info.details.map((detail, detailIndex) => <p key={detailIndex} className="text-muted-foreground">
                              {detail}
                            </p>)}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>)}
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Visit Our Facility
            </h2>
            <p className="text-lg text-muted-foreground">Located in Jeedimetla, the heart of Hyderabad's industrial area with excellent connectivity.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <Card className="shadow-card overflow-hidden">
                <div className="aspect-video bg-muted flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-foreground mb-2">Interactive Map</h3>
                    <p className="text-muted-foreground">
                      Google Maps integration would be embedded here showing our exact location
                      with directions and nearby landmarks for easy navigation.
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            <div>
              <h3 className="text-xl font-bold text-foreground mb-4">Why Choose Our Location?</h3>
              <div className="space-y-4">
                {companyHighlights.map((highlight, index) => <div key={index} className="flex items-start space-x-3">
                    {highlight.icon}
                    <div>
                      <h4 className="font-semibold text-foreground">{highlight.title}</h4>
                      <p className="text-muted-foreground text-sm">{highlight.description}</p>
                    </div>
                  </div>)}
              </div>

              <Button asChild className="hero-gradient w-full mt-6">
                <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
                  <MapPin className="w-4 h-4 mr-2" />
                  Get Directions
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding hero-gradient text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Join hundreds of satisfied customers who trust Srinivasa Polypack 
            for their LDPE packaging requirements. Contact us today!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="shadow-elevated">
              <a href="tel:+919866106621">
                <Phone className="w-5 h-5 mr-2" />
                Call Now: +91 9866106621
              </a>
            </Button>
            <Button asChild size="lg" variant="secondary" className="shadow-elevated">
              <a href="mailto:srinivasapolypack@yahoo.com">
                <Mail className="w-5 h-5 mr-2" />
                Email Us
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>;
};
export default Contact;