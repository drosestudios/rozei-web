import { motion } from 'framer-motion';
import Head from "next/head";

const basicFadeIn = {
    initial: { opacity: 0 }, animate: { opacity: 1 },
    transition: { duration: 0.3, ease: "easeInOut" }
};

export default function Questions() {
  return (
    <motion.main {...basicFadeIn} className="pb-28">
      <Head><title>Rozei, Privacy and TOS</title></Head>

      {/* Terms of Service */}
      <section className="max-w-4xl mt-14 md:mt-24 mx-auto flex text-justify flex-col gap-6 px-8 md:px-4">
        <p className="font-bold text-center font-poppins outline-bold text-2xl sm:text-3xl md:text-4xl">
          Terms of Service.
        </p>
        <p className="text-base sm:text-lg md:text-xl text-zinc-500">
          By accessing or using Rozei, you agree to comply with and be bound by the
          following Terms of Service. These terms govern your use of the Rozei
          application and any related services provided. By using Rozei, you
          acknowledge that you have read, understood, and agreed to these Terms of
          Service. If you do not agree with these terms, please do not use the app.
        </p>

        <div className="flex flex-col gap-2">
          <p className="font-semibold font-poppins text-lg sm:text-xl md:text-2xl">License to Use</p>
          <p className="text-base sm:text-lg md:text-xl font-inter text-zinc-500">
            Rozei grants you a personal, non-transferable, and non-exclusive license
            to use the app for its intended purposes. This license is subject to your
            compliance with the Terms of Service. You may not distribute, sublicense,
            or reverse-engineer the app.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <p className="font-semibold font-poppins text-lg sm:text-xl md:text-2xl">Proprietary License</p>
          <p className="text-base sm:text-lg md:text-xl font-inter text-zinc-500">
            Rozei is proprietary software. All rights to the source code, design, and
            content of the app are owned by Rozei or its licensors. You may not copy,
            modify, distribute, or create derivative works based on the app, except as
            expressly permitted by these terms.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <p className="font-semibold font-poppins text-lg sm:text-xl md:text-2xl">Limitation of Liability</p>
          <p className="text-base sm:text-lg md:text-xl font-inter text-zinc-500">
            Rozei is provided "as is," without warranty of any kind. We are not
            responsible for any loss or damage resulting from the use or inability to
            use the app, including any loss of data. Your use of the app is at your
            own risk.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <p className="font-semibold font-poppins text-lg sm:text-xl md:text-2xl">Termination</p>
          <p className="text-base sm:text-lg md:text-xl font-inter text-zinc-500">
            We may suspend or terminate your access to Rozei at any time if you
            violate these Terms of Service or if we cease to offer the app. Upon
            termination, you must stop using Rozei and delete any copies of the app
            from your devices.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <p className="font-semibold font-poppins text-lg sm:text-xl md:text-2xl">Changes to Terms</p>
          <p className="text-base sm:text-lg md:text-xl font-inter text-zinc-500">
            We reserve the right to modify these Terms of Service at any time. Any
            changes will be posted on our website, and your continued use of Rozei
            will be subject to the updated terms.
          </p>
        </div>
      </section>

      {/* Privacy Policy */}
      <section className="max-w-4xl mx-auto mt-16 md:mt-20 flex flex-col gap-6 px-8 md:px-4">
        <p className="font-bold text-center font-poppins outline-bold text-2xl sm:text-3xl md:text-4xl">
          Privacy Policy.
        </p>
        <div className="flex flex-col gap-4 text-justify">
          <p className="text-base sm:text-lg md:text-xl font-inter text-zinc-500">
            At Rozei, your privacy is at the core of everything we do. We firmly
            believe that your data is yours, and we’ve designed Rozei to operate
            without collecting, storing, or transmitting any personal information.
          </p>
          <p className="text-base sm:text-lg md:text-xl font-inter text-zinc-500">
            All your data, including anime lists, preferences, and any other
            information you input into Rozei, is securely stored locally on your
            device. This means Rozei does not track your activity, share your
            information, or integrate with third-party services that collect data.
          </p>
          <p className="text-base sm:text-lg md:text-xl font-inter text-zinc-500">
            Our commitment to privacy ensures that your usage of Rozei is entirely
            private and under your control. We do not have access to your data, nor do
            we use any analytics or tracking mechanisms. As a result, there is no risk
            of your personal information being misused, shared, or sold.
          </p>
        </div>

        <p className="text-center mt-8 text-zinc-400 text-sm sm:text-base md:text-lg">
          For questions about our privacy or terms, please contact us via our support
          channels.
        </p>
      </section>


    </motion.main>
  );
}
