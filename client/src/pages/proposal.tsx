import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Confetti from 'react-confetti';
import { Card } from "@/components/ui/card";
import ProposalText from "@/components/ProposalText";
import ProposalButtons from "@/components/ProposalButtons";

export default function Proposal() {
  const [accepted, setAccepted] = useState(false);
  const [noCount, setNoCount] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);

  const handleYes = () => {
    setAccepted(true);
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 10000);
  };

  const handleNo = () => {
    setNoCount(count => count + 1);
  };

  return (
    <div className="min-h-screen w-full bg-pink-50 flex items-center justify-center p-4">
      {showConfetti && <Confetti 
        numberOfPieces={200}
        recycle={false}
        colors={['#FF69B4', '#FFB6C1', '#FFC0CB', '#FF1493']}
      />}
      
      <Card className="w-full max-w-lg p-8 bg-white/80 backdrop-blur-sm shadow-xl">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <div className="text-center">
            <ProposalText accepted={accepted} />
          </div>

          <AnimatePresence>
            {!accepted && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                <ProposalButtons 
                  onYes={handleYes}
                  onNo={handleNo}
                  noCount={noCount}
                />
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {accepted && (
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center space-y-4"
              >
                <div className="text-2xl font-semibold text-pink-600">
                  Yay! 💖 I love you! 💖
                </div>
                <div className="flex justify-center gap-4">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: i * 0.2 }}
                      className="text-4xl"
                    >
                      💝
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </Card>
    </div>
  );
}
