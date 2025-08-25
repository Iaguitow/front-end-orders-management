'use client';

import { useState } from 'react';
import { Drawer, Button, Space } from 'antd';
import { MenuOutlined } from '@ant-design/icons';

import ThemeSwitcher from "@/components/switchThemeButton";

export default function SideDrawer() {
  const [open, setOpen] = useState(false);

  const showDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  return (
    <>
      <Button type="primary" onClick={showDrawer} icon={<MenuOutlined />} />

      <Drawer
        title="Menu"
        placement="left"
        onClose={closeDrawer}
        open={open}
        footer={
            <ThemeSwitcher>
            </ThemeSwitcher>
        }
        destroyOnHidden={true}

      >
        <Space direction="vertical" size="large" style={{ width: '100%' }}>
          <Button type="text" block onClick={() => console.log('Depot Transfers')}>
            DEPOT TRANSFERS
          </Button>
          <Button type="text" block onClick={() => console.log('Embroidery Services')}>
            EMBROIDERY SERVICES
          </Button>
        </Space>
      </Drawer>
    </>
  );
}
