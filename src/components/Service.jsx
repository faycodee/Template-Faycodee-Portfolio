import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, ContactShadows } from "@react-three/drei";
import Model from "../../public/Spider";

const Services = () => {
  return (
    <div>
      <div className="-mt-[6rem]">
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Introduction</p>
          <h2 className={styles.sectionHeadText}>Services.</h2>
        </motion.div>

        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px] mb-8"
        >
          Hey ,I will assist you in the same way that{" "}
          <span className="font-mono font-extrabold ">Spider-Man</span> helps
          others .
          <br />
          Let’s get creative and make something together !
        </motion.p>
        <div className="text-black">
          <Canvas
            gl={{ alpha: true }}
            className="rounded-3xl"
            style={{ height: "100vh", scale: 5, backgroundColor: "black" }}
          >
            <ambientLight intensity={2} />
            <OrbitControls enableZoom />
            <Suspense fallback={null}>
              <Model position={[0, -7, 0]}  />
            </Suspense>
            <Environment preset="city" />
            <ContactShadows
              position={[0, 0, 0]}
              opacity={0.5}
              scale={50}
              blur={1}
              color="#00000"
            />
          </Canvas>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Services, "service");
