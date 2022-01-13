import React from "react";
import { Line } from "react-chartjs-2";

// Components
import { ChartContainer } from "../ChartContainer";

export default function LineChart() {
    const data = {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
            {
                label: "First dataset",
                data: [33, 53, 85, 41, 44, 65, 45],
                fill: true,
                backgroundColor: "rgba(75,192,192,0.2)",
                borderColor: "rgba(75,192,192,1)",
            },
            {
                label: "Second dataset",
                data: [33, 25, 35, 51, 54, 76, 50],
                fill: false,
                borderColor: "#742774",
            },
        ],
    };

    const options = {
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true,
                type: "linear",
            },
        },

        plugins: {
            legend: {
                display: true,
            },
            title: {
                display: true,
                text: "Chart Title",
            },
        },
    };

    return (
        <ChartContainer>
            <Line data={data} width={400} height={200} options={options} />
        </ChartContainer>
    );
}
