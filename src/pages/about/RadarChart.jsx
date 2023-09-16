import React from 'react'

import ReactApexChart from 'react-apexcharts'


export default class RadarChart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        
            series: [{
                name: 'Series 1',
                data: [80, 50, 30, 40, 100, 20],
            }, {
                name: 'Series 2',
                data: [20, 30, 40, 80, 20, 80],
            }, {
                name: 'Series 3',
                data: [44, 76, 78, 13, 43, 10],
            }],
            options: {
                chart: {
                height: 350,
                type: 'radar',
                dropShadow: {
                    enabled: true,
                    blur: 1,
                    left: 1,
                    top: 1
                }
                },

                stroke: {
                width: 2
                },
                fill: {
                opacity: 0.5
                },
                markers: {
                size: 5
                },
                xaxis: {
                categories: ['2011', '2012', '2013', '2014', '2015', '2016']
                }
            }
        };
    };
    render() {
        return (
            <>
                <ReactApexChart options={this.state.options} series={this.state.series} type="radar" height={350} />
            </>
        );
    };
};