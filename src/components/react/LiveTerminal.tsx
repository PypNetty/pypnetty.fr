import React from "react";

export default function LiveTerminal() {
  return (
    <div className="bg-[#0d1117] rounded-lg border border-gray-800 p-4 font-mono text-xs md:text-sm shadow-2xl h-full min-h-[320px]">
      <div className="flex gap-2 mb-4 border-b border-gray-800 pb-2">
        <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
        <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
        <span className="ml-2 text-gray-600">zsh — pypctl events</span>
      </div>

      <div className="space-y-3">
        <div className="flex gap-2">
          <span className="text-[#00D9A3] font-bold">$</span>
          <span className="text-gray-300">pypctl check --node core-02</span>
        </div>

        <div className="pt-2 text-green-400">
          <span className="text-green-500 font-bold">[OK]</span> Traefik
          Ingress: Routing converged
        </div>

        <div className="text-red-400 animate-pulse">
          <span className="text-red-500 font-bold">[CRIT]</span> Node-02:
          DiskPressure detected (&gt; 85%)
        </div>

        <div className="text-yellow-400">
          <span className="text-blue-400 font-bold">[INFO]</span> Kubelet: GC
          Triggered...
        </div>

        <div className="text-gray-400">
          <span className="text-blue-400 font-bold">[INFO]</span> Evicting
          BestEffort pods
        </div>

        <div className="text-purple-400">
          <span className="text-purple-500 font-bold">[AUTO]</span> Recovery
          successful.
        </div>

        <div className="text-gray-500 mt-2">
          <span className="animate-pulse">_</span> System stable.
        </div>
      </div>
    </div>
  );
}
