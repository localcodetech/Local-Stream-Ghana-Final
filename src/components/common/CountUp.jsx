import { useEffect, useRef } from "react";
import { animate, motion, useInView, useMotionValue, useReducedMotion, useTransform } from "motion/react";

// counts from 0 to `to` the first time it scrolls into view: <CountUp to={100} suffix="+" />
const CountUp = ({ to, suffix = "", duration = 2 }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });
    const reduceMotion = useReducedMotion();

    const count = useMotionValue(reduceMotion ? to : 0);
    const text = useTransform(count, (value) => Math.round(value) + suffix);

    useEffect(() => {
        if (!inView || reduceMotion) return;
        const controls = animate(count, to, { duration, ease: "easeOut" });
        return () => controls.stop();
    }, [inView, reduceMotion, count, to, duration]);

    // tabular-nums keeps every digit the same width so the number doesn't jitter
    return <motion.span ref={ref} className="tabular-nums">{text}</motion.span>;
};

export default CountUp;
