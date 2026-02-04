import React, { useState, useEffect } from "react";
import { GitCommit, Activity, Server, ShieldCheck } from "lucide-react";

export default function GitOpsPipeline() {
  const [activeStep, setActiveStep] = useState(0);

  // Petite boucle d'animation pour montrer le flux continu
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4);
    }, 2000); // Change toutes les 2 secondes
    return () => clearInterval(timer);
  }, []);

  const steps = [
    {
      id: 0,
      title: "DEFINE",
      subtitle: "Git Repository",
      desc: "Infrastructure as Code. Tout changement commence par un commit.",
      icon: <GitCommit size={24} />,
      color: "text-blue-400",
      borderColor: "border-blue-500/50",
    },
    {
      id: 1,
      title: "RECONCILE",
      subtitle: "Drift Detection",
      desc: "Le contrôleur compare l'état désiré (Git) vs l'état actuel.",
      icon: <Activity size={24} />,
      color: "text-yellow-400",
      borderColor: "border-yellow-500/50",
    },
    {
      id: 2,
      title: "APPLY",
      subtitle: "Talos API",
      desc: "Convergence atomique. L'OS et les manifests sont mis à jour.",
      icon: <Server size={24} />,
      color: "text-[#00D9A3]",
      borderColor: "border-[#00D9A3]/50",
    },
    {
      id: 3,
      title: "HEAL",
      subtitle: "Self-Healing",
      desc: "Boucle de contrôle continue. Si un nœud casse, il est remplacé.",
      icon: <ShieldCheck size={24} />,
      color: "text-purple-400",
      borderColor: "border-purple-500/50",
    },
  ];

  return (
    <div className="w-full py-10">
      {/* Barre de progression visuelle */}
      <div className="hidden md:block absolute top-[4.5rem] left-0 w-full h-0.5 bg-gray-800 z-0"></div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative z-10">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`
              relative p-6 rounded-xl border transition-all duration-500 group
              ${
                activeStep === index
                  ? `bg-[#0d1117] ${step.borderColor} border shadow-[0_0_30px_rgba(0,0,0,0.5)] scale-105`
                  : "bg-[#0d1117]/40 border-transparent hover:bg-[#0d1117] hover:border-gray-800"
              }
            `}
          >
            {/* Step Number Badge */}
            <div
              className={`
                w-10 h-10 rounded-full border-2 flex items-center justify-center font-mono font-bold text-sm mb-4 bg-[#0b0d11] transition-colors duration-500
                ${activeStep === index ? `${step.color} ${step.borderColor} shadow-[0_0_15px_currentColor]` : "text-gray-600 border-gray-800"}
            `}
            >
              0{index + 1}
            </div>

            <h3
              className={`font-mono font-bold text-lg mb-1 ${activeStep === index ? "text-white" : "text-gray-400"}`}
            >
              {step.title}
            </h3>

            <div className="text-[10px] font-bold uppercase tracking-widest text-gray-600 mb-3 group-hover:text-gray-400 transition-colors">
              {step.subtitle}
            </div>

            <p className="text-xs text-gray-500 leading-relaxed group-hover:text-gray-300 transition-colors">
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
