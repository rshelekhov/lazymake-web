export default function DependencyGraphCard() {
  return (
    <div className="relative size-full">
      <div className="absolute bg-[#1f2430] border border-[#30363c] border-solid h-[204px] left-0 rounded-[8px] top-0 w-[372px]" />
      <p className="absolute font-['Roboto_Mono',sans-serif] font-bold leading-[normal] left-[32px] not-italic text-[#58a6ff] text-[12px] text-nowrap top-[28px] tracking-[-0.24px]">
        Dependency Graph
      </p>
      <p className="absolute font-['Roboto_Mono',sans-serif] font-bold leading-[normal] left-[32px] not-italic text-[#58a6ff] text-[12px] text-nowrap top-[60px] tracking-[-0.24px]">
        Target: build-docker
      </p>
      <div className="absolute font-['Roboto_Mono','Noto_Sans_Math:Regular',sans-serif] leading-[normal] left-[32px] not-italic text-[12px] text-nowrap text-white top-[102px] tracking-[-0.24px] whitespace-pre">
        <p className="mb-0">
          └── build-docker [4] ★ — language: docker
        </p>
        <p className="mb-0">{`    ├── test-frontend [3] ★ ∥ — Run front...`}</p>
        <p className="mb-0">{`    │   └── build-frontend [2] ★ ∥ — lang...`}</p>
        <p className="mb-0">{`    │       └── install-deps [1] ★ — Inst...`}</p>
        <p className="mb-0">{`    └── test-backend [3] ★ ∥ — Run backend...`}</p>
      </div>
      <p className="absolute font-['Roboto_Mono',sans-serif] leading-[normal] left-[32px] not-italic text-[#8b939e] text-[12px] text-nowrap top-[74px] tracking-[-0.24px]">
        Depth: all levels
      </p>
      <div className="absolute bg-gradient-to-b from-50% from-[rgba(31,36,48,0)] h-[202px] left-px rounded-[8px] to-[#1f2430] to-[94.608%] top-px w-[370px]" />
    </div>
  );
}