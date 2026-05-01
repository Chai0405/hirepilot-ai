import {
  FileText,
  CheckCircle2,
  TrendingUp,
  ClipboardList,
  Users,
  ChevronRight,
  Bot,
  BarChart3,
  Users2,
  ShieldCheck,
  Code2,
  Hexagon,
  Boxes,
  Database,
  Cloud,
  Network,
  BrainCircuit,
  Building2,
} from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Features() {
  const features = [
    {
      title: "AI Resume Screening",
      description:
        "Automatically screen and rank candidates using advanced AI models.",
      points: [
        "Smart parsing & scoring",
        "Skills extraction",
        "Experience analysis",
        "Bias-free evaluation",
      ],
    },
    {
  title: "ATS Optimization",
  description:
    "Optimize job descriptions and improve ATS compatibility.",
  points: [
    "Keyword optimization",
    "ATS score improvement",
    "Readability analysis",
    "Competitor insights",
  ],
},
    {
  title: "Candidate Matching",
  description:
    "AI-powered matching that connects you with the best-fit candidates.",
  points: [
    "Semantic matching",
    "Skills & culture fit",
    "Top candidate ranking",
    "Match explanations",
  ],
},
    {
  title: "Interview Automation",
  description:
    "Automate scheduling, screening, and interview processes.",
  points: [
    "AI interview scheduling",
    "Auto screening calls",
    "Interview scorecards",
    "Feedback analysis",
  ],
},
    {
  title: "Analytics Dashboard",
  description:
    "Real-time insights to track hiring performance and team productivity.",
  points: [
    "Hiring funnel analytics",
    "Time-to-hire tracking",
    "Source effectiveness",
    "Custom reports",
  ],
},
    {
  title: "Team Collaboration",
  description:
    "Collaborate seamlessly with your team throughout the hiring process.",
  points: [
    "Shared candidate profiles",
    "Team feedback loops",
    "Role-based access",
    "Activity timeline",
  ],
},
    {
  title: "Enterprise Security",
  description:
    "Bank-grade security to protect your data and candidate privacy.",
  points: [
    "SOC 2 Type II",
    "GDPR Compliant",
    "Data encryption",
    "Audit logs",
  ],
},
    {
  title: "API Integrations",
  description:
    "Seamlessly integrate with your favorite tools and platforms.",
  points: [
    "RESTful API",
    "Webhooks",
    "Zapier Integration",
    "Custom workflows",
  ],
},
    {
  title: "Workflow Automation",
  description:
    "All features work together seamlessly with the power of AI.",
},
  ];

  return (
    <>
    <style>{`
  @keyframes scroll {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-50%);
    }
  }
`}</style>
    <section className="relative bg-transparent pt-6 pb-32 px-6 lg:px-20 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto">

        <div className="absolute top-0 -left-32 w-[950px] h-[720px] pointer-events-none opacity-[0.08] z-0">
  <img
    src="/graphics/neural-network-bg.png"
    alt="Background Glow"
    className="w-full h-full object-contain object-top-left mix-blend-screen"
  />
</div>

        {/* Heading */}
        <div className="max-w-4xl mx-auto text-center mb-11">
          <p className="text-sm uppercase tracking-[0.35em] text-purple-400 mb-5">
            Features
          </p>

          <h2 className="text-5xl md:text-6xl text-white leading-tight">
            Powerful features to
            <br />
            transform
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">
              {" "}your hiring
            </span>
          </h2>

          <p className="mt-6 text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Everything you need to attract, screen, and hire top talent
            <br />
            faster with the power of{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-400 bg-clip-text text-transparent font-semibold">
              AI
            </span>
            .
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative rounded-3xl p-[1px] bg-gradient-to-br from-blue-500/40 via-purple-500/30 to-pink-500/40 shadow-[0_0_30px_rgba(59,130,246,0.10)] hover:shadow-[0_0_55px_rgba(168,85,247,0.18)] transition-all duration-500"
            >
              {feature.title === "AI Resume Screening" ? (

                <div className="rounded-3xl bg-black/85 backdrop-blur-xl min-h-[400px] p-8 relative flex flex-col overflow-hidden">

                  {/* Glow Overlay */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none" />

                  <div className="relative z-10 flex items-center gap-4 mb-1">

                    
  
  {/* Icon */}
  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500/30 via-purple-500/20 to-pink-500/25 border border-purple-400/25 flex items-center justify-center shadow-[0_0_25px_rgba(168,85,247,0.18)] backdrop-blur-xl">
            
    <FileText className="w-9 h-9"
    strokeWidth={2.0}
     style={{
              stroke: "url(#icon-gradient)" }} />
  </div>

  {/* Title */}
  <h3 className="text-2xl text-white">
    AI Resume Screening
  </h3>

</div>

{/* Description */}
<div className="relative z-10 pl-[72px] min-h-[210px]">
  <p className="text-gray-300 leading-relaxed mb-4 text-sm max-w-[240px]">
    Automatically screen and rank candidates using advanced AI models.
  </p>

                    {/* Bullet List */}
                    <ul className="space-y-2.5 mb-6">
                      {feature.points?.map((point, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-3 text-gray-300 text-sm"
                        >
                          <CheckCircle2 className="w-4 h-4 text-purple-400" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* SVG Gradient Definition */}
  <svg width="0" height="0">
    <defs>
      <linearGradient id="icon-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3b82f6" />
        <stop offset="50%" stopColor="#8b5cf6" />
        <stop offset="100%" stopColor="#ec4899" />
      </linearGradient>
    </defs>
  </svg>

                 

                  {/* Bottom Dashboard */}
                  <div className="relative z-10 mt-auto pt-6 grid grid-cols-2 gap-4">

                    {/* Screening Results */}
                    <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-4 h-[165px]">
  <p className="text-[10px] text-gray-500">
    Screening Results
  </p>

  <p className="text-2xl text-white mt-2 font-semibold">
    1,248
  </p>

  <p className="text-[11px] text-gray-500 mt-1">
    Total Screened
  </p>

  <p className="text-sm text-emerald-400 mt-2">
    +24.5%
  </p>

  <div className="mt-3 h-2 rounded-2xl bg-gradient-to-t from-blue-500/10 to-transparent p-2">
                  <svg viewBox="0 0 100 40" className="h-full w-full">
                    <polyline
                      fill="none"
                      stroke="url(#gradientLine)"
                      strokeWidth="2.8"
                      points="0,35 10,30 20,32 30,24 40,28 50,18 60,22 70,12 85,15 100,2"
                    />
                    <defs>
                      <linearGradient
                        id="gradientLine"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="0%"
                      >
                        <stop offset="0%" stopColor="#2563eb" />
                        <stop offset="100%" stopColor="#8b5cf6" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>

                    {/* Match Rate */}
                    <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-4 h-[165px] flex flex-col justify-center items-center">
                      <p className="text-xs text-gray-500 mb-4 -mt-7">
                        Top Match Rate
                      </p>

                      <div className="relative w-20 h-20 rounded-full bg-[conic-gradient(#3b82f6_0deg,#a855f7_180deg,#ec4899_250deg,#1e293b_250deg)] flex items-center justify-center">
                        <div className="w-17 h-17 rounded-full bg-black flex items-center justify-center text-white font-semibold">
                          95%
                        </div>
                      </div>
                    </div>

                  </div>
                </div>

              ) : feature.title === "ATS Optimization" ? (

  <div className="rounded-3xl bg-black/85 backdrop-blur-xl min-h-[400px] p-8 relative flex flex-col overflow-hidden">

    {/* Glow Overlay */}
    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none" />

    {/* Header */}
    <div className="relative z-10 flex items-center gap-4 mb-1">

      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500/30 via-purple-500/20 to-pink-500/25 border border-purple-400/25 flex items-center justify-center shadow-[0_0_25px_rgba(168,85,247,0.18)] backdrop-blur-xl">

      <TrendingUp className="w-9 h-9"
      strokeWidth={2.0}
         style={{
              stroke: "url(#icon-gradient)",
            }} />
      </div>

       {/* Title */}
  <h3 className="text-2xl text-white">
    ATS Optimization
  </h3>

</div>

{/* Description */}
<div className="relative z-10 pl-[72px] min-h-[210px]">
  <p className="text-gray-300 leading-relaxed mb-4 text-sm max-w-[240px]">
  Optimize job descriptions, boost ATS rankings, and improve application compatibility for maximum recruiter visibility.
</p>

                    {/* Bullet List */}
                    <ul className="space-y-2.5 mb-6">
                      {feature.points?.map((point, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-3 text-gray-300 text-sm"
                        >
                          <CheckCircle2 className="w-4 h-4 text-purple-400" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <svg width="0" height="0">
    <defs>
      <linearGradient id="icon-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3b82f6" />
        <stop offset="50%" stopColor="#8b5cf6" />
        <stop offset="100%" stopColor="#ec4899" />
      </linearGradient>
    </defs>
  </svg>

    {/* Bottom ATS Score */}
    <div className="relative z-10 mt-auto pt-6 rounded-2xl border border-white/5 bg-white/[0.02] p-4 h-[165px]">

      <div className="flex items-start justify-between">
        <div>
          <p className="text-[10px] text-gray-500">
            ATS Score
          </p>

          <p className="text-2xl text-white mt-1 font-semibold">
            95%
          </p>

          <p className="text-xs text-emerald-400 mt-1">
            Excellent Match
          </p>
        </div>

        <ClipboardList className="w-7 h-7 text-blue-400" />
      </div>

      {/* Progress Bar */}
      <div className="mt-5 h-2 rounded-full bg-white/5 overflow-hidden">
        <div className="h-full w-[95%] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full" />
      </div>

    </div>

  </div>

) : feature.title === "Candidate Matching" ? (

  <div className="rounded-3xl bg-black/85 backdrop-blur-xl min-h-[400px] p-8 relative flex flex-col overflow-hidden">

    {/* Glow Overlay */}
    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none" />

    {/* Header */}
    <div className="relative z-10 flex items-center gap-4 mb-1">

      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500/30 via-purple-500/20 to-pink-500/25 border border-purple-400/25 flex items-center justify-center shadow-[0_0_25px_rgba(168,85,247,0.18)] backdrop-blur-xl">

      <Users className="w-9 h-9"
         style={{
              stroke: "url(#icon-gradient)",
            }} />
      </div>

      <h3 className="text-2xl text-white">
        Candidate Matching
      </h3>
    </div>

    {/* Description + Bullets */}
    <div className="relative z-10 pl-[72px] min-h-[210px]">
      <p className="text-gray-300 leading-relaxed mb-4 text-sm max-w-[240px]">
        AI-powered matching that connects you with the best-fit candidates.
      </p>

      <ul className="space-y-2.5 mb-6">
        {feature.points?.map((point, i) => (
          <li
            key={i}
            className="flex items-center gap-3 text-gray-300 text-sm"
          >
            <CheckCircle2 className="w-4 h-4 text-purple-400" />
            {point}
          </li>
        ))}
      </ul>
    </div>

    <svg width="0" height="0">
    <defs>
      <linearGradient id="icon-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3b82f6" />
        <stop offset="50%" stopColor="#8b5cf6" />
        <stop offset="100%" stopColor="#ec4899" />
      </linearGradient>
    </defs>
  </svg>

    {/* Bottom Match Card */}
    <div className="relative z-10 mt-8 pt-6 rounded-2xl border border-white/5 bg-white/[0.02] p-4 h-[165px] flex flex-col justify-center">


      <p className="text-[10px] text-gray-500 -mt-12 mb-5">
        Best Match
      </p>

      <div className="flex items-center justify-between">

        <div className="flex items-center gap-3">
          <img
            src="/avatars/arjun.jpg"
            alt="Arjun Mehta"
            className="h-15 w-15 rounded-full object-cover border border-white/10"
          />

          <div>
            <p className="text-white text-sm">
              Arjun Mehta
            </p>

            <p className="text-emerald-400 text-xs mt-1">
              96% Match
            </p>
          </div>
        </div>

        <ChevronRight className="w-5 h-5 text-gray-500" />

      </div>

    </div>

  </div>

) : feature.title === "Interview Automation" ? (

  <div className="rounded-3xl bg-black/85 backdrop-blur-xl min-h-[400px] p-8 relative flex flex-col overflow-hidden">

    {/* Glow Overlay */}
    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none" />

    {/* Header */}
    <div className="relative z-10 flex items-center gap-4 mb-1">

      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500/30 via-purple-500/20 to-pink-500/25 border border-purple-400/25 flex items-center justify-center shadow-[0_0_25px_rgba(168,85,247,0.18)] backdrop-blur-xl">

      <Bot className="w-10 h-10 text-purple-400"/>
      </div>

      <h3 className="text-2xl text-white">
        Interview Automation
      </h3>
    </div>

    {/* Description + Bullets */}
    <div className="relative z-10 pl-[72px] h-[210px]">
      <p className="text-gray-300 leading-relaxed mb-4 text-sm max-w-[240px]">
        Automate scheduling, screening, and interview processes.
      </p>

      <ul className="space-y-2.5 mb-6">
        {feature.points?.map((point, i) => (
          <li
            key={i}
            className="flex items-center gap-3 text-gray-300 text-sm"
          >
            <CheckCircle2 className="w-4 h-4 text-purple-400" />
            {point}
          </li>
        ))}
      </ul>
    </div>

    <svg width="0" height="0">
    <defs>
      <linearGradient id="icon-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3b82f6" />
        <stop offset="50%" stopColor="#8b5cf6" />
        <stop offset="100%" stopColor="#ec4899" />
      </linearGradient>
    </defs>
  </svg>

    {/* Bottom Dashboard */}
    <div className="relative z-10 mt-auto pt-6 rounded-2xl border border-white/5 bg-white/[0.02] p-4 h-[165px]">

      <p className="text-[10px] text-gray-500">
        Interviews Scheduled
      </p>

      <p className="text-3xl text-white mt-2 font-semibold">
        324
      </p>

      <p className="text-[11px] text-gray-500 mt-1">
        This Week
      </p>

      <p className="text-sm text-emerald-400 mt-2">
        +18.2%
      </p>

      {/* Bar Chart */}
      <div className="absolute bottom-8 right-6 flex items-end gap-2 h-20 w-[160px]">
        {[18, 30, 24, 48, 28, 62, 40, 72, 55, 88].map((h, i) => (
          <div
            key={i}
            className="w-2 rounded-t-xs bg-gradient-to-t from-purple-500 to-blue-400"
            style={{ height: `${h}%` }}
          />
        ))}
      </div>

    </div>

  </div>

    ) : feature.title === "Analytics Dashboard" ? (

  <div className="rounded-3xl bg-black/85 backdrop-blur-xl min-h-[400px] p-8 relative flex flex-col overflow-hidden">

    {/* Glow Overlay */}
    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none" />

    {/* Header */}
    <div className="relative z-10 flex items-center gap-4 mb-1">

      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500/30 via-purple-500/20 to-pink-500/25 border border-purple-400/25 flex items-center justify-center shadow-[0_0_25px_rgba(168,85,247,0.18)] backdrop-blur-xl">
  <BarChart3 className="w-9 h-9 text-purple-400" />
</div>

      <h3 className="text-2xl text-white">
        Analytics Dashboard
      </h3>
    </div>

    {/* Description + Bullets */}
    <div className="relative z-10 pl-[72px] h-[210px]">
      <p className="text-gray-300 leading-relaxed mb-4 text-sm max-w-[240px]">
        Real-time insights to track hiring performance and team productivity.
      </p>

      <ul className="space-y-2.5 mb-6">
        {feature.points?.map((point, i) => (
          <li
            key={i}
            className="flex items-center gap-3 text-gray-300 text-sm"
          >
            <CheckCircle2 className="w-4 h-4 text-purple-400" />
            {point}
          </li>
        ))}
      </ul>
    </div>

    <svg width="0" height="0">
    <defs>
      <linearGradient id="icon-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3b82f6" />
        <stop offset="50%" stopColor="#8b5cf6" />
        <stop offset="100%" stopColor="#ec4899" />
      </linearGradient>
    </defs>
  </svg>

    {/* Bottom Dashboard */}
    <div className="relative z-10 mt-auto pt-6 rounded-2xl border border-white/5 bg-white/[0.02] p-4 h-[165px]">

      <p className="text-[10px] text-gray-500">
        Time to Hire
      </p>

      <p className="text-3xl text-white mt-2 font-semibold">
        24
      </p>

      <p className="text-[11px] text-gray-500 mt-1">
        Days
      </p>

      <p className="text-sm text-emerald-400 mt-2">
        -18%
      </p>

      {/* Line Graph */}
      <div className="-mt-16 h-18 rounded-xl bg-gradient-to-t from-blue-500/10 to-transparent p-2">
        <svg viewBox="0 0 100 40" className="h-full w-full">

  {/* Area Fill */}
  <polygon
    points="0,40 0,35 7,30 14,33 21,20 28,25 35,12 42,22 49,6 56,18 63,9 72,14 82,3 92,8 100,0 100,40"
    fill="url(#gradientAreaAnalytics)"
    opacity="0.35"
  />

  {/* Line */}
  <polyline
    fill="none"
    stroke="url(#gradientLineAnalytics)"
    strokeWidth="1.6"
    points="0,35 10,28 20,32 30,24 40,28 50,16 60,22 70,14 80,18 90,6 100,0"
  />

  <defs>
    <linearGradient
      id="gradientLineAnalytics"
      x1="0%"
      y1="0%"
      x2="100%"
      y2="0%"
    >
      <stop offset="0%" stopColor="#2563eb" />
      <stop offset="100%" stopColor="#8b5cf6" />
    </linearGradient>

    <linearGradient
      id="gradientAreaAnalytics"
      x1="0%"
      y1="0%"
      x2="0%"
      y2="100%"
    >
      <stop offset="0%" stopColor="#3b82f6" />
      <stop offset="100%" stopColor="transparent" />
    </linearGradient>
  </defs>

</svg>
      </div>

    </div>

  </div>

  ) : feature.title === "Team Collaboration" ? (

  <div className="rounded-3xl bg-black/85 backdrop-blur-xl min-h-[400px] p-8 relative flex flex-col overflow-hidden">

    {/* Glow Overlay */}
    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none" />

    {/* Header */}
    <div className="relative z-10 flex items-center gap-4 mb-1">

     <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500/30 via-purple-500/20 to-pink-500/25 border border-purple-400/25 flex items-center justify-center shadow-[0_0_25px_rgba(168,85,247,0.18)] backdrop-blur-xl">
      <Users2 className="w-9 h-9"
         style={{
              stroke: "url(#icon-gradient)",
            }} />
      </div>

      <h3 className="text-2xl text-white">
        Team Collaboration
      </h3>
    </div>

    {/* Description + Bullets */}
    <div className="relative z-10 pl-[72px] h-[210px]">
      <p className="text-gray-300 leading-relaxed mb-4 text-sm max-w-[240px]">
        Collaborate seamlessly with your team throughout the hiring process.
      </p>

      <ul className="space-y-2.5 mb-6">
        {feature.points?.map((point, i) => (
          <li
            key={i}
            className="flex items-center gap-3 text-gray-300 text-sm"
          >
            <CheckCircle2 className="w-4 h-4 text-purple-400" />
            {point}
          </li>
        ))}
      </ul>
    </div>

    <svg width="0" height="0">
    <defs>
      <linearGradient id="icon-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3b82f6" />
        <stop offset="50%" stopColor="#8b5cf6" />
        <stop offset="100%" stopColor="#ec4899" />
      </linearGradient>
    </defs>
  </svg>

    {/* Bottom Team Activity */}
    <div className="relative z-10 mt-auto pt-6 rounded-2xl border border-white/5 bg-white/[0.02] p-4 h-[165px]">

      <p className="text-[10px] text-gray-500 mb-5">
        Team Activity
      </p>

      <div className="flex items-center">

        {[
          "/avatars/user1.jpg",
          "/avatars/user2.jpg",
          "/avatars/user3.jpg",
          "/avatars/user4.jpg",
          "/avatars/user5.jpg",
        ].map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Member ${i + 1}`}
            className="h-10 w-10 rounded-full object-cover border-1 border-black -ml-2 first:ml-0"
          />
        ))}

        <div className="h-10 w-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-sm text-gray-300 -ml-2">
          +24
        </div>

      </div>

    </div>

  </div>

  ) : feature.title === "Enterprise Security" ? (

  <div className="rounded-3xl bg-black/85 backdrop-blur-xl min-h-[400px] p-8 relative flex flex-col overflow-hidden">

    {/* Glow Overlay */}
    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none" />

    {/* Header */}
    <div className="relative z-10 flex items-center gap-4 mb-1">

      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500/30 via-purple-500/20 to-pink-500/25 border border-purple-400/25 flex items-center justify-center shadow-[0_0_25px_rgba(168,85,247,0.18)] backdrop-blur-xl">
      <ShieldCheck className="w-9 h-9"
         style={{
              stroke: "url(#icon-gradient)",
            }} />
      </div>

      <h3 className="text-2xl text-white">
        Enterprise Security
      </h3>
    </div>

    {/* Description + Bullets */}
    <div className="relative z-10 pl-[72px] h-[210px]">
      <p className="text-gray-300 leading-relaxed mb-4 text-sm max-w-[240px]">
        Bank-grade security to protect your data and candidate privacy.
      </p>

      <ul className="space-y-2.5 mb-6">
        {feature.points?.map((point, i) => (
          <li
            key={i}
            className="flex items-center gap-3 text-gray-300 text-sm"
          >
            <CheckCircle2 className="w-4 h-4 text-purple-400" />
            {point}
          </li>
        ))}
      </ul>
    </div>

    <svg width="0" height="0">
    <defs>
      <linearGradient id="icon-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3b82f6" />
        <stop offset="50%" stopColor="#8b5cf6" />
        <stop offset="100%" stopColor="#ec4899" />
      </linearGradient>
    </defs>
  </svg>

    {/* Bottom Security Status */}
    <div className="relative z-10 mt-auto pt-6 rounded-2xl border border-white/5 bg-white/[0.02] p-4 h-[165px]">

      <p className="text-[10px] text-gray-500 mb-5">
        Security Status
      </p>

      <div className="flex items-center justify-between">

        <p className="text-lg text-emerald-400">
          All Systems Secure
        </p>

        <ShieldCheck
  className="w-12 h-12 text-emerald-400"
  strokeWidth={1.3}
/>

      </div>

    </div>

  </div>

  ) : feature.title === "API Integrations" ? (

  <div className="rounded-3xl bg-black/85 backdrop-blur-xl min-h-[400px] p-8 relative flex flex-col overflow-hidden">

    {/* Glow Overlay */}
    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none" />

    {/* Header */}
    <div className="relative z-10 flex items-center gap-4 mb-1">

      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500/30 via-purple-500/20 to-pink-500/25 border border-purple-400/25 flex items-center justify-center shadow-[0_0_25px_rgba(168,85,247,0.18)] backdrop-blur-xl">
      <Code2 className="w-9 h-9"
         style={{
              stroke: "url(#icon-gradient)",
            }} />
      </div>

      <h3 className="text-2xl text-white">
        API Integrations
      </h3>
    </div>

    {/* Description + Bullets */}
    <div className="relative z-10 pl-[72px] h-[210px]">
      <p className="text-gray-300 leading-relaxed mb-4 text-sm max-w-[240px]">
        Seamlessly integrate with your favorite tools and platforms.
      </p>

      <ul className="space-y-2.5 mb-6">
        {feature.points?.map((point, i) => (
          <li
            key={i}
            className="flex items-center gap-3 text-gray-300 text-sm"
          >
            <CheckCircle2 className="w-4 h-4 text-purple-400" />
            {point}
          </li>
        ))}
      </ul>
    </div>

    <svg width="0" height="0">
    <defs>
      <linearGradient id="icon-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3b82f6" />
        <stop offset="50%" stopColor="#8b5cf6" />
        <stop offset="100%" stopColor="#ec4899" />
      </linearGradient>
    </defs>
  </svg>

    {/* Bottom Connected Apps */}
    <div className="relative z-10 mt-auto pt-6 rounded-2xl border border-white/5 bg-white/[0.02] p-4 h-[165px]">

      <p className="text-[10px] text-gray-500 mb-5">
        Connected Apps
      </p>

      <div className="flex items-center gap-3">

        {[
          "/branding/app-icons/shopify.png",
          "/branding/app-icons/wordpress.png",
          "/branding/app-icons/zapier.png",
          "/branding/app-icons/salesforce.png",
        ].map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`App ${i + 1}`}
            className="h-10 w-10 rounded-full object-cover"
          />
        ))}

        <div className="h-9 w-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-sm text-gray-300">
          +5
        </div>

      </div>

    </div>

  </div>

  ) : index === 8 ? (

  <div className="rounded-3xl bg-black/85 backdrop-blur-xl h-[500px] p-6 relative flex flex-col items-center overflow-hidden">

    {/* Glow Overlay */}
    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none" />

    {/* Center Image */}
    <img
      src="/ai-features.png"
      alt="AI Workflow"
      className="w-full max-w-[400px] object-contain mt-10 -translate-y-10 scale-130 relative z-10"
    />

    {/* Bottom Text */}
    <p className="relative mt-3 z-10 text-center text-2xl font-medium text-white leading-relaxed">
      All features work together
      <br />
      <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 drop-shadow-[0_0_18px_rgba(168,85,247,0.35)] bg-clip-text text-transparent font-semibold">
        with the power of AI
      </span>
    </p>

  </div>

    ) : (

  <div className="rounded-3xl bg-black/80 backdrop-blur-xl min-h-[400px] p-8 flex flex-col justify-between relative overflow-hidden">

    {/* Glow Overlay */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none" />

                  {/* Generic Icon */}
                  <div className="relative z-10 w-14 h-14 rounded-2xl border border-purple-500/30 bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center mb-8 shadow-[0_0_25px_rgba(168,85,247,0.12)]">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 to-purple-500" />
                  </div>

                  {/* Title */}
                  <div className="relative z-10">
                    <h3 className="text-2xl text-white mb-4">
                      {feature.title}
                    </h3>

                    <p className="text-gray-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>

                  {/* Placeholder */}
                  <div className="relative z-10 mt-auto pt-6 rounded-2xl border border-white/5 bg-white/[0.02] h-20" />

                </div>
            )}
            </div>
))}
                </div>

        {/* Bottom CTA Showcase Box */}
        <div className="mt-10 rounded-3xl border border-white/5 backdrop-blur-xl p-8 lg:p-10 relative overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.10),transparent_30%),radial-gradient(circle_at_top_right,rgba(168,85,247,0.12),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(236,72,153,0.08),transparent_30%),linear-gradient(to_bottom_right,#020617,#000000,#140021)]">

          {/* Glow Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.03] via-transparent to-purple-500/[0.04] pointer-events-none" />

          <div className="relative z-10 grid lg:grid-cols-3 gap-10 items-center">

            {/* Left Content */}
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-purple-400 mb-4">
                Built for modern teams
              </p>

              <h3 className="text-4xl text-white leading-tight mb-4">
                Everything you need
                to hire{" "}
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">
                  the best
                </span>
              </h3>

              <p className="text-gray-400 leading-relaxed mb-6 max-w-sm">
                Join hundreds of companies that trust HirePilot AI
                to build exceptional teams.
              </p>

<Link
  href="/demo">
              <button className="rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 px-6 py-3 text-white font-medium shadow-[0_0_25px_rgba(168,85,247,0.18)] hover:scale-105 transition-all duration-300 cursor-pointer">
                Request Demo →
              </button>
              </Link>
            </div>

            {/* Middle Benefits */}
            <div className="space-y-6">

  {[
    {
      title: "Save 85% time on screening",
      desc: "Automate repetitive tasks and focus on what matters.",
      icon: Users,
    },
    {
      title: "Improve hiring quality",
      desc: "AI-powered insights help you make better decisions.",
      icon: BrainCircuit,
    },
    {
      title: "Scale your hiring",
      desc: "From startups to enterprises, we grow with you.",
      icon: Building2,
    },
  ].map((item, i) => {
    const Icon = item.icon as React.ElementType;

    return (
      <div key={i} className="flex items-start gap-4">

        <Icon className="w-10 h-10"
        style = {{
          stroke: "url(#icon-gradient)",
        }} />

        <div>
          <h4 className="text-white text-md mb-1">
            {item.title}
          </h4>

          <p className="text-gray-400 text-sm leading-relaxed">
            {item.desc}
          </p>
        </div>

      </div>
    );
  })}

  <svg width="0" height="0">
    <defs>
      <linearGradient id="icon-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3b82f6" />
        <stop offset="50%" stopColor="#8b5cf6" />
        <stop offset="100%" stopColor="#ec4899" />
      </linearGradient>
    </defs>
  </svg>

</div>



            {/* Right Graphic */}
            <div className="flex justify-center">
              <img
                src="/ai-brain.png"
                alt="AI Brain"
                className="w-full max-w-[400px] object-contain drop-shadow-[0_0_35px_rgba(168,85,247,0.22)] scale-160"
              />
            </div>

          </div>

        </div>

      </div>
      </section>
    <section className="relative -mt-32 py-10 px-6 lg:px-20 overflow-hidden">

  {/* Background Glow */}
  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/[0.02] via-transparent to-purple-500/[0.03] pointer-events-none" />

  <div className="relative z-10 max-w-7xl mx-auto text-center">

    <p className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-8">
      Trusted by 500+ companies worldwide
    </p>

    <div className="relative overflow-hidden mt-8">

  {/* Left Fade */}
  <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-black to-transparent z-10" />

  {/* Right Fade */}
  <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-black to-transparent z-10" />

  {/* Moving Carousel */}
  <div className="flex min-w-max gap-28 animate-[scroll_25s_linear_infinite]">

    {[
  "/branding/logos/airbnb.png",
  "/branding/logos/deel.png",
  "/branding/logos/groww.png",
  "/branding/logos/meta.png",
  "/branding/logos/slack.png",

  "/branding/logos/airbnb.png",
  "/branding/logos/deel.png",
  "/branding/logos/groww.png",
  "/branding/logos/meta.png",
  "/branding/logos/slack.png",

  "/branding/logos/airbnb.png",
  "/branding/logos/deel.png",
  "/branding/logos/groww.png",
  "/branding/logos/meta.png",
  "/branding/logos/slack.png",
].map((logo, i) => (
      <img
  key={i}
  src={logo}
  alt="Company Logo"
  className="h-14 max-w-[150px] scale-150 object-contain transition-all duration-500 shrink-0"
/>
    ))}

  </div>

</div>

  </div>

</section>

</>

    
  );
}