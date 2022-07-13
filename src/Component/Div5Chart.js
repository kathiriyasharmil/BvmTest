import React from 'react';
import Chart from 'react-apexcharts'

const Div5Chart = () => {
    const series = [{
        name: 'Sales',
        data: [330, 250, 110, 300, 490, 350, 270, 130, 425],
        color: "#ffffff",
    },
    ];
    const options = {
        chart: {

            toolbar: { // Hamburger menu at top
                show: false,
            },
            height: 150,
            type: 'bar',
            zoom: {
                enabled: false,
            },
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '15%',
                endingShape: 'rounded',
                borderRadius: 4,
            },
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: 'smooth',
            show: true,
            width: 1,

        },
        title: {
            text: undefined,
            align: 'left',
        },
        grid: {
            show: false,
        },
        legend: {
            show: false,
        },
        fill: {
            opacity: 1,
            width: 1
        },
        xaxis: {
            show: false,
            labels: {
                show: false,
                style: {colors: "#ffffff"}
            },
            axisBorder: {
                show: false
            },
            axisTicks: {
                show: false
            },
            categories: ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        },
        yaxis: {

            // show: false,
            labels: {
                // show: false
                style: {colors: "#ffffff"}
            },
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
            crosshairs: {
                // show: false,
            },
            tooltip: {
                // enabled: false,
            },
        },
    };

    return (
        <>
            <Chart options={options} series={series} type="bar" height={220} width={401}/>
        </>
    );
};

export default Div5Chart;
