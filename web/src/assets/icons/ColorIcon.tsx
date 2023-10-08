interface Props {
  color: string;
  bg: string;
}

export function ColorIcon({ bg, color }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={34}
      height={34}
      fill="none"
    >
      <rect width={33} height={33} x={0.5} y={0.5} fill={bg} rx={16.5} />
      <path
        fill={color}
        fillRule="evenodd"
        d="M16.514 11.499h.047c.166 0 .34.08.48.213l4.72 4.72.52.527c.153.153.233.347.213.527-4.08-.14-5.84-1.907-5.98-5.987Zm6.847 5.3c-.08-.2-.207-.387-.374-.547l-5.24-5.246a1.986 1.986 0 0 0-.506-.354c-.02-.006-.034-.013-.054-.02-.026-.013-.053-.026-.08-.026a1.486 1.486 0 0 0-.68-.1c-3.373.3-5.973 3.186-5.926 6.573.046 3.493 2.926 6.373 6.413 6.42h.093c3.347 0 6.187-2.587 6.487-5.927a1.56 1.56 0 0 0-.133-.773Z"
        clipRule="evenodd"
      />
      <rect width={33} height={33} x={0.5} y={0.5} stroke="#fff" rx={16.5} />
    </svg>
  );
}
