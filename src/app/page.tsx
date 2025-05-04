"use client";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function HomePage() {
  // Carousel slider setup
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: { perView: 1, spacing: 16 },
    breakpoints: {
      "(min-width: 640px)": { slides: { perView: 2, spacing: 16 } },
      "(min-width: 1024px)": { slides: { perView: 3, spacing: 16 } },
    },
  });

  // Past events data
  const events = [
    {
      id: 1,
      title: "Welcome Fair 2024",
      image: "/events/event-1.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 2,
      title: "Talk with Alumni",
      image: "/events/event-2.jpg",
      description:
        "Our alumni shared industry tips and experiences with current members.",
    },
    {
      id: 3,
      title: "New Years Celebration",
      image: "/events/event-3.jpg",
      description:
        "A casual evening of board games, snacks, and bonding!",
    },
    {
      id: 4,
      title: "Volleyball Match",
      image: "/events/event-4.jpg",
      description: "Friendly sports match raising funds for charity.",
    },
  ];

  return (
    <div className="min-h-screen scroll-smooth">
      {/* Hero Section */}
      <section className="h-[70vh] flex flex-col justify-center items-center text-center px-6 bg-gradient-to-b from-white to-gray-100">
        <h1 className="text-5xl font-bold mb-4">
          Welcome to the Cambodian Students Association!
        </h1>
        <p className="text-lg text-muted-foreground max-w-xl mb-2">
          Community of Cambodian students studying in the UK.
        </p>
        <p className="text-base text-muted-foreground max-w-xl mb-6">
          Follow us on social media for the latest updates on events and activities.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="https://www.instagram.com/csauk_association/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="default" size="lg">
              Follow us on Instagram
            </Button>
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61568716532857&locale=en_GB"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline" size="lg">
              Like us on Facebook
            </Button>
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold mb-6 text-center">About Us</h2>
        <div className="max-w-3xl mx-auto text-center text-muted-foreground">
          <p>
            Our student society is focused on building connections and hosting events
            that educate and inspire. We’re a mix of creatives, techies, and dreamers.
          </p>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-32 bg-white">
        <h2 className="text-4xl font-bold mb-12 text-center">Past Events</h2>
        <div ref={sliderRef} className="keen-slider max-w-7xl mx-auto px-4">
          {events.map((event) => (
            <div className="keen-slider__slide px-2" key={event.id}>
              <Card className="max-w-lg mx-auto">
                <CardHeader>
                  <CardTitle className="text-2xl text-center">
                    {event.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Image
                    src={event.image}
                    alt={event.title}
                    width={600}
                    height={400}
                    className="rounded-lg object-cover w-full h-[400px]"
                  />
                  <p className="mt-4 text-base">
                    {event.description}
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
