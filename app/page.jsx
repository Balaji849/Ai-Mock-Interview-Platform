
  import BentoCard from "@/components/BentoCard";
import { CodeDemo } from "@/components/demo-components-animate-code";
import { GoldTitle, GrayTitle, SectionHeading, SectionLabel } from "@/components/reusables";
  import { Badge } from "@/components/ui/badge";
  import { Button } from "@/components/ui/button";
  import { Particles } from "@/components/ui/particles";
  import { Spotlight } from "@/components/ui/spotlight-new";
import { AI_TAGS, AVATARS, LOGOS, ROLES, SLOTS } from "@/lib/data";
import { PricingTable } from "@clerk/nextjs";


import { Bot, Calendar, Check, Wallet } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

  export default function Home() {
   return (
    <div className="bg-black overflow-x-hidden">

      {/* Background Particles */}
      

      {/* Hero Section */}
      <section className="pt-28 sm:pt-32 relative min-h-screen grid grid-cols-1 
      lg:grid-cols-5 px-4 sm:px-8 pb-20 overflow-hidden z-10" id="home">
        <div className="absolute inset-0 z-0 pointer-events-none">
        <Particles
        />
      </div>

        <div className="col-span-full lg:col-span-3 flex flex-col
        items-center justify-center text-center lg:-rotate-2">

          <Badge variant="purple">
            Powered by AI - Now in Beta
          </Badge>

          <h1 className=" relative text-5xl sm:text-6xl lg:text-7xl
          tracking-tighter max-w-4xl">
            <GrayTitle>Ace your next interview</GrayTitle><br />
            <GoldTitle>with real experts</GoldTitle>
          </h1>

          <p className="relative text-sm sm:text-base md:text-lg text-stone-400
          max-w-xl mt-6 leading-relaxed">
            Book 1:1 mock interviews with senior engineers from top companies.
            Get AI-powered feedback, role-specific questions, and the confidence
            to land your dream job. Your interview success starts here.

          </p>

          <div className="relative flex justify-center gap-2 sm:gap-4 mt-10 sm:w-auto">
            <Link href="/onboarding">
            <Button variant="purple" size="hero">
              Get Started
            </Button>
            </Link>

            <Link href="/explore">
            <Button variant="outline" size="hero">
              Browse Interviews→
            </Button>
            </Link>

          </div>


          <div className="relative flex items-center justify-center gap-3 sm:gap-4
          mt-8 sm:mt-16">
            <div className="flex">
              {AVATARS.map((av,i)=>(
                <div key={i} className={`w-8 h-8 rounded-full border-2 border-[#0a0a0b]
                overflow-hidden ${i >0 ? '-ml-2' : ''}`}>
                  <Image
                  src={av.src}
                  alt="user avatar"
                  width={32}
                  height={32}
                  className="w-full h-full object-cover"/>
                </div>
              ))}
            </div>

            <p className="text-sm text-stone-500 text-center sm:text-left">
              <strong className="text-stone-400 font-medium">
                   2,400+ engineers have already
              </strong>{" "}
                cracked FAANG interviews via prepflow.
            </p>

          </div>

        </div>

        <div className="col-span-full lg:col-span-2 flex items-center justify-center
        lg:justify-start mt-12 lg:mt-0 lg:rotate-3">
          <CodeDemo duration={30000} writing/>

        </div>

      </section>

      <section className="relative z-10 border-y border-white/10 py-14">
      <p className="text-center text-xs font-medium text-stone-600
      tracking-widest uppercase mb-8">
        Interviewees landed roles at</p>

        <div className="flex flex-wrap items-center justify-center gap-24 px-6">
          {LOGOS.map((l)=>(
           
              <Image
                key={l.alt}
                src={l.src}
                alt={l.alt}
                width={50}
                height={50}
                className="h-6 w-auto opacity-60 grayscale"
              />
            
          ))}
        </div>

      </section>

      <section className="relative z-10 py-8 max-w-5xl mx-auto px-6" id="features">
        <div className="text-center mb-16">
          <SectionLabel>Features</SectionLabel>
          <SectionHeading
           gray="Everything you need,"
            purple="nothing you don't."
          />
        </div>

        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-12 md:col-span-4">
            < BentoCard
              icon={<Bot size={20} className="text-purple-400" />}
              title={<GrayTitle>AI Question Generator</GrayTitle>}
              desc="Interviewers get a live AI co-pilot generating role-specific questions on demand — system design, behavioural, DSA — all tailored to the candidate's level."
            >
              <div className="flex flex-wrap gap-2 mt-5">
                {AI_TAGS.map((t) => (
                  <Badge key={t.label} variant={t.active ? "purple" : "outline"}>
                    {t.label}
                  </Badge>
                ))}
              </div>
            </BentoCard>
          </div>

           <div className="col-span-12 md:col-span-4">
            <BentoCard
              icon={<Wallet size={16} className="text-purple-400" />}
              title={<GrayTitle>Credit System</GrayTitle>}
              desc="Subscribe for monthly credits. Book sessions. Interviewers earn and withdraw any time."
            >
              <div className="mt-5 rounded-xl bg-[#141417] border border-white/10 p-5 flex justify-between items-end">
                <div>
                  <p className="text-xs text-stone-600 mb-1">Your balance</p>
                  <p className="text-4xl leading-none bg-linear-to-br from-purple-300 to-purple-500 bg-clip-text text-transparent">
                    7
                  </p>
                  <p className="text-xs text-stone-600 mt-1">
                    credits remaining
                  </p>
                </div>

                <Badge variant="secondary">+10 this month</Badge>
              </div>
            </BentoCard>
          </div>

         <div className="col-span-12 md:col-span-4">
            <BentoCard
             icon={<Calendar size={20} className="text-purple-400" />}
              title={<GoldTitle>Slot-based Scheduling</GoldTitle>}
              desc="Interviewers set availability once. Interviewees pick from open slots and confirm with one click — no back-and-forth needed."
            >
              <div className="flex flex-wrap gap-2 mt-5">
                {SLOTS.map((s) => (
                  <span
                    key={s.label}
                    className={`text-xs px-3 py-1.5 rounded-lg border ${s.cls}`}
                  >
                    {s.label}
                  </span>
                ))}
              </div>
            </BentoCard>
          </div>



          </div>
      </section>

      <section className="relative z-10 pb-20 max-w-5xl mx-auto px-6" id="about">
        <div className="text-center mb-16">
          <SectionLabel>who it&apos;s for</SectionLabel>
          <SectionHeading gray="Built for both sides" purple="of the table" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {ROLES.map((role)=>(
            <div key={role.label} 
            className="relative bg-[#0f0f11] border border-white/10 hover:border-purple-400/20
            rounded-2xl p-12 h-full transition duration-300 overflow-hidden">
              <span className="inline-block text-xs font-semibold text-purple-400
              tracking-widest uppercase border border-purple-400/20 bg-purple-400/10
              rounded-full px-3 py-1.5 mb-5">
                {role.label}

              </span>

              <h3 className="text-2xl tracking-tight mb-4">
                {role.title}
              </h3>

              <p className="text-sm text-stone-400 leading-relaxed mb-8">
                {role.desc}
              </p>

               <ul className="space-y-3">
                {role.perks.map((p) => (
                  <li key={p} className="flex gap-3 text-sm text-stone-400">
                    <span className="mt-0.5 min-w-5 h-5 rounded-full bg-purple-400/10 border border-purple-400/20 flex items-center justify-center text-xs text-purple-400 ">
                      <Check size={12}/>
                    </span>
                    {p}
                  </li>
                ))}
              </ul>

            </div>
          ))}
        </div>

      </section>

        <section className="relative z-10 pb-28 max-w-5xl mx-auto px-6 overflow-visible" id="pricing">
        <div className="text-center mb-16">
          <SectionLabel>Pricing</SectionLabel>
          <SectionHeading
            gray="Simple, transparent"
            purple="credit-based plans"
          />
          <p className="text-stone-400 mt-3 text-sm">
            Each credit = one session. Unused credits roll over.
          </p>
        </div>
        <PricingTable checkoutProps={{
          appearance:{
            elements:{
              drawerRoot:{
                zIndex:2000,
              }
            }
          }
        }}/>
      </section>


   {/* CTA */}
      <section className="relative z-10 pb-28 max-w-5xl mx-auto px-6">
        <div className="relative border border-purple-400/20 rounded-3xl px-3 sm:px-16 py-20 bg-linear-to-br from-purple-400/5 text-center overflow-hidden">
      
          <h2 className="relative text-4xl md:text-5xl leading-tight tracking-tight mb-4">
            <GrayTitle>Your next interview</GrayTitle>
            <br />
            <GoldTitle>starts here</GoldTitle>
          </h2>

          <p className="relative text-stone-400 font-light text-sm mb-11">
            Join thousands of engineers already levelling up on Prepflow.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/onboarding" className="relative">
              <Button variant="purple" size="hero">
                Get started
              </Button>
            </Link>

            <Link href="/explore" className="relative">
              <Button variant="outline" size="hero">
                Browse Interviewers →
              </Button>
            </Link>
          </div>
        </div>

      </section>

    </div>
  );
  }
