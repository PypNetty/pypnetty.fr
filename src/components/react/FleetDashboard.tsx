import React from "react";

// On garde la logique React pour le dynamisme
export default function FleetDashboard() {
  const clusters = [
    {
      name: "CORE-01",
      role: "Production",
      status: "online",
      cpu: "14%",
      ram: "12GB",
      pods: 42,
    },
    {
      name: "R&D-UNIT",
      role: "Experimental",
      status: "online",
      cpu: "85%",
      ram: "6GB",
      pods: 18,
    },
  ];

  return (
    <div className="bg-[#1F2937]/50 border border-gray-800 rounded-xl p-6 backdrop-blur-sm shadow-2xl">
      <div className="flex justify-between items-end mb-6">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00D9A3] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00D9A3]"></span>
            </span>
            <h2 className="text-sm font-mono font-bold text-[#00D9A3] tracking-widest uppercase">
              Live Telemetry
            </h2>
          </div>
          <p className="text-gray-400 text-xs font-mono">
            Hybrid Control Plane • Talos Linux v1.8
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {clusters.map((cluster, idx) => (
          <div
            key={idx}
            className="p-4 rounded-lg border border-gray-700 bg-gray-900/80 hover:border-[#00D9A3]/50 transition-colors"
          >
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3 className="text-white font-bold font-mono">
                  {cluster.name}
                </h3>
                <span className="text-[10px] text-gray-500 uppercase tracking-wider">
                  {cluster.role}
                </span>
              </div>
              <div className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-green-500/10 text-green-400 border border-green-500/20">
                {cluster.status}
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2 text-center">
              <div className="bg-black/30 rounded p-2">
                <div className="text-gray-500 text-[10px] mb-1">CPU</div>
                <div className="text-white font-mono text-sm">
                  {cluster.cpu}
                </div>
              </div>
              <div className="bg-black/30 rounded p-2">
                <div className="text-gray-500 text-[10px] mb-1">RAM</div>
                <div className="text-white font-mono text-sm">
                  {cluster.ram}
                </div>
              </div>
              <div className="bg-black/30 rounded p-2">
                <div className="text-gray-500 text-[10px] mb-1">PODS</div>
                <div className="text-[#00D9A3] font-mono text-sm">
                  {cluster.pods}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 pt-3 border-t border-gray-700/50 flex justify-between items-center text-[10px] text-gray-600 font-mono">
        <span>Source: Prometheus Exporter</span>
        <span>Sync: Live</span>
      </div>
    </div>
  );
}
