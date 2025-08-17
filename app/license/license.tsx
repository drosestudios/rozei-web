"use client";
import { motion } from 'framer-motion';
const basicFadeIn = {
    initial: { opacity: 0 }, animate: { opacity: 1 },
    transition: { duration: 0.3, ease: "easeInOut" }
};

export default function PropietaryLicense() {
  return (
    <motion.main {...basicFadeIn} className="pb-28">
      <section className="max-w-4xl mt-14 md:mt-24 mx-auto flex flex-col gap-6 px-8 md:px-4">
        {/* Title */}
        <p className="font-bold text-center font-poppins outline-bold text-2xl sm:text-3xl md:text-4xl">
          Proprietary License
        </p>

        {/* Copyright */}
        <div className="flex flex-col gap-2 text-justify">
          <p className="text-base sm:text-lg md:text-xl text-zinc-500">
            Copyright (c) 2025 Rozei
          </p>
          <p className="text-base sm:text-lg md:text-xl text-zinc-500">
            Legal Name: Angelo Johao Figueroa Mejia
          </p>
        </div>

        {/* License Grant */}
        <div className="flex flex-col gap-4 text-justify">
          <p className="font-semibold text-lg sm:text-xl md:text-2xl"># License Grant</p>
          <p className="text-base sm:text-lg md:text-xl text-zinc-500">
            Rozei grants you a non-exclusive, non-transferable license to use the
            software solely for your internal business purposes. You may not copy,
            modify, distribute, sell, or create derivative works of the software.
          </p>
        </div>

        {/* Restrictions */}
        <div className="flex flex-col gap-2 text-justify">
          <p className="font-semibold text-lg sm:text-xl md:text-2xl"># Restrictions</p>
          <p className="text-base sm:text-lg md:text-xl text-zinc-500">
            You may not sublicense, lease, rent, or otherwise transfer your rights to
            the software.
          </p>
          <p className="text-base sm:text-lg md:text-xl text-zinc-500">
            You may not reverse engineer, decompile, or disassemble the software,
            except as permitted by applicable law.
          </p>
        </div>

        {/* Termination */}
        <div className="flex flex-col gap-4 text-justify">
          <p className="font-semibold text-lg sm:text-xl md:text-2xl"># Termination</p>
          <p className="text-base sm:text-lg md:text-xl text-zinc-500">
            This license will terminate automatically if you fail to comply with any
            of the terms and conditions described. Upon termination, you must destroy
            all copies of the software and related documentation.
          </p>
        </div>

        {/* Disclaimer */}
        <div className="flex flex-col gap-4 text-justify">
          <p className="font-semibold text-lg sm:text-xl md:text-2xl"># Disclaimer</p>
          <p className="text-base sm:text-lg md:text-xl text-zinc-500">
            The software is provided "as-is" without warranty of any kind. Studios
            D'Rose disclaims all warranties, including but not limited to implied
            warranties of merchantability and fitness for a particular purpose.
          </p>
        </div>

        {/* Footer */}
        <p className="text-center mt-8 text-zinc-400 text-sm sm:text-base md:text-lg">
          For any questions regarding this license, please contact{" "}
          <strong>studiosdrose@gmail.com</strong>.
        </p>
      </section>


    </motion.main>
  );
}
