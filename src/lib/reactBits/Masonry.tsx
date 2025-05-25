"use client";

import React, { useState, useEffect, useMemo, useRef } from "react";
import { useTransition, a } from "@react-spring/web";

interface MasonryItem {
  id: string | number;
  content: React.ReactNode;
  height?: number;
}

interface GridItem extends MasonryItem {
  x: number;
  y: number;
  width: number;
  height: number;
}

interface MasonryProps {
  data: MasonryItem[];
}

function Masonry({ data }: MasonryProps) {
  const [columns, setColumns] = useState<number>(2);
  const ref = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState<number>(0);

  // Measure container width
  useEffect(() => {
    const handleResize = () => {
      if (ref.current) setWidth(ref.current.offsetWidth);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Update columns based on viewport width
  useEffect(() => {
    const updateColumns = () => {
      if (window.matchMedia("(min-width: 1500px)").matches) setColumns(5);
      else if (window.matchMedia("(min-width: 1000px)").matches) setColumns(4);
      else if (window.matchMedia("(min-width: 600px)").matches) setColumns(3);
      else setColumns(1);
    };
    updateColumns();
    window.addEventListener("resize", updateColumns);
    return () => window.removeEventListener("resize", updateColumns);
  }, []);

  // Measure each item height dynamically using refs
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Height states for items
  const [heightsMeasured, setHeightsMeasured] = useState<number[]>([]);

  useEffect(() => {
    // After rendering, measure heights
    if (itemRefs.current.length === data.length) {
      const newHeights = itemRefs.current.map(
        (el) => (el ? el.offsetHeight : 200) // fallback
      );
      setHeightsMeasured(newHeights);
    }
  }, [data, width, columns]);

  // Compose gridItems with dynamic heights
  const [heights, gridItems] = useMemo<[number[], GridItem[]]>(() => {
    const heights = new Array(columns).fill(0);
    const gridItems = data.map((item, index) => {
      const itemHeight = heightsMeasured[index] || 200; // fallback height if not measured yet
      const column = heights.indexOf(Math.min(...heights));
      const x = (width / columns) * column;
      const y = (heights[column] += itemHeight);
      return {
        ...item,
        x,
        y: y - itemHeight,
        width: width / columns,
        height: itemHeight,
      };
    });
    return [heights, gridItems];
  }, [columns, data, width, heightsMeasured]);

  // Animate transitions
  const transitions = useTransition<
    GridItem,
    { x: number; y: number; width: number; height: number; opacity?: number }
  >(gridItems, {
    keys: (item: GridItem) => item.id,
    from: ({ x, y, width, height }: GridItem) => ({
      x,
      y,
      width,
      height,
      opacity: 0,
    }),
    enter: ({ x, y, width, height }: GridItem) => ({
      x,
      y,
      width,
      height,
      opacity: 1,
    }),
    update: ({ x, y, width, height }: GridItem) => ({ x, y, width, height }),
    leave: { height: 0, opacity: 0 },
    config: { mass: 5, tension: 500, friction: 100 },
    trail: 25,
  });

  return (
    <div
      ref={ref}
      className="relative w-full"
      style={{ height: Math.max(...heights) }}
    >
      {/* Hidden divs for measuring height */}
      <div className="absolute top-[-9999px] left-0 w-full pointer-events-none opacity-0">
        {data.map((item, index) => (
          <div
            key={item.id}
            ref={(el) => {
              itemRefs.current[index] = el;
            }}
            style={{ width: width / columns }}
            className="p-4"
          >
            {item.content}
          </div>
        ))}
      </div>

      {/* Actual rendered grid */}
      {transitions((style, item) => (
        <a.div
          key={item.id}
          style={{
            ...style,
            position: "absolute",
            padding: 15,
            boxSizing: "border-box",
          }}
          className="[will-change:transform,width,height,opacity]"
        >
          <div className="w-full h-full space-y-8">{item.content}</div>
        </a.div>
      ))}
    </div>
  );
}

export default Masonry;
