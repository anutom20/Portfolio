import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  Database,
  Globe,
  Smartphone,
  Calendar,
  MapPin,
  Building,
  Server,
  GitBranch,
  Container,
  Monitor,
  Layers,
  Terminal,
  Wrench,
  Cloud,
  Settings,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
      "AI Enthusiast",
      "DevOps Engineer",
    ],
    typeSpeed: 100,
    deleteSpeed: 50,
    delaySpeed: 2000,
  });

  const skills = [
    { name: "React", icon: Code, category: "Frontend" },
    { name: "TypeScript", icon: Code, category: "Frontend" },
    { name: "JavaScript", icon: Code, category: "Frontend" },
    { name: "NextJS", icon: Code, category: "Frontend" },
    { name: "HTML/CSS", icon: Monitor, category: "Frontend" },
    { name: "Tailwind CSS", icon: Layers, category: "Frontend" },
    { name: "Node.js", icon: Server, category: "Backend" },
    { name: "Python", icon: Terminal, category: "Backend" },
    { name: "Express.js", icon: Server, category: "Backend" },
    { name: "FastAPI", icon: Server, category: "Backend" },
    { name: "REST APIs", icon: Globe, category: "Backend" },
    { name: "Socket.io", icon: Database, category: "Backend" },
    { name: "PostgreSQL", icon: Database, category: "Database" },
    { name: "MongoDB", icon: Database, category: "Database" },
    { name: "Redis", icon: Database, category: "Database" },
    { name: "Elasticsearch", icon: Database, category: "Database" },
    { name: "AWS", icon: Cloud, category: "Cloud" },
    { name: "S3", icon: Cloud, category: "Cloud" },
    { name: "Supabase", icon: Cloud, category: "Cloud" },
    { name: "Docker", icon: Container, category: "DevOps" },
    { name: "Kubernetes", icon: Settings, category: "DevOps" },
    { name: "Grafana", icon: Settings, category: "DevOps" },
    { name: "Prometheus", icon: Settings, category: "DevOps" },
    { name: "Loki", icon: Settings, category: "DevOps" },
    { name: "Git", icon: GitBranch, category: "Tools" },
    { name: "VS Code", icon: Code, category: "Tools" },
    { name: "Postman", icon: Globe, category: "Tools" },
    { name: "Cursor.ai", icon: Wrench, category: "Tools" },
    { name: "CrewAI", icon: Settings, category: "Tools" },
  ];

  const workExperience = [
    {
      title: "Full Stack Developer",
      company: "Leadzen.ai",
      location: "Mumbai, India (Remote)",
      period: "Jul 2023 - Present",
      description:
        "Orchestrated end-to-end software development cycles and led the development of enterprise-grade AI solutions. Spearheaded document generation using agentic AI with CrewAI framework, enabling automated creation of personalized business documents and reports at scale. Developed an AI email-auto-reply system based on RAG that leverages previous emails with ChatGPT API to generate context-aware responses. Architected and scaled microservices infrastructure to handle 10x increased traffic, implementing comprehensive monitoring solutions using Grafana, Prometheus, and Loki. Led DevOps initiatives including containerization, CI/CD pipelines, and cloud infrastructure management for optimal system performance and reliability.",
      technologies: [
        "CrewAI",
        "LangChain",
        "OpenAI GPT",
        "RAG",
        "FastAPI",
        "ReactJs",
        "MongoDB",
        "PostgreSQL",
        "Docker",
        "Kubernetes",
        "NextJS",
        "NodeJS",
        "Supabase",
        "Elasticsearch",
        "Redis",
        "AWS",
        "Grafana",
        "Prometheus",
        "Loki",
      ],
    },
    {
      title: "Full Stack Developer Intern",
      company: "Leadzen.ai",
      location: "Mumbai, India",
      period: "Dec 2022 - Jun 2023",
      description:
        "Developed a LinkedIn automation tool (Chrome extension) resulting in a 10x increase in outreach efficiency. Optimized upload file endpoints, reduced memory usage by 40%, enabling handling of 50% more concurrent file uploads.",
      technologies: [
        "FastAPI",
        "ReactJs",
        "Selenium",
        "Docker",
        "Python",
        "Chrome Extensions",
      ],
    },
  ];

  const projects = [
    {
      title: "AI Product Roadmap Generator",
      description:
        "AI-driven tool for project planning with Reddit API integration, voice input, and interactive chatbots.",
      tags: [
        "Next.js",
        "TypeScript",
        "MongoDB",
        "TailwindCSS",
        "Google Gemini",
      ],
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
      live: "https://makerhub.anutom.site/",
      hasLive: true,
    },
    {
      title: "Exploding Chickens",
      description:
        "Multiplayer card game inspired by Exploding Kittens. Designed with turn-based mechanics, card interactions, and competitive play.",
      tags: ["Vite", "React", "Node.js", "Socket.io", "WebSockets", "Docker"],
      image:
        "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=500&h=300&fit=crop",
      live: "https://chickens.anutom.site/",
      hasLive: true,
    },
    {
      title: "E-commerce Website",
      description:
        "Full-featured e-commerce platform with secure user authentication, product filtering, admin dashboard, and Swagger UI documentation.",
      tags: ["Node.js", "React.js", "MongoDB", "Swagger", "REST API"],
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      live: "https://e-commerce-website-6tmp.onrender.com/",
      hasLive: true,
    },
    {
      title: "Summarizer AI API",
      description:
        "AI-powered API that generates intelligent summaries for Stack Overflow and Reddit threads with comprehensive documentation.",
      tags: ["FastAPI", "Docker", "StackAPI", "Reddit API", "AI"],
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=300&fit=crop",
      live: "https://reddit-stack-latest-j1qj.onrender.com/docs",
      hasLive: true,
    },
    {
      title: "React Flow",
      description:
        "Experimental project using React Flow library to create interactive chat-based flowcharts with modern UI components.",
      tags: ["TypeScript", "JavaScript", "React Flow", "Interactive UI"],
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&h=300&fit=crop",
      live: "https://react-flow-project-3dcn.vercel.app/",
      hasLive: true,
    },
    {
      title: "YouTube Clipping Generator",
      description:
        "Express.js REST API for YouTube live stream clip generation with Discord integration. Fetches live streams and generates timestamped clips.",
      tags: [
        "Express.js",
        "YouTube API",
        "Discord.js",
        "JavaScript",
        "REST API",
      ],
      image:
        "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=500&h=300&fit=crop",
      live: "https://github.com/anutom20/yt-clipping",
      hasLive: false,
    },
    {
      title: "Titanic Survival Prediction",
      description:
        "Machine Learning model that predicts survival odds for Titanic passengers using logistic regression and data analysis.",
      tags: [
        "Jupyter Notebook",
        "Pandas",
        "NumPy",
        "Kaggle",
        "Logistic Regression",
      ],
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
      live: "https://github.com/anutom20/Titanic_Survival_Prediction",
      hasLive: false,
    },
    {
      title: "CodeChef Notify",
      description:
        "Chrome extension that sends verdict notifications for CodeChef problems, enhancing the competitive programming experience.",
      tags: ["Chrome Extension", "JavaScript", "Web APIs", "Notifications"],
      image:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop",
      live: "https://github.com/anutom20/Codechef-Notify",
      hasLive: false,
    },
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
    transition: { duration: 0.6 },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const skillCategories = [
    "Frontend",
    "Backend",
    "Database",
    "Cloud",
    "DevOps",
    "Tools",
  ];

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
              Anurag Tomar
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="hidden md:flex space-x-8"
            >
              {[
                "About",
                "Experience",
                "Skills",
                "Projects",
                "Achievements",
                "Contact",
              ].map((item) => (
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
            <div className="w-32 h-32 rounded-full mx-auto mb-6 overflow-hidden border-4 border-blue-500 shadow-lg shadow-blue-500/25">
              <img
                src="/anutom.jpg"
                alt="Anurag Tomar"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Anurag Tomar
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
            className="flex justify-center space-x-4"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white transform hover:scale-105 transition-all duration-300"
              onClick={() =>
                window.open("https://www.github.com/anutom20", "_blank")
              }
            >
              <Github className="mr-2 h-5 w-5" />
              GitHub
            </Button>
            <Button
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white transform hover:scale-105 transition-all duration-300"
              onClick={() =>
                window.open("https://leetcode.com/u/anuragkt20/", "_blank")
              }
            >
              <Code className="mr-2 h-5 w-5" />
              LeetCode
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white transform hover:scale-105 transition-all duration-300"
              onClick={() => (window.location.href = "#contact")}
            >
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

            <motion.div
              variants={fadeInUp}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              <div>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  I'm a passionate Full Stack Developer with expertise in
                  building scalable web applications and AI-powered solutions.
                  Currently working at Leadzen.ai, I specialize in React,
                  Node.js, Python, and cloud technologies.
                </p>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  I have experience developing end-to-end software solutions,
                  from AI-powered email automation systems to LinkedIn
                  automation tools. I'm passionate about creating efficient,
                  scalable applications and staying up-to-date with the latest
                  development technologies.
                </p>
                <div className="flex space-x-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white"
                    onClick={() =>
                      window.open(
                        "https://www.linkedin.com/in/anurag-tomar-2a26b51b3/",
                        "_blank"
                      )
                    }
                  >
                    <Linkedin className="mr-2 h-4 w-4" />
                    LinkedIn
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white"
                    onClick={() =>
                      (window.location.href = "mailto:anuragkt20@gmail.com")
                    }
                  >
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
                          <CardTitle className="text-white text-xl mb-2">
                            {job.title}
                          </CardTitle>
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
                          <span className="whitespace-nowrap">
                            {job.period}
                          </span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-300 mb-4 text-base leading-relaxed">
                        {job.description}
                      </CardDescription>
                      <div className="flex flex-wrap gap-2">
                        {job.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="bg-blue-500/20 text-blue-300 border-blue-500/30"
                          >
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
                  <h3 className="text-xl font-semibold text-white mb-4 text-center">
                    {category}
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {skills
                      .filter((skill) => skill.category === category)
                      .map((skill, index) => (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{
                            delay: categoryIndex * 0.1 + index * 0.05,
                          }}
                          viewport={{ once: true }}
                        >
                          <Card className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-all duration-300 hover:scale-105">
                            <CardContent className="p-4">
                              <div className="flex items-center space-x-3">
                                <skill.icon className="h-6 w-6 text-blue-400" />
                                <span className="text-white font-medium">
                                  {skill.name}
                                </span>
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

            <motion.div
              variants={fadeInUp}
              className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
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
                      <CardTitle className="text-white text-xl">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-gray-300">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag) => (
                          <Badge
                            key={tag}
                            variant="secondary"
                            className="bg-blue-500/20 text-blue-300 border-blue-500/30"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex space-x-3">
                        <Button
                          size="sm"
                          className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white flex-1"
                          onClick={() => window.open(project.live, "_blank")}
                        >
                          {project.hasLive ? (
                            <>
                              <ExternalLink className="mr-2 h-4 w-4" />
                              Live Demo
                            </>
                          ) : (
                            <>
                              <Github className="mr-2 h-4 w-4" />
                              View Code
                            </>
                          )}
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

      {/* Achievements Section */}
      <section id="achievements" className="py-20 px-6 bg-black/30">
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
              Key Achievements
            </motion.h2>

            <motion.div
              variants={fadeInUp}
              className="grid md:grid-cols-2 gap-8"
            >
              <div className="space-y-6">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300">
                    <span className="text-white font-semibold">
                      10x increase
                    </span>{" "}
                    in outreach efficiency through LinkedIn automation tool
                    development
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300">
                    <span className="text-white font-semibold">
                      40% reduction
                    </span>{" "}
                    in memory usage by optimizing file upload endpoints
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300">
                    <span className="text-white font-semibold">
                      50% more concurrent
                    </span>{" "}
                    file uploads handled after optimization
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300">
                    Architected{" "}
                    <span className="text-white font-semibold">
                      microservices infrastructure
                    </span>{" "}
                    to handle 10x increased traffic
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300">
                    Built{" "}
                    <span className="text-white font-semibold">
                      AI document generation system
                    </span>{" "}
                    using CrewAI for automated business reports
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300">
                    Implemented{" "}
                    <span className="text-white font-semibold">
                      RAG-based email automation
                    </span>{" "}
                    with context-aware AI responses
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300">
                    Deployed{" "}
                    <span className="text-white font-semibold">
                      comprehensive monitoring stack
                    </span>{" "}
                    (Grafana, Prometheus, Loki)
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300">
                    Led{" "}
                    <span className="text-white font-semibold">
                      DevOps transformation
                    </span>{" "}
                    with containerization and CI/CD pipelines
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300">
                    Solved{" "}
                    <a
                      href="https://www.stopstalk.com/user/profile/anutom20"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white font-semibold hover:text-blue-400 transition-colors duration-300 cursor-pointer"
                    >
                      1000+ DSA problems
                    </a>{" "}
                    across LeetCode, CodeChef, Codeforces platforms
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300">
                    Achieved{" "}
                    <a
                      href="https://drive.google.com/file/d/1SU4Ih9e9w0JyBv3WCyJ77hSdCIJcZYvD/view?usp=share_link"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white font-semibold hover:text-blue-400 transition-colors duration-300 cursor-pointer"
                    >
                      National Rank 730
                    </a>{" "}
                    in CODEKAZE'21 coding contest
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300">
                    Reached{" "}
                    <a
                      href="https://drive.google.com/file/d/1Gk6pdlgldiK0444qFmEb_9Qnpaq8qJGY/view?usp=share_link"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white font-semibold hover:text-blue-400 transition-colors duration-300 cursor-pointer"
                    >
                      Round 2 in Meta Hacker Cup
                    </a>{" "}
                    with global rank 2826
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300">
                    Secured{" "}
                    <a
                      href="https://drive.google.com/file/d/1OWU__z-UsXl6kcy5suQva2o73WTEcPVk/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white font-semibold hover:text-blue-400 transition-colors duration-300 cursor-pointer"
                    >
                      rank 2769/7000+
                    </a>{" "}
                    in Google Kickstart Round-G
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
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

            <motion.div
              variants={fadeInUp}
              className="text-center max-w-2xl mx-auto"
            >
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-white">
                  Let's work together
                </h3>
                <p className="text-gray-300 mb-8 leading-relaxed">
                  I'm always interested in new opportunities and exciting
                  projects. Whether you have a project in mind or just want to
                  chat about tech, feel free to reach out!
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-lg mx-auto">
                  <div className="flex items-center justify-center space-x-3 p-4 bg-gray-800/30 rounded-lg border border-gray-700">
                    <Mail className="h-5 w-5 text-blue-400" />
                    <a
                      href="mailto:anuragkt20@gmail.com"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      anuragkt20@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center justify-center space-x-3 p-4 bg-gray-800/30 rounded-lg border border-gray-700">
                    <Linkedin className="h-5 w-5 text-blue-400" />
                    <a
                      href="https://www.linkedin.com/in/anurag-tomar-2a26b51b3/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      LinkedIn
                    </a>
                  </div>
                  <div className="flex items-center justify-center space-x-3 p-4 bg-gray-800/30 rounded-lg border border-gray-700">
                    <Github className="h-5 w-5 text-blue-400" />
                    <a
                      href="https://www.github.com/anutom20"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      GitHub
                    </a>
                  </div>
                  <div className="flex items-center justify-center space-x-3 p-4 bg-gray-800/30 rounded-lg border border-gray-700">
                    <Smartphone className="h-5 w-5 text-blue-400" />
                    <a
                      href="tel:+917428714237"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      +91 74287 14237
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-gray-800">
        <div className="container mx-auto max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            {/* Contact Info */}
            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-center md:justify-start space-x-2">
                  <Mail className="h-4 w-4 text-blue-400" />
                  <a
                    href="mailto:anuragkt20@gmail.com"
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    anuragkt20@gmail.com
                  </a>
                </div>
                <div className="flex items-center justify-center md:justify-start space-x-2">
                  <Smartphone className="h-4 w-4 text-blue-400" />
                  <a
                    href="tel:+917428714237"
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    +91 74287 14237
                  </a>
                </div>
                <div className="flex items-center justify-center md:justify-start space-x-2">
                  <MapPin className="h-4 w-4 text-blue-400" />
                  <span className="text-gray-400 text-sm">
                    Etawah, Uttar Pradesh
                  </span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Connect</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-center md:justify-start space-x-2">
                  <Github className="h-4 w-4 text-blue-400" />
                  <a
                    href="https://www.github.com/anutom20"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    GitHub
                  </a>
                </div>
                <div className="flex items-center justify-center md:justify-start space-x-2">
                  <Linkedin className="h-4 w-4 text-blue-400" />
                  <a
                    href="https://www.linkedin.com/in/anurag-tomar-2a26b51b3/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>

            {/* Copyright */}
            <div>
              <h4 className="text-white font-semibold mb-4">About</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Full Stack Developer passionate about building scalable web
                applications and AI-powered solutions.
              </p>
              <p className="text-gray-400 text-xs mt-4">
                © 2024 Anurag Tomar. Built with React & Tailwind CSS
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
