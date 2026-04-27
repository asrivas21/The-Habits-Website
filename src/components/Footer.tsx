import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-[#f27e00] px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6">
        <div className="flex items-center gap-5">
          <Image
            src="/habits-logo-white-v2.png"
            alt="The Habits logo"
            width={500}
            height={500}
            className="h-16 w-auto"
          />
          <span className="font-didot text-5xl tracking-tight text-white">
            The Habits
          </span>
        </div>
        <a
          href="http://instagram.com/the_habits_ayurveda/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="The Habits on Instagram"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full text-white transition hover:bg-white/10"
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
          </svg>
        </a>
      </div>
    </footer>
  );
}
