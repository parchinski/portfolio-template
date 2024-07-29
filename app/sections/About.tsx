import React from "react";
import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody.tsx";
import AnimatedTitle from "../animations/AnimatedTitle.tsx";

const About = () => {
  return (
    <section
      className="relative z-10 w-full items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center pb-36 pt-16 md:pb-44 md:pt-20 lg:pb-56 lg:pt-20"
      id="about"
    >
      <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px]">
        <AnimatedTitle
          text={"ABOUT ME"}
          className={
            "mb-10 text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
          }
          wordSpace={"mr-[14px]"}
          charSpace={"mr-[0.001em]"}
        />

        <div className="mx-auto flex w-[100%] flex-col lg:max-w-[1200px] lg:flex-row lg:gap-20">
          <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-medium  leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[20px] md:leading-relaxed lg:mb-16  lg:max-w-[90%] lg:text-[24px] ">
            <AnimatedBody text="I am pursuing a Bachelor of Science in Information Technology at University of Cental Florida (UCF). I am working on learning more about Front-end & Full Stack Development. I have good control of Javascript, Next.js, React.js, HTML, and CSS. I believe in trying out new things and picking up hard challenges as it is always great to have any kind of learning experience where I can work in a proffesional environment. I'm always very interested in exploring my weaknesses" />
            <AnimatedBody
              delay={0.1}
              text="Whether I'm designing a sleek user interface or coding a complex application, I'm always striving to create something unique and innovative. I love experimenting with new technologies and staying up-to-date with the latest trends in the tech world."
            />
            <AnimatedBody
              delay={0.2}
              text="Right now, I'm working on some exciting projects such as a Notion Clone and an expo application. But I'm always open to new opportunities and collaborations."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
