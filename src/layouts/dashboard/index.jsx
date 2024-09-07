import React, { useEffect, useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  HomeOutlined,
  ProductOutlined

} from '@ant-design/icons';
import { Button, Layout, Menu, theme, Dropdown, Flex } from 'antd';
import { Outlet } from 'react-router';
import { NavLink } from 'react-router-dom';
const { Header, Sider, Content } = Layout;
import { changeLangs, getLang, getChangeLanguage } from '../../utils/lang';
import { Uz, Ru, Eng } from '../../components/icons/flags';
import { useTranslation } from 'react-i18next';

export const Dashboard = () => {

  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const changeLang = (lang) => {
    i18n.changeLanguage(lang);
    changeLangs(lang);
  }

  useEffect(() => {
    const lang = getLang();
    i18n.changeLanguage(lang);
  }, [collapsed, setCollapsed])

  const { t, i18n } = useTranslation();

  const items = [
    {
      key: '1',
      icon: <Uz />,
      label: <Button type='link' onClick={() => changeLang('uz')}>UZ</Button>,
    },
    {
      key: '2',
      icon: <Ru />,
      label: <Button type='link' onClick={() => changeLang('ru')}>RU</Button>,
    },
    {
      key: '3',
      icon: <Eng />,
      label: <Button type='link' onClick={() => changeLang('eng')}>ENG</Button>,
    }
  ]

  return (
    <>
      <Layout>

        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="demo-logo-vertical cursor-pointer border-b border-white rounded-2xl mb-2">
            <div className="p-4 text-white text-2xl">
              DASHBOARD
            </div>
          </div>
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['1']}
            items={[
              {
                key: '1',
                icon: <HomeOutlined />,
                label: <NavLink to='/'>{t('home')}</NavLink>,
              },
              {
                key: '2',
                icon: <UserOutlined />,
                label: <NavLink to='/users'>{t('users')}</NavLink>,
              },
              {
                key: '3',
                icon: <ProductOutlined />,
                label: <NavLink to='/products'>{t('products')}</NavLink>,
              },
            ]}
          />
        </Sider>

        <Layout>

          <Header
            style={{
              padding: 0,
              background: colorBgContainer,
            }}
          >
            <Flex justify='space-between' align='center'>
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: '16px',
                width: 64,
                height: 64,
              }}
            />

            <Dropdown
              menu={{
                items,
              }}
              placement="bottom"
              arrow={{
                pointAtCenter: true,
              }}
            >
              <Button style={{marginRight: '20px'}}>{getChangeLanguage()}</Button>
            </Dropdown>
            </Flex>
          </Header>

          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: '100vh',
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Outlet />

          </Content>

        </Layout>
      </Layout>

      <footer>
        <div className="text-center text-white text-sm bg-[#001529]">
          <p>
            &copy; {new Date().getFullYear()} Created by Ant Design
          </p>
        </div>
      </footer>
    </>
  );
};