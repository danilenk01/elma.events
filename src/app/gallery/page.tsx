export default function GalleryPage() {
  return (
    <div className="pt-20 px-6 sm:px-8 lg:px-12 min-h-screen pb-16">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">Gallery</h1>
        <p className="text-lg text-gray-600 mb-12 max-w-3xl">
          Explore stunning photos and videos from our past events. Relive the
          magic and get inspired for upcoming celebrations.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all cursor-pointer"
            >
              <div className="bg-gradient-to-br from-blue-400 to-blue-300 h-64 flex items-center justify-center">
                <span className="text-white text-6xl opacity-30">🎉</span>
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all flex items-end">
                <div className="w-full p-6 bg-gradient-to-t from-black to-transparent text-white opacity-0 group-hover:opacity-100 transition-opacity\">
                  <p className="font-semibold text-lg">Event Photo {i}</p>
                  <p className="text-sm text-gray-300">Event Name • May 2026</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
