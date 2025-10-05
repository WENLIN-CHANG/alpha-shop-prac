import { useState } from "react";

type ShippingOption = {
  id: 'standard' | 'dhl'
  name: string
  price: number
  period: string
}

const SHIPPING_OPTIONS: ShippingOption[] = [
  { id: 'standard', name: '標準運送', price: 0, period: '約 3~7 個工作天' },
  { id: 'dhl', name: 'DHL 貨運', price: 500, period: '48 小時內送達' },
]

type Step2Props = {}

function Step2({}: Step2Props) {
  const [selectedShipping, setSelectedShipping] = useState<'standard' | 'dhl'>('standard')

  return (
    <form className="col col-12" data-phase="shipping">
      <h3 className="form-title">運送方式</h3>
      <section className="form-body col col-12">
        {SHIPPING_OPTIONS.map((option) => (
          <label key={option.id} className="radio-group col col-12"
            data-price={option.price}>
            <input
              type="radio"
              name="shipping"
              value={option.id}
              checked={selectedShipping === option.id}  // 👈 控制選中狀態
              onChange={(e) => setSelectedShipping(e.target.value as 'standard' | 'dhl')}
            />
            <div className="radio-info">
              <div className="col col-12">
                <div className="text">{option.name}</div>
                <div className="price">{option.price === 0 ? '免費' :
                  `$${option.price}`}</div>
              </div>
              <div className="period col col-12">{option.period}</div>
            </div>
            <div className="radio-box-border"></div>
          </label>
        ))}
      </section>
    </form>
  )
}

export default Step2