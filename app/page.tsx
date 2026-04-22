import PrimaryButton from "./components/ui/primary-button";
import SecondaryButton from "./components/ui/secondary-button";

const PhoneIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="white"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

export default function Home() {
  return (
    <>
      <header className="fixed top-0 left-0 w-full h-16 bg-transparent z-50">
        <nav className="flex items-center justify-between w-full h-full px-4">
          <span className="font-display text-white text-xl font-semibold tracking-wide">
            ACIC
          </span>
          <button
            className="flex flex-col justify-center items-center w-8 h-8 gap-3"
            aria-label="Open menu"
          >
            <span className="w-7 h-px bg-white rounded-full" />
            <span className="w-7 h-px bg-white rounded-full" />
          </button>
        </nav>
      </header>

      <section
        className="w-full h-dvh bg-[url('/images/hero-background.png')] bg-cover bg-center bg-no-repeat flex flex-col items-center pt-20 px-2"
        aria-label="Hero section"
      >
        <div className="flex items-center gap-2 mt-10">
          <div className="flex flex-row-reverse items-center">
              <div className="w-7 h-7 rounded-full border-2 border-white bg-primary-600 flex items-center justify-center text-white text-xs font-sans font-medium -ml-3">
              +2k
            </div>
            <img
              src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=80&h=80&fit=crop"
              alt="Student"
              className="w-7 h-7 rounded-full border-2 border-white object-cover -ml-3"
            />
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop"
              alt="Student"
              className="w-7 h-7 rounded-full border-2 border-white object-cover -ml-3"
            />
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop"
              alt="Student"
              className="w-7 h-7 rounded-full border-2 border-white object-cover -ml-3"
            />
          
          </div>
          <span className="font-sans text-white text-xs font-normal">
          Trusted Students
          </span>
        </div>
        <h1 className="font-heading text-white text-3xl font-medium text-center mt-10 leading-tight">
          Australia's most trusted education specialist
        </h1>
        <div className="flex flex-col gap-5 mt-10 max-w-sm px-4">
          <PrimaryButton icon={<PhoneIcon />} label="Request a callback" />
          <SecondaryButton icon={<PhoneIcon />} label="Request a callback" />
        </div>
      </section>
    </>
  );
}