// File: src/components/SyriaMap.tsx

import { useEffect, useRef, useState } from "react";

type RegionData = {
  id: string;
  name?: string;
};

const highlightedRegions = new Set(["sy-id", "sy-hi", "sy-rd", "sy-di", "sy-hm", "sy-la", "sy-ta", "sy-hl"]);

export default function SyriaMap({
  svgUrl = "/syria.svg",
  onRegionClick,
}: {
  svgUrl?: string;
  onRegionClick?: (region: RegionData) => void;
}) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const svgRootRef = useRef<SVGSVGElement | null>(null);
  const [tooltip, setTooltip] = useState<{ x: number; y: number; text: string } | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetch(svgUrl)
      .then((r) => r.text())
      .then((svgText) => {
        if (cancelled) return;
        const container = containerRef.current!;
        container.innerHTML = svgText;
        const svg = container.querySelector("svg") as SVGSVGElement | null;
        if (!svg) return;
        svgRootRef.current = svg;

        // إزالة الأبعاد الثابتة وضبط التدرج المتجاوب
        svg.removeAttribute("width");
        svg.removeAttribute("height");
        svg.setAttribute("preserveAspectRatio", "xMidYMid meet");
        if (!svg.getAttribute("viewBox")) {
          svg.setAttribute("viewBox", "0 0 1000 1000");
        }

        // ريسبونسف + تكبير
        svg.style.width = "100%";
        svg.style.height = "auto";
        svg.style.maxWidth = "1000px";
        svg.style.translate = "15%"

        Array.from(svg.querySelectorAll<SVGElement>("path, g, polygon, rect, circle")).forEach((el) => {
          el.style.pointerEvents = "all";
          el.setAttribute("stroke", "#272525");
          el.setAttribute("stroke-width", "1");
          const id = el.id.toLowerCase();

          // اللون الأساسي لكل منطقة
          const baseFill = highlightedRegions.has(id) ? "#ff9900" : "#374151";
          el.setAttribute("fill", baseFill);

          el.addEventListener("mouseenter", (e) => {
            if (window.matchMedia("(hover: none)").matches) return;

            const target = e.currentTarget as SVGElement;
            // زود طبقة ظل غامق فوق اللون الأصلي
            target.style.filter = "brightness(0.7)"; // يخلي اللون أغمق مع بقاء اللون الأساسي
            target.style.transition = "filter 0.2s ease"; // حركة ناعمة

            const name =
              target.getAttribute("data-name") ||
              target.id ||
              target.getAttribute("name") ||
              "Region";
            const rect = (svgRootRef.current as SVGElement).getBoundingClientRect();
            setTooltip({
              x: rect.left + rect.width / 2,
              y: rect.top + 20,
              text: name,
            });
          });

      
          el.addEventListener("mouseleave", (e) => {
            const target = e.currentTarget as SVGElement;
            // رجع اللون الأساسي (بإزالة الفلتر فقط)
            target.style.filter = "none";
            setTooltip(null);
          });


          el.addEventListener("click", (e) => {
            e.stopPropagation();
            const target = e.currentTarget as SVGElement;
            const region: RegionData = {
              id: target.id || "",
              name:
                target.getAttribute("data-name") ||
                target.getAttribute("name") ||
                undefined,
            };
            if (onRegionClick) onRegionClick(region);
            else console.log("Clicked region:", region);

            localStorage.setItem("city", target.id)
             if (onRegionClick) onRegionClick(region); // بس نبعث الإشارة للأب
          });
        });
      })
      .catch((err) => console.error("Failed to load SVG:", err));

    return () => {
      cancelled = true;
    };
  }, [svgUrl, onRegionClick]);

  return (
    <div
      className="map"
      style={{
        width: "100%",
        height: "100vh", // تاخد كامل الشاشة
        maxHeight: "900px", // سقف حتى ما تكبر زيادة
        position: "relative",
        borderRadius: 8,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "transparent",
        margin: "0 auto",
      }}
    >
      <div
        ref={containerRef}
        className="w-full h-full"
        style={{
          width: "100%",
          height: "100%",
          maxWidth: "1200px",
          margin: "auto",
        }}
        aria-label="Syria interactive map container"
      />

      {tooltip && (
        <div
          style={{
            position: "fixed",
            left: tooltip.x,
            top: tooltip.y,
            transform: "translate(-50%, -100%)",
            background: "rgba(0,0,0,0.8)",
            color: "white",
            padding: "6px 8px",
            borderRadius: 4,
            pointerEvents: "none",
            fontSize: 12,
            zIndex: 9999,
          }}
        >
          {tooltip.text}
        </div>
      )}
    </div>
  );
}


