"use client";

import { events } from "@/data/events";
import EventCarousel from "@/components/EventCarousel";
import Link from "next/link";

export default function EventsPage() {
  const slug = "slug";
  const event = slug ? events.find((e) => e.slug === slug) : null;

  if (slug && !event) {
    return (
      <div className="pt-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Event not found
          </h1>
          <Link href="/events" className="text-blue-600 hover:text-blue-800">
            Back to Events
          </Link>
        </div>
      </div>
    );
  }

  if (slug && event) {
    return (
      <div className="pt-20 px-6 sm:px-8 lg:px-12 min-h-screen pb-16">
        <div className="max-w-4xl mx-auto">
          {/* Back button */}
          <Link
            href="/events"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8 transition-colors"
          >
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Events
          </Link>

          {/* Carousel */}
          <div className="mb-12">
            <EventCarousel images={event.images} />
          </div>

          {/* Event Header */}
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-sm bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-medium">
                {event.type}
              </span>
              <span className="text-sm text-gray-500">📅 {event.date}</span>
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              {event.title}
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              {event.shortDescription}
            </p>
          </div>

          {/* Full Description */}
          <div className="prose prose-lg max-w-none mb-12">
            <div className="bg-gray-50 rounded-lg p-10 text-gray-700 whitespace-pre-wrap leading-relaxed">
              {event.fullDescription}
            </div>
          </div>

          {/* Details */}
          {event.details && event.details.length > 0 && (
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Event Highlights
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {event.details.map((detail, index) => (
                  <div
                    key={index}
                    className="bg-blue-50 rounded-lg p-4 border border-blue-200"
                  >
                    <p className="text-gray-700">{detail}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20 px-6 sm:px-8 lg:px-12 min-h-screen pb-16">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">Events</h1>
        <p className="text-lg text-gray-600 mb-12 max-w-3xl">
          Explore events that have taken place. Our organizers share detailed
          reports and highlights from each event, including photos, attendee
          stories, and key moments.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <Link key={event.id} href={`/events?slug=${event.slug}`}>
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer h-full">
                <div className="bg-gradient-to-r from-blue-400 to-blue-300 h-48"></div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                    {event.title}
                  </h3>
                  <p className="text-sm text-blue-600 font-medium mb-3">
                    {event.type}
                  </p>
                  <p className="text-gray-600 mb-5 leading-relaxed">
                    {event.shortDescription}
                  </p>
                  <div className="text-sm text-gray-500">
                    <span>📅 {event.date}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
