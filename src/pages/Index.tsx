
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  Mail, 
  Linkedin, 
  Github, 
  ExternalLink, 
  ChevronDown,
  Code,
  Cloud,
  Shield,
  Award,
  User,
  Briefcase,
  Heart,
  Send,
  Calendar,
  MapPin
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!"
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl text-gray-800">Meghana Y.</div>
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('about')} className="text-gray-600 hover:text-blue-600 transition-colors">About</button>
              <button onClick={() => scrollToSection('projects')} className="text-gray-600 hover:text-blue-600 transition-colors">Projects</button>
              <button onClick={() => scrollToSection('experience')} className="text-gray-600 hover:text-blue-600 transition-colors">Experience</button>
              <button onClick={() => scrollToSection('skills')} className="text-gray-600 hover:text-blue-600 transition-colors">Skills</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-600 hover:text-blue-600 transition-colors">Contact</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
              Meghana <span className="text-blue-600">Yagannagari</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              CSE Student | AI, Cloud & Cybersecurity Enthusiast | Lifelong Learner
            </p>
            <Button 
              onClick={() => scrollToSection('projects')}
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Explore My Work
            </Button>
          </div>
          <div className="mt-16 animate-bounce">
            <ChevronDown className="mx-auto text-gray-400 w-8 h-8" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-3 mb-6">
                <User className="text-blue-600 w-6 h-6" />
                <h3 className="text-2xl font-semibold text-gray-900">My Journey</h3>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                I'm currently pursuing my Bachelor's degree in Computer Science Engineering at RMK Engineering College. 
                My journey is driven by a deep passion for emerging technologies, particularly Artificial Intelligence, 
                Cloud Computing, and Cybersecurity.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                I believe in the power of technology to solve real-world problems and am committed to contributing 
                to tech communities and open-source projects. My goal is to bridge the gap between innovative 
                technology and practical solutions.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <Code className="text-blue-600 w-12 h-12 mx-auto mb-4" />
                  <h4 className="font-semibold text-gray-900 mb-2">AI & ML</h4>
                  <p className="text-gray-600 text-sm">Exploring artificial intelligence and machine learning applications</p>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <Cloud className="text-blue-600 w-12 h-12 mx-auto mb-4" />
                  <h4 className="font-semibold text-gray-900 mb-2">Cloud Computing</h4>
                  <p className="text-gray-600 text-sm">Building scalable cloud solutions and infrastructure</p>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <Shield className="text-blue-600 w-12 h-12 mx-auto mb-4" />
                  <h4 className="font-semibold text-gray-900 mb-2">Cybersecurity</h4>
                  <p className="text-gray-600 text-sm">Securing digital assets and understanding threat landscapes</p>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <Award className="text-blue-600 w-12 h-12 mx-auto mb-4" />
                  <h4 className="font-semibold text-gray-900 mb-2">Certified Professional</h4>
                  <p className="text-gray-600 text-sm">Multiple industry certifications across different domains</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              My latest projects reflect hands-on experience in cybersecurity and AI-driven platforms
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <Shield className="text-blue-600 w-8 h-8" />
                  <CardTitle className="text-2xl text-gray-900 group-hover:text-blue-600 transition-colors">MINI-SIEM</CardTitle>
                </div>
                <CardDescription className="text-lg">Security Information and Event Management System</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge variant="secondary">Python</Badge>
                  <Badge variant="secondary">ELK Stack</Badge>
                  <Badge variant="secondary">AWS</Badge>
                  <Badge variant="secondary">Real-time Monitoring</Badge>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Built a real-time security log monitoring system using Python and ELK Stack. 
                  Integrated alert rules and AWS dashboards to support faster threat detection and incident response.
                </p>
                <Button variant="outline" size="lg" className="w-full group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <ExternalLink className="w-5 h-5 mr-2" />
                  View Project
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <Code className="text-green-600 w-8 h-8" />
                  <CardTitle className="text-2xl text-gray-900 group-hover:text-green-600 transition-colors">CoachMe.AI</CardTitle>
                </div>
                <CardDescription className="text-lg">AI-Driven Career Development Suite</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge variant="secondary">Gemini API</Badge>
                  <Badge variant="secondary">React 19</Badge>
                  <Badge variant="secondary">Next.js</Badge>
                  <Badge variant="secondary">NeonDB</Badge>
                  <Badge variant="secondary">Prisma</Badge>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Engineered a full-stack platform for personalized skill-gap prediction, resume creation, 
                  and mock tests. Integrated user analytics with NeonDB, Prisma, and Tailwind.
                </p>
                <Button variant="outline" size="lg" className="w-full group-hover:bg-green-600 group-hover:text-white transition-colors">
                  <ExternalLink className="w-5 h-5 mr-2" />
                  View Project
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 text-lg mb-6">
              These projects combine real-world impact with modern tech stacks—check them out in my portfolio!
            </p>
            <div className="flex justify-center space-x-4">
              <Button asChild variant="outline" size="lg">
                <a href="https://github.com/Meghana-06" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5 mr-2" />
                  GitHub Portfolio
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Experience & Resume Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Experience & Certifications</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          {/* Resume Download */}
          <div className="text-center mb-16">
            <Button 
              asChild
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <a href="https://drive.google.com/file/d/1yrzYMa1FNY77h63Yh3exuTVOHxPPqbow/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-5 h-5 mr-2" />
                Download Full Resume
              </a>
            </Button>
          </div>

          {/* Professional Experience */}
          <div className="mb-16">
            <h3 className="text-3xl font-semibold text-gray-900 mb-12 flex items-center justify-center">
              <Briefcase className="text-blue-600 w-8 h-8 mr-3" />
              Professional Experience
            </h3>
            
            <div className="space-y-8">
              {/* Current/Recent Positions */}
              <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-blue-600">
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4">
                    <div className="flex-1">
                      <h4 className="text-2xl font-bold text-gray-900 mb-2">Human Resources Manager</h4>
                      <p className="text-blue-600 font-semibold text-lg mb-2">Shine Projects</p>
                      <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-4">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-2" />
                          <span>May 2025 – Present</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-2" />
                          <span>Hybrid</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Human Resources</Badge>
                    <Badge variant="secondary">Communication</Badge>
                    <Badge variant="secondary">Team Leadership</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-green-600">
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4">
                    <div className="flex-1">
                      <h4 className="text-2xl font-bold text-gray-900 mb-2">Assistant Supervisor</h4>
                      <p className="text-green-600 font-semibold text-lg mb-2">Forever Living Products (India)</p>
                      <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-4">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-2" />
                          <span>Apr 2024 – Present</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-2" />
                          <span>Hybrid</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Networking</Badge>
                    <Badge variant="secondary">Team Management</Badge>
                    <Badge variant="secondary">Social Entrepreneurship</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-purple-600">
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4">
                    <div className="flex-1">
                      <h4 className="text-2xl font-bold text-gray-900 mb-2">Intern – Contributor & Campus Ambassador</h4>
                      <p className="text-purple-600 font-semibold text-lg mb-2">GirlScript Summer of Code (GSSoC)</p>
                      <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-4">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-2" />
                          <span>Sep 2024 – Mar 2025</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-2" />
                          <span>Hybrid</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Open Source Contributions</Badge>
                    <Badge variant="secondary">Community Engagement</Badge>
                    <Badge variant="secondary">Brand Representation</Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Grid for remaining experiences */}
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Senior HR Manager</h4>
                    <p className="text-blue-600 font-medium mb-2">Sai Sukh Hari Foundation</p>
                    <p className="text-sm text-gray-600 mb-3">Aug 2024 – Jan 2025 | Remote</p>
                    <div className="flex flex-wrap gap-1">
                      <Badge variant="outline" className="text-xs">HR</Badge>
                      <Badge variant="outline" className="text-xs">Leadership</Badge>
                      <Badge variant="outline" className="text-xs">Public Speaking</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">HR Manager</h4>
                    <p className="text-blue-600 font-medium mb-2">The Golden Rise</p>
                    <p className="text-sm text-gray-600 mb-3">May 2024 – Sep 2024 | Hyderabad</p>
                    <div className="flex flex-wrap gap-1">
                      <Badge variant="outline" className="text-xs">HR Management</Badge>
                      <Badge variant="outline" className="text-xs">Team Handling</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Python Programmer Intern</h4>
                    <p className="text-blue-600 font-medium mb-2">YBI Foundation</p>
                    <p className="text-sm text-gray-600 mb-3">Jul 2024 – Aug 2024 | Remote</p>
                    <div className="flex flex-wrap gap-1">
                      <Badge variant="outline" className="text-xs">Python</Badge>
                      <Badge variant="outline" className="text-xs">Pandas</Badge>
                      <Badge variant="outline" className="text-xs">Data Processing</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Java Programmer Intern</h4>
                    <p className="text-blue-600 font-medium mb-2">EXTION INFOTECH</p>
                    <p className="text-sm text-gray-600 mb-3">Jul 2024 – Aug 2024 | Remote</p>
                    <div className="flex flex-wrap gap-1">
                      <Badge variant="outline" className="text-xs">Java Development</Badge>
                      <Badge variant="outline" className="text-xs">Embedded Java</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">AI & ML Intern</h4>
                    <p className="text-blue-600 font-medium mb-2">Kodacy</p>
                    <p className="text-sm text-gray-600 mb-3">Jul 2024 – Aug 2024 | Remote</p>
                    <div className="flex flex-wrap gap-1">
                      <Badge variant="outline" className="text-xs">Artificial Intelligence</Badge>
                      <Badge variant="outline" className="text-xs">Machine Learning</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Python Developer Intern</h4>
                    <p className="text-blue-600 font-medium mb-2">Cognifyz Technologies</p>
                    <p className="text-sm text-gray-600 mb-3">Jun 2024 – Jul 2024 | Remote</p>
                    <div className="flex flex-wrap gap-1">
                      <Badge variant="outline" className="text-xs">Python</Badge>
                      <Badge variant="outline" className="text-xs">Pandas</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Campus Ambassador</h4>
                    <p className="text-blue-600 font-medium mb-2">NSS IIT Delhi</p>
                    <p className="text-sm text-gray-600 mb-3">Feb 2024 – Apr 2024 | Remote</p>
                    <div className="flex flex-wrap gap-1">
                      <Badge variant="outline" className="text-xs">Social Media</Badge>
                      <Badge variant="outline" className="text-xs">CSR</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Campus Ambassador</h4>
                    <p className="text-blue-600 font-medium mb-2">eDC, IIT Delhi</p>
                    <p className="text-sm text-gray-600 mb-3">Dec 2023 – Jan 2024 | Remote</p>
                    <div className="flex flex-wrap gap-1">
                      <Badge variant="outline" className="text-xs">Entrepreneurship</Badge>
                      <Badge variant="outline" className="text-xs">Social Engagement</Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Comprehensive Certifications */}
          <div>
            <h3 className="text-3xl font-semibold text-gray-900 mb-12 flex items-center justify-center">
              <Award className="text-blue-600 w-8 h-8 mr-3" />
              Certifications & Skills Achievements
            </h3>
            
            <div className="mb-8">
              <p className="text-gray-700 text-lg leading-relaxed max-w-4xl mx-auto text-center">
                I have successfully completed a comprehensive range of certifications across cloud computing, 
                artificial intelligence, data science, cybersecurity, programming, and web development, 
                demonstrating my commitment to continuous learning and multidisciplinary expertise.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Cloud Computing */}
              <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-3">
                    <Cloud className="text-blue-600 w-8 h-8" />
                    <CardTitle className="text-xl text-blue-600">Cloud Computing</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-2">
                    <Badge variant="outline" className="w-full justify-center py-2">Oracle Cloud Infrastructure 2025 Certified</Badge>
                    <Badge variant="outline" className="w-full justify-center py-2">Google Cloud Computing Certificate</Badge>
                    <Badge variant="outline" className="w-full justify-center py-2">AWS Community Builders</Badge>
                  </div>
                  <p className="text-sm text-gray-600 pt-2">
                    Expertise in OCI architecture, Kubernetes, App Engine, and scalable cloud solutions.
                  </p>
                </CardContent>
              </Card>

              {/* AI & Machine Learning */}
              <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-3">
                    <Code className="text-green-600 w-8 h-8" />
                    <CardTitle className="text-xl text-green-600">AI & Machine Learning</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-2">
                    <Badge variant="outline" className="w-full justify-center py-2">Salesforce Certified AI Associate</Badge>
                    <Badge variant="outline" className="w-full justify-center py-2">GUVI Generative AI</Badge>
                    <Badge variant="outline" className="w-full justify-center py-2">Kodacy AI Introduction</Badge>
                  </div>
                  <p className="text-sm text-gray-600 pt-2">
                    Practical insights into AI applications, ethical considerations, and real-world implementations.
                  </p>
                </CardContent>
              </Card>

              {/* Cybersecurity */}
              <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-3">
                    <Shield className="text-red-600 w-8 h-8" />
                    <CardTitle className="text-xl text-red-600">Cybersecurity</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-2">
                    <Badge variant="outline" className="w-full justify-center py-2">IBM SkillsBuild Cybersecurity</Badge>
                    <Badge variant="outline" className="w-full justify-center py-2">Cisco Introduction to Cybersecurity</Badge>
                    <Badge variant="outline" className="w-full justify-center py-2">Stanford Cryptography I</Badge>
                    <Badge variant="outline" className="w-full justify-center py-2">Digital Forensics</Badge>
                  </div>
                  <p className="text-sm text-gray-600 pt-2">
                    Expertise in cryptographic protocols, threat detection, and digital defense strategies.
                  </p>
                </CardContent>
              </Card>

              {/* Programming */}
              <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-3">
                    <Code className="text-purple-600 w-8 h-8" />
                    <CardTitle className="text-xl text-purple-600">Programming</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-2">
                    <Badge variant="outline" className="w-full justify-center py-2">Python (NIELIT & Cisco)</Badge>
                    <Badge variant="outline" className="w-full justify-center py-2">SkillRack Kickstart Code Solutions</Badge>
                    <Badge variant="outline" className="w-full justify-center py-2">C++ Bootcamp</Badge>
                  </div>
                  <p className="text-sm text-gray-600 pt-2">
                    Strong foundation in data structures, algorithms, and application development.
                  </p>
                </CardContent>
              </Card>

              {/* Data Science & Analytics */}
              <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-3">
                    <Award className="text-indigo-600 w-8 h-8" />
                    <CardTitle className="text-xl text-indigo-600">Data Science</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-2">
                    <Badge variant="outline" className="w-full justify-center py-2">Data Analyst Certificate</Badge>
                    <Badge variant="outline" className="w-full justify-center py-2">Cisco Data Science</Badge>
                  </div>
                  <p className="text-sm text-gray-600 pt-2">
                    Skills in data collection, cleaning, exploratory analysis, visualization, and predictive modeling.
                  </p>
                </CardContent>
              </Card>

              {/* Web Development & Tools */}
              <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-3">
                    <Code className="text-orange-600 w-8 h-8" />
                    <CardTitle className="text-xl text-orange-600">Web Dev & Tools</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-2">
                    <Badge variant="outline" className="w-full justify-center py-2">IBM SkillsBuild Web Development</Badge>
                    <Badge variant="outline" className="w-full justify-center py-2">Google Git & GitHub</Badge>
                    <Badge variant="outline" className="w-full justify-center py-2">Google Agile Project Management</Badge>
                    <Badge variant="outline" className="w-full justify-center py-2">Foundations of UX Design</Badge>
                  </div>
                  <p className="text-sm text-gray-600 pt-2">
                    Comprehensive web development stack with version control and project management expertise.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Additional Specialized Certifications */}
            <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="hover:shadow-lg transition-shadow text-center">
                <CardContent className="p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">IoT Technologies</h4>
                  <Badge variant="secondary" className="w-full">UC San Diego IoT Multimedia</Badge>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow text-center">
                <CardContent className="p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Sustainability</h4>
                  <Badge variant="secondary" className="w-full">Nestlé E-Learning 2025</Badge>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow text-center">
                <CardContent className="p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Finance</h4>
                  <Badge variant="secondary" className="w-full">SEBI Investor Certification</Badge>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow text-center">
                <CardContent className="p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">HR Recruitment</h4>
                  <Badge variant="secondary" className="w-full">Subhansh Sewa Trust</Badge>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Technologies</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Programming Languages */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl text-blue-600 flex items-center">
                  <Code className="w-6 h-6 mr-2" />
                  Programming Languages
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Python</Badge>
                  <Badge variant="secondary">Java</Badge>
                  <Badge variant="secondary">JavaScript</Badge>
                  <Badge variant="secondary">TypeScript</Badge>
                  <Badge variant="secondary">C++</Badge>
                  <Badge variant="secondary">Bash/Shell Scripting</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Database & Backend */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl text-green-600 flex items-center">
                  <Shield className="w-6 h-6 mr-2" />
                  Database & Backend
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">SQL</Badge>
                  <Badge variant="secondary">DBMS</Badge>
                  <Badge variant="secondary">MongoDB</Badge>
                  <Badge variant="secondary">NeonDB</Badge>
                  <Badge variant="secondary">Prisma</Badge>
                  <Badge variant="secondary">Node.js</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Frontend & Web Technologies */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl text-purple-600 flex items-center">
                  <Code className="w-6 h-6 mr-2" />
                  Frontend & Web
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">React 19</Badge>
                  <Badge variant="secondary">Next.js</Badge>
                  <Badge variant="secondary">HTML/CSS</Badge>
                  <Badge variant="secondary">Tailwind CSS</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Cloud & DevOps */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl text-blue-600 flex items-center">
                  <Cloud className="w-6 h-6 mr-2" />
                  Cloud & DevOps
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">AWS</Badge>
                  <Badge variant="secondary">Oracle Cloud</Badge>
                  <Badge variant="secondary">Google Cloud</Badge>
                  <Badge variant="secondary">Docker</Badge>
                  <Badge variant="secondary">Linux</Badge>
                </div>
              </CardContent>
            </Card>

            {/* AI & Security */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl text-red-600 flex items-center">
                  <Shield className="w-6 h-6 mr-2" />
                  AI & Security
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Artificial Intelligence</Badge>
                  <Badge variant="secondary">Gemini API</Badge>
                  <Badge variant="secondary">Cybersecurity</Badge>
                  <Badge variant="secondary">SIEM</Badge>
                  <Badge variant="secondary">ELK Stack</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Tools & Soft Skills */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl text-orange-600 flex items-center">
                  <Award className="w-6 h-6 mr-2" />
                  Tools & Soft Skills
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Git/GitHub</Badge>
                  <Badge variant="secondary">REST APIs</Badge>
                  <Badge variant="secondary">Leadership</Badge>
                  <Badge variant="secondary">Communication</Badge>
                  <Badge variant="secondary">Problem Solving</Badge>
                  <Badge variant="secondary">Teamwork</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Hobbies Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Beyond Code</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <Heart className="text-pink-500 w-12 h-12 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Design</h3>
                <p className="text-gray-600">Creating beautiful and intuitive user interfaces with Figma and Canva</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <Code className="text-blue-500 w-12 h-12 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Technical Writing</h3>
                <p className="text-gray-600">Documenting complex technical concepts in simple, accessible language</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <User className="text-green-500 w-12 h-12 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Content Creation</h3>
                <p className="text-gray-600">Sharing knowledge and insights through various digital platforms</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <Briefcase className="text-purple-500 w-12 h-12 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Community</h3>
                <p className="text-gray-600">Active involvement in student tech communities and mentoring</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Let's Connect</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
            <p className="text-gray-600 mt-4">
              I'm always open to discussing new opportunities, collaborations, or just having a chat about technology!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">Send a Message</CardTitle>
                <CardDescription>Fill out the form below and I'll get back to you soon!</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Input
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                      className="w-full"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                      className="w-full"
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Your message..."
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      required
                      className="w-full min-h-[120px]"
                    />
                  </div>
                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <Mail className="text-blue-600 w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Email</h3>
                      <a href="mailto:yagannagarimeghana@gmail.com" className="text-blue-600 hover:underline">
                        yagannagarimeghana@gmail.com
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <Linkedin className="text-blue-600 w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">LinkedIn</h3>
                      <a 
                        href="https://www.linkedin.com/in/meghana-yagannagari-465b352b5/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        Connect with me
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <Github className="text-blue-600 w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">GitHub</h3>
                      <a 
                        href="https://github.com/Meghana-06" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        View my projects
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Meghana Yagannagari</h3>
          <p className="text-gray-400 mb-6">Building the future with AI, Cloud, and Cybersecurity</p>
          <div className="flex justify-center space-x-6 mb-8">
            <a 
              href="mailto:yagannagarimeghana@gmail.com"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Mail className="w-6 h-6" />
            </a>
            <a 
              href="https://www.linkedin.com/in/meghana-yagannagari-465b352b5/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="https://github.com/Meghana-06"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
          </div>
          <p className="text-gray-500 text-sm">
            © 2024 Meghana Yagannagari. All rights reserved. Built with passion and purpose.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
