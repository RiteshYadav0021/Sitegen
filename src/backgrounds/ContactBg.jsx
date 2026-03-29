import Hyperspeed from '../components/Hyperspeed'
import { hyperspeedPresets } from './presets/hyperspeed.presets'

const ContactBg = () => {
  return (
    <div className="fixed inset-0 -z-50 pointer-events-none bg-[#050814]">
      <Hyperspeed
        effectOptions={{
          ...hyperspeedPresets.four,

          // 🔥 IMPORTANT visual tweaks
          speedUp: 2.6,
          carLightsFade: 0.22,
          movingCloserSpeed: [-180, -260],

          colors: {
            ...hyperspeedPresets.four.colors,
            background: 0x050814
          }
        }}
      />
    </div>
  )
}

export default ContactBg
