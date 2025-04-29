import React from 'react'

export const Men = () => {
  return (
    <div className="space-y-6">
    <h2 className="text-3xl font-bold text-gray-900">Men's Fashion Trends 2024</h2>
    <div className="prose max-w-none">
      <p className="text-gray-600 leading-relaxed">
        Discover the latest trends in men's fashion. From casual streetwear to sophisticated formal attire, 
        our comprehensive guide covers everything you need to know to stay stylish this season.
      </p>
      <div className="mt-8 grid gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Spring Collection Highlights</h3>
          <p className="text-gray-600">
            This spring's collection features a blend of comfortable fabrics and modern silhouettes. 
            Earthy tones and sustainable materials take center stage, reflecting the growing consciousness 
            towards eco-friendly fashion.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Essential Wardrobe Pieces</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Classic white sneakers for versatile styling</li>
            <li>Tailored blazers in neutral colors</li>
            <li>Premium quality basic t-shirts</li>
            <li>Well-fitted dark denim jeans</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  )
}
