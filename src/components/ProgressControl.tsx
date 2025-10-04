type ProgressControlProps = {
  onNext?: () => void
  onPrev?: () => void
  showPrev: boolean
  nextButtonText: string
  isLastStep?: boolean 
}

function ProgressControl({
  onNext,
  onPrev,
  showPrev,
  nextButtonText,
  isLastStep = false 
}: ProgressControlProps) {
  return (
    <section className="button-group col col-12">
      {/* 1. 條件渲染：只有 showPrev 是 true 才顯示上一步按鈕 */}
      {showPrev && (
        <button className="prev" onClick={() => onPrev?.()} type="button">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
            <path d="M12.5 15L7.5 10L12.5 5" stroke="currentColor" strokeWidth="2" fill="none" />
          </svg>
          上一步
        </button>
      )}

      {/* 2. 下一步按鈕（一定會顯示） */}
      <button className="next" onClick={() => onNext?.()} type="button">
        {nextButtonText}
        {!isLastStep && (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
            <path d="M7.5 5L12.5 10L7.5 15" stroke="currentColor" strokeWidth="2" fill="none" />
          </svg>
        )}
      </button>
    </section>
  )
}

export default ProgressControl