import { TypeAnimation } from "react-type-animation";

interface ProposalTextProps {
  accepted: boolean;
}

export default function ProposalText({ accepted }: ProposalTextProps) {
  if (accepted) {
    return (
      <div className="space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold text-pink-600">
          You've made me the happiest person in the world! 💖
        </h1>
        <p className="text-xl text-pink-500">
          Every moment with you is a dream come true. I promise to love you more
          with each passing day!
        </p>
      </div>
    );
  }

  return (
    <TypeAnimation
      sequence={[
        "Anika, will you...",
        1000,
        "Anika, will you be my valentine? 💝",
      ]}
      wrapper="h1"
      speed={50}
      className="text-3xl md:text-4xl font-bold text-pink-600"
      cursor={false}
    />
  );
}
