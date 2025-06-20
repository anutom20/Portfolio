import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ExternalLink, Code, Database, Globe, Smartphone, Calendar, MapPin, Building, Server, GitBranch, Container, Monitor, Layers, Terminal, Wrench, Cloud, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useTypewriter } from "@/hooks/useTypewriter";

const Index = () => {
  const { toast } = useToast();
  
  const typewriterText = useTypewriter({
    words: [
      "Full-Stack Developer",
      "React Specialist",
      "Backend Engineer",
      "Cloud Architect",
      "DevOps Engineer"
    ],
    typeSpeed: 100,
    deleteSpeed: 50,
    delaySpeed: 2000,
  });

  const skills = [
    { name: "React", icon: Code, category: "Frontend" },
    { name: "TypeScript", icon: Code, category: "Frontend" },
    { name: "JavaScript", icon: Code, category: "Frontend" },
    { name: "Vue.js", icon: Code, category: "Frontend" },
    { name: "HTML/CSS", icon: Monitor, category: "Frontend" },
    { name: "Tailwind CSS", icon: Layers, category: "Frontend" },
    { name: "Node.js", icon: Server, category: "Backend" },
    { name: "Python", icon: Terminal, category: "Backend" },
    { name: "Express.js", icon: Server, category: "Backend" },
    { name: "FastAPI", icon: Server, category: "Backend" },
    { name: "REST APIs", icon: Globe, category: "Backend" },
    { name: "GraphQL", icon: Database, category: "Backend" },
    { name: "PostgreSQL", icon: Database, category: "Database" },
    { name: "MongoDB", icon: Database, category: "Database" },
    { name: "Redis", icon: Database, category: "Database" },
    { name: "MySQL", icon: Database, category: "Database" },
    { name: "AWS", icon: Cloud, category: "Cloud" },
    { name: "Azure", icon: Cloud, category: "Cloud" },
    { name: "Google Cloud", icon: Cloud, category: "Cloud" },
    { name: "Docker", icon: Container, category: "DevOps" },
    { name: "Kubernetes", icon: Settings, category: "DevOps" },
    { name: "Jenkins", icon: Settings, category: "DevOps" },
    { name: "GitHub Actions", icon: GitBranch, category: "DevOps" },
    { name: "Terraform", icon: Settings, category: "DevOps" },
    { name: "Git", icon: GitBranch, category: "Tools" },
    { name: "VS Code", icon: Code, category: "Tools" },
    { name: "Postman", icon: Globe, category: "Tools" },
    { name: "Figma", icon: Wrench, category: "Tools" }
  ];

  const workExperience = [
    {
      title: "Senior Full Stack Developer",
      company: "TechCorp Solutions",
      location: "San Francisco, CA",
      period: "2021 - Present",
      description: "Led development of scalable web applications serving 100K+ users. Architected microservices infrastructure and mentored junior developers.",
      technologies: ["React", "Node.js", "AWS", "Docker", "PostgreSQL"]
    },
    {
      title: "Software Developer",  
      company: "StartupXYZ",
      location: "Austin, TX",
      period: "2019 - 2021",
      description: "Built responsive web applications and RESTful APIs. Collaborated with cross-functional teams to deliver features on tight deadlines.",
      technologies: ["Vue.js", "Python", "MongoDB", "Git"]
    },
    {
      title: "Junior Developer",
      company: "Digital Agency Pro",
      location: "Remote",
      period: "2018 - 2019", 
      description: "Developed client websites and maintained existing codebases. Gained experience in modern web development practices and agile methodologies.",
      technologies: ["JavaScript", "PHP", "MySQL", "WordPress"]
    }
  ];

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with payment integration and admin dashboard",
      tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      github: "#",
      live: "#"
    },
    {
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates",
      tags: ["Vue.js", "Express", "Socket.io", "MongoDB"],
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
      github: "#",
      live: "#"
    },
    {
      title: "AI Chat Bot",
      description: "Intelligent chatbot with natural language processing capabilities",
      tags: ["Python", "FastAPI", "OpenAI", "Docker"],
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=300&fit=crop",
      github: "#",
      live: "#"
    }
  ];

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const skillCategories = ["Frontend", "Backend", "Database", "Cloud", "DevOps", "Tools"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-gray-800">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
            >
              DevPortfolio
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="hidden md:flex space-x-8"
            >
              {["About", "Experience", "Skills", "Projects", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-300 hover:text-white transition-colors duration-300 relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </motion.div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative pt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center z-10 px-6"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-8"
          >
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 mx-auto mb-6 flex items-center justify-center text-4xl font-bold">
              JD
            </div>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              John Doe
            </span>
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto h-8"
          >
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              {typewriterText}
            </span>
            <span className="animate-pulse text-blue-400">|</span>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex justify-center space-x-6"
          >
            <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white transform hover:scale-105 transition-all duration-300">
              <Github className="mr-2 h-5 w-5" />
              GitHub
            </Button>
            <Button size="lg" variant="outline" className="border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white transform hover:scale-105 transition-all duration-300">
              <Mail className="mr-2 h-5 w-5" />
              Contact Me
            </Button>
          </motion.div>
        </motion.div>
        
        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-20"
              animate={{
                y: [0, -100, 0],
                x: [0, Math.random() * 100 - 50, 0],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
            >
              About Me
            </motion.h2>
            
            <motion.div variants={fadeInUp} className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  I'm a passionate software developer with over 5 years of experience building scalable web applications. I love turning complex problems into simple, beautiful solutions.
                </p>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  When I'm not coding, you can find me exploring new technologies, contributing to open source projects, or sharing knowledge with the developer community.
                </p>
                <div className="flex space-x-4">
                  <Button variant="outline" size="sm" className="border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white">
                    <Linkedin className="mr-2 h-4 w-4" />
                    LinkedIn
                  </Button>
                  <Button variant="outline" size="sm" className="border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white">
                    <Mail className="mr-2 h-4 w-4" />
                    Email
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="w-full h-80 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-2xl backdrop-blur-sm border border-gray-700 flex items-center justify-center">
                  <Code className="h-24 w-24 text-blue-400" />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section id="experience" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
            >
              Work Experience
            </motion.h2>
            
            <motion.div variants={fadeInUp} className="space-y-8">
              {workExperience.map((job, index) => (
                <motion.div
                  key={job.title + job.company}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-all duration-300">
                    <CardHeader>
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div>
                          <CardTitle className="text-white text-xl mb-2">{job.title}</CardTitle>
                          <div className="flex items-center gap-4 text-gray-300">
                            <div className="flex items-center gap-2">
                              <Building className="h-4 w-4 text-blue-400" />
                              <span>{job.company}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <MapPin className="h-4 w-4 text-blue-400" />
                              <span>{job.location}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-gray-400">
                          <Calendar className="h-4 w-4 text-blue-400" />
                          <span className="whitespace-nowrap">{job.period}</span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-300 mb-4 text-base leading-relaxed">
                        {job.description}
                      </CardDescription>
                      <div className="flex flex-wrap gap-2">
                        {job.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary" className="bg-blue-500/20 text-blue-300 border-blue-500/30">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-black/30">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
            >
              Skills & Technologies
            </motion.h2>
            
            <motion.div variants={fadeInUp} className="space-y-8">
              {skillCategories.map((category, categoryIndex) => (
                <div key={category}>
                  <h3 className="text-xl font-semibold text-white mb-4 text-center">{category}</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {skills
                      .filter(skill => skill.category === category)
                      .map((skill, index) => (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: (categoryIndex * 0.1) + (index * 0.05) }}
                          viewport={{ once: true }}
                        >
                          <Card className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-all duration-300 hover:scale-105">
                            <CardContent className="p-4">
                              <div className="flex items-center space-x-3">
                                <skill.icon className="h-6 w-6 text-blue-400" />
                                <span className="text-white font-medium">{skill.name}</span>
                              </div>
                            </CardContent>
                          </Card>
                        </motion.div>
                      ))}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
            >
              Featured Projects
            </motion.h2>
            
            <motion.div variants={fadeInUp} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                >
                  <Card className="bg-gray-800/50 border-gray-700 overflow-hidden hover:bg-gray-800/70 transition-all duration-300 group">
                    <div className="relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-white text-xl">{project.title}</CardTitle>
                      <CardDescription className="text-gray-300">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="bg-blue-500/20 text-blue-300 border-blue-500/30">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex space-x-3">
                        <Button size="sm" variant="outline" className="border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white">
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </Button>
                        <Button size="sm" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-black/30">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
            >
              Get In Touch
            </motion.h2>
            
            <motion.div variants={fadeInUp} className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-white">Let's work together</h3>
                <p className="text-gray-300 mb-8 leading-relaxed">
                  I'm always interested in new opportunities and exciting projects. 
                  Whether you have a project in mind or just want to chat about tech, 
                  feel free to reach out!
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-blue-400" />
                    <span className="text-gray-300">john.doe@example.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Linkedin className="h-5 w-5 text-blue-400" />
                    <span className="text-gray-300">linkedin.com/in/johndoe</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Github className="h-5 w-5 text-blue-400" />
                    <span className="text-gray-300">github.com/johndoe</span>
                  </div>
                </div>
              </div>
              
              <Card className="bg-gray-800/50 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white">Send a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleContactSubmit} className="space-y-4">
                    <Input
                      placeholder="Your Name"
                      className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                    />
                    <Input
                      type="email"
                      placeholder="Your Email"
                      className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                    />
                    <Textarea
                      placeholder="Your Message"
                      rows={4}
                      className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                    />
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white"
                    >
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-800">
        <div className="container mx-auto text-center">
          <p className="text-gray-400">
            © 2024 John Doe. Built with React & Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
