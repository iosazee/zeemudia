import Image from "next/image";

function BrowserMockup() {
  return (
    <div className="bg-slate-800 border border-slate-700 rounded-[10px] overflow-hidden">
      {/* Title bar */}
      <div className="h-6 bg-slate-900 flex items-center px-2.5 gap-1.5">
        <div className="w-2 h-2 rounded-full bg-red-500" />
        <div className="w-2 h-2 rounded-full bg-amber-400" />
        <div className="w-2 h-2 rounded-full bg-green-500" />
        <span className="ml-3 text-[9px] text-slate-500">brianni.co</span>
      </div>
      {/* Body */}
      <div className="relative w-full h-[200px] overflow-hidden">
        <Image
          src="/projects/brianni.png"
          alt="Brianni - Zero-knowledge encrypted storage platform"
          fill
          className="object-cover object-top"
          sizes="(max-width: 768px) 100vw, 60vw"
        />
      </div>
    </div>
  );
}

function PhoneMockup({ platform }: { platform: "ios" | "android" }) {
  const isIOS = platform === "ios";

  return (
    <div
      className={`w-[72px] h-[140px] bg-slate-800 border-2 border-slate-700 overflow-hidden ${
        isIOS ? "rounded-[14px]" : "rounded-[10px]"
      }`}
    >
      {/* Top bar */}
      {isIOS ? (
        <div className="h-4 bg-slate-900 flex justify-center items-center">
          <div className="w-6 h-1.5 bg-slate-700 rounded-full" />
        </div>
      ) : (
        <div className="h-3 bg-slate-900" />
      )}
      {/* Body */}
      <div className="p-2 space-y-2">
        <div
          className={`h-[6px] w-3/4 rounded ${
            isIOS ? "bg-violet-500/30" : "bg-emerald-500/30"
          }`}
        />
        <div className="h-[5px] w-1/2 bg-white/5 rounded" />
        <div className="h-[5px] w-2/3 bg-white/5 rounded" />
        <div className="flex gap-1 mt-2">
          <div
            className={`flex-1 h-8 rounded border ${
              isIOS
                ? "bg-violet-500/10 border-violet-500/20"
                : "bg-emerald-500/10 border-emerald-500/20"
            }`}
          />
          <div
            className={`flex-1 h-8 rounded border ${
              isIOS
                ? "bg-violet-500/10 border-violet-500/20"
                : "bg-emerald-500/10 border-emerald-500/20"
            }`}
          />
        </div>
        <div
          className={`h-6 rounded border ${
            isIOS
              ? "bg-violet-500/[0.08] border-violet-500/15"
              : "bg-emerald-500/[0.08] border-emerald-500/15"
          }`}
        />
      </div>
    </div>
  );
}

export function DeviceMockups() {
  return (
    <div className="flex flex-col md:flex-row gap-6 items-end">
      {/* Browser */}
      <div className="md:basis-3/5">
        <p className="text-[10px] uppercase tracking-[0.15em] text-slate-500 font-semibold mb-2">
          Web Application
        </p>
        <BrowserMockup />
      </div>
      {/* Phones */}
      <div className="md:basis-2/5 flex gap-3 justify-center">
        <div className="text-center">
          <p className="text-[10px] uppercase tracking-[0.15em] text-slate-500 font-semibold mb-2">
            iOS
          </p>
          <PhoneMockup platform="ios" />
        </div>
        <div className="text-center">
          <p className="text-[10px] uppercase tracking-[0.15em] text-slate-500 font-semibold mb-2">
            Android
          </p>
          <PhoneMockup platform="android" />
        </div>
      </div>
    </div>
  );
}
