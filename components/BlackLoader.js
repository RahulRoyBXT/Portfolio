import { useEffect } from "react";
import gsap from "gsap";

const BlackLoader = () => {
  useEffect(() => {
    gsap.to(".loader", {
      duration: 1,
      y: "-100%",
      ease: "power4.easeInOut",
      delay: 2,
      display: "none"
    })
  })
  return (
    <div className="loader">
    </div>
  )
}
export default BlackLoader;