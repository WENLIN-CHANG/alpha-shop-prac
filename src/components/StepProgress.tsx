import React from 'react'
import { CheckoutStep } from "../types";

const STEPS = [
  { id: 'address', label: '寄送地址', number: 1 },
  { id: 'shipping', label: '運送方式', number: 2 },
  { id: 'credit-card', label: '付款資訊', number: 3 },
] as const

type StepProgressProps = {
  currentStep: CheckoutStep
}

function StepProgress({ currentStep }: StepProgressProps) {

  return (
    <section className="progress-container col col-12">
      {STEPS.map((step, index) => (
        // 用 Fragment 取代 div，避免多餘的 DOM 節點
        <React.Fragment key={step.id}>
          <span
            className={`progress-group ${currentStep === step.id ? 'active' : ''}`}
            data-phase={step.id}>
              <span className="progress-icon">
                <span className="text">{step.number}</span>
              </span>
              <span className="progress-label">{step.label}</span>
          </span>

          {index < STEPS.length - 1 && (
            <span className="progress-bar" data-order={index + 1}></span>
          )}
        </React.Fragment>
      ))}
    </section>
  )
}

export default StepProgress