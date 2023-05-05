import React from 'react';

import { Chart as ChartJS, registerables } from 'chart.js';
import {Chart, Line } from 'react-chartjs-2';
import { Col,Row,Typography } from 'antd';
ChartJS.register(...registerables);



const {Title} = Typography

const LinkChart = ({ coinHistory, currentPrice, coinName }) => {
    const coinPrice = [];
    const coinTimestamp = [];

    for (let i = 0; i < coinHistory?.data?.history?.length; i += 1){
        coinPrice.push(coinHistory.data.history[i].price);
        coinTimestamp.push(new Date(coinHistory.data.history[i].timestamp *1000).toDateString());
    }



    const data = {
        labels: coinTimestamp,
        datasets: [
            {
                label: 'Price in Usd',
                data: coinPrice,
                fill: false,
                backgroundColor: '#0071bd',
                borderColor: '#0071bd',
                indexAxiz:'x'
            }
        ]
    }

    const options = {
        scales: {
            y: 
                {
                   
                        beginAtZero:true
                    
                },
           
        },
    }
    
  return (
      <>
          <Row className='chart-header'>
              <Title level={2} className='chart-title'>{coinName} Price Chart</Title>
              <Col className='price-container'>
                  <Title level={5} className='price-change'>{coinHistory?.data?.change} %</Title>
                  <Title level={5} className='current-price'>Current {coinName} price: $ {currentPrice}</Title>
              </Col>
          </Row>
          <Line data={data} options={options} />
      </>
  )
}

export default LinkChart