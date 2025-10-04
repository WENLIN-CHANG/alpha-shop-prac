import { CheckoutStep } from "../types";

type StepProgressProps = {
  currentStep: CheckoutStep
}

function StepProgress({ currentStep }: StepProgressProps) {
  const steps = [
    { id: 'address' as const, label: '寄送地址', number: 1 },
    { id: 'shipping' as const, label: '運送方式', number: 2 },
    { id: 'credit-card' as const, label: '付款資訊', number: 3 },
  ]

  return (
    <section className="progress-container col col-12">
      {steps.map((step, index) => (
        <div key={step.id}>
          <span
            className={`progress-group ${currentStep === step.id ? 'active' : ''}`}
            data-phase={step.id}>
              <span className="progress-icon">
                <span className="text">{step.number}</span>
              </span>
              <span className="progress-label">{step.label}</span>
          </span>

          {index < steps.length - 1 && (
            <span className="progress-bar" data-order={step.number}></span>
          )}
        </div>
      ))}
    </section>
  )
}

export default StepProgress