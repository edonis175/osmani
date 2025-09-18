import React, { useState } from "react";
import { Link } from "react-router-dom";

const RouteCalculator = () => {
  const [startLocation, setStartLocation] = useState("");
  const [endLocation, setEndLocation] = useState("");
  const [distance, setDistance] = useState(null);
  const [time, setTime] = useState(null);
  const [cost, setCost] = useState(null);

  const calculateRoute = (e) => {
    e.preventDefault();

    // Mock calculation - in a real app, this would call an API
    const mockDistance = Math.floor(Math.random() * 50) + 5; // 5-55 km
    const mockTime = Math.floor(mockDistance * 2.5); // 2.5 min per km
    const mockCost = (mockDistance * 1.5).toFixed(2); // $1.50 per km

    setDistance(mockDistance);
    setTime(mockTime);
    setCost(mockCost);
  };

  return (
    <div className="min-h-screen py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            AI-Powered <span className="text-orange-600">Route Calculator</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our advanced algorithms calculate the fastest, most efficient routes
            in real-time, saving you time and money on every journey.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
            <form onSubmit={calculateRoute} className="mb-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <label
                    htmlFor="start"
                    className="block text-lg font-semibold text-gray-800 mb-3"
                  >
                    Starting Point
                  </label>
                  <input
                    type="text"
                    id="start"
                    value={startLocation}
                    onChange={(e) => setStartLocation(e.target.value)}
                    placeholder="Enter starting location"
                    className="w-full px-6 py-4 text-lg border-2 border-gray-200 rounded-2xl focus:border-orange-500 focus:outline-none transition-colors"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="end"
                    className="block text-lg font-semibold text-gray-800 mb-3"
                  >
                    Destination
                  </label>
                  <input
                    type="text"
                    id="end"
                    value={endLocation}
                    onChange={(e) => setEndLocation(e.target.value)}
                    placeholder="Enter destination"
                    className="w-full px-6 py-4 text-lg border-2 border-gray-200 rounded-2xl focus:border-orange-500 focus:outline-none transition-colors"
                    required
                  />
                </div>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-orange-600 to-yellow-500 hover:from-orange-700 hover:to-yellow-600 text-white font-bold py-4 px-12 rounded-full text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                >
                  Calculate Optimal Route
                </button>
              </div>
            </form>

            {distance && time && cost && (
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-3xl p-8 border border-blue-100">
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
                  Your Optimal Route
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center p-6 bg-white rounded-2xl shadow-md">
                    <div className="text-5xl font-bold text-orange-600 mb-2">
                      {distance} km
                    </div>
                    <div className="text-gray-600">Distance</div>
                  </div>
                  <div className="text-center p-6 bg-white rounded-2xl shadow-md">
                    <div className="text-5xl font-bold text-blue-600 mb-2">
                      {time} min
                    </div>
                    <div className="text-gray-600">Estimated Time</div>
                  </div>
                  <div className="text-center p-6 bg-white rounded-2xl shadow-md">
                    <div className="text-5xl font-bold text-green-600 mb-2">
                      ${cost}
                    </div>
                    <div className="text-gray-600">Estimated Cost</div>
                  </div>
                </div>
                <div className="mt-8 text-center">
                  <p className="text-gray-700 mb-6">
                    Our AI has calculated the most efficient route for your
                    journey, saving you time and money compared to standard
                    routes.
                  </p>
                  <Link
                    to="/"
                    className="inline-block bg-gradient-to-r from-orange-600 to-yellow-500 hover:from-orange-700 hover:to-yellow-600 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
                  >
                    Book This Ride
                  </Link>
                </div>
              </div>
            )}
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              How Our AI Optimizes Your Route
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Real-Time Traffic Analysis
                </h3>
                <p className="text-gray-600">
                  Our system continuously monitors traffic patterns to avoid
                  congestion and delays.
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Predictive Algorithms
                </h3>
                <p className="text-gray-600">
                  Advanced machine learning predicts the fastest routes based on
                  historical data.
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-400 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Safety Optimization
                </h3>
                <p className="text-gray-600">
                  Routes are optimized not just for speed, but also for safety
                  and comfort.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RouteCalculator;
