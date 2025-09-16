'use client'

import { TrendingUp } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

interface LogoProps {
  className?: string
  showText?: boolean
  size?: 'sm' | 'md' | 'lg'
}

export default function Logo({ className = '', showText = true, size = 'md' }: LogoProps) {
  const [hasImage, setHasImage] = useState(true)

  const sizeClasses = {
    sm: 'w-9 h-9',
    md: 'w-12 h-12',
    lg: 'w-18 h-18'
  }

  const textSizes = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-3xl'
  }

  const handleImageError = () => {
    setHasImage(false)
  }

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {hasImage ? (
        <Image
          src="/logo.png"
          alt="ProfitPeers Logo"
          width={size === 'sm' ? 36 : size === 'md' ? 48 : 72}
          height={size === 'sm' ? 36 : size === 'md' ? 48 : 72}
          className={sizeClasses[size]}
          onError={handleImageError}
          priority
        />
      ) : (
        <div className={`${sizeClasses[size]} bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center`}>
          <TrendingUp className="w-3/4 h-3/4 text-white" />
        </div>
      )}
      {showText && (
        <span className={`font-bold text-gray-900 ${textSizes[size]}`}>
          ProfitPeers
        </span>
      )}
    </div>
  )
}