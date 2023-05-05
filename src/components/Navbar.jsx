import React from 'react';
import { Button,Menu,Typography,Avatar } from 'antd';
import { Link } from 'react-router-dom';
import { HomeOutlined,MoneyCollectOutlined,BulbOutlined,FundOutlined,MenuOutlined } from '@ant-design/icons';

const Navbar = () => {
    const icon = 'https://www.iconpacks.net/icons/2/free-cryptocurrency-coin-icon-2457-thumb.png'
  return (
      <div className='nav-container'>
          <div className='logo-container'>
              <Avatar src={icon} size='large' />
              <Typography.Title level={2} className="logo">
                  <Link to={'/'}>LockBloc</Link>
              </Typography.Title>
              {/* <Button className='menu-control-container'>
                  
              </Button> */}
          </div>
          <Menu theme='dark'>
              <Menu.Item icon={<HomeOutlined />} key={1}>
                <Link to={'/'}>Home</Link>
              </Menu.Item>
              <Menu.Item icon={<FundOutlined/>} key={2}>
                <Link to={'/cryptocurrencies'}>Cryptocurrencies</Link>
              </Menu.Item>
              <Menu.Item icon={<MoneyCollectOutlined/>} key={3}>
                <Link to={'/exchanges'}>Exchanges</Link>
              </Menu.Item>
              
              
              
          </Menu>
       </div>
  )
}

export default Navbar