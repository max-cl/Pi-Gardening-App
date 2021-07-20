import { useState, useEffect, useCallback, memo } from "react";
import ReactECharts from "echarts-for-react";

import { ChartContainer } from "../ChartContainer";

const Page = memo(({ data }) => {
    const DEFAULT_OPTION = {
        title: {
            text: `${new Date().toLocaleTimeString().replace(/^\D*/, "")}`,
        },
        tooltip: {
            trigger: "axis",
        },
        legend: {
            display: true,
        },
        toolbox: {
            show: true,
            feature: {
                dataView: { readOnly: false },
                restore: {},
                saveAsImage: {},
            },
        },
        grid: {
            top: 60,
            left: 30,
            right: 60,
            bottom: 30,
        },
        dataZoom: {
            show: false,
            start: 0,
            end: 100,
        },

        xAxis: [
            {
                type: "category",
                boundaryGap: true,
                data: [
                    new Date().toLocaleTimeString().replace(/^\D*/, ""),
                    new Date().toLocaleTimeString().replace(/^\D*/, ""),
                    new Date().toLocaleTimeString().replace(/^\D*/, ""),
                    new Date().toLocaleTimeString().replace(/^\D*/, ""),
                    new Date().toLocaleTimeString().replace(/^\D*/, ""),
                    new Date().toLocaleTimeString().replace(/^\D*/, ""),
                    new Date().toLocaleTimeString().replace(/^\D*/, ""),
                    new Date().toLocaleTimeString().replace(/^\D*/, ""),
                    new Date().toLocaleTimeString().replace(/^\D*/, ""),
                    new Date().toLocaleTimeString().replace(/^\D*/, ""),
                    new Date().toLocaleTimeString().replace(/^\D*/, ""),
                    new Date().toLocaleTimeString().replace(/^\D*/, ""),
                ],
            },
        ],
        yAxis: [
            {
                type: "value",
                scale: true,
                name: "",
                max: 60,
                min: 0,
                boundaryGap: [0.2, 0.2],
            },
        ],
        series: [],
    };

    const [option, setOption] = useState(DEFAULT_OPTION);
    const colors = ["#0000FF", "#008000", "#FFFF00", "#FF0000"];

    const fetchNewData = useCallback(
        (data) => {
            if (data.length > 0) {
                let newOption = JSON.parse(JSON.stringify(option));
                if (newOption.series.length === 0) {
                    for (let i = 0; i < data.length; i++) {
                        newOption.series.push({
                            name: `Sensor ${i + 1}`,
                            type: "line",
                            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                            lineStyle: {
                                color: colors[i],
                            },
                        });
                    }
                }
                const axisData =
                    data.length > 0
                        ? data[0].date.split(" ")[1].split(":")[0] + ":" + data[0].date.split(" ")[1].split(":")[1]
                        : new Date().toLocaleTimeString().replace(/^\D*/, "");
                newOption.title.text = new Date().toDateString();
                newOption.xAxis[0].data.shift();
                newOption.xAxis[0].data.push(axisData);

                for (let j = 0; j < data.length; j++) {
                    newOption.series[j].name = `${data[j].sensorName} [${data[j].sensorType}]`;
                    newOption.series[j].data.shift();
                    newOption.series[j].data.push(data[j].value);
                }
                setOption(newOption);
            }
        },
        [option]
    );

    useEffect(() => {
        fetchNewData(data);
    }, [data]);

    return (
        <ChartContainer>
            <ReactECharts option={option} style={{ height: 340 }} />
        </ChartContainer>
    );
});
export default Page;
