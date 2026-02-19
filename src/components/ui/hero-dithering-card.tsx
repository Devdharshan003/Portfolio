"use client";

import { ArrowRight } from "lucide-react";
import { useState, Suspense, lazy } from "react";
import { cn } from "@/lib/utils";

const Dithering = lazy(() =>
    import("@paper-design/shaders-react").then((mod) => ({ default: mod.Dithering }))
);

export function HeroDitheringCard() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="fixed inset-0 z-0 flex items-center justify-center overflow-hidden bg-black">
            <div
                className="absolute inset-0 w-full h-full"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <Suspense fallback={<div className="absolute inset-0 bg-black" />}>
                    <div className="absolute inset-0 z-0 w-full h-full opacity-60">
                        <Dithering
                            colorBack="#000000" // Black background
                            colorFront="#4fc3f7" // Light blue accent (matching the theme)
                            shape="warp"
                            type="4x4"
                            speed={isHovered ? 0.6 : 0.2}
                            className="w-full h-full"
                            minPixelRatio={1}
                        />
                    </div>
                </Suspense>

                {/* Overlay gradient to ensure text readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80 pointer-events-none" />
            </div>
        </div>
    );
}
