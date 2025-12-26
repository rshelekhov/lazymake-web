function Group() {
  return (
    <div className="absolute contents left-[382px] not-italic text-nowrap top-[72px]">
      <p className="absolute font-['Roboto_Mono',sans-serif] font-medium leading-[24px] left-[382px] text-[16px] text-white top-[72px]">Resources</p>
      <p className="absolute font-['Roboto_Mono',sans-serif] leading-[21px] left-[382px] text-[#8b939e] text-[14px] top-[108px]">Github Repository</p>
      <p className="absolute font-['Roboto_Mono',sans-serif] leading-[21px] left-[382px] text-[#8b939e] text-[14px] top-[141px]">Documentation</p>
      <p className="absolute font-['Roboto_Mono',sans-serif] leading-[21px] left-[382px] text-[#8b939e] text-[14px] top-[174px]">Releases</p>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-[621px] not-italic text-nowrap top-[72px]">
      <p className="absolute font-['Roboto_Mono',sans-serif] font-medium leading-[24px] left-[621px] text-[16px] text-white top-[72px]">Community</p>
      <p className="absolute font-['Roboto_Mono',sans-serif] leading-[21px] left-[621px] text-[#8b939e] text-[14px] top-[108px]">Report Issues</p>
      <p className="absolute font-['Roboto_Mono',sans-serif] leading-[21px] left-[621px] text-[#8b939e] text-[14px] top-[141px]">Contributing</p>
      <p className="absolute font-['Roboto_Mono',sans-serif] leading-[21px] left-[621px] text-[#8b939e] text-[14px] top-[174px]">Discussions</p>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-[827px] not-italic text-nowrap top-[72px]">
      <p className="absolute font-['Roboto_Mono',sans-serif] font-medium leading-[24px] left-[827px] text-[16px] text-white top-[72px]">Legal</p>
      <p className="absolute font-['Roboto_Mono',sans-serif] leading-[21px] left-[827px] text-[#8b939e] text-[14px] top-[108px]">MIT License</p>
      <p className="absolute font-['Roboto_Mono',sans-serif] leading-[21px] left-[827px] text-[#8b939e] text-[14px] top-[141px]">Author</p>
    </div>
  );
}

export default function FooterLinksSection() {
  return (
    <div className="relative size-full">
      <p className="absolute font-['Roboto_Mono',sans-serif] font-medium leading-[24px] left-0 not-italic text-[16px] text-nowrap text-white top-[72px]">Lazymake</p>
      <p className="absolute font-['Roboto_Mono',sans-serif] leading-[22px] left-0 not-italic text-[#8b939e] text-[14px] top-[108px] w-[298px]">
        A beautiful TUI for browsing
        <br aria-hidden="true" />
        and executing Makefile targets.
      </p>
      <Group />
      <Group1 />
      <Group2 />
      <p className="absolute font-['Roboto_Mono',sans-serif] leading-[21px] left-0 not-italic text-[#8b939e] text-[14px] text-nowrap top-[262px]">© 2025 Lazymake. Open source under the MIT License.</p>
      <p className="absolute font-['Roboto_Mono',sans-serif] font-normal leading-[22px] left-0 not-italic text-[14px] text-white top-[164px] w-[298px]">
        <span className="text-[#8b939e]">{`Made with `}</span>
      </p>
      <div className="absolute h-0 left-0 top-0 w-[800px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 800 1">
            <line id="Line 5" stroke="var(--stroke-0, #30363C)" x2="800" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="absolute h-0 left-0 top-0 w-[920px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 920 1">
            <line id="Line 1" stroke="var(--stroke-0, #30363C)" x2="920" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}