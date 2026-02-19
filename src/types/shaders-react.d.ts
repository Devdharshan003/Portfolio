declare module "@paper-design/shaders-react" {
    import { ComponentType } from "react";

    export interface DitheringProps {
        colorBack?: string;
        colorFront?: string;
        shape?: string;
        type?: string;
        speed?: number;
        className?: string;
        minPixelRatio?: number;
    }

    export const Dithering: ComponentType<DitheringProps>;
}
