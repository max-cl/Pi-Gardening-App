import { Doughnut } from "react-chartjs-2";

// Components
import { ChartContainer } from "../ChartContainer";

export default function DoughnutChart() {
    const data = {
        labels: ["Red", "Green", "Yellow"],
        datasets: [
            {
                data: [300, 50, 100],
                backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
                hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
            },
        ],
    };

    return (
        <ChartContainer>
            <Doughnut
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
