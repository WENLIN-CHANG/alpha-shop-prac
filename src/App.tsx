import { useState } from "react"
import { CheckoutStep } from "./types"
import StepProgress from "./components/StepProgress"
import Step1 from "./components/Step1"
import ProgressControl from "./components/ProgressControl"


function App() {
  const [currentStep, setCurrentStep] = useState<CheckoutStep>('address')

  const handleNext = () => {
    if (currentStep === 'address') {
      setCurrentStep('shipping')
    } else if (currentStep === 'shipping') {
      setCurrentStep('credit-card')
    }
  }

  const handlePrev = () => {
    if (currentStep === 'shipping') {
      setCurrentStep('address')
    } else if (currentStep === 'credit-card') {
      setCurrentStep('shipping')
    }
  }

  const getButtonText = () => {
    return currentStep === 'credit-card' ? '確認下單' : '下一步'
  }

  return (
    <div className="container">
      <StepProgress currentStep={currentStep} />

      {/* 表單區域 */}
      {currentStep === 'address' && <Step1 />}

      <ProgressControl
        onNext={handleNext}
        onPrev={handlePrev}
        showPrev={currentStep !== 'address'} 
        nextButtonText={getButtonText()}
        isLastStep={currentStep === 'credit-card'} 
      />
    </div>
  )
}

export default App