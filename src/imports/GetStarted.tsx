export default function GetStarted() {
  const scrollToQuickStart = () => {
    const quickStartSection = document.getElementById('quick-start');
    if (quickStartSection) {
      quickStartSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <button 
      onClick={scrollToQuickStart}
      className="bg-white hover:bg-[#4B9AE9] relative rounded-[8px] size-full transition-colors cursor-pointer border-none group" 
      data-name="get-started"
    >
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[24px] py-[12px] relative size-full">
          <p className="font-['Google_Sans_Code:SemiBold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#0a0a0a] group-hover:text-white text-[14px] text-center text-nowrap transition-colors">Get Started</p>
        </div>
      </div>
    </button>
  );
}