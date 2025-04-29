import React from 'react'

export const Women = () => {
  return (
    <div className="space-y-6">
    <h2 className="text-3xl font-bold text-gray-900">Women's Fashion Guide</h2>
    <div className="prose max-w-none">
      <p className="text-gray-600 leading-relaxed">
        Explore the latest trends in women's fashion. From elegant evening wear to comfortable daily outfits,
        find inspiration for every occasion in our curated collection.
      </p>
      <div className="mt-8 grid gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Season's Must-Haves</h3>
          <p className="text-gray-600">
            This season brings a fresh perspective on classic styles. Oversized blazers, statement 
            accessories, and sustainable fashion pieces are making waves in the fashion world.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Style Tips</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Mix and match patterns confidently</li>
            <li>Invest in quality basic pieces</li>
            <li>Accessorize thoughtfully</li>
            <li>Choose sustainable fashion options</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  )
}
