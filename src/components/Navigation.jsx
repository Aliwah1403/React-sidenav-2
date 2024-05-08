import {
  easeInOut,
  motion,
  useAnimationControls,
  AnimatePresence,
} from "framer-motion";
import { useEffect, useState } from "react";
import NavigationLink from "./NavigationLink";
import logo from "../assets/logo.png";
import {
  ChartBarIcon,
  ChartPieIcon,
  DocumentCheckIcon,
  Square2StackIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import ProjectLink from "./ProjectLink";
import ProjectNavigation from "./ProjectNavigation";

const containerVariants = {
  close: {
    width: "5rem",
    transition: {
      type: "spring",
      damping: 12,
      duration: 0.5,
    },
  },
  open: {
    width: "16rem",
    transition: {
      type: "spring",
      damping: 12,
      duration: 0.5,
    },
  },
};

const svgVariants = {
  close: {
    rotate: 180,
  },
  open: {
    rotate: 360,
  },
};

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const containerControls = useAnimationControls();
  const svgControls = useAnimationControls();

  useEffect(() => {
    if (isOpen) {
      containerControls.start("open");
      svgControls.start("open");
    } else {
      containerControls.start("close");
      svgControls.start("close");
    }
  }, [isOpen]);

  const handleOpenClose = () => {
    setIsOpen(!isOpen);
    setSelectedProject(null);
  };

  return (
    <>
      <motion.nav
        className="bg-neutral-900 flex flex-col z-10 gap-20 p-5 absolute top-0 left-0 h-full shadow shadow-neutral-600"
        variants={containerVariants}
        animate={containerControls}
        initial="close"
      >
        <div className="flex flex-row w-full justify-between place-items-center">
          {/* <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-amber-700 rounded-full" /> */}
          <img src={logo} alt="Logo" className="w-10 h-10" />
          <button className="p-1 rounded-full flex" onClick={handleOpenClose}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 stroke-neutral-200"
            >
              <motion.path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
                variants={svgVariants}
                animate={svgControls}
                transition={{
                  duration: 0.5,
                  ease: easeInOut,
                }}
              />
            </svg>

            {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1}
            stroke="currentColor"
            className="w-8 h-8 stroke-neutral-200"
          >
            <motion.path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              variants={svgVariants}
              animate={svgControls}
              transition={{
                duration: 0.5,
                ease: easeInOut,
              }}
            />
          </svg> */}
          </button>
        </div>
        <div className="flex flex-col gap-3">
          <NavigationLink name="Dashboard">
            <ChartBarIcon className="stroke-inherit stroke-[0.75] min-w-8 w-8" />
          </NavigationLink>
          <NavigationLink name="Projects">
            <Square2StackIcon className="stroke-inherit stroke-[0.75] min-w-8 w-8" />
          </NavigationLink>
          <NavigationLink name="Tasks">
            <DocumentCheckIcon className="stroke-inherit stroke-[0.75] min-w-8 w-8" />
          </NavigationLink>
          <NavigationLink name="Reporting">
            <ChartPieIcon className="stroke-inherit stroke-[0.75] min-w-8 w-8" />
          </NavigationLink>
          <NavigationLink name="Users">
            <UserIcon className="stroke-inherit stroke-[0.75] min-w-8 w-8" />
          </NavigationLink>
        </div>
        <div className="flex flex-col gap-3">
          <ProjectLink
            name="Virtual Reality"
            setSelectedProject={setSelectedProject}
          >
            <div className="min-w-4 mx-2 border-pink-600 border rounded-full aspect-square bg-pink-700" />
          </ProjectLink>
          <ProjectLink
            name="Apple Vision"
            setSelectedProject={setSelectedProject}
          >
            <div className="min-w-4 mx-2 border-indigo-600 border rounded-full aspect-square bg-indigo-700" />
          </ProjectLink>
          <ProjectLink name="BMW" setSelectedProject={setSelectedProject}>
            <div className="min-w-4 mx-2 border-cyan-600 border rounded-full aspect-square bg-cyan-700" />
          </ProjectLink>
          <ProjectLink
            name="Secret Project"
            setSelectedProject={setSelectedProject}
          >
            <div className="min-w-4 mx-2 border-green-600 border rounded-full aspect-square bg-green-700" />
          </ProjectLink>
        </div>
      </motion.nav>
      <AnimatePresence>
        {selectedProject && (
          <ProjectNavigation
            selectedProject={selectedProject}
            setSelectedProject={setSelectedProject}
            isOpen={isOpen}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
