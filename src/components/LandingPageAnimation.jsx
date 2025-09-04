import React, { useRef } from "react";
import { gsap } from "gsap";
import anime from "animejs";

const LandingPageAnimation = () => {
  const btnRef = useRef(null);
  const textContainerRef = useRef(null);
  const textWrapperRef = useRef(null);
  const headerRef = useRef(null);

  const textContent = [
    "Zealously few furniture repulsive agreeable consisted. Zealously few furniture repulsive agreeable consisted.",
    "Collected breakfast estimable questions in to it. Collected breakfast estimable questions in to it.",
    "For him precaution any advantages dissimilar few. For him precaution any advantages dissimilar few.",
    "Shortly respect ask cousins brought add tedious nay. Shortly respect ask cousins brought add tedious nay.",
    "Object remark lively all did feebly excuse our wooded. Object remark lively all did feebly excuse our wooded.",
    "Sufficient unpleasing an insensible motionless if ye. Sufficient unpleasing an insensible motionless if ye.",
    "The for fully had she there leave merit enjoy forth. The for fully had she there leave merit enjoy forth.",
    "In in written on charmed justice is amiable farther. In in written on charmed justice is amiable farther.",
    "How daughters not promotion few knowledge contented. How daughters not promotion few knowledge contented.",
    "Zealously few furniture repulsive. Zealously few furniture repulsive.",
    "Collected breakfast estimable questions in to it. Collected breakfast estimable questions in to it.",
    "For him precaution any advantages dissimilar few. For him precaution any advantages dissimilar few.",
    "Shortly respect ask cousins brought add tedious nay. Shortly respect ask cousins brought add tedious nay.",
    "Object remark lively all did feebly excuse wooded. Object remark lively all did feebly excuse wooded.",
    "Sufficient unpleasing an insensible motionless ye. Sufficient unpleasing an insensible motionless ye.",
  ];

  const handleEnterClick = () => {
    // Detect screen size for responsive animations
    const isMobile = window.innerWidth <= 768;
    const isSmallMobile = window.innerWidth <= 480;

    // Responsive animation values
    const scaleValue = isSmallMobile ? 1.8 : isMobile ? 2.2 : 4.5;
    const moveDistance = isSmallMobile ? "-1800" : isMobile ? "-2200" : "-3500";
    const yDistance = isSmallMobile ? -200 : isMobile ? -250 : -600;
    const rotateValue = -45; // 45 degrees for ALL screen sizes

    gsap.to(btnRef.current, 1, {
      opacity: 0,
      y: -40,
      ease: "expo.inOut",
    });

    gsap.to(".text-item", 1, {
      x: isMobile ? "200" : "500",
      ease: "expo.inOut",
      delay: 1,
      stagger: 0.1,
    });

    // Set transform origin for better rotation
    gsap.set(textWrapperRef.current, {
      transformOrigin: "center center",
    });

    gsap.to(textWrapperRef.current, 3, {
      y: yDistance,
      x: isMobile ? "10%" : "0%",
      scale: scaleValue,
      rotate: rotateValue,
      ease: "expo.inOut",
      delay: 1.5,
    });

    gsap.to(".text-item", 1, {
      opacity: 1,
      ease: "expo.inOut",
      delay: 3,
    });

    gsap.to(".text-item", 4, {
      x: moveDistance,
      ease: "expo.inOut",
      delay: 3.5,
      stagger: 0.05,
    });

    // Orange background slides down vertically
    gsap.to(textContainerRef.current, 2, {
      y: "100%",
      ease: "expo.inOut",
      delay: 5.5,
    });

    // Animate header text
    if (headerRef.current) {
      const textWrapper = headerRef.current;
      textWrapper.innerHTML =
        textWrapper.textContent?.replace(
          /\S/g,
          "<span class='letter'>$&</span>"
        ) || "";

      anime.timeline().add({
        targets: ".header .letter",
        opacity: [0, 1],
        translateY: [200, 0],
        translateZ: 0,
        easing: "easeOutExpo",
        duration: 2000,
        delay: (el, i) => 7000 + 40 * i,
      });
    }
  };

  return (
    <div className="fixed inset-0 w-full h-screen overflow-hidden">
      {/* Enter Button */}
      <button
        ref={btnRef}
        onClick={handleEnterClick}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 bg-transparent border-none outline-none font-light underline uppercase text-xl md:text-2xl cursor-pointer touch-manipulation min-h-[44px] min-w-[44px] font-sans"
        style={{ WebkitTapHighlightColor: "transparent" }}
      >
        Enter
      </button>

      {/* Orange Background */}
      <div
        ref={textContainerRef}
        className="fixed w-full h-screen bg-orange-custom -z-10"
      />

      {/* Text Animation Wrapper */}
      <div
        ref={textWrapperRef}
        className="fixed w-full h-screen left-[-50%] sm:left-[-40%] lg:left-[-50%] flex flex-col justify-between cursor-default"
        style={{ transformOrigin: "center center" }}
      >
        {textContent.map((text, index) => (
          <div
            key={index}
            className="text-item w-[240%] sm:w-[260%] md:w-[280%] lg:w-[300%] font-voyage text-[12vw] sm:text-[10vw] md:text-[8vw] lg:text-[5vw] uppercase opacity-10 leading-[0.9] sm:leading-[1] md:leading-[1.1] lg:leading-[1.2] break-words"
          >
            {text}
          </div>
        ))}
      </div>

      {/* Header Text */}
      <div
        ref={headerRef}
        className="header fixed w-full h-screen bg-black-custom text-white flex justify-center items-center -z-20 font-voyage text-[2em] sm:text-[2.5em] md:text-[4em] lg:text-[8em] px-2 sm:px-4 lg:px-0 text-center"
      >
        Voyage
      </div>
    </div>
  );
};

export default LandingPageAnimation;
