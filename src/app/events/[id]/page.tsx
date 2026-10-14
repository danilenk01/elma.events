"use client";

import { events } from "@/data/events";
import Link from "next/link";
import { notFound } from "next/navigation";

export default function EventDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const event = events.find((e) => e.id === parseInt(params.id));

  if (!event) {
    notFound();
  }

  return (
    <div className="pt-20 px-4 sm:px-6 lg:px-8 min-h-screen pb-12">
      <div className="max-w-4xl mx-auto">
        {/* Back button */}
        <Link
          href="/events"
          className="inline-flex items-center text-elma-pink hover:text-elma-pink-light mb-6 transition-colors"
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

        {/* Event Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-sm border border-elma-pink/50 bg-elma-pink/10 text-elma-pink-light px-4 py-1 rounded-full font-medium">
              {event.type}
            </span>
            <span className="text-sm text-silver-400">📅 {event.date}</span>
          </div>
          <h1 className="text-4xl font-bold text-silver-100 mb-4">
            {event.title}
          </h1>
          <p className="text-lg text-silver-300">{event.shortDescription}</p>
        </div>

        {/* Full Description */}
        <div className="prose prose-lg max-w-none mb-8">
          <div className="bg-navy-800/60 border border-silver-400/20 rounded-lg p-8 text-silver-200 whitespace-pre-wrap leading-relaxed">
            {event.fullDescription}
          </div>
        </div>

        {/* Details */}
        {event.details && event.details.length > 0 && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-silver-100 mb-4">
              Event Highlights
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {event.details.map((detail, index) => (
                <div
                  key={index}
                  className="bg-navy-800/60 rounded-lg p-4 border border-silver-400/30"
                >
                  <p className="text-silver-200">{detail}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
