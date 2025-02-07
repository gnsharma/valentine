import { TypeAnimation } from 'react-type-animation';

interface ProposalTextProps {
  accepted: boolean;
}

export default function ProposalText({ accepted }: ProposalTextProps) {
  if (accepted) {
    return (
      <h1 className="text-3xl md:text-4xl font-bold text-pink-600">
        Thank you for saying yes! 💖
      </h1>
    );
  }

  return (
    <TypeAnimation
      sequence={[
        'Will you...',
        1000,
        'Will you marry me? 💝',
      ]}
      wrapper="h1"
      speed={50}
      className="text-3xl md:text-4xl font-bold text-pink-600"
      cursor={false}
    />
  );
}
