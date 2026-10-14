import { eventDescriptions } from "@/data/eventDescriptions";
import { Scroller, Group } from "@mantine/core";
import EventCard from "./EventCard";
import { useState } from "react";

export default function EventOptions() {
  const [isFullScreenCard, setIsFullScreenCard] = useState(false);
  const handleButtonClick = () => {
    setIsFullScreenCard((cur) => !cur);
  };

  return (
    <Scroller p="md" h={isFullScreenCard ? "100%" : "150px"}>
      <Group gap="xs" wrap="nowrap">
        {eventDescriptions.map(({ title, description, buttonText }, index) => (
          <EventCard
            key={index}
            title={title}
            description={description}
            button={{
              text: buttonText,
              onClick: handleButtonClick,
            }}
          />
        ))}
      </Group>
    </Scroller>
  );
}
