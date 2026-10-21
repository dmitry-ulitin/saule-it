import type { TransitionDirectionalAnimations } from 'astro';

/**
 * Animation of the page content (<main>) when navigating between pages.
 * The old content fades out quickly while moving up slightly; the new one fades in from below.
 * The keyframes (pageOut / pageIn) are defined in global.css.
 * Visitors with "reduce motion" enabled in their OS get no animation (Astro handles this).
 */
const out = { name: 'pageOut', duration: '0.14s', easing: 'ease-in', fillMode: 'both' };
const into = { name: 'pageIn', duration: '0.32s', easing: 'cubic-bezier(0.2, 0.7, 0.2, 1)', delay: '0.12s', fillMode: 'both' };

export const pageTransition: TransitionDirectionalAnimations = {
  forwards: { old: out, new: into },
  backwards: { old: out, new: into },
};
