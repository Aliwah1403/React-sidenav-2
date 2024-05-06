import { ArrowRightToLine } from "lucide-react";

import { motion, useAnimationControls } from "framer-motion";
import { useEffect, useState } from "react";

const containerVariants = {
  close: {
    width: "5rem",
    transition: {
      type: "spring",
      damping: 15,
      duration: 0.5,
    },
  },
  open: {
    width: "16rem",
    transition: {
      type: "spring",
      damping: 15,
      duration: 0.5,
    },
  },
};

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const containerControls = useAnimationControls();

  useEffect(() => {
    if (isOpen) {
      containerControls.start("open");
    } else {
      containerControls.start("close");
    }
  }, [isOpen]);

  const handleOpenClose = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.nav
      className="bg-neutral-900 flex flex-col z-10 gap-20 p-5 absolute top-0 left-0 h-full shadow shadow-neutral-600"
      variants={containerVariants}
      animate={containerControls}
      initial="close"
    >
      <div className="flex flex-row w-full justify-between place-items-center">
        <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-amber-700 rounded-full">
          <button className="p-1 rounded-full flex" onClick={handleOpenClose}>
            <ArrowRightToLine size={30} color="white" strokeWidth={1} />
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
