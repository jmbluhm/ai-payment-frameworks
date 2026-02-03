interface Step {
  title: string
}

interface StepIndicatorProps {
  steps: Step[]
  currentStep: number
  onStepClick: (index: number) => void
  getStepColor?: (stepIndex: number) => string
  activeColor?: string
  inactiveColor?: string
  completedColor?: string
  activeLineColor?: string
  inactiveLineColor?: string
}

export default function StepIndicator({
  steps,
  currentStep,
  onStepClick,
  getStepColor,
  activeColor = 'bg-protocol-blue text-white',
  inactiveColor = 'bg-light-gray text-medium-gray',
  completedColor = 'bg-protocol-blue/20 text-protocol-blue',
  activeLineColor = 'bg-protocol-blue',
  inactiveLineColor = 'bg-light-gray',
}: StepIndicatorProps) {
  const getButtonColor = (index: number) => {
    if (getStepColor && index === currentStep) {
      return getStepColor(index)
    }
    if (index === currentStep) {
      return activeColor
    }
    if (index < currentStep) {
      return completedColor
    }
    return inactiveColor
  }

  const getLineColor = (index: number) => {
    return index < currentStep ? activeLineColor : inactiveLineColor
  }

  return (
    <div className="mb-8">
      {/* Step circles and connecting lines */}
      <div className="relative flex items-center mb-4">
        {steps.map((_, i) => (
          <div key={i} className="flex-1 flex items-center">
            {/* Circle container with fixed positioning */}
            <div className="flex-1 flex justify-center">
              <button
                onClick={() => onStepClick(i)}
                className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-protocol-blue ${getButtonColor(
                  i
                )}`}
              >
                {i + 1}
              </button>
            </div>
            {/* Connecting line */}
            {i < steps.length - 1 && (
              <div className={`flex-1 h-1 ${getLineColor(i)}`} />
            )}
          </div>
        ))}
      </div>

      {/* Step labels - aligned with circles */}
      <div className="flex items-start">
        {steps.map((step, i) => (
          <div key={i} className="flex-1 flex items-center">
            {/* Label container aligned with circle above */}
            <div className="flex-1 flex justify-center">
              <div
                className={`text-body-sm text-center px-2 ${
                  i === currentStep ? 'text-dark font-semibold' : 'text-medium-gray'
                }`}
              >
                {step.title}
              </div>
            </div>
            {/* Spacer for line (invisible) */}
            {i < steps.length - 1 && <div className="flex-1" />}
          </div>
        ))}
      </div>
    </div>
  )
}
