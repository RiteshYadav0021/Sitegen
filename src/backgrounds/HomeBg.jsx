import LiquidEther from '../components/LiquidEther'

const HomeBg = () => {
  return (
    <div className="w-full bg-[#050814] h-full relative">
      <LiquidEther
        colors={['#5227FF', '#FF9FFC', '#B19EEF']}
        mouseForce={20}
        cursorSize={100}
        isViscous={false}
        viscous={30}
        iterationsViscous={32}
        iterationsPoisson={32}
        resolution={0.5}
        isBounce={false}
        autoDemo
        autoSpeed={0.5}
        autoIntensity={1.2}
      />
    </div>
  )
}

export default HomeBg
