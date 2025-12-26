import { useState } from 'react';
import GoInstallTab from '../../imports/GoInstallTab';
import FromSourceTab from '../../imports/FromSourceTab';
import svgPaths from '../../imports/svg-e3zdov1bne';

type TabType = 'homebrew' | 'go-install' | 'from-source';

function HomebrewTab({ activeTab, onTabChange }: { activeTab: string; onTabChange: (tab: string) => void }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const text = `brew install rshelekhov/tap/lazymake

# Run in any directory with a Makefile or in the root folder of your project
lazymake

# Or specify a different Makefile
lazymake -f path/to/Makefile`;
    
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      // Fallback method for older browsers or restricted contexts
      const textArea = document.createElement('textarea');
      textArea.value = text;
      textArea.style.position = 'fixed';
      textArea.style.left = '-999999px';
      document.body.appendChild(textArea);
      textArea.select();
      try {
        document.execCommand('copy');
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (e) {
        console.error('Failed to copy text: ', e);
      }
      document.body.removeChild(textArea);
    }
  };

  return (
    <div className="relative size-full">
      <div className="absolute bg-[#1a1f29] border border-[#30363c] border-solid h-[248px] left-0 rounded-[8px] top-0 w-[920px]" />
      <div className="absolute h-[48px] left-0 top-0 w-[920px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 920 48">
          <path d={svgPaths.peadefd2} fill="var(--fill-0, #1F2430)" id="Rectangle 8" stroke="var(--stroke-0, #30363C)" />
        </svg>
      </div>
      <button
        onClick={handleCopy}
        className="absolute left-[886px] size-[18px] top-[15px] cursor-pointer group/copy transition-opacity"
        data-name="copy-01"
        aria-label="Copy to clipboard"
      >
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
          <g clipPath="url(#clip0_3_721_homebrew)" id="copy-01">
            <path 
              d={svgPaths.p13c32500} 
              id="Icon" 
              stroke="white"
              className="group-hover/copy:stroke-[#58A6FF] transition-colors"
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="1.5" 
            />
          </g>
          <defs>
            <clipPath id="clip0_3_721_homebrew">
              <rect fill="white" height="18" width="18" />
            </clipPath>
          </defs>
        </svg>
      </button>
      <div className="absolute content-stretch flex font-['Google_Sans_Code:Regular',sans-serif] gap-[24px] items-center leading-[24px] left-[16px] not-italic text-[14px] text-nowrap top-[12px]">
        <button
          onClick={() => onTabChange('homebrew')}
          className={`relative shrink-0 transition-colors text-[14px] leading-[24px] ${
            activeTab === 'homebrew' ? 'text-white' : 'text-[#8b939e] hover:text-[#4B9AE9]'
          }`}
        >
          Homebrew
        </button>
        <button
          onClick={() => onTabChange('go-install')}
          className={`relative shrink-0 transition-colors text-[14px] leading-[24px] ${
            activeTab === 'go-install' ? 'text-white' : 'text-[#8b939e] hover:text-[#4B9AE9]'
          }`}
        >
          Go Install
        </button>
        <button
          onClick={() => onTabChange('from-source')}
          className={`relative shrink-0 transition-colors text-[14px] leading-[24px] ${
            activeTab === 'from-source' ? 'text-white' : 'text-[#8b939e] hover:text-[#4B9AE9]'
          }`}
        >
          From Source
        </button>
      </div>
      <div className="absolute font-['Google_Sans_Code:Regular',sans-serif] leading-[24px] left-[16px] not-italic text-[#8b939e] text-[14px] text-nowrap top-[64px]">
        <p className="mb-0">1</p>
        <p className="mb-0">2</p>
        <p className="mb-0">3</p>
        <p className="mb-0">4</p>
        <p className="mb-0">5</p>
        <p className="mb-0">6</p>
        <p>7</p>
      </div>
      <div className="absolute font-['Google_Sans_Code:Regular',sans-serif] leading-[24px] left-[41px] text-[#a5d6ff] text-[14px] text-nowrap top-[64px]">
        <p className="mb-0 not-italic">
          <span className="text-[#ffa657]">brew</span>
          <span>{` install rshelekhov/tap/lazymake`}</span>
        </p>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0 not-italic text-[#8b949e]"># Run in any directory with a Makefile or in the root folder of your project</p>
        <p className="mb-0 not-italic text-[#ffa657]">lazymake</p>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0 not-italic text-[#8b949e]">{`# Or specify a different Makefile `}</p>
        <p className="not-italic">
          <span className="text-[#ffa657]">lazymake</span>
          <span>{` -f path/to/Makefile`}</span>
        </p>
      </div>
    </div>
  );
}

export default function QuickStartTabs() {
  const [activeTab, setActiveTab] = useState<TabType>('homebrew');

  return (
    <div className="relative w-[920px]">
      {/* Tab Content */}
      <div className="relative">
        {activeTab === 'homebrew' && (
          <div className="h-[248px]">
            <HomebrewTab activeTab={activeTab} onTabChange={(tab) => setActiveTab(tab as TabType)} />
          </div>
        )}
        {activeTab === 'go-install' && (
          <div className="h-[200px]">
            <GoInstallTab activeTab={activeTab} onTabChange={(tab) => setActiveTab(tab as TabType)} />
          </div>
        )}
        {activeTab === 'from-source' && (
          <div className="h-[368px]">
            <FromSourceTab activeTab={activeTab} onTabChange={(tab) => setActiveTab(tab as TabType)} />
          </div>
        )}
      </div>
    </div>
  );
}