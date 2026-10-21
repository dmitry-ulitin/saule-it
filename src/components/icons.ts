/** SVG paths of the line icons (24×24, stroke). Rendered by Icon.astro. */
export const iconPaths = {
  arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  building: '<path d="M4 21V5l6-2v18M10 21V8l6 2v11M16 21v-8l4 1.5V21M2 21h20"/>',
  document: '<path d="M14 3H6v18h12V7z"/><path d="M14 3v4h4M9 12h6M9 16h6"/>',
  headset: '<path d="M4 14v-2a8 8 0 0 1 16 0v2"/><rect x="3" y="14" width="4" height="6" rx="1.5"/><rect x="17" y="14" width="4" height="6" rx="1.5"/>',
  shield: '<path d="M12 3l8 3v6c0 4.5-3.4 8-8 9-4.6-1-8-4.5-8-9V6z"/><path d="M8.5 12l2.5 2.5 4.5-5"/>',
  bank: '<path d="M3 9l9-5 9 5M4 9h16M6 9v9M10 9v9M14 9v9M18 9v9M3 20h18"/>',
  structure: '<rect x="9" y="3" width="6" height="5" rx="1"/><rect x="3" y="16" width="6" height="5" rx="1"/><rect x="15" y="16" width="6" height="5" rx="1"/><path d="M12 8v4M6 16v-4h12v4"/>',
  globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.8 3 2.8 15 0 18M12 3c-2.8 3-2.8 15 0 18"/>',
  people: '<circle cx="9" cy="8" r="3.2"/><circle cx="17" cy="9" r="2.6"/><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6M14.5 14.6c.8-.4 1.6-.6 2.5-.6 2.5 0 4.5 2 4.5 4.5"/>',
  layers: '<path d="M12 3l9 5-9 5-9-5z"/><path d="M3 12.5l9 5 9-5M3 16.5l9 5 9-5"/>',
  sliders: '<path d="M6 3v3M6 10v11M12 3v10M12 17v4M18 3v5M18 12v9"/><circle cx="6" cy="8" r="2"/><circle cx="12" cy="15" r="2"/><circle cx="18" cy="10" r="2"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',
  phone: '<path d="M5 3h4l2 5-2.5 1.5a11 11 0 0 0 6 6L16 13l5 2v4a2 2 0 0 1-2 2A17 17 0 0 1 3 5a2 2 0 0 1 2-2z"/>',
  pin: '<path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  check: '<path d="M5 12.5l4.5 4.5L19 7.5"/>',
};

export type IconName = keyof typeof iconPaths;
