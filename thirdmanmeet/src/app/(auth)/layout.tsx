import React from 'react'

interface Props {
    children: React.ReactNode;
}

const layout = ({children}: Props) => {
      return (
        <div className="relative min-h-svh flex items-center justify-center p-6 md:p-10 bg-cover bg-center" style={{ backgroundImage: "url('/pex1.jpg')" }}>
      <div className="absolute inset-0 bg-muted/90 z-0" />

      <div className="relative z-10 flex flex-col items-center">
        {children}
      </div>
    </div>

  )
}

export default layout