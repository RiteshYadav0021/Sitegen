import { lazy } from 'react'

// Lazy load ALL backgrounds
export const backgrounds = {
  home: lazy(() => import('./HomeBg')),
  about: lazy(() => import('./AboutBg')),
  services: lazy(() => import('./ServicesBg')),
  contact: lazy(() => import('./ContactBg')),
}
