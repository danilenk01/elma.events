"use client";
import { Drawer } from "@mantine/core";
import type { Celebration } from "@/data/celebrations";
import CelebrationPackages from "./CelebrationPackages";

type CelebrationDrawerProps = {
  celebration: Celebration | null;
  opened: boolean;
  onClose: () => void;
};

export default function CelebrationDrawer({
  celebration,
  opened,
  onClose,
}: CelebrationDrawerProps) {
  return (
    <Drawer
      opened={opened}
      onClose={onClose}
      position="bottom"
      size="auto"
      title={celebration?.name}
      styles={{
        content: {
          borderTopLeftRadius: 24,
          borderTopRightRadius: 24,
          maxHeight: "90dvh",
        },
        // Solid so content doesn't show through the sticky header while
        // scrolling; padding keeps the title aligned with the centred content
        header: {
          background: "var(--color-navy-900)",
          borderBottom: "1px solid rgba(233, 107, 166, 0.35)",
          paddingInline: "max(1rem, calc((100% - 64rem) / 2))",
        },
        title: {
          fontFamily: "Cormorant Garamond, serif",
          fontSize: "2rem",
          fontWeight: 600,
          color: "var(--color-elma-pink)",
        },
        close: { color: "var(--color-elma-pink)" },
      }}
    >
      {celebration && (
        <div className="mx-auto max-w-5xl pt-4 pb-6">
          <CelebrationPackages celebration={celebration} />
        </div>
      )}
    </Drawer>
  );
}
