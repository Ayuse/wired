export const ChatBubble = ({ width }: { width: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    width={20}
    height={20}
  >
    <path
      d="M431 320.6c-1-3.6 1.2-8.6 3.3-12.2a33.68 33.68 0 012.1-3.1A162 162 0 00464 215c.3-92.2-77.5-167-173.7-167-83.9 0-153.9 57.1-170.3 132.9a160.7 160.7 0 00-3.7 34.2c0 92.3 74.8 169.1 171 169.1 15.3 0 35.9-4.6 47.2-7.7s22.5-7.2 25.4-8.3a26.44 26.44 0 019.3-1.7 26 26 0 0110.1 2l56.7 20.1a13.52 13.52 0 003.9 1 8 8 0 008-8 12.85 12.85 0 00-.5-2.7z"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeMiterlimit="10"
      strokeWidth="32"
    />
    <path
      d="M66.46 232a146.23 146.23 0 006.39 152.67c2.31 3.49 3.61 6.19 3.21 8s-11.93 61.87-11.93 61.87a8 8 0 002.71 7.68A8.17 8.17 0 0072 464a7.26 7.26 0 002.91-.6l56.21-22a15.7 15.7 0 0112 .2c18.94 7.38 39.88 12 60.83 12A159.21 159.21 0 00284 432.11"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeMiterlimit="10"
      strokeWidth="32"
    />
  </svg>
);

export const Globe = ({ width }: { width: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    width={width || "20"}
    height={width || "20"}
  >
    <path
      d="M256 48C141.13 48 48 141.13 48 256s93.13 208 208 208 208-93.13 208-208S370.87 48 256 48z"
      fill="none"
      stroke="currentColor"
      stroke-miterlimit="10"
      stroke-width="32"
    />
    <path
      d="M256 48c-58.07 0-112.67 93.13-112.67 208S197.93 464 256 464s112.67-93.13 112.67-208S314.07 48 256 48z"
      fill="none"
      stroke="currentColor"
      stroke-miterlimit="10"
      stroke-width="32"
    />
    <path
      d="M117.33 117.33c38.24 27.15 86.38 43.34 138.67 43.34s100.43-16.19 138.67-43.34M394.67 394.67c-38.24-27.15-86.38-43.34-138.67-43.34s-100.43 16.19-138.67 43.34"
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="32"
    />
    <path
      fill="none"
      stroke="currentColor"
      stroke-miterlimit="10"
      stroke-width="32"
      d="M256 48v416M464 256H48"
    />
  </svg>
);

export const bookmarks = ({ width }: { width: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    width={width || "20"}
    height={width || "20"}
  >
    <path
      d="M128 80V64a48.14 48.14 0 0148-48h224a48.14 48.14 0 0148 48v368l-80-64"
      fill="none"
      stroke="currentColor"
      stroke-linejoin="round"
      stroke-width="32"
    />
    <path
      d="M320 96H112a48.14 48.14 0 00-48 48v352l152-128 152 128V144a48.14 48.14 0 00-48-48z"
      fill="none"
      stroke="currentColor"
      stroke-linejoin="round"
      stroke-width="32"
    />
  </svg>
);

export const fileTray = ({ width }: { width: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    width={width || "20"}
    height={width || "20"}
  >
    <path
      d="M384 80H128c-26 0-43 14-48 40L48 272v112a48.14 48.14 0 0048 48h320a48.14 48.14 0 0048-48V272l-32-152c-5-27-23-40-48-40z"
      fill="none"
      stroke="currentColor"
      stroke-linejoin="round"
      stroke-width="32"
    />
    <path
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="32"
      d="M48 272h144M320 272h144M192 272a64 64 0 00128 0M144 144h224M128 208h256"
    />
  </svg>
);

export const options = ({ width }: { width: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    width={width || "20"}
    height={width || "20"}
  >
    <path
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="32"
      d="M368 128h80M64 128h240M368 384h80M64 384h240M208 256h240M64 256h80"
    />
    <circle
      cx="336"
      cy="128"
      r="32"
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="32"
    />
    <circle
      cx="176"
      cy="256"
      r="32"
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="32"
    />
    <circle
      cx="336"
      cy="384"
      r="32"
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="32"
    />
  </svg>
);

export const terminal = ({ width }: { width: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    width={width || "20"}
    height={width || "20"}
  >
    <rect
      x="32"
      y="48"
      width="448"
      height="416"
      rx="48"
      ry="48"
      fill="none"
      stroke="currentColor"
      stroke-linejoin="round"
      stroke-width="32"
    />
    <path
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="32"
      d="M96 112l80 64-80 64M192 240h64"
    />
  </svg>
);

export const toggle = ({ width }: { width: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    width={width || "20"}
    height={width || "20"}
  >
    <circle
      cx="368"
      cy="256"
      r="128"
      fill="none"
      stroke="currentColor"
      stroke-linejoin="round"
      stroke-width="32"
    />
    <rect
      x="16"
      y="128"
      width="480"
      height="256"
      rx="128"
      ry="128"
      fill="none"
      stroke="currentColor"
      stroke-linejoin="round"
      stroke-width="32"
    />
  </svg>
);
