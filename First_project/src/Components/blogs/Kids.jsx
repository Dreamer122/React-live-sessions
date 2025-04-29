import React from 'react'

export const Kids = () => {
  return (
    <div className="space-y-6">
    <h2 className="text-3xl font-bold text-gray-900">Kids' Fashion Trends</h2>
    <div className="prose max-w-none">
      <p className="text-gray-600 leading-relaxed">
        Discover adorable and comfortable fashion choices for children. Our collection features 
        playful designs that kids love and practical features that parents appreciate.
      </p>
      <div className="mt-8 grid gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Comfort Meets Style</h3>
          <p className="text-gray-600">
            Our kids' collection prioritizes both comfort and style. With soft fabrics and 
            playful designs, children can move freely while looking their best.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Shopping Guide</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Choose durable materials</li>
            <li>Look for adjustable features</li>
            <li>Select easy-to-wear designs</li>
            <li>Consider growth room</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  )
}
