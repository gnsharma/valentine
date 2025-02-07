import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Confetti from "react-confetti";
import { Card } from "@/components/ui/card";
import ProposalText from "@/components/ProposalText";
import ProposalButtons from "@/components/ProposalButtons";
import ImageCarousel from "@/components/ImageCarousel";

// Add your photos to the public/gallery folder and update these paths
const galleryImages = [
  "/gallery/photo1.jpg",
  "/gallery/photo2.jpg",
  "/gallery/photo3.jpg",
  "/gallery/photo4.jpg",
  "/gallery/photo5.jpg",
  "/gallery/photo6.jpg",
];

export default function Proposal() {
  const [accepted, setAccepted] = useState(false);
  const [noCount, setNoCount] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);

  const handleYes = () => {
    setAccepted(true);
    setShowConfetti(true);
  };

  const handleNo = () => {
    setNoCount((count) => count + 1);
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-pink-100 via-pink-200 to-pink-100 relative overflow-hidden">
      {/* Floating background hearts */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-4xl"
            initial={{
              top: "110%",
              left: `${Math.random() * 100}%`,
              rotate: 0,
              scale: Math.random() * 0.5 + 0.5,
            }}
            animate={{
              top: "-10%",
              rotate: 360,
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5,
            }}
          >
            💝
          </motion.div>
        ))}
      </div>

      {/* Confetti effect */}
      {showConfetti && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          numberOfPieces={200}
          recycle={true}
          colors={["#FF69B4", "#FFB6C1", "#FFC0CB", "#FF1493"]}
        />
      )}

      {/* Celebration hearts when accepted */}
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={`celebration-${i}`}
              className="absolute text-4xl"
              initial={{
                top: "50%",
                left: "50%",
                scale: 0,
                rotate: 0,
              }}
              animate={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                scale: [0, 1, 1, 0],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i * 0.1,
                ease: "easeOut",
              }}
            >
              {["💖", "💝", "💗", "💓", "💕"][Math.floor(Math.random() * 5)]}
            </motion.div>
          ))}
        </div>
      )}

      <div className="relative z-10 min-h-screen w-full flex flex-col items-center justify-center p-4">
        <Card className="w-full max-w-lg p-8 bg-white/90 backdrop-blur-sm shadow-xl border-2 border-pink-200">
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
                    My heart is overflowing with joy! 💖
                  </div>
                  <div className="flex justify-center gap-4">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0 }}
                        animate={{
                          scale: [1, 1.2, 1],
                        }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          delay: i * 0.2,
                        }}
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

        {/* Image Gallery Section */}
        <AnimatePresence>
          {accepted && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="w-full max-w-4xl mt-8"
            >
              <Card className="p-6 bg-white/90 backdrop-blur-sm">
                <h2 className="text-2xl font-semibold text-pink-600 text-center mb-6">
                  Our Love Story 💑
                </h2>
                <ImageCarousel images={galleryImages} />
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
