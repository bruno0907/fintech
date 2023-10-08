export function BankAccountIcon({ className }: { className?: string; }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={44}
      height={44}
      fill="none"
      className={className}
    >
      <rect width={42} height={42} x={1} y={1} fill="#E7F5FF" rx={21} />
      <path
        stroke="#1864AB"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m13.722 18.552 7.87-5.08a.701.701 0 0 1 .76 0l7.87 5.08c.2.13.32.351.32.59v.551a.7.7 0 0 1-.7.7h-15.74a.7.7 0 0 1-.7-.7v-.552c0-.238.12-.46.32-.589ZM21.971 17.455v.01"
      />
      <path
        stroke="#1864AB"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m30.568 30.044-.37-1.686a.49.49 0 0 0-.48-.384H14.225a.49.49 0 0 0-.479.384l-.37 1.686a.49.49 0 0 0 .477.594h16.239a.49.49 0 0 0 .477-.594Z"
        clipRule="evenodd"
      />
      <path
        stroke="#1864AB"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M24.138 20.391v7.584m4.333-7.584v7.584M15.47 20.39v7.584m4.333-7.584v7.584"
      />
      <rect
        width={42}
        height={42}
        x={1}
        y={1}
        stroke="#fff"
        strokeWidth={2}
        rx={21}
      />
    </svg>
  );
}
