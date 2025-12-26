import svgPaths from "./svg-e3zdov1bne";

function Copy() {
  return (
    <div className="absolute left-[886px] size-[18px] top-[15px]" data-name="copy-01">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_3_721)" id="copy-01">
          <path d={svgPaths.p13c32500} id="Icon" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
        <defs>
          <clipPath id="clip0_3_721">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex font-['Roboto_Mono',sans-serif] gap-[24px] items-center leading-[24px] left-[16px] not-italic text-[14px] text-nowrap top-[12px]">
      <p className="relative shrink-0 text-white">Homebrew</p>
      <p className="relative shrink-0 text-[#8b939e]">Go Install</p>
      <p className="relative shrink-0 text-[#8b939e]">From Source</p>
    </div>
  );
}

export default function HomebrewTabStatic() {
  return (
    <div className="relative size-full">
      <div className="absolute bg-[#1a1f29] border border-[#30363c] border-solid h-[248px] left-0 rounded-[8px] top-0 w-[920px]" />
      <div className="absolute h-[48px] left-0 top-0 w-[920px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 920 48">
          <path d={svgPaths.peadefd2} fill="var(--fill-0, #1F2430)" id="Rectangle 8" stroke="var(--stroke-0, #30363C)" />
        </svg>
      </div>
      <Copy />
      <Frame />
      <div className="absolute font-['Roboto_Mono',sans-serif] leading-[24px] left-[16px] not-italic text-[#8b939e] text-[14px] text-nowrap top-[64px]">
        <p className="mb-0">1</p>
        <p className="mb-0">2</p>
        <p className="mb-0">3</p>
        <p className="mb-0">4</p>
        <p className="mb-0">5</p>
        <p className="mb-0">6</p>
        <p>7</p>
      </div>
      <div className="absolute font-['Roboto_Mono',sans-serif] font-normal leading-[0] left-[41px] text-[#a5d6ff] text-[0px] text-nowrap top-[64px]">
        <p className="font-['Roboto_Mono',sans-serif] leading-[24px] mb-0 not-italic text-[14px]">
          <span className="text-[#ffa657]">brew</span>
          <span>{` install rshelekhov/tap/lazymake`}</span>
        </p>
        <p className="leading-[24px] mb-0 text-[14px]">&nbsp;</p>
        <p className="font-['Roboto_Mono',sans-serif] leading-[24px] mb-0 not-italic text-[#8b949e] text-[14px]"># Run in any directory with a Makefile or in the root folder of your project</p>
        <p className="font-['Roboto_Mono',sans-serif] leading-[24px] mb-0 not-italic text-[#ffa657] text-[14px]">lazymake</p>
        <p className="leading-[24px] mb-0 text-[14px]">&nbsp;</p>
        <p className="font-['Roboto_Mono',sans-serif] leading-[24px] mb-0 not-italic text-[#8b949e] text-[14px]">{`# Or specify a different Makefile `}</p>
        <p className="font-['Roboto_Mono',sans-serif] leading-[24px] not-italic text-[14px]">
          <span className="text-[#ffa657]">lazymake</span>
          <span>{` -f path/to/Makefile`}</span>
        </p>
      </div>
    </div>
  );
}