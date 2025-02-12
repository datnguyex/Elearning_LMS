interface GradientParams {
    ctx: CanvasRenderingContext2D;
    chartArea: {
        left: number;
        top: number;
        right: number;
        bottom: number;
    };
    color1: string;
    color2: string;
}

// Sử dụng interface trong hàm
export const CreateGradientColor = ({ ctx, chartArea, color1, color2 }: GradientParams) => {
    const gradient = ctx.createLinearGradient(chartArea.left, chartArea.top, chartArea.right, chartArea.bottom);
    gradient.addColorStop(0, color1);
    gradient.addColorStop(1, color2);
    return gradient;
};
