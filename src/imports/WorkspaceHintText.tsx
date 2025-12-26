function Frame() {
  return (
    <div className="absolute bg-[#1f2430] content-stretch flex flex-col items-center justify-center left-[351px] px-[6px] py-0 rounded-[4px] top-0">
      <div aria-hidden="true" className="absolute border border-[#30363c] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Roboto_Mono',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[#58a6ff] text-[14px] w-full">w</p>
    </div>
  );
}

export default function WorkspaceHintText() {
  return (
    <div className="relative size-full">
      <Frame />
      <p className="absolute font-['Roboto_Mono',sans-serif] leading-[24px] left-0 not-italic text-[#8b939e] text-[14px] top-0 w-[428px]">to see recent Makefiles and automatically discovered ones in your project tree. Star your favorites for quick access.</p>
    </div>
  );
}
