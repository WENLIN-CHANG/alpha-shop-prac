// types.ts - 型別定義檔案

// 定義資料結構
export type CheckoutStep = 'address' | 'shipping' | 'credit-card'
// "union type"（聯合型別）
// 意思是：CheckoutStep 只能是這三個字串之一

export type Title = 'mr' | 'ms' | 'mx'

// 地址表單資料
export type AddressForm = {
  // "object type"（物件型別）
  title: Title          // 稱謂（只能是 'mr' | 'ms' | 'mx'）
  name: string         
  phone: string        
  email: string       
  city: string      
  address: string     
}