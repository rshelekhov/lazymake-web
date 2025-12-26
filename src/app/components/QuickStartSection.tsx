import QuickStartTabs from './QuickStartTabs';
import svgPaths from '../../imports/svg-h1tv6wmle8';

export default function QuickStartSection() {
  return (
    <section id="quick-start" className="relative pt-[72px]">
      {/* Background gradient - full width */}
      <div className="absolute inset-x-0 bg-gradient-to-b from-[#1f2430] to-[#1a1f29] h-[360px] top-0 z-0" />
      
      {/* Content container */}
      <div className="relative max-w-[1440px] mx-auto px-[260px] z-10">
        {/* Title */}
        <h2 className="font-['Roboto_Mono',sans-serif] font-semibold leading-[1.3] mb-[12px] not-italic text-[44px] text-nowrap text-white">
          Quick Start
        </h2>
        
        {/* Description */}
        <p className="font-['Roboto_Mono',sans-serif] leading-[24px] mb-[48px] not-italic text-[#8b939e] text-[14px] text-nowrap">
          Get up and running in seconds. No configuration needed.
        </p>
        
        {/* Tabs */}
        <div className="mb-[32px]">
          <QuickStartTabs />
        </div>
        
        {/* View on GitHub Button */}
        <a 
          href="https://github.com/rshelekhov/lazymake" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group/githubBtn inline-flex bg-[#1a1f29] content-stretch gap-[10px] h-[44px] items-center justify-center px-[24px] py-[12px] relative rounded-[8px] mb-[72px]"
        >
          <div aria-hidden="true" className="absolute border border-[#30363c] border-solid inset-0 pointer-events-none rounded-[8px] group-hover/githubBtn:border-[#4B9AE9] transition-colors" />
          <div className="relative shrink-0 size-[16px]" data-name="github-mark 1">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
              <g clipPath="url(#clip0_3_718)" id="github-mark 1">
                <path clipRule="evenodd" d={svgPaths.p662a000} fill="white" fillRule="evenodd" id="Vector" className="group-hover/githubBtn:fill-[#4B9AE9] transition-colors" />
              </g>
              <defs>
                <clipPath id="clip0_3_718">
                  <rect fill="white" height="16" width="16" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <p className="font-['Roboto_Mono',sans-serif] font-semibold leading-[1.4] not-italic relative shrink-0 text-[14px] text-center text-nowrap text-white group-hover/githubBtn:text-[#4B9AE9] transition-colors">View on GitHub</p>
        </a>
      </div>
    </section>
  );
}