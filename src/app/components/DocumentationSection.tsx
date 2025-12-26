export default function DocumentationSection() {
  return (
    <section id="documentation" className="relative pt-[72px]">
      {/* Background gradient - full width */}
      <div className="absolute inset-x-0 bg-gradient-to-b from-[#1f2430] to-[#1a1f29] h-[360px] top-0 z-0" />

      {/* Content container */}
      <div className="relative px-[260px] z-10">
        {/* Title */}
        <h2 className="font-['Google_Sans_Code:SemiBold',sans-serif] leading-[1.3] mb-[12px] not-italic text-[44px] text-nowrap text-white">
          Documentation
        </h2>

        {/* Description */}
        <p className="font-['Google_Sans_Code:Regular',sans-serif] leading-[24px] mb-[48px] not-italic text-[#8b939e] text-[14px] text-nowrap">
          Comprehensive guides and feature documentation
        </p>

        {/* Cards Grid */}
        <div className="space-y-[12px]">
          {/* Row 1 - Top featured cards (3 cards, taller) */}
          <div className="flex gap-[13px]">
            {/* Self-Documenting Makefiles */}
            <a
              href="https://github.com/rshelekhov/lazymake/blob/main/docs/guides/self-documenting-makefiles.md"
              target="_blank"
              rel="noopener noreferrer"
              className="group/card relative bg-[#1f2430] border border-[#30363c] border-solid h-[226px] rounded-[8px] w-[298px] shrink-0 hover:border-[#4B9AE9] transition-colors p-[24px]"
            >
              <div className="size-[56px] mb-[68px]">
                <svg
                  className="block size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 56 56"
                >
                  <g id="file-code-01">
                    <path
                      d="M36.167 8.79572V18.4336C36.167 19.7404 36.167 20.3938 36.4213 20.893C36.645 21.332 37.0019 21.689 37.441 21.9127C37.9401 22.167 38.5935 22.167 39.9003 22.167H49.5382M36.167 44.3335L42.0003 38.5001L36.167 32.6668M26.8336 32.6668L21.0003 38.5001L26.8336 44.3335M50.167 26.806V43.6335C50.167 47.5538 50.167 49.514 49.404 51.0114C48.7329 52.3285 47.662 53.3994 46.3449 54.0705C44.8475 54.8335 42.8873 54.8335 38.967 54.8335H24.0336C20.1133 54.8335 18.1531 54.8335 16.6557 54.0705C15.3386 53.3994 14.2677 52.3285 13.5966 51.0114C12.8336 49.514 12.8336 47.5538 12.8336 43.6335V19.3668C12.8336 15.4464 12.8336 13.4863 13.5966 11.9889C14.2677 10.6717 15.3386 9.60088 16.6557 8.92976C18.1531 8.16681 20.1133 8.16681 24.0336 8.16681H31.5278C33.2399 8.16681 34.096 8.16681 34.9016 8.36022C35.6158 8.5317 36.2986 8.81453 36.9249 9.19833C37.6314 9.63122 38.2367 10.2366 39.4474 11.4472L46.8865 18.8864C48.0972 20.0971 48.7025 20.7024 49.1354 21.4088C49.5192 22.0351 49.8021 22.7179 49.9735 23.4322C50.167 24.2378 50.167 25.0939 50.167 26.806Z"
                      id="Icon"
                      opacity="0.1"
                      stroke="var(--stroke-0, #4B9AE9)"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                    <path
                      d="M30.3333 2.9621V12.6C30.3333 13.9068 30.3333 14.5602 30.5877 15.0593C30.8114 15.4984 31.1683 15.8553 31.6074 16.079C32.1065 16.3334 32.7599 16.3334 34.0667 16.3334H43.7046M30.3333 38.4999L36.1667 32.6665L30.3333 26.8332M21 26.8332L15.1667 32.6665L21 38.4999M44.3333 20.9724V37.7999C44.3333 41.7202 44.3333 43.6804 43.5704 45.1778C42.8993 46.4949 41.8284 47.5658 40.5113 48.2369C39.0139 48.9999 37.0537 48.9999 33.1333 48.9999H18.2C14.2796 48.9999 12.3194 48.9999 10.8221 48.2369C9.50493 47.5658 8.43407 46.4949 7.76295 45.1778C7 43.6804 7 41.7202 7 37.7999V13.5332C7 9.61282 7 7.65264 7.76295 6.15526C8.43407 4.83812 9.50493 3.76726 10.8221 3.09615C12.3194 2.33319 14.2796 2.33319 18.2 2.33319H25.6941C27.4063 2.33319 28.2623 2.33319 29.068 2.5266C29.7822 2.69808 30.465 2.98091 31.0913 3.36471C31.7977 3.7976 32.4031 4.40293 33.6137 5.61359L41.0529 13.0528C42.2636 14.2634 42.8689 14.8688 43.3018 15.5752C43.6856 16.2015 43.9684 16.8843 44.1399 17.5986C44.3333 18.4042 44.3333 19.2602 44.3333 20.9724Z"
                      id="Icon_2"
                      stroke="var(--stroke-0, #4B9AE9)"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </g>
                </svg>
              </div>
              <p className="font-['Google_Sans_Code:Medium',sans-serif] leading-[1.4] text-[18px] text-white w-[210px] group-hover/card:text-[#4B9AE9] transition-colors">
                Self-Documenting Makefiles
              </p>
            </a>

            {/* Keyboard Shortcuts Reference */}
            <a
              href="https://github.com/rshelekhov/lazymake/blob/main/docs/guides/keyboard-shortcuts.md"
              target="_blank"
              rel="noopener noreferrer"
              className="group/card relative bg-[#1f2430] border border-[#30363c] border-solid h-[226px] rounded-[8px] w-[298px] shrink-0 hover:border-[#4B9AE9] transition-colors p-[24px]"
            >
              <div className="size-[56px] mb-[68px]">
                <svg
                  className="block size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 56 56"
                >
                  <g id="command">
                    <path
                      d="M23.3336 23.3332V16.3332C23.3336 12.4672 20.1996 9.33319 16.3336 9.33319C12.4676 9.33319 9.33362 12.4672 9.33362 16.3332C9.33362 20.1992 12.4676 23.3332 16.3336 23.3332H23.3336ZM23.3336 23.3332V37.3332M23.3336 23.3332H37.3336M23.3336 37.3332V44.3332C23.3336 48.1992 20.1996 51.3332 16.3336 51.3332C12.4676 51.3332 9.33362 48.1992 9.33362 44.3332C9.33362 40.4672 12.4676 37.3332 16.3336 37.3332H23.3336ZM23.3336 37.3332H37.3336M37.3336 37.3332H44.3336C48.1996 37.3332 51.3336 40.4672 51.3336 44.3332C51.3336 48.1992 48.1996 51.3332 44.3336 51.3332C40.4676 51.3332 37.3336 48.1992 37.3336 44.3332V37.3332ZM37.3336 37.3332V23.3332M37.3336 23.3332V16.3332C37.3336 12.4672 40.4676 9.33319 44.3336 9.33319C48.1996 9.33319 51.3336 12.4672 51.3336 16.3332C51.3336 20.1992 48.1996 23.3332 44.3336 23.3332H37.3336Z"
                      id="Icon"
                      opacity="0.1"
                      stroke="var(--stroke-0, #4B9AE9)"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                    <path
                      d="M17.5 17.5V10.5C17.5 6.63401 14.366 3.5 10.5 3.5C6.63401 3.5 3.5 6.63401 3.5 10.5C3.5 14.366 6.63401 17.5 10.5 17.5H17.5ZM17.5 17.5V31.5M17.5 17.5H31.5M17.5 31.5V38.5C17.5 42.366 14.366 45.5 10.5 45.5C6.63401 45.5 3.5 42.366 3.5 38.5C3.5 34.634 6.63401 31.5 10.5 31.5H17.5ZM17.5 31.5H31.5M31.5 31.5H38.5C42.366 31.5 45.5 34.634 45.5 38.5C45.5 42.366 42.366 45.5 38.5 45.5C34.634 45.5 31.5 42.366 31.5 38.5V31.5ZM31.5 31.5V17.5M31.5 17.5V10.5C31.5 6.63401 34.634 3.5 38.5 3.5C42.366 3.5 45.5 6.63401 45.5 10.5C45.5 14.366 42.366 17.5 38.5 17.5H31.5Z"
                      id="Icon_2"
                      stroke="var(--stroke-0, #4B9AE9)"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </g>
                </svg>
              </div>
              <p className="font-['Google_Sans_Code:Medium',sans-serif] leading-[1.4] text-[18px] text-white w-[210px] group-hover/card:text-[#4B9AE9] transition-colors">
                Keyboard Shortcuts Reference
              </p>
            </a>

            {/* Configuration Guide */}
            <a
              href="https://github.com/rshelekhov/lazymake/blob/main/docs/guides/configuration.md"
              target="_blank"
              rel="noopener noreferrer"
              className="group/card relative bg-[#1f2430] border border-[#30363c] border-solid h-[226px] rounded-[8px] w-[298px] shrink-0 hover:border-[#4B9AE9] transition-colors p-[24px]"
            >
              <div className="size-[56px] mb-[68px]">
                <svg
                  className="block size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 56 56"
                >
                  <g id="brackets-ellipses">
                    <path
                      d="M45.6652 49.0001C48.6099 49.0001 50.9992 46.6131 50.9992 43.6661V34.1052C50.9992 33.3979 51.2802 32.7195 51.7804 32.2193C52.8219 31.1778 52.8219 29.4892 51.7804 28.4476C51.2802 27.9475 50.9992 27.2691 50.9992 26.5618V17.0008C50.9992 14.0538 48.6122 11.6668 45.6652 11.6668M15.001 11.6668C12.054 11.6668 9.667 14.0538 9.667 17.0008V26.5618C9.667 27.2691 9.38601 27.9475 8.88585 28.4476C7.84433 29.4892 7.84433 31.1778 8.88585 32.2193C9.38601 32.7195 9.667 33.3979 9.667 34.1052V43.6661C9.667 46.6131 12.054 49.0001 15.001 49.0001M19.8333 30.3335H19.8567M30.3333 30.3335H30.3567M40.8333 30.3335H40.8567M21 30.3335C21 30.9778 20.4777 31.5001 19.8333 31.5001C19.189 31.5001 18.6667 30.9778 18.6667 30.3335C18.6667 29.6891 19.189 29.1668 19.8333 29.1668C20.4777 29.1668 21 29.6891 21 30.3335ZM31.5 30.3335C31.5 30.9778 30.9777 31.5001 30.3333 31.5001C29.689 31.5001 29.1667 30.9778 29.1667 30.3335C29.1667 29.6891 29.689 29.1668 30.3333 29.1668C30.9777 29.1668 31.5 29.6891 31.5 30.3335ZM42 30.3335C42 30.9778 41.4777 31.5001 40.8333 31.5001C40.189 31.5001 39.6667 30.9778 39.6667 30.3335C39.6667 29.6891 40.189 29.1668 40.8333 29.1668C41.4777 29.1668 42 29.6891 42 30.3335Z"
                      id="Icon"
                      opacity="0.1"
                      stroke="var(--stroke-0, #4B9AE9)"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                    <path
                      d="M39.8316 43.1665C42.7763 43.1665 45.1656 40.7795 45.1656 37.8325V28.2716C45.1656 27.5642 45.4466 26.8859 45.9467 26.3857C46.9883 25.3442 46.9883 23.6555 45.9467 22.614C45.4466 22.1138 45.1656 21.4355 45.1656 20.7282V11.1672C45.1656 8.22019 42.7786 5.83319 39.8316 5.83319M9.16738 5.83319C6.22038 5.83319 3.83338 8.22019 3.83338 11.1672V20.7282C3.83338 21.4355 3.55239 22.1138 3.05224 22.614C2.01071 23.6555 2.01071 25.3442 3.05224 26.3857C3.55239 26.8859 3.83338 27.5642 3.83338 28.2716V37.8325C3.83338 40.7795 6.22038 43.1665 9.16738 43.1665M13.9997 24.4999H14.023M24.4997 24.4999H24.5231M34.9997 24.4999H35.0231M15.1664 24.4999C15.1664 25.1442 14.644 25.6665 13.9997 25.6665C13.3554 25.6665 12.833 25.1442 12.833 24.4999C12.833 23.8555 13.3554 23.3332 13.9997 23.3332C14.644 23.3332 15.1664 23.8555 15.1664 24.4999ZM25.6664 24.4999C25.6664 25.1442 25.144 25.6665 24.4997 25.6665C23.8554 25.6665 23.3331 25.1442 23.3331 24.4999C23.3331 23.8555 23.8554 23.3332 24.4997 23.3332C25.144 23.3332 25.6664 23.8555 25.6664 24.4999ZM36.1664 24.4999C36.1664 25.1442 35.644 25.6665 34.9997 25.6665C34.3554 25.6665 33.8331 25.1442 33.8331 24.4999C33.8331 23.8555 34.3554 23.3332 34.9997 23.3332C35.644 23.3332 36.1664 23.8555 36.1664 24.4999Z"
                      id="Icon_2"
                      stroke="var(--stroke-0, #4B9AE9)"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </g>
                </svg>
              </div>
              <p className="font-['Google_Sans_Code:Medium',sans-serif] leading-[1.4] text-[18px] text-white w-[210px] group-hover/card:text-[#4B9AE9] transition-colors">
                Configuration
                <br />
                Guide
              </p>
            </a>
          </div>

          {/* Row 2 - Feature cards (3 cards) */}
          <div className="flex gap-[13px]">
            {/* Dependency Graphs */}
            <a
              href="https://github.com/rshelekhov/lazymake/blob/main/docs/features/dependency-graphs.md"
              target="_blank"
              rel="noopener noreferrer"
              className="group/card relative bg-[#1a1f29] border border-[#30363c] border-solid h-[164px] rounded-[8px] w-[298px] shrink-0 hover:border-[#4B9AE9] transition-colors p-[24px]"
            >
              <div className="size-[24px] mb-[42px]">
                <svg
                  className="block size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 24 24"
                >
                  <g id="dataflow-01">
                    <path
                      d="M17 20H16.8C15.1198 20 14.2798 20 13.638 19.673C13.0735 19.3854 12.6146 18.9265 12.327 18.362C12 17.7202 12 16.8802 12 15.2V8.8C12 7.11984 12 6.27976 12.327 5.63803C12.6146 5.07354 13.0735 4.6146 13.638 4.32698C14.2798 4 15.1198 4 16.8 4H17M17 20C17 21.1046 17.8954 22 19 22C20.1046 22 21 21.1046 21 20C21 18.8954 20.1046 18 19 18C17.8954 18 17 18.8954 17 20ZM17 4C17 5.10457 17.8954 6 19 6C20.1046 6 21 5.10457 21 4C21 2.89543 20.1046 2 19 2C17.8954 2 17 2.89543 17 4ZM7 12L17 12M7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12ZM17 12C17 13.1046 17.8954 14 19 14C20.1046 14 21 13.1046 21 12C21 10.8954 20.1046 10 19 10C17.8954 10 17 10.8954 17 12Z"
                      id="Icon"
                      stroke="var(--stroke-0, #4B9AE9)"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </g>
                </svg>
              </div>
              <p className="font-['Google_Sans_Code:Medium',sans-serif] leading-[1.4] text-[18px] text-white text-nowrap group-hover/card:text-[#4B9AE9] transition-colors">
                Dependency
                <br />
                Graphs
              </p>
            </a>

            {/* Variable Inspector */}
            <a
              href="https://github.com/rshelekhov/lazymake/blob/main/docs/features/variable-inspector.md"
              target="_blank"
              rel="noopener noreferrer"
              className="group/card relative bg-[#1a1f29] border border-[#30363c] border-solid h-[164px] rounded-[8px] w-[298px] shrink-0 hover:border-[#4B9AE9] transition-colors p-[24px]"
            >
              <div className="size-[24px] mb-[42px]">
                <svg
                  className="block size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 24 24"
                >
                  <g id="variable">
                    <path
                      d="M19.9061 21C21.2464 18.2888 22 15.2329 22 12C22 8.76711 21.2464 5.71116 19.9061 3M4.09393 3C2.75363 5.71116 2 8.76711 2 12C2 15.2329 2.75363 18.2888 4.09393 21M16.5486 8.625H16.459C15.8056 8.625 15.1848 8.91202 14.7596 9.41072L9.38471 15.7143C8.95948 16.213 8.33871 16.5 7.6853 16.5H7.59563M8.71483 8.625H10.1089C10.6086 8.625 11.0477 8.95797 11.185 9.44094L12.9594 15.6841C13.0967 16.167 13.5358 16.5 14.0355 16.5H15.4296"
                      id="Icon"
                      stroke="var(--stroke-0, #4B9AE9)"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </g>
                </svg>
              </div>
              <p className="font-['Google_Sans_Code:Medium',sans-serif] leading-[1.4] text-[18px] text-white w-[210px] group-hover/card:text-[#4B9AE9] transition-colors">
                Variable
                <br />
                Inspector
              </p>
            </a>

            {/* Syntax Highlighting */}
            <a
              href="https://github.com/rshelekhov/lazymake/blob/main/docs/features/syntax-highlighting.md"
              target="_blank"
              rel="noopener noreferrer"
              className="group/card relative bg-[#1a1f29] border border-[#30363c] border-solid h-[164px] rounded-[8px] w-[298px] shrink-0 hover:border-[#4B9AE9] transition-colors p-[24px]"
            >
              <div className="size-[24px] mb-[42px]">
                <svg
                  className="block size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 24 24"
                >
                  <g id="code-01">
                    <path
                      d="M16 18L22 12L16 6M8 6L2 12L8 18"
                      id="Icon"
                      stroke="var(--stroke-0, #4B9AE9)"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </g>
                </svg>
              </div>
              <p className="font-['Google_Sans_Code:Medium',sans-serif] leading-[1.4] text-[18px] text-white w-[210px] group-hover/card:text-[#4B9AE9] transition-colors">
                Syntax
                <br />
                Highlighting
              </p>
            </a>
          </div>

          {/* Row 3 - Feature cards (3 cards) */}
          <div className="flex gap-[13px]">
            {/* Safety Features */}
            <a
              href="https://github.com/rshelekhov/lazymake/blob/main/docs/features/safety-features.md"
              target="_blank"
              rel="noopener noreferrer"
              className="group/card relative bg-[#1a1f29] border border-[#30363c] border-solid h-[164px] rounded-[8px] w-[298px] shrink-0 hover:border-[#4B9AE9] transition-colors p-[24px]"
            >
              <div className="size-[24px] mb-[42px]">
                <svg
                  className="block size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 24 24"
                >
                  <g id="alert-triangle">
                    <path
                      d="M12.2634 9.50414V13.5041M12.2634 17.5041H12.2734M10.8787 4.39586L2.65386 18.6025C2.19765 19.3905 1.96955 19.7845 2.00326 20.1078C2.03267 20.3899 2.18044 20.6462 2.4098 20.8129C2.67276 21.0041 3.12802 21.0041 4.03854 21.0041H20.4883C21.3988 21.0041 21.8541 21.0041 22.1171 20.8129C22.3464 20.6462 22.4942 20.3899 22.5236 20.1078C22.5573 19.7845 22.3292 19.3905 21.873 18.6025L13.6481 4.39586C13.1935 3.61069 12.9663 3.21811 12.6697 3.08626C12.4111 2.97125 12.1158 2.97125 11.8571 3.08626C11.5606 3.21811 11.3333 3.6107 10.8787 4.39586Z"
                      id="Icon"
                      stroke="var(--stroke-0, #4B9AE9)"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </g>
                </svg>
              </div>
              <p className="font-['Google_Sans_Code:Medium',sans-serif] leading-[1.4] text-[18px] text-white w-[210px] group-hover/card:text-[#4B9AE9] transition-colors">
                Safety
                <br />
                Features
              </p>
            </a>

            {/* History & Search */}
            <a
              href="https://github.com/rshelekhov/lazymake/blob/main/docs/features/history-search.md"
              target="_blank"
              rel="noopener noreferrer"
              className="group/card relative bg-[#1a1f29] border border-[#30363c] border-solid h-[164px] rounded-[8px] w-[298px] shrink-0 hover:border-[#4B9AE9] transition-colors p-[24px]"
            >
              <div className="size-[24px] mb-[42px]">
                <svg
                  className="block size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 24 24"
                >
                  <g id="clock">
                    <path
                      d="M12 6V12L16 14M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                      id="Icon"
                      stroke="var(--stroke-0, #4B9AE9)"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </g>
                </svg>
              </div>
              <p className="font-['Google_Sans_Code:Medium',sans-serif] leading-[1.4] text-[18px] text-white w-[210px] group-hover/card:text-[#4B9AE9] transition-colors">
                History
                <br />& Search
              </p>
            </a>

            {/* Workspace Management */}
            <a
              href="https://github.com/rshelekhov/lazymake/blob/main/docs/features/workspace-management.md"
              target="_blank"
              rel="noopener noreferrer"
              className="group/card relative bg-[#1a1f29] border border-[#30363c] border-solid h-[164px] rounded-[8px] w-[298px] shrink-0 hover:border-[#4B9AE9] transition-colors p-[24px]"
            >
              <div className="size-[24px] mb-[42px]">
                <svg
                  className="block size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 24 24"
                >
                  <g id="container">
                    <path
                      d="M20.5 7.27775L12 12M12 12L3.49997 7.27775M12 12L12 21.5M21 16.0586V7.94145C21 7.5988 21 7.42748 20.9495 7.27468C20.9049 7.13951 20.8318 7.01542 20.7354 6.91073C20.6263 6.7924 20.4766 6.7092 20.177 6.54279L12.777 2.43168C12.4934 2.27412 12.3516 2.19535 12.2015 2.16446C12.0685 2.13713 11.9315 2.13713 11.7986 2.16446C11.6484 2.19535 11.5066 2.27413 11.223 2.43168L3.82297 6.5428C3.52345 6.7092 3.37369 6.7924 3.26463 6.91074C3.16816 7.01543 3.09515 7.13951 3.05048 7.27468C3 7.42748 3 7.5988 3 7.94145V16.0586C3 16.4012 3 16.5725 3.05048 16.7253C3.09515 16.8605 3.16816 16.9846 3.26463 17.0893C3.37369 17.2076 3.52345 17.2908 3.82297 17.4572L11.223 21.5683C11.5066 21.7259 11.6484 21.8047 11.7986 21.8355C11.9315 21.8629 12.0685 21.8629 12.2015 21.8355C12.3516 21.8047 12.4934 21.7259 12.777 21.5683L20.177 17.4572C20.4766 17.2908 20.6263 17.2076 20.7354 17.0893C20.8318 16.9846 20.9049 16.8605 20.9495 16.7253C21 16.5725 21 16.4012 21 16.0586Z"
                      id="Icon"
                      stroke="var(--stroke-0, #4B9AE9)"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </g>
                </svg>
              </div>
              <p className="font-['Google_Sans_Code:Medium',sans-serif] leading-[1.4] text-[18px] text-white w-[210px] group-hover/card:text-[#4B9AE9] transition-colors">
                Workspace Management
              </p>
            </a>
          </div>

          {/* Row 4 - Feature cards (2 cards) */}
          <div className="flex gap-[13px]">
            {/* Performance Profiling */}
            <a
              href="https://github.com/rshelekhov/lazymake/blob/main/docs/features/performance-tracking.md"
              target="_blank"
              rel="noopener noreferrer"
              className="group/card relative bg-[#1a1f29] border border-[#30363c] border-solid h-[164px] rounded-[8px] w-[298px] shrink-0 hover:border-[#4B9AE9] transition-colors p-[24px]"
            >
              <div className="size-[24px] mb-[42px]">
                <svg
                  className="block size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 24 24"
                >
                  <g id="speedometer-03">
                    <path
                      d="M5 12C5 8.13401 8.13401 5 12 5M16.4999 7.5L11.9999 12M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12Z"
                      id="Icon"
                      stroke="var(--stroke-0, #4B9AE9)"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </g>
                </svg>
              </div>
              <p className="font-['Google_Sans_Code:Medium',sans-serif] leading-[1.4] text-[18px] text-white w-[210px] group-hover/card:text-[#4B9AE9] transition-colors">
                Performance Profiling
              </p>
            </a>

            {/* Export & Shell Integration */}
            <a
              href="https://github.com/rshelekhov/lazymake/blob/main/docs/features/export-shell-integration.md"
              target="_blank"
              rel="noopener noreferrer"
              className="group/card relative bg-[#1a1f29] border border-[#30363c] border-solid h-[164px] rounded-[8px] w-[298px] shrink-0 hover:border-[#4B9AE9] transition-colors p-[24px]"
            >
              <div className="size-[24px] mb-[42px]">
                <svg
                  className="block size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 24 24"
                >
                  <g id="terminal">
                    <path
                      d="M4 17L10 11L4 5M12 19H20"
                      id="Icon"
                      stroke="var(--stroke-0, #4B9AE9)"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </g>
                </svg>
              </div>
              <p className="font-['Google_Sans_Code:Medium',sans-serif] leading-[1.4] text-[18px] text-white w-[210px] group-hover/card:text-[#4B9AE9] transition-colors">
                Export & Shell Integration
              </p>
            </a>
          </div>
        </div>

        {/* Browse All Documentation Button */}
        <a
          href="https://github.com/rshelekhov/lazymake/tree/main/docs"
          target="_blank"
          rel="noopener noreferrer"
          className="group/browseBtn mt-[68px] inline-flex bg-[#1a1f29] h-[44px] items-center justify-center px-[30px] py-[12px] rounded-[8px] relative"
        >
          <div
            aria-hidden="true"
            className="absolute border border-[#30363c] border-solid inset-0 pointer-events-none rounded-[8px] group-hover/browseBtn:border-[#4B9AE9] transition-colors"
          />
          <p className="font-['Google_Sans_Code:SemiBold',sans-serif] leading-[1.4] text-[14px] text-center text-nowrap text-white group-hover/browseBtn:text-[#4B9AE9] transition-colors">
            Browse All Documentation →
          </p>
        </a>
      </div>
    </section>
  );
}