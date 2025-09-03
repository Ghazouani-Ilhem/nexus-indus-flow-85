import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowRight, 
  CheckCircle, 
  Shield, 
  Network, 
  Database, 
  Server, 
  Monitor, 
  Zap,
  Download,
  FileText,
  HelpCircle,
  Play,
  ArrowLeft
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

// Import hero images
import opcConnectivityImage from "@/assets/3d-opc-connectivity.jpg";
import iotNetworkImage from "@/assets/3d-iot-network.jpg";
import opcUANetworkImage from "@/assets/opc-ua-network.jpg";
import enhancedOpcConnectors from "@/assets/enhanced-opc-connectors.jpg";
import enhancedOpcUAServer from "@/assets/enhanced-opc-ua-server.jpg";

const opcFeatures = [
  {
    icon: Network,
    title: "Multiple Protocol Support",
    description: "Support for OPC DA, OPC HDA, OPC AE, and OPC UA protocols with seamless bridging between Classic and UA systems."
  },
  {
    icon: Shield,
    title: "Advanced Security",
    description: "Certificate management, UA TCP/HTTP protocols, Sign & Encrypt modes, and user authentication for secure communications."
  },
  {
    icon: Database,
    title: "Historical Data Access",
    description: "Read historical data and manage time-series information with full OPC HDA 1.20 compatibility."
  },
  {
    icon: Monitor,
    title: "Alarms & Events",
    description: "Real-time alarm management with acknowledgment capabilities and vendor-specific event attribute support."
  },
  {
    icon: Server,
    title: "Multiple Service Support",
    description: "Run multiple wrapper services simultaneously with support for local and remote OPC servers per service."
  },
  {
    icon: Zap,
    title: "Real-time Operations",
    description: "Reading and writing OPC item data values with comprehensive mapping between OPC and OPC UA address spaces."
  }
];

const compatibilityData = [
  {
    category: "OPC Protocols",
    items: ["OPC Data Access 2.00/2.05/3.00", "OPC Alarms & Events 1.10", "OPC Historical Data Access 1.20", "OPC Unified Architecture 1.02"]
  },
  {
    category: "Windows Support",
    items: ["Windows 11/10/8/7", "Windows Server 2022/2019/2016/2012/2008"]
  },
  {
    category: "Security Features",
    items: ["None/Sign/Sign & Encrypt modes", "Basic128RSA15 & Basic256 policies", "Anonymous & Username authentication", "Certificate management"]
  },
  {
    category: "Transport Protocols",
    items: ["UA TCP protocol", "HTTP transport", "HTTPS for proxy features", "Basic and array data types"]
  }
];

const keyBenefits = [
  "Migrate to OPC UA without replacing existing infrastructure",
  "Platform-independent and cloud-ready architecture", 
  "Enhanced security compared to OPC DA/DCOM limitations",
  "Support multiple wrapper services simultaneously",
  "Real-time data exchange with historical access",
  "Certificate management and encrypted communications",
  "Friendly tag names for nodeIds with alias configuration",
  "Vendor-specific event attributes support"
];

const detailedFeatures = [
  "Support of multiple wrapper services running at the same time",
  "Support of multiple local and remote OPC (DA/HDA/AE) servers per service",
  "Support of multiple local and remote OPC UA servers",
  "Map any OPC server address space to an OPC UA server address space",
  "Map any OPC UA server address space to an OPC server address space",
  "Reading and writing OPC item data values",
  "Reading historical data",
  "Reading and acknowledging alarms and events",
  "Reading vendor specific event attributes of OPC AE servers",
  "Certificate management",
  "Support of UA TCP and HTTP transport protocols",
  "Support of HTTPS transport protocol for the proxy feature",
  "Support of None, Sign and Sign & Encrypt security modes",
  "Support of None, Basic128RSA15 and Basic 256 security policies",
  "Support of Anonymous and User Name user authentication modes",
  "Log event display",
  "OPC UA Proxy alias configuration functionality",
  "Support of basic and array data types"
];

export default function OPCUAWrapper() {
  const [activeTab, setActiveTab] = useState<'overview' | 'features' | 'compatibility' | 'benefits'>('overview');

  return (
    <div className="min-h-screen">
      <Header />
      <main className="bg-gradient-subtle">
        {/* Hero Section */}
        <section className="relative overflow-hidden min-h-screen flex items-center">
          {/* Dynamic Background Layers */}
          <div className="absolute inset-0">
            {/* Animated gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-accent/10 animate-pulse" style={{ animationDuration: '8s' }} />
            
            {/* Moving geometric shapes */}
            <div className="absolute top-20 left-20 w-32 h-32 border border-primary/20 rounded-2xl animate-spin" style={{ animationDuration: '20s' }} />
            <div className="absolute bottom-32 right-32 w-24 h-24 border border-accent/20 rounded-full animate-bounce" style={{ animationDelay: '2s', animationDuration: '3s' }} />
            <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-primary/10 rounded-lg animate-pulse" style={{ animationDelay: '1s' }} />
            
            {/* Floating particles */}
            {Array.from({ length: 15 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-primary/30 rounded-full animate-ping"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${2 + Math.random() * 2}s`
                }}
              />
            ))}
            
            {/* Tech grid pattern */}
            <div className="absolute inset-0 opacity-20">
              <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="hsl(var(--primary))" strokeWidth="0.5" opacity="0.3"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
            </div>
          </div>
          
          <div className="container mx-auto px-4 relative pb-16 pt-32">
            {/* Header with staggered animations */}
            <div className="text-center mb-16 max-w-5xl mx-auto">
              <div className="inline-flex items-center px-6 py-3 rounded-2xl glass-effect border border-primary/20 text-primary font-semibold mb-8 text-sm animate-fade-in hover-scale group cursor-pointer">
                <div className="w-3 h-3 bg-primary rounded-full mr-3 animate-pulse" />
                <span className="group-hover:text-primary/80 transition-colors duration-300">OPC Products</span>
              </div>
              
              {/* Dynamic title with typewriter effect */}
              <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 text-gradient-tech leading-tight animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <span className="inline-block hover:scale-110 transition-transform duration-300 cursor-default">OPC</span>{' '}
                <span className="inline-block hover:scale-110 transition-transform duration-300 cursor-default text-gradient-primary" style={{ animationDelay: '0.1s' }}>UA</span>{' '}
                <span className="inline-block hover:scale-110 transition-transform duration-300 cursor-default" style={{ animationDelay: '0.2s' }}>Wrapper</span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                Seamlessly migrate to OPC Unified Architecture with our plug-and-play software that bridges 
                OPC Classic and OPC UA systems without replacing your existing infrastructure.
              </p>

              {/* Dynamic Action Buttons */}
              <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in" style={{ animationDelay: '0.6s' }}>
                <Button size="xl" className="group bg-gradient-primary hover:shadow-glow font-semibold px-10 py-5 rounded-xl text-primary-foreground relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                  <Play className="mr-2 h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
                  <span>Watch Demo Videos</span>
                  <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
                
                <Button variant="outline" size="xl" className="group border-primary/30 hover:border-primary/50 hover:bg-primary/10 px-10 py-5 rounded-xl font-semibold relative overflow-hidden">
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                  <Download className="mr-2 h-6 w-6 group-hover:animate-bounce" />
                  <span>Download Trial</span>
                </Button>
                
                <Button variant="ghost" size="xl" className="group hover:bg-accent/10 px-10 py-5 rounded-xl font-semibold story-link">
                  <FileText className="mr-2 h-6 w-6 group-hover:rotate-12 transition-transform duration-300" />
                  <span>View Datasheet</span>
                </Button>
              </div>
            </div>

          {/* Visual Hero Banner */}
          <div className="mb-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
              {/* Left Content */}
              <div className="space-y-8">
                <h2 className="text-4xl md:text-5xl font-display font-bold text-gradient-tech leading-tight">
                  Seamless OPC Integration
                  <span className="block text-gradient-primary">Architecture</span>
                </h2>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Experience the power of unified industrial communication with our advanced OPC UA Wrapper 
                  that connects legacy OPC systems with modern cloud-ready architectures.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="group bg-gradient-primary hover:shadow-glow font-semibold">
                    <Play className="mr-2 h-5 w-5" />
                    <span>Live Demo</span>
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                  <Button variant="outline" size="lg" className="group border-primary/30 hover:border-primary/50 hover:bg-primary/10 font-semibold">
                    <Network className="mr-2 h-5 w-5" />
                    <span>View Architecture</span>
                  </Button>
                </div>
                
                {/* Stats */}
                <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
                  <div className="text-center">
                    <div className="text-2xl font-display font-bold text-gradient-primary mb-1">99.9%</div>
                    <div className="text-sm text-muted-foreground font-medium">Uptime</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-display font-bold text-gradient-tech mb-1">&lt; 10ms</div>
                    <div className="text-sm text-muted-foreground font-medium">Latency</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-display font-bold text-gradient-cyber mb-1">1000+</div>
                    <div className="text-sm text-muted-foreground font-medium">Devices</div>
                  </div>
                </div>
              </div>
              
              {/* Right Visual */}
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-elegant">
                  <img 
                    src={opcConnectivityImage} 
                    alt="3D visualization of OPC UA connectivity and industrial automation systems" 
                    className="w-full h-[400px] lg:h-[500px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
                  
                  {/* Floating badges on the image */}
                  <div className="absolute top-6 left-6 glass-effect px-4 py-2 rounded-lg border border-primary/30">
                    <div className="flex items-center text-primary font-semibold text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full mr-2 animate-tech-pulse" />
                      OPC UA Active
                    </div>
                  </div>
                  
                  <div className="absolute bottom-6 right-6 glass-effect px-4 py-2 rounded-lg border border-accent/30">
                    <div className="flex items-center text-accent font-semibold text-sm">
                      <Shield className="w-4 h-4 mr-2" />
                      Secure Bridge
                    </div>
                  </div>
                </div>
                
                {/* Floating 3D elements around the image */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-primary/20 rounded-2xl shadow-card animate-float backdrop-blur-sm" style={{ animationDelay: '0s' }} />
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-cyber/20 rounded-xl shadow-card animate-float backdrop-blur-sm" style={{ animationDelay: '1s' }} />
              </div>
            </div>
          </div>

          {/* OPC Architecture Diagram */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-display font-bold mb-4 text-gradient-tech">
                How OPC UA Wrapper Works
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Understand the seamless integration architecture that connects your legacy and modern systems
              </p>
            </div>
            
            <div className="relative max-w-6xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8 items-center">
                {/* OPC Classic Side */}
                <Card className="group relative overflow-hidden border border-muted/30 hover:border-muted/50 transition-all duration-500">
                  <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-muted to-muted/50" />
                  <CardHeader className="text-center">
                    <div className="w-20 h-20 rounded-2xl bg-muted/20 mx-auto mb-4 p-4">
                      <Database className="w-full h-full text-muted-foreground" />
                    </div>
                    <CardTitle className="text-xl font-display text-muted-foreground">OPC Classic</CardTitle>
                    <CardDescription className="text-sm">Legacy Systems</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="relative h-32 rounded-lg overflow-hidden mb-4">
                      <img 
                        src={enhancedOpcConnectors} 
                        alt="Legacy OPC DA/HDA/AE connectors and industrial devices" 
                        className="w-full h-full object-cover opacity-70"
                      />
                    </div>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• OPC DA/HDA/AE</li>
                      <li>• DCOM/COM</li>
                      <li>• Windows Only</li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Wrapper Bridge */}
                <Card className="group relative overflow-hidden border border-primary/30 hover:border-primary/50 transition-all duration-500 hover:shadow-glow transform hover:scale-105">
                  <div className="absolute top-0 left-0 w-full h-2 bg-gradient-primary" />
                  <CardHeader className="text-center">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-primary mx-auto mb-4 p-4">
                      <Network className="w-full h-full text-primary-foreground" />
                    </div>
                    <CardTitle className="text-xl font-display text-gradient-primary">OPC UA Wrapper</CardTitle>
                    <CardDescription className="text-sm text-primary">Bridge Technology</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="relative h-32 rounded-lg overflow-hidden mb-4">
                      <img 
                        src={iotNetworkImage} 
                        alt="OPC UA Wrapper bridging legacy and modern industrial systems" 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
                    </div>
                    <ul className="text-sm text-foreground space-y-1">
                      <li>• Protocol Translation</li>
                      <li>• Security Layer</li>
                      <li>• Real-time Bridge</li>
                    </ul>
                  </CardContent>
                </Card>

                {/* OPC UA Side */}
                <Card className="group relative overflow-hidden border border-accent/30 hover:border-accent/50 transition-all duration-500 hover:shadow-glow">
                  <div className="absolute top-0 left-0 w-full h-2 bg-gradient-cyber" />
                  <CardHeader className="text-center">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-cyber mx-auto mb-4 p-4">
                      <Server className="w-full h-full text-primary-foreground" />
                    </div>
                    <CardTitle className="text-xl font-display text-gradient-cyber">OPC UA</CardTitle>
                    <CardDescription className="text-sm text-accent">Modern Standard</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="relative h-32 rounded-lg overflow-hidden mb-4">
                      <img 
                        src={enhancedOpcUAServer} 
                        alt="Modern OPC UA servers and cloud-ready industrial architecture" 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-accent/20 to-transparent" />
                    </div>
                    <ul className="text-sm text-foreground space-y-1">
                      <li>• Platform Independent</li>
                      <li>• Cloud Ready</li>
                      <li>• Enhanced Security</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
              
              {/* Connection Arrows */}
              <div className="absolute top-1/2 left-1/4 transform -translate-y-1/2 z-10 hidden md:block">
                <div className="flex items-center text-primary">
                  <ArrowRight className="w-8 h-8 animate-pulse" />
                </div>
              </div>
              <div className="absolute top-1/2 right-1/4 transform -translate-y-1/2 z-10 hidden md:block">
                <div className="flex items-center text-accent">
                  <ArrowRight className="w-8 h-8 animate-pulse" />
                </div>
              </div>
            </div>
          </div>

          {/* OPC DA vs OPC UA Comparison */}
          <div className="mb-20">
            <h2 className="text-3xl font-display font-bold text-center mb-12 text-gradient-tech">
              Why Upgrade from OPC Classic to OPC UA?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* OPC DA - Legacy */}
              <Card className="group relative overflow-hidden border border-muted/30 hover:border-muted/50 transition-all duration-500">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-muted to-muted/50" />
                
                <CardHeader className="pb-6">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-muted/20 p-3 flex items-center justify-center">
                      <Database className="w-full h-full text-muted-foreground" />
                    </div>
                    <Badge variant="outline" className="text-sm border-muted/50 px-4 py-2">Legacy System</Badge>
                  </div>
                  <CardTitle className="text-2xl font-display text-muted-foreground">OPC Classic (DA/HDA/AE)</CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="flex items-center text-muted-foreground">
                    <div className="w-3 h-3 bg-muted rounded-full mr-4" />
                    <span className="font-medium">Windows-only (COM/DCOM based)</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <div className="w-3 h-3 bg-muted rounded-full mr-4" />
                    <span className="font-medium">Basic security model</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <div className="w-3 h-3 bg-muted rounded-full mr-4" />
                    <span className="font-medium">Complex DCOM configuration</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <div className="w-3 h-3 bg-muted rounded-full mr-4" />
                    <span className="font-medium">Limited scalability</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <div className="w-3 h-3 bg-muted rounded-full mr-4" />
                    <span className="font-medium">Not cloud-ready</span>
                  </div>
                </CardContent>
              </Card>

              {/* OPC UA - Modern */}
              <Card className="group relative overflow-hidden border border-primary/30 hover:border-primary/50 transition-all duration-500 hover:shadow-glow">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-primary" />
                
                <CardHeader className="pb-6">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-primary p-3 flex items-center justify-center">
                      <Network className="w-full h-full text-primary-foreground" />
                    </div>
                    <Badge className="text-sm bg-primary/20 text-primary border-primary/30 px-4 py-2">Modern Standard</Badge>
                  </div>
                  <CardTitle className="text-2xl font-display text-gradient-primary">OPC Unified Architecture</CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="flex items-center text-foreground">
                    <CheckCircle className="w-5 h-5 text-primary mr-4" />
                    <span className="font-medium">Platform-independent</span>
                  </div>
                  <div className="flex items-center text-foreground">
                    <CheckCircle className="w-5 h-5 text-primary mr-4" />
                    <span className="font-medium">Built-in security & encryption</span>
                  </div>
                  <div className="flex items-center text-foreground">
                    <CheckCircle className="w-5 h-5 text-primary mr-4" />
                    <span className="font-medium">Simple configuration</span>
                  </div>
                  <div className="flex items-center text-foreground">
                    <CheckCircle className="w-5 h-5 text-primary mr-4" />
                    <span className="font-medium">Highly scalable</span>
                  </div>
                  <div className="flex items-center text-foreground">
                    <CheckCircle className="w-5 h-5 text-primary mr-4" />
                    <span className="font-medium">Cloud-ready architecture</span>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Bridge Indicator */}
            <div className="text-center mt-12">
              <div className="inline-flex items-center px-8 py-4 glass-effect rounded-2xl border border-accent/30">
                <ArrowRight className="w-6 h-6 text-accent mr-4" />
                <span className="text-accent font-bold text-lg">OPC UA Wrapper bridges both worlds seamlessly</span>
                <ArrowRight className="w-6 h-6 text-accent ml-4" />
              </div>
            </div>
          </div>

          {/* Tabbed Content Section */}
          <div className="mb-20">
            {/* Tab Navigation */}
            <div className="flex justify-center mb-12">
              <div className="inline-flex bg-muted/30 rounded-2xl p-2">
                {[
                  { key: 'overview', label: 'Overview', icon: Monitor },
                  { key: 'features', label: 'Key Features', icon: Zap },
                  { key: 'compatibility', label: 'Compatibility', icon: Shield },
                  { key: 'benefits', label: 'Benefits', icon: CheckCircle }
                ].map((tab) => (
                  <button
                    key={tab.key}
                    onClick={() => setActiveTab(tab.key as any)}
                    className={`flex items-center px-8 py-4 rounded-xl font-semibold text-base transition-all duration-300 ${
                      activeTab === tab.key
                        ? 'bg-primary text-primary-foreground shadow-card'
                        : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                    }`}
                  >
                    <tab.icon className="w-5 h-5 mr-3" />
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Tab Content */}
            <div className="max-w-7xl mx-auto">
              {activeTab === 'overview' && (
                <div className="animate-fade-in">
                  <div className="text-center mb-12">
                    <h3 className="text-3xl font-display font-bold mb-6 text-gradient-tech">
                      Complete OPC Integration Solution
                    </h3>
                    <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                      The OPC UA Wrapper consists of two key components that provide bidirectional communication 
                      between OPC Classic and OPC UA systems.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <Card className="group relative overflow-hidden border border-primary/20 hover:border-primary/40 transition-all duration-500 hover:shadow-glow">
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-primary" />
                      <CardHeader>
                        <CardTitle className="text-xl font-display text-gradient-primary mb-4">
                          OPC UA Wrapper
                        </CardTitle>
                        <CardDescription className="text-base leading-relaxed">
                          Acts as a bridge between OPC Classic servers and OPC UA clients. Maps the address space 
                          of OPC Classic servers to the address space of an OPC UA server.
                        </CardDescription>
                      </CardHeader>
                    </Card>

                    <Card className="group relative overflow-hidden border border-accent/20 hover:border-accent/40 transition-all duration-500 hover:shadow-glow">
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-cyber" />
                      <CardHeader>
                        <CardTitle className="text-xl font-display text-gradient-cyber mb-4">
                          OPC UA Proxy
                        </CardTitle>
                        <CardDescription className="text-base leading-relaxed">
                          Acts as a bridge between OPC UA servers and OPC Classic clients, enabling seamless 
                          data exchange across different OPC protocols.
                        </CardDescription>
                      </CardHeader>
                    </Card>
                  </div>

                  <div className="glass-effect p-8 rounded-2xl border border-primary/20">
                    <h4 className="text-xl font-display font-bold mb-6 text-center">
                      Complete Feature Set
                    </h4>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {detailedFeatures.map((feature, index) => (
                        <div key={index} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-primary/5 transition-colors duration-300">
                          <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-foreground font-medium leading-relaxed">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'features' && (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
                  {opcFeatures.map((feature, index) => (
                    <Card key={index} className="group relative overflow-hidden border border-primary/20 hover:border-primary/40 transition-all duration-500 hover:shadow-glow hover:-translate-y-1">
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-tech transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                      
                      <CardHeader className="pb-4">
                        <div className="w-14 h-14 rounded-xl bg-gradient-primary p-3 group-hover:scale-110 transition-transform duration-300 mb-4">
                          <feature.icon className="w-full h-full text-primary-foreground" />
                        </div>
                        <CardTitle className="text-lg font-display text-foreground group-hover:text-gradient-primary transition-all duration-300">
                          {feature.title}
                        </CardTitle>
                      </CardHeader>
                      
                      <CardContent>
                        <CardDescription className="text-muted-foreground leading-relaxed">
                          {feature.description}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}

              {activeTab === 'compatibility' && (
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in">
                  {compatibilityData.map((section, index) => (
                    <Card key={index} className="group relative overflow-hidden border border-primary/20 hover:border-primary/40 transition-all duration-500 hover:shadow-glow">
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-tech transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                      
                      <CardHeader className="pb-4">
                        <CardTitle className="text-lg font-display text-foreground text-center">
                          {section.category}
                        </CardTitle>
                      </CardHeader>
                      
                      <CardContent>
                        <ul className="space-y-3">
                          {section.items.map((item, idx) => (
                            <li key={idx} className="flex items-start text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                              <CheckCircle className="w-4 h-4 text-primary mr-3 mt-0.5 opacity-0 group-hover:opacity-100 transition-all duration-300 flex-shrink-0" style={{ transitionDelay: `${idx * 0.1}s` }} />
                              <span className="leading-relaxed">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}

              {activeTab === 'benefits' && (
                <div className="grid md:grid-cols-2 gap-6 animate-fade-in">
                  {keyBenefits.map((benefit, index) => (
                    <div key={index} className="flex items-start p-6 glass-effect rounded-xl border border-primary/20 hover:border-primary/40 transition-all duration-500 group hover:shadow-glow">
                      <CheckCircle className="w-6 h-6 text-primary mr-4 mt-1 group-hover:scale-110 transition-transform duration-300 flex-shrink-0" />
                      <span className="text-foreground font-medium leading-relaxed group-hover:text-gradient-primary transition-all duration-300">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Documentation Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-display font-bold text-center mb-12 text-gradient-tech">
              Documentation & Resources
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <Card className="group relative overflow-hidden border border-primary/20 hover:border-primary/40 transition-all duration-500 hover:shadow-glow text-center">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-primary" />
                <CardHeader>
                  <div className="w-16 h-16 rounded-2xl bg-gradient-primary p-4 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <FileText className="w-full h-full text-primary-foreground" />
                  </div>
                  <CardTitle className="text-lg font-display">User Guide</CardTitle>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">
                    <Download className="mr-2 h-4 w-4" />
                    Download PDF
                  </Button>
                </CardContent>
              </Card>

              <Card className="group relative overflow-hidden border border-accent/20 hover:border-accent/40 transition-all duration-500 hover:shadow-glow text-center">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-cyber" />
                <CardHeader>
                  <div className="w-16 h-16 rounded-2xl bg-gradient-cyber p-4 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Zap className="w-full h-full text-primary-foreground" />
                  </div>
                  <CardTitle className="text-lg font-display">Quick Start</CardTitle>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">
                    <Download className="mr-2 h-4 w-4" />
                    Quick Guide
                  </Button>
                </CardContent>
              </Card>

              <Card className="group relative overflow-hidden border border-secondary/20 hover:border-secondary/40 transition-all duration-500 hover:shadow-glow text-center">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-elegant" />
                <CardHeader>
                  <div className="w-16 h-16 rounded-2xl bg-gradient-elegant p-4 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <HelpCircle className="w-full h-full text-primary-foreground" />
                  </div>
                  <CardTitle className="text-lg font-display">FAQs</CardTitle>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">
                    <ArrowRight className="mr-2 h-4 w-4" />
                    View FAQs
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Final CTA Section */}
          <div className="text-center">
            <div className="max-w-4xl mx-auto glass-effect p-12 rounded-2xl border border-primary/20">
              <h3 className="text-3xl font-display font-bold mb-6 text-gradient-tech">
                Ready to Bridge Your OPC Systems?
              </h3>
              <p className="text-muted-foreground mb-10 leading-relaxed max-w-2xl mx-auto text-lg">
                Don't replace your existing infrastructure. Bridge it with OPC UA Wrapper for secure, 
                scalable, and future-proof industrial communications.
              </p>
              
              <div className="flex flex-wrap justify-center gap-6">
                <Button size="xl" className="group bg-gradient-elegant hover:shadow-orange font-semibold px-10 py-5 rounded-xl text-primary-foreground">
                  <span>Request Demo</span>
                  <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
                
                <Button variant="outline" size="xl" className="group border-accent/40 hover:border-accent/60 hover:bg-accent/10 px-10 py-5 rounded-xl font-semibold">
                  <HelpCircle className="mr-3 h-6 w-6" />
                  <span>Ask Questions</span>
                </Button>

                <Button variant="ghost" size="xl" className="group hover:bg-primary/10 px-10 py-5 rounded-xl font-semibold">
                  <Download className="mr-3 h-6 w-6" />
                  <span>Download Trial</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      </main>
      <Footer />
    </div>
  );
}