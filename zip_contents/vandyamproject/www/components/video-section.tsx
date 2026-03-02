"use client"

import { useState } from "react"

export function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false)

  const handlePlayClick = () => {
    setIsPlaying(true)
  }

  return (
    <section id="video-section" className="py-16 px-4 md:px-6 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Watch Our Demo</h2>
        {!isPlaying ? (
          <button
            onClick={handlePlayClick}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Play Video
          </button>
        ) : (
          <div className="flex justify-center">
            <video
              width="640"
              height="390"
              controls
              autoPlay
              className="max-w-full h-auto rounded-lg shadow-lg"
            >
              <source src="/home/background-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        )}
      </div>
    </section>
  )
}
