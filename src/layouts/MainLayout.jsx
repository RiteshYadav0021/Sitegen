import { Suspense, useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import PillNav from '../components/PillNav'

import { backgrounds } from '../backgrounds/backgroundMap'
import { routeToBg } from '../backgrounds/routeToBg'

const MainLayout = () => {
  const location = useLocation()
  const bgKey = routeToBg[location.pathname]
  const Background = bgKey ? backgrounds[bgKey] : null

  const [enableBg, setEnableBg] = useState(false)

  useEffect(() => {
    if (window.matchMedia('(min-width: 768px)').matches) {
      setEnableBg(true)
    }
  }, [])

  return (
    <main className="w-full h-screen relative overflow-hidden">
      {/* BACKGROUND (ONE AT A TIME) */}
      {Background && enableBg && (
        <Suspense fallback={null}>
          <div className="absolute inset-0 z-0 pointer-events-none">
            <Background />
          </div>
        </Suspense>
      )}

      {/* CONTENT */}
      <div className="relative items-center z-10 h-full flex flex-col">
        <PillNav
          logo="/logo.png"
          logoAlt="Company Logo"
          items={[
            { label: 'Home', href: '/' },
            { label: 'About', href: '/about' },
            { label: 'Services', href: '/services' },
            { label: 'Contact', href: '/contact' }
          ]}
        />

        <div className="flex-1 overflow-hidden">
          <Outlet />
        </div>
      </div>
    </main>
  )
}

export default MainLayout
