import React from "react";
import TestimonialCard from "../cards/TestimonialCard";

function TestimonialSection() {
  const data = [
    {
      avatarUrl: "/images/t1.png",
      realname: "Da Fessler",
      username: "@DanFessler",
      comment:
        "Greatest thing since scaleform for UI  design in game engines… but like  actually built from the ground up end  to end and 1000x better",
    },
    {
      avatarUrl: "/images/t2.png",
      realname: "ELLIE X",
      username: "@heyellieday",
      comment:
        "bullish on @rive_app. it's as if they've  seen the end game of perfect  programmable visuals and are  hellbent on delivering it to us all",
    },
    {
      avatarUrl: "/images/t3.png",
      realname: "R☻SS",
      username: "@rossplaskow",
      comment:
        "if i could recommend one new skill for AE animators right now.  it would be to learn @rive_app",
    },

    {
      avatarUrl: "/images/t4.png",
      realname: "Kurt Hartfelder",
      username: "@KurtHartfelder",
      comment:
        "Rive's State Machine is a game  changer. We here at Duolingo have  an ever-growing library of animated  assets across our app. The State  Machine helps us scale our work and  bridge the animator-developer gap  in ways that were previously  inaccessible.",
    },

    {
      avatarUrl: "/images/t5.png",
      realname: "Salman 🦊",
      username: "@daretorant",
      comment:
        "this is so cool—“state machine  driven design” seems like a totally  different way of building animations,  yet it’s so intuitive that it makes  sense immediately rarely do we see genuinely new paradigms in development tools. this is one of those cases",
    },

    {
      avatarUrl: "/images/t6.png",
      realname: "Tim Kägy",
      username: "",
      comment:
        "Rive completely changed the way  we're producing our content at  simpleclub. Using the State Machine  we're able to support our  explanations with vivid and  interactive animations that really  improve the way people learn with  our app.",
    },

    {
      avatarUrl: "/images/t7.png",
      realname: "David Svezhintsev 🌸",
      username: "@daveranan",
      comment:
        "That was easiest and quickest  animation I've ever done that will  have a huge impact for my project  down the road. LOVE THIS SO  MUCH. Thanks  @rive_app ♥️♥️♥",
    },

    {
      avatarUrl: "/images/t8.png",
      realname: "Devo Frohne",
      username: "@DevonFrohne",
      comment:
        "Rive's State Machine is next level fun  and makes creating complex  interactions a breeze. Designers and  engineers rejoice with a single  source of truth that runs across all  your platforms.",
    },

    {
      avatarUrl: "/images/t9.png",
      realname: "Tsvetomir Filipov",
      username: "@c3ck1na",
      comment:
        "I am on my 2nd attempt with @rive_app.This time I'm trying to make a shooting range game and I love how much experience the State Machine is giving - it's boosting the creativity!",
    },
    {
      avatarUrl: "/images/t10.png",
      realname: "Surferux",
      username: "@surferux",
      comment:
        "I just started using this Mesh new feature with one of my illustrations. It's very well done, guys 👍",
    },
    {
      avatarUrl: "/images/t11.png",
      realname: "niv",
      username: "@Niven5111",
      comment:
        "wow, @rive_app is actually incredible. super sleek, easy to use, and streamlined -- made this in about 15 minutes.",
    },
    {
      avatarUrl: "/images/t12.png",
      realname: "Tom Wilson",
      username: "@tomwilson",
      comment:
        "Rive is great I used it recently. Much nicer than trying to memorise what works and what doesn't in adobe after effects with Lottie..",
    },
  ];
  return (
    <section className="bg-[#111111]">
      <div>
        <p className="text-white font-bold text-[28px] text-center py-[60px]">
          Loved by designers, animators, and devs
        </p>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px] ">
            {data.map((review, index) => (
              <TestimonialCard {...review} key={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialSection;
