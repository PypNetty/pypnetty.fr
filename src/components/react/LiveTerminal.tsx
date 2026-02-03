import React, { useEffect, useMemo, useState } from "react";

export default function LiveTerminal() {
  const sequence = useMemo(
    () => [
      {
        text: "$ pypctl check --node core-02 --watch",
        type: "command",
        delay: 800,
      },
      {
        text: "[OK] Traefik Ingress: Routing converged",
        type: "success",
        delay: 500,
      },
      { text: "[OK] Cilium: eBPF Maps loaded", type: "success", delay: 500 },
      { text: "...", type: "wait", delay: 1500 },
      {
        text: "[INFO] Kubelet: GC Triggered (Threshold > 85%)",
        type: "info",
        delay: 800,
      },
      { text: "[INFO] Evicting BestEffort pods...", type: "info", delay: 1200 },
      {
        text: "[AUTO] Recovery successful (-4.2GB released)",
        type: "magic",
        delay: 1000,
      },
      { text: "_ System stable.", type: "success", delay: 500 },
    ],
    [],
  );
  const [lines, setLines] = useState<typeof sequence>([]);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let cancelled = false;
    const timeouts: number[] = [];

    const run = (index: number) => {
      if (cancelled) return;
      if (index >= sequence.length) {
        setDone(true);
        return;
      }

      const timeoutId = window.setTimeout(() => {
        if (cancelled) return;
        setLines((prev) => [...prev, sequence[index]]);
        run(index + 1);
      }, sequence[index].delay);

      timeouts.push(timeoutId);
    };

    setLines([]);
    setDone(false);
    run(0);

    return () => {
      cancelled = true;
      timeouts.forEach((id) => window.clearTimeout(id));
    };
  }, [sequence]);

  const renderLine = (item: (typeof sequence)[number], idx: number) => {
    if (item.type === "command") {
      return (
        <div key={idx} className="mb-2 font-mono tracking-tight">
          <span className="text-[#00D9A3] mr-2">➜</span>
          <span className="text-white">{item.text}</span>
        </div>
      );
    }

    if (item.type === "success") {
      return (
        <div key={idx} className="mb-2 font-mono tracking-tight">
          <span className="text-green-500 font-bold mr-2">✓</span>
          <span className="text-green-400">{item.text}</span>
        </div>
      );
    }

    if (item.type === "error") {
      return (
        <div key={idx} className="mb-2 font-mono tracking-tight">
          <span className="text-red-500 font-bold mr-2">✗</span>
          <span className="text-red-500 font-bold animate-pulse">
            {item.text}
          </span>
        </div>
      );
    }

    if (item.type === "info") {
      return (
        <div key={idx} className="mb-2 font-mono tracking-tight">
          <span className="text-blue-400 font-bold mr-2">ℹ</span>
          <span className="text-blue-300">{item.text}</span>
        </div>
      );
    }

    if (item.type === "magic") {
      return (
        <div key={idx} className="mb-2 font-mono tracking-tight">
          <span className="text-purple-400 font-bold mr-2">⚡</span>
          <span className="text-purple-400">{item.text}</span>
        </div>
      );
    }

    return (
      <div key={idx} className="mb-2 font-mono tracking-tight">
        <span className="text-gray-600 animate-pulse">
          ... scanning metrics ...
        </span>
      </div>
    );
  };

  return (
    <div className="bg-[#0d1117] rounded-lg border border-gray-800 p-4 font-mono text-xs md:text-sm shadow-2xl h-full min-h-[320px]">
      <div className="flex gap-2 mb-4 border-b border-gray-800 pb-2">
        <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
        <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
        <span className="ml-2 text-gray-600">zsh — pypctl events</span>
      </div>

      <div className="space-y-1">
        {lines.length === 0 ? (
          <div className="flex items-center gap-2 text-gray-500">
            <span>Initializing pypctl daemon...</span>
          </div>
        ) : (
          lines.map((item, idx) => renderLine(item, idx))
        )}

        {done && (
          <div className="mt-2">
            <span className="text-[#00D9A3] mr-2">➜</span>
            <span className="text-white inline-block w-2 h-4 bg-gray-500 align-middle animate-pulse"></span>
          </div>
        )}
      </div>
    </div>
  );
}
