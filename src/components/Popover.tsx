import React, { useState } from 'react'

interface PopoverProps {
  align?: 'center' | 'right'
  title?: React.ReactNode;
  active?: boolean;
  children: React.ReactNode;
}

export function Popover({ children, active, title, align }: PopoverProps) {
  const left = align === 'right' ? -253 : -150
  const arrow = align === 'right' ? 255 : 153

  return (
    <div className={`popover fade ${active !== false && 'show'} bs-popover-bottom`} role="tooltip" style={{
      position: 'absolute',
      top: 25,
      left,
      width: 300,
      maxWidth: 300,
      pointerEvents: active ? 'auto' : 'none'
    }}>
      <div className="arrow" style={{ left: arrow }}></div>
      {title && <h5 className="popover-title">{title}</h5>}
      <div className="popover-body">
        {children}
      </div>
    </div>
  )
}

export function ContainedPopover({ children, title, toggle, active, align }: PopoverProps & { toggle: React.ReactNode }) {
  const [isActive, setActive] = useState(active === true)
  return (
    <div style={{ position: 'relative', display: 'inline-block'}}>
      <button type="button" style={{ background: 0, border: 0 }} onClick={() => setActive((prev) => !prev)}>
        {toggle}
      </button>
      <Popover active={isActive} title={title} align={align}>{children}</Popover>
    </div>
  )
}
