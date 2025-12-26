export default function Footer() {
  return (
    <footer className="relative pt-[72px] pb-[48px] px-[260px]">
      {/* Horizontal line */}
      <div className="relative h-0 w-[920px] mb-[72px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 920 1">
            <line stroke="#30363C" x2="920" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>

      {/* Main footer content */}
      <div className="grid grid-cols-[298px_1fr] gap-[84px]">
        {/* Left column - About Lazymake */}
        <div>
          <p className="font-['Google_Sans_Code:Medium',sans-serif] leading-[24px] not-italic text-[16px] text-nowrap text-white mb-[12px]">
            Lazymake
          </p>
          <p className="font-['Google_Sans_Code:Regular',sans-serif] leading-[22px] not-italic text-[#8b939e] text-[14px] mb-[24px]">
            A beautiful TUI for browsing
            <br />
            and executing Makefile targets.
          </p>
          <p className="font-['Google_Sans_Code:Regular',sans-serif] font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic text-[14px]">
            <span className="text-[#8b939e]">Made with </span>
            <span className="text-[#f43]">❤</span>
            <span className="text-[#8b939e]">️ using </span>
            <a 
              href="https://github.com/charmbracelet/bubbletea" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[#8b939e] hover:text-[#4B9AE9] transition-colors"
            >
              Bubble Tea
            </a>
            <span className="text-[#8b939e]">, </span>
            <a 
              href="https://github.com/charmbracelet/bubbles" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[#8b939e] hover:text-[#4B9AE9] transition-colors"
            >
              Bubbles
            </a>
            <span className="text-[#8b939e]">, </span>
            <a 
              href="https://github.com/charmbracelet/lipgloss" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[#8b939e] hover:text-[#4B9AE9] transition-colors"
            >
              Lipgloss
            </a>
            <span className="text-[#8b939e]">, </span>
            <a 
              href="https://github.com/alecthomas/chroma" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[#8b939e] hover:text-[#4B9AE9] transition-colors"
            >
              Chroma
            </a>
            <span className="text-[#8b939e]"> and </span>
            <a 
              href="https://github.com/spf13/cobra" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[#8b939e] hover:text-[#4B9AE9] transition-colors"
            >
              Cobra
            </a>
            <span className="text-[#8b939e]">.</span>
          </p>
        </div>

        {/* Right columns - Links */}
        <div className="grid grid-cols-3 gap-[48px]">
          {/* Resources */}
          <div>
            <p className="font-['Google_Sans_Code:Medium',sans-serif] leading-[24px] not-italic text-[16px] text-nowrap text-white mb-[12px]">
              Resources
            </p>
            <div className="flex flex-col gap-[12px]">
              <a 
                href="https://github.com/rshelekhov/lazymake" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="font-['Google_Sans_Code:Regular',sans-serif] leading-[21px] not-italic text-[#8b939e] text-[14px] text-nowrap hover:text-[#4B9AE9] transition-colors"
              >
                Github Repository
              </a>
              <a 
                href="https://github.com/rshelekhov/lazymake/tree/main/docs" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="font-['Google_Sans_Code:Regular',sans-serif] leading-[21px] not-italic text-[#8b939e] text-[14px] text-nowrap hover:text-[#4B9AE9] transition-colors"
              >
                Documentation
              </a>
              <a 
                href="https://github.com/rshelekhov/lazymake/releases" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="font-['Google_Sans_Code:Regular',sans-serif] leading-[21px] not-italic text-[#8b939e] text-[14px] text-nowrap hover:text-[#4B9AE9] transition-colors"
              >
                Releases
              </a>
            </div>
          </div>

          {/* Community */}
          <div>
            <p className="font-['Google_Sans_Code:Medium',sans-serif] leading-[24px] not-italic text-[16px] text-nowrap text-white mb-[12px]">
              Community
            </p>
            <div className="flex flex-col gap-[12px]">
              <a 
                href="https://github.com/rshelekhov/lazymake/issues" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="font-['Google_Sans_Code:Regular',sans-serif] leading-[21px] not-italic text-[#8b939e] text-[14px] text-nowrap hover:text-[#4B9AE9] transition-colors"
              >
                Report Issues
              </a>
              <a 
                href="https://github.com/rshelekhov/lazymake/blob/main/CONTRIBUTING.md" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="font-['Google_Sans_Code:Regular',sans-serif] leading-[21px] not-italic text-[#8b939e] text-[14px] text-nowrap hover:text-[#4B9AE9] transition-colors"
              >
                Contributing
              </a>
              <a 
                href="https://github.com/rshelekhov/lazymake/discussions" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="font-['Google_Sans_Code:Regular',sans-serif] leading-[21px] not-italic text-[#8b939e] text-[14px] text-nowrap hover:text-[#4B9AE9] transition-colors"
              >
                Discussions
              </a>
            </div>
          </div>

          {/* Legal */}
          <div>
            <p className="font-['Google_Sans_Code:Medium',sans-serif] leading-[24px] not-italic text-[16px] text-nowrap text-white mb-[12px]">
              Legal
            </p>
            <div className="flex flex-col gap-[12px]">
              <a 
                href="https://github.com/rshelekhov/lazymake/blob/main/LICENSE" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="font-['Google_Sans_Code:Regular',sans-serif] leading-[21px] not-italic text-[#8b939e] text-[14px] text-nowrap hover:text-[#4B9AE9] transition-colors"
              >
                MIT License
              </a>
              <a 
                href="https://github.com/rshelekhov" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="font-['Google_Sans_Code:Regular',sans-serif] leading-[21px] not-italic text-[#8b939e] text-[14px] text-nowrap hover:text-[#4B9AE9] transition-colors"
              >
                Author
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <p className="font-['Google_Sans_Code:Regular',sans-serif] leading-[21px] not-italic text-[#8b939e] text-[14px] text-nowrap mt-[66px]">
        © 2025 Lazymake. Open source under the MIT License.
      </p>
    </footer>
  );
}