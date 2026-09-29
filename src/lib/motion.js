export const ease = [0.22, 1, 0.36, 1];

// scroll-in fade + rise, spread onto a motion element: <motion.div {...reveal(0.1)} />
// animate glass cards with this directly, never through a fading parent,
// or their backdrop blur disappears while the parent fades
export const reveal = (delay = 0, from = { y: 60 }) => ({
  initial: { opacity: 0, ...from },
  whileInView: { opacity: 1, x: 0, y: 0, scale: 1 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.8, ease, delay },
});
