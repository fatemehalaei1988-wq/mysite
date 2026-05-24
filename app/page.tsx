'use client'

import { motion } from 'framer-motion'

const services = [
  {
    title: 'SEO Optimization',
    desc: 'Advanced SEO strategies for top Google rankings.',
  },
  {
    title: 'Social Media Marketing',
    desc: 'Cinematic social campaigns for modern brands.',
  },
  {
    title: 'UI/UX Design',
    desc: 'Apple-inspired premium user experiences.',
  },
]

const portfolio = [
  {
    title: 'Nike Campaign',
    image:
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff',
  },
  {
    title: 'Luxury Watch Brand',
    image:
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30',
  },
  {
    title: 'Startup Growth',
    image:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
  },
]

const stats = [
  ['250+', 'Projects'],
  ['98%', 'Client Satisfaction'],
  ['15M+', 'Audience Reach'],
  ['12+', 'Awards'],
]

export default function Home() {
  return (
    <main className="bg-[#050816] text-white overflow-hidden">

      {/* NAVBAR */}

      <header className="fixed top-0 left-0 z-50 w-full px-6 py-6">

        <div className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-xl">

          <h1 className="bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-2xl font-black text-transparent">
            NEXORA
          </h1>

          <nav className="hidden gap-8 text-sm text-gray-300 md:flex">
            <a href="#">Home</a>
            <a href="#">Services</a>
            <a href="#">Portfolio</a>
            <a href="#">Contact</a>
          </nav>

          <button className="rounded-full bg-purple-600 px-6 py-3 text-sm font-bold hover:bg-purple-700">
            Let’s Talk
          </button>

        </div>

      </header>

      {/* HERO */}

      <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">

        <video
          autoPlay
          muted
          loop
          className="absolute inset-0 h-full w-full object-cover opacity-20"
        >
          <source
            src="https://cdn.coverr.co/videos/coverr-working-on-a-laptop-5176/1080p.mp4"
            type="video/mp4"
          />
        </video>

        <div className="absolute left-[-200px] top-[-200px] h-[500px] w-[500px] rounded-full bg-purple-600 blur-[150px] opacity-30" />

        <div className="absolute bottom-[-200px] right-[-200px] h-[500px] w-[500px] rounded-full bg-cyan-500 blur-[150px] opacity-30" />

        <div className="relative z-10 text-center">

          <motion.h1
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-6xl font-black md:text-8xl"
          >

            NEXT LEVEL

            <span className="block bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent">
              DIGITAL MARKETING
            </span>

          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mx-auto mt-8 max-w-3xl text-xl text-gray-300"
          >
            Premium cinematic digital experiences inspired by
            Apple, Stripe and Awwwards websites.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="mt-10 flex justify-center gap-6"
          >

            <button className="rounded-full bg-purple-600 px-8 py-4 font-bold hover:bg-purple-700 transition">
              Start Project
            </button>

            <button className="rounded-full border border-white/20 bg-white/10 px-8 py-4 backdrop-blur-xl">
              View Portfolio
            </button>

          </motion.div>

        </div>

      </section>

      {/* SERVICES */}

      <section className="px-6 py-32">

        <div className="mx-auto max-w-7xl">

          <h2 className="mb-20 text-center text-5xl font-black">
            Premium Services
          </h2>

          <div className="grid gap-8 md:grid-cols-3">

            {services.map((service, index) => (

              <motion.div
                whileHover={{ y: -10 }}
                key={index}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
              >

                <div className="mb-6 h-16 w-16 rounded-2xl bg-gradient-to-r from-purple-500 to-cyan-400" />

                <h3 className="text-2xl font-bold">
                  {service.title}
                </h3>

                <p className="mt-4 leading-relaxed text-gray-400">
                  {service.desc}
                </p>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* STATS */}

      <section className="px-6 py-24">

        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-4">

          {stats.map((item, index) => (

            <div
              key={index}
              className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center backdrop-blur-xl"
            >

              <h3 className="bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-5xl font-black text-transparent">
                {item[0]}
              </h3>

              <p className="mt-4 text-gray-400">
                {item[1]}
              </p>

            </div>

          ))}

        </div>

      </section>

      {/* PORTFOLIO */}

      <section className="px-6 py-32">

        <div className="mx-auto max-w-7xl">

          <h2 className="mb-20 text-center text-5xl font-black">
            Selected Works
          </h2>

          <div className="grid gap-8 md:grid-cols-3">

            {portfolio.map((item, index) => (

              <div
                key={index}
                className="group relative h-[500px] overflow-hidden rounded-3xl"
              >

                <img
                  src={item.image}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />

                <div className="absolute bottom-8 left-8">

                  <h3 className="text-3xl font-bold">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-gray-300">
                    Branding & Marketing
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* TESTIMONIAL */}

      <section className="px-6 py-32">

        <div className="mx-auto max-w-5xl text-center">

          <h2 className="mb-20 text-5xl font-black">
            What Clients Say
          </h2>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-12 backdrop-blur-xl">

            <p className="text-2xl leading-relaxed text-gray-300">
              “One of the best digital experiences we’ve ever had.
              The animations and branding were absolutely insane.”
            </p>

            <div className="mt-8">

              <h4 className="text-xl font-bold">
                Michael Johnson
              </h4>

              <p className="text-gray-500">
                CEO of NovaTech
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* CONTACT */}

      <section className="px-6 py-32">

        <div className="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl">

          <h2 className="mb-10 text-center text-5xl font-black">
            Start Your Project
          </h2>

          <form className="grid gap-6">

            <input
              type="text"
              placeholder="Your Name"
              className="rounded-xl border border-white/10 bg-white/5 p-4"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="rounded-xl border border-white/10 bg-white/5 p-4"
            />

            <textarea
              rows={5}
              placeholder="Tell us about your project"
              className="rounded-xl border border-white/10 bg-white/5 p-4"
            />

            <button className="rounded-xl bg-purple-600 py-4 font-bold hover:bg-purple-700 transition">
              Send Message
            </button>

          </form>

        </div>

      </section>

      {/* CTA */}

      <section className="px-6 py-32 text-center">

        <div className="mx-auto max-w-5xl rounded-[40px] border border-white/10 bg-gradient-to-r from-purple-600/20 to-cyan-500/20 p-20 backdrop-blur-xl">

          <h2 className="text-6xl font-black leading-tight">

            Ready To Build

            <span className="block bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent">
              Your Next Brand?
            </span>

          </h2>

          <button className="mt-10 rounded-full bg-white px-10 py-5 font-bold text-black">
            Let’s Talk
          </button>

        </div>

      </section>

      {/* FOOTER */}

      <footer className="border-t border-white/10 px-6 py-10">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">

          <h2 className="bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-2xl font-black text-transparent">
            NEXORA
          </h2>

          <p className="text-gray-500">
            © 2026 All rights reserved.
          </p>

        </div>

      </footer>

    </main>
  )
}