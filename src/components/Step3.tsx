import { useState } from "react";
import { CreditCardForm } from "../types";

type Step3Props = {}

function Step3({}: Step3Props) {
  const [formData, setFormData] = useState<CreditCardForm>({
    cardholderName: '',
    cardNumber: '',
    expiryDate: '',
    cvc: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <form className="col col-12" data-phase="credit-card">
      <h3 className="form-title">付款資訊</h3>
      <section className="form-body col col-12">
        <div className="col col-12">
          <div className="input-group input-w-lg-4 input-w-sm-full">
            <div className="input-label">持卡人姓名</div>
            <input
              type="text"
              name="cardholderName"
              value={formData.cardholderName}
              onChange={handleChange}
              placeholder="John Doe"
            />
          </div>
        </div>

        <div className="col col-12">
          <div className="input-group input-w-lg-4 input-w-sm-full">
            <div className="input-label">卡號</div>
            <input
              type="text"
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleChange}
              placeholder="1111 2222 3333 4444"
              inputMode="numeric"
              maxLength={16}
            />
          </div>
        </div>

        <div className="col col-12">
          <div className="input-group input-w-lg-3 input-w-sm-s3">
            <div className="input-label">有效期限</div>
            <input
              type="text"
              name="expiryDate"
              value={formData.expiryDate}
              onChange={handleChange}
              placeholder="MM/YY"
              inputMode="numeric"
            />
          </div>
          <div className="input-group input-w-lg-3 input-w-sm-s3">
            <div className="input-label">CVC / CCV</div>
            <input
              type="text"
              name="cvc"
              value={formData.cvc}
              onChange={handleChange}
              placeholder="123"
              inputMode="numeric"
              maxLength={4}
            />
          </div>
        </div>
      </section>
    </form>
  )
}

export default Step3