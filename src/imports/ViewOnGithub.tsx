import svgPaths from "./svg-wh7kt0ix9c";

function GithubMark() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="github-mark 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_3_718)" id="github-mark 1">
          <path clipRule="evenodd" d={svgPaths.p662a000} fill="white" fillRule="evenodd" id="Vector" className="group-hover:fill-[#4B9AE9] transition-colors" />
        </g>
        <defs>
          <clipPath id="clip0_3_718">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

export default function ViewOnGithub() {
  return (
    <div className="bg-[#1a1f29] relative rounded-[8px] size-full group" data-name="view-on-github">
      <div aria-hidden="true" className="absolute border border-[#30363c] group-hover:border-[#4B9AE9] border-solid inset-0 pointer-events-none rounded-[8px] transition-colors" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[10px] items-center justify-center px-[24px] py-[12px] relative size-full">
          <GithubMark />
          <p className="font-['Google_Sans_Code:SemiBold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[14px] text-center text-nowrap text-white group-hover:text-[#4B9AE9] transition-colors">View on GitHub</p>
        </div>
      </div>
    </div>
  );
}