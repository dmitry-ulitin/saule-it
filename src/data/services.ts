import type { ImageMetadata } from 'astro';
import formation from '../assets/images/service-formation.jpg';
import accounting from '../assets/images/service-accounting.jpg';
import support from '../assets/images/service-support.jpg';
import licensing from '../assets/images/service-licensing.jpg';
import banking from '../assets/images/service-banking.jpg';
import structuring from '../assets/images/service-structuring.jpg';
import type { IconName } from '../components/icons';

/** The six services, in display order. Texts live in src/i18n/<lang>.ts under `services.items`. */
export const serviceIds = ['formation', 'accounting', 'support', 'licensing', 'banking', 'structuring'] as const;
export type ServiceId = (typeof serviceIds)[number];

export const serviceVisuals: Record<ServiceId, { icon: IconName; image: ImageMetadata }> = {
  formation: { icon: 'building', image: formation },
  accounting: { icon: 'document', image: accounting },
  support: { icon: 'headset', image: support },
  licensing: { icon: 'shield', image: licensing },
  banking: { icon: 'bank', image: banking },
  structuring: { icon: 'structure', image: structuring },
};
