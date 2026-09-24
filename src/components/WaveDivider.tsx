export default function WaveDivider({
  flip = false,
  className = "text-espresso",
}: {
  flip?: boolean;
  className?: string;
}) {
  return (
    <div className="w-full overflow-hidden leading-none">
      <svg
        viewBox="0 0 1000 40"
        preserveAspectRatio="none"
        className={`h-8 w-full sm:h-10 ${flip ? "rotate-180" : ""} ${className}`}
      >
        <path
          d="M0,20 C25,0 75,0 100,20 C125,40 175,40 200,20 C225,0 275,0 300,20 C325,40 375,40 400,20 C425,0 475,0 500,20 C525,40 575,40 600,20 C625,0 675,0 700,20 C725,40 775,40 800,20 C825,0 875,0 900,20 C925,40 975,40 1000,20 L1000,40 L0,40 Z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
}
