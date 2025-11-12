"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import OceanWaves from "./ocean-waves"
import { X, Gift, Sparkles, Cake, PartyPopper } from "lucide-react"

export default function GreetingCard() {
  const [isOpen, setIsOpen] = useState(false)
  const [galleryOpen, setGalleryOpen] = useState(false)
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  const allImages = [
    "/happy-celebration-photo.jpg",
    "/celebration-balloons.jpg",
    "/festive-birthday-cake.png",
    "/colorful-gift-boxes.png",
    "/party-confetti.jpg",
  ]

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    setPrefersReducedMotion(mediaQuery.matches)
  }, [])

  const handleCardClick = () => {
    if (!isOpen && !galleryOpen) {
      setIsOpen(true)

      setTimeout(() => {
        if (audioRef.current) {
          audioRef.current.volume = 0.35
          audioRef.current.play().catch((err) => console.log("Audio play prevented:", err))
        }
      }, 1000)
    }
  }

  const handleCloseClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    setIsOpen(false)
    if (audioRef.current) {
      audioRef.current.pause()
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault()
      handleCardClick()
    }
  }

  const handleImageClick = (e: React.MouseEvent, imageSrc: string) => {
    e.stopPropagation()
    const index = allImages.indexOf(imageSrc)
    setSelectedImageIndex(index >= 0 ? index : 0)
    setGalleryOpen(true)
  }

  const handleCloseGallery = (e: React.MouseEvent) => {
    e.stopPropagation()
    setGalleryOpen(false)
  }

  return (
    <>
      <OceanWaves />

      {isOpen && (
        <div className="birthday-decorations">
          {/* Floating birthday elements */}
          <div className="floating-birthday-element balloon-1">
            <div className="w-12 h-16 bg-gradient-to-b from-pink-400 to-pink-600 rounded-full relative">
              <div className="absolute bottom-0 left-1/2 w-px h-8 bg-pink-800 transform -translate-x-1/2"></div>
            </div>
          </div>
          <div className="floating-birthday-element balloon-2">
            <div className="w-10 h-14 bg-gradient-to-b from-blue-400 to-blue-600 rounded-full relative">
              <div className="absolute bottom-0 left-1/2 w-px h-8 bg-blue-800 transform -translate-x-1/2"></div>
            </div>
          </div>
          <div className="floating-birthday-element balloon-3">
            <div className="w-11 h-15 bg-gradient-to-b from-yellow-400 to-yellow-600 rounded-full relative">
              <div className="absolute bottom-0 left-1/2 w-px h-8 bg-yellow-800 transform -translate-x-1/2"></div>
            </div>
          </div>
          <div className="floating-birthday-element confetti-1">
            <Sparkles className="w-8 h-8 text-yellow-400" />
          </div>
          <div className="floating-birthday-element confetti-2">
            <Sparkles className="w-6 h-6 text-pink-400" />
          </div>
          <div className="floating-birthday-element gift-1">
            <Gift className="w-10 h-10 text-purple-500" />
          </div>
          <div className="floating-birthday-element cake-1">
            <Cake className="w-10 h-10 text-orange-500" />
          </div>
          <div className="floating-birthday-element party-1">
            <PartyPopper className="w-8 h-8 text-blue-500" />
          </div>
        </div>
      )}

      {!isOpen && (
        <>
          {/* Birthday text and decorations on left side */}
          <div className="birthday-left-decorations">
            <div className="birthday-title">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white text-center mb-4 font-serif drop-shadow-lg">
                Happy
                <br />
                Birthday!
              </h1>
              <div className="flex justify-center gap-4 mb-8">
                <Cake className="w-12 h-12 text-yellow-300 animate-bounce" style={{ animationDelay: "0s" }} />
                <PartyPopper className="w-12 h-12 text-pink-300 animate-bounce" style={{ animationDelay: "0.2s" }} />
                <Gift className="w-12 h-12 text-purple-300 animate-bounce" style={{ animationDelay: "0.4s" }} />
              </div>
            </div>

            {/* Large decorative balloons */}
            <div className="large-balloon large-balloon-1">
              <div className="w-20 h-28 bg-gradient-to-b from-red-400 to-red-600 rounded-full relative shadow-lg">
                <div className="absolute top-2 left-4 w-6 h-8 bg-white/30 rounded-full"></div>
                <div className="absolute bottom-0 left-1/2 w-0.5 h-16 bg-red-900 transform -translate-x-1/2"></div>
              </div>
            </div>
            <div className="large-balloon large-balloon-2">
              <div className="w-24 h-32 bg-gradient-to-b from-purple-400 to-purple-600 rounded-full relative shadow-lg">
                <div className="absolute top-3 left-5 w-7 h-9 bg-white/30 rounded-full"></div>
                <div className="absolute bottom-0 left-1/2 w-0.5 h-20 bg-purple-900 transform -translate-x-1/2"></div>
              </div>
            </div>
            <div className="large-balloon large-balloon-3">
              <div className="w-16 h-24 bg-gradient-to-b from-green-400 to-green-600 rounded-full relative shadow-lg">
                <div className="absolute top-2 left-3 w-5 h-7 bg-white/30 rounded-full"></div>
                <div className="absolute bottom-0 left-1/2 w-0.5 h-12 bg-green-900 transform -translate-x-1/2"></div>
              </div>
            </div>
            <div className="large-balloon large-balloon-4">
              <div className="w-20 h-28 bg-gradient-to-b from-orange-400 to-orange-600 rounded-full relative shadow-lg">
                <div className="absolute top-2 left-4 w-6 h-8 bg-white/30 rounded-full"></div>
                <div className="absolute bottom-0 left-1/2 w-0.5 h-16 bg-orange-900 transform -translate-x-1/2"></div>
              </div>
            </div>

            {/* Confetti elements */}
            <div className="confetti-particle confetti-1 w-3 h-3 bg-pink-400 rounded-full"></div>
            <div className="confetti-particle confetti-2 w-2 h-4 bg-yellow-400 rounded-sm"></div>
            <div className="confetti-particle confetti-3 w-3 h-3 bg-blue-400 rounded-full"></div>
            <div className="confetti-particle confetti-4 w-2 h-2 bg-green-400 rounded-full"></div>
            <div className="confetti-particle confetti-5 w-3 h-4 bg-purple-400 rounded-sm"></div>
            <div className="confetti-particle confetti-6 w-2 h-3 bg-red-400 rounded-sm"></div>
            <div className="confetti-particle confetti-7 w-3 h-3 bg-orange-400 rounded-full"></div>
            <div className="confetti-particle confetti-8 w-2 h-2 bg-teal-400 rounded-full"></div>
          </div>
        </>
      )}

      {galleryOpen && (
        <div className="fixed inset-0 bg-black/90 z-50 flex flex-col md:flex-row" onClick={handleCloseGallery}>
          {/* Close button */}
          <button
            onClick={handleCloseGallery}
            className="absolute top-4 right-4 bg-white rounded-full p-3 shadow-lg hover:scale-110 transition-transform z-10"
            aria-label="Close gallery"
          >
            <X className="w-6 h-6 text-gray-700" />
          </button>

          <div
            className="w-full md:w-32 bg-black/50 backdrop-blur-sm p-3 md:p-4 flex md:flex-col gap-2 md:gap-3 overflow-x-auto md:overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {allImages.map((img, index) => (
              <img
                key={index}
                src={img || "/placeholder.svg"}
                alt={`Thumbnail ${index + 1}`}
                className={`w-16 h-16 md:w-full md:h-20 object-cover rounded-lg cursor-pointer transition-all flex-shrink-0 ${
                  selectedImageIndex === index
                    ? "ring-4 ring-white scale-105"
                    : "opacity-60 hover:opacity-100 hover:scale-105"
                }`}
                onClick={(e) => {
                  e.stopPropagation()
                  setSelectedImageIndex(index)
                }}
              />
            ))}
          </div>

          {/* Main image display */}
          <div className="flex-1 flex items-center justify-center p-4 md:p-8" onClick={(e) => e.stopPropagation()}>
            <img
              src={allImages[selectedImageIndex] || "/placeholder.svg"}
              alt={`Gallery image ${selectedImageIndex + 1}`}
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}

      <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
        <div
          className={`card-container ${isOpen ? "open" : ""} ${prefersReducedMotion ? "reduced-motion" : ""}`}
          onClick={handleCardClick}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          role="button"
          aria-label="Click to open greeting card"
          style={{
            perspective: "2000px",
            cursor: isOpen ? "default" : "pointer",
          }}
        >
          {isOpen && (
            <button
              onClick={handleCloseClick}
              className="absolute top-2 right-2 md:top-4 md:right-4 z-50 bg-white rounded-full p-2 shadow-lg hover:scale-110 transition-transform"
              aria-label="Close card"
            >
              <X className="w-5 h-5 text-gray-700" />
            </button>
          )}

          {/* Card Wrapper with 3D transform */}
          <div className="card-3d">
            {/* Left Page (back of card when closed, left side when open) */}
            <div className="card-left">
              <div className="card-content p-4 md:p-8 flex flex-col items-center justify-start gap-4 md:gap-6">
                <div className="photo-container w-full max-w-xs">
                  <img
                    src="/happy-celebration-photo.jpg"
                    alt="Celebration moment"
                    className="w-full h-auto rounded-lg shadow-lg object-contain cursor-pointer hover:scale-105 transition-transform"
                    onClick={(e) => handleImageClick(e, "/happy-celebration-photo.jpg")}
                  />
                </div>
                <div className="greeting-text text-center">
                  <p className="text-base md:text-lg text-gray-700 font-serif leading-relaxed">
                    ტექსტი აქ!,
                    <br />
                    შეგიძლია მშვიდად იყო
                    <br />
                    — რაც არ უნდა დაწერო, მიმღები მაინც იტყვის: ‘მმმმ რა ლამაზია!’ 😎💛
                  </p>
                </div>
                <div className="flex gap-3 mt-4">
                  <Gift className="w-8 h-8 text-purple-600" />
                  <Cake className="w-8 h-8 text-pink-600" />
                  <Sparkles className="w-8 h-8 text-yellow-600" />
                </div>
              </div>
            </div>

            {/* Right Page (front when closed, right side when open) */}
            <div className="card-right">
              {/* Front Cover (visible when closed) */}
              {!isOpen && (
                <div className="card-front absolute inset-0 flex items-center justify-center bg-gradient-to-br from-rose-400 to-pink-500 rounded-r-2xl shadow-2xl">
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white text-center px-6 md:px-8 font-serif">
                    Click to open
                  </h2>
                </div>
              )}

              {/* Inside Right Page (visible when open) */}
              <div className="card-content p-4 md:p-8 flex flex-col justify-between gap-4 md:gap-6">
                <div className="greeting-text text-center">
                  <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 mb-3 md:mb-4 font-serif">
                    Happy Birthday + *Name here !* 🎉
                  </h1>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                   * “დაწერე რამე. თუნდაც ‘გამარჯობა ლამასო’. ეს ბარათი ყველაფერს გააკეთებს და ვერავინ გაიგებს, რომ იდეა აღარ გქონდა 😎🎈” *
                  </p>
                </div>

                <div className="photos-grid grid grid-cols-2 gap-2 md:gap-3 my-3 md:my-4">
                  <img
                    src="/celebration-balloons.jpg"
                    alt="Celebration balloons"
                    className="w-full h-24 md:h-32 object-contain rounded-lg shadow-md bg-white p-2 cursor-pointer hover:scale-105 transition-transform"
                    onClick={(e) => handleImageClick(e, "/celebration-balloons.jpg")}
                  />
                  <img
                    src="/festive-birthday-cake.png"
                    alt="Birthday cake"
                    className="w-full h-24 md:h-32 object-contain rounded-lg shadow-md bg-white p-2 cursor-pointer hover:scale-105 transition-transform"
                    onClick={(e) => handleImageClick(e, "/festive-birthday-cake.png")}
                  />
                  <img
                    src="/party-confetti.jpg"
                    alt="Party confetti"
                    className="w-full h-24 md:h-32 object-contain rounded-lg shadow-md bg-white p-2 cursor-pointer hover:scale-105 transition-transform"
                    onClick={(e) => handleImageClick(e, "/party-confetti.jpg")}
                  />
                  <img
                    src="/colorful-gift-boxes.png"
                    alt="Gift boxes"
                    className="w-full h-24 md:h-32 object-contain rounded-lg shadow-md bg-white p-2 cursor-pointer hover:scale-105 transition-transform"
                    onClick={(e) => handleImageClick(e, "/colorful-gift-boxes.png")}
                  />
                </div>

                <div className="elevated-card bg-white rounded-lg shadow-xl p-3 md:p-4 transform translate-y-0 hover:translate-y-[-4px] transition-transform">
                  <p className="text-xs md:text-sm text-center text-gray-700 font-serif italic">
                    "Made with love, together with Wishyfy!" 
                  </p>
                </div>

                <div className="flex justify-center gap-4 mt-2">
                  <PartyPopper className="w-6 h-6 md:w-8 md:h-8 text-blue-600" />
                  <Sparkles className="w-6 h-6 md:w-8 md:h-8 text-yellow-600" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <audio ref={audioRef} loop>
        <source src="/happy.M4A" type="audio/mp4" />
      </audio>
    </>
  )
}
