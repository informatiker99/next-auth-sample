"use client";
import { SignupForm } from "@/components/signUpForm";
import Image from "next/image";
import { motion } from "motion/react";
export default function Home() {
  return (
    <motion.div
      initial={{ scale: 0.9 }}
      animate={{
        scale: 1,
        transition: { duration: 0.1 },
      }}
    >
      <SignupForm />
    </motion.div>
  );
}
