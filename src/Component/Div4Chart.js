import React from 'react';
import Chart from 'react-apexcharts'

const Div4chart = () => {

    const series = [{
        name: 'Mobile App',
        data: [500, 250, 300, 220, 500, 250, 300, 230, 300, 350, 250, 400],
        color: "#0075ff",
    },
        {
            name: 'Websites',
            data: [200, 230, 300, 350, 370, 420, 550, 350, 400, 500, 330, 550],
            color: "#2cd9ff"
        },
    ];
    const options = {
        chart: {

            toolbar: { // Hamburger menu at top
                show: false,
            },
            height: 150,
            type: 'area',
            zoom: {
                enabled: false,
            },
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: 'smooth',
            width: 4,
        },
        title: {
            text: undefined,
            align: 'left',
        },
        grid: {

            // show: false,
        },
        legend: {
            show: false,
        },
        // fill: {
        //     type: 'gradient',
        //     gradient: {
        //         shadeIntensity: 1,
        //         inverseColors: false,
        //         opacityFrom: 0.45,
        //         opacityTo: 0.05,
        //         stops: [20, 100, 100, 100]
        //     },
        // },
        xaxis: {
            // show: false,
            labels: {
                // show: false
                style: {colors: "#ffffff"}
            },
            axisBorder: {
                // show: false
            },
            axisTicks: {
                show: false
            },
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'],
        },
        yaxis: {

            // show: false,
            labels: {
                // show: false
                style: {colors: "#ffffff"}
            },
            axisBorder: {
                // show: false,
            },
            axisTicks: {
                // show: false,
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
            <Chart options={options} series={series} type="area" height={310} width={700}/>
        </>
    );
};

export default Div4chart;
