import { PolarArea } from "react-chartjs-2";

// Components
import { ChartContainer } from "../ChartContainer";

export default function PolarChart() {
    const data = {
        datasets: [
            {
                data: [11, 16, 7, 3, 14],
                backgroundColor: ["#FF6384", "#4BC0C0", "#FFCE56", "#E7E9ED", "#36A2EB"],
                label: "My dataset", // for legend
            },
        ],
        labels: ["Red", "Green", "Yellow", "Grey", "Blue"],
    };
    return (
        <ChartContainer>
            <PolarArea
                data={data}
                width={400}
                height={200}
                options={{
                    maintainAspectRatio: false,
                }}
            />
        </ChartContainer>
    );
}
