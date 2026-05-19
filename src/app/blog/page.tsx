export default function BlogPage() {
  return (
    <div className="pt-20 px-6 sm:px-8 lg:px-12 min-h-screen pb-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">Blog</h1>
        <p className="text-lg text-gray-600 mb-12 max-w-3xl">
          Stay updated with the latest news, insights, and stories from the
          world of events and entertainment.
        </p>

        <div className="space-y-12">
          {[1, 2, 3, 4, 5].map((i) => (
            <article
              key={i}
              className="border-b border-gray-200 pb-12 hover:bg-gray-50 p-6 rounded transition-colors"
            >
              <div className="mb-4 flex items-center gap-4">
                <span className="text-sm text-gray-500">
                  📅 May {i * 4}, 2026
                </span>
                <span className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium">
                  Article {i}
                </span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Blog Post Title Number {i}
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                This is a compelling excerpt from the blog post. It provides
                readers with a sneak peek into what they'll discover when they
                read the full article. Perfect for sharing your thoughts and
                experiences.
              </p>
              <a
                href="#"
                className="text-blue-600 font-semibold hover:text-blue-800 transition-colors"
              >
                Read More →
              </a>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
