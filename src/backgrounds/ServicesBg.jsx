import Orb from '../components/Orb'

const ServicesBg = () => {
  return (
    <div className="w-full bg-[#050814]  h-full relative">
      <Orb
        hoverIntensity={2}
        rotateOnHover
        hue={0}
        forceHoverState={false}
        backgroundColor="#000000"
      />
    </div>
  )
}

export default ServicesBg
