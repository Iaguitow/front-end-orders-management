"use client"

import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { Drawer, Button, ConfigProvider, CollapseProps, Collapse, Badge } from 'antd';
import { ROUTES } from '@/utils/constants/route';
import {
  MenuOutlined, DockerOutlined, ImportOutlined, SendOutlined, CodeSandboxOutlined,
  SettingOutlined, SplitCellsOutlined, ControlOutlined, LockOutlined, AppstoreAddOutlined,
  UserAddOutlined, ScheduleOutlined
} from '@ant-design/icons';

import ThemeSwitcher from "@/components/switchThemeButton";
import { useTheme } from '@/hooks/contexts/themeContext';
import { useDrawer } from "@/hooks/contexts/drawerContext";

export default function SideDrawer() {
  const { open, setOpen } = useDrawer();

  const showDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);
  const pathname = usePathname();
  const { theme } = useTheme();

  const router = useRouter();
  const navigateTo = (path: string) => {
    router.push(path);
    
  };

  useEffect(() =>{

    const root = document.documentElement;
    if(theme === "light"){
      root.style.setProperty("--btn-active-drawer-bg", "rgba(0, 122, 255, 0.6)");
      root.style.setProperty("--btn-active-drawer-color", "white");
      root.style.setProperty("--btn-active-drawer-fontweight", "bold");
    }
    else{
      root.style.setProperty("--btn-active-drawer-bg", "#1677ff");
      root.style.setProperty("--btn-active-drawer-color", "white");
      root.style.setProperty("--btn-active-drawer-fontweight", "bold");
    }


  },[theme]);

  const items: CollapseProps['items'] = [
    {
      key: '1',
      label: (
        <span style={{ display: "flex", alignItems: "center", gap: 10, borderRadius:0, fontWeight: "bold" }}>
          <DockerOutlined style={{ fontSize: 28 }} />
          DEPOT TRANSFERS

        </span>
      ),
      children:
        (
          <div
            style={{
              flexDirection: "column",
              alignItems: "flex-start"
            }}
          >
            <Button
              className={`btn-drawer-options ${pathname === ROUTES.DEPOT_TRANSFERS.TO_SEND ? 'active' : ''}`}
              onClick={() =>{
                navigateTo(ROUTES.DEPOT_TRANSFERS.TO_SEND);
              }}
              icon={<SendOutlined style={{ fontSize: 20 }} />}
            >
              <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%"
              }}>
                <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  TO SEND
                  <Badge className='drawer-badges' count={6} title="TO SEND" color="#52c41a"/>
                </span>
                <Badge className='drawer-badges' count={2} title="ASAP TO SEND" text={<span style={{ fontWeight: "bold" }}>ASAP</span>}/>
              </div>
            </Button>

            <Button
              className={`btn-drawer-options ${pathname === ROUTES.DEPOT_TRANSFERS.RECEIVED ? 'active' : ''}`}
              onClick={() =>{
                navigateTo(ROUTES.DEPOT_TRANSFERS.RECEIVED);
              }}
              icon={<ImportOutlined style={{ fontSize: 20 }} />}
            >
              <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%"
              }}>
                <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  RECEIVED
                  <Badge className='drawer-badges' count={10} title={"TO RECEIVE"} color="#52c41a"/>
                </span>
                <Badge className='drawer-badges' count={4} title={"ASAP TO RECEIVED"} text={<span style={{ fontWeight: "bold" }}>ASAP</span>}
                  style={{
                    
                    
                  }}
                />
              </div>
            </Button>
          </div>
        ),
    },
    {
      key: '2',
      label: (
        <span style={{ display: "flex", alignItems: "center", gap: 8, border: "none", fontWeight: "bold" }}>
          <CodeSandboxOutlined style={{ fontSize: 28 }} />
          EMB & ORDERS
        </span>
      ),
      children:
        (
          <div
            style={{

              flexDirection: "column",
              alignItems: "flex-start"

            }}
          >
            <Button
              className='btn-drawer-options'
              icon={<ControlOutlined style={{ fontSize: 20 }} />}
            >
              EMB
              <Badge className='drawer-badges' count={10} showZero color="magenta"/>
            </Button>
            <Button
              className='btn-drawer-options'
              
              icon={<SplitCellsOutlined style={{ fontSize: 20 }} />}
            >
              ORDERS MANAGEMENT
              <Badge className='drawer-badges' count={3} showZero color="magenta"/>
            </Button>
          </div>
        ),
    },
    {
      key: '3',
      label: (
        <span style={{ display: "flex", alignItems: "center", gap: 8, border: "none", fontWeight: "bold" }}>
          <SettingOutlined style={{ fontSize: 28 }} />
          SETTINGS
        </span>
      ),
      children:
        (
          <div
            style={{

              flexDirection: "column",
              alignItems: "flex-start"

            }}
          >
            <Button
              className='btn-drawer-options'
              icon={<AppstoreAddOutlined style={{ fontSize: 20 }} />}
            >
              NEW DEPOT
            </Button>
            <Button
              className='btn-drawer-options'
              icon={<UserAddOutlined style={{ fontSize: 20 }} />}
            >
              NEW USER
            </Button>
            <Button
              className='btn-drawer-options'
              icon={<ScheduleOutlined style={{ fontSize: 20 }} />}
            >
              SET SHIPPING DATE SCHEDULES
            </Button>
            <Button
              className='btn-drawer-options'
              icon={<LockOutlined style={{ fontSize: 20 }} />}
            >
              CHANGE PASSWORD
            </Button>
          </div>
        ),
    },
  ];

  return (
    <ConfigProvider
      theme={{
        token: {},
      }}
    >
      <>
        <Button size='large' onClick={showDrawer} icon={<MenuOutlined />} />

        <Drawer
          title="GIBB GROUP"
          placement="left"
          onClose={closeDrawer}
          open={open}
          footer={<ThemeSwitcher />}
          destroyOnHidden={true}
          styles={{
            footer: { borderTop: "1px solid" },
            header: { borderBottom: "1px solid" },
            body: { padding: 0 }
          }}
        >
          <Collapse
            items={items}
            activeKey={items.map((_, index) => `${index + 1}`)}
            style={{ borderRadius: 0 }}
            expandIconPosition="end"
            className="drawer-collapse"

          />
        </Drawer>
      </>
    </ConfigProvider>
  );
}
