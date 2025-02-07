import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface ProposalButtonsProps {
  onYes: () => void;
  onNo: () => void;
  noCount: number;
}

export default function ProposalButtons({ onYes, onNo, noCount }: ProposalButtonsProps) {
  const noTexts = [
    "No",
    "Are you sure?",
    "Pretty please?",
    "Think again!",
    "Last chance!",
    "Surely not?",
    "You're breaking my heart!",
    "I'm gonna cry...",
    "Please say yes!",
    "Don't do this to me!"
  ];

  const yesButtonSize = noCount * 20 + 100;

  return (
    <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 0.5,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      >
        <Button
          variant="default"
          size="lg"
          onClick={onYes}
          style={{
            width: `${yesButtonSize}px`,
            height: `${yesButtonSize/2}px`,
            fontSize: `${16 + noCount * 2}px`
          }}
          className="bg-pink-500 hover:bg-pink-600 transition-all duration-300"
        >
          Yes! 💖
        </Button>
      </motion.div>

      <motion.div
        animate={{
          x: noCount % 2 === 0 ? [0, 20, -20, 0] : [0, -20, 20, 0],
        }}
        transition={{ duration: 0.5 }}
      >
        <Button
          variant="outline"
          size="lg"
          onClick={onNo}
          className="border-pink-200 hover:border-pink-300 hover:bg-pink-50"
        >
          {noTexts[Math.min(noCount, noTexts.length - 1)]}
        </Button>
      </motion.div>
    </div>
  );
}
