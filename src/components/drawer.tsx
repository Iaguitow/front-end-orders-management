import { useState } from 'react';
import { Drawer, Button, ConfigProvider, CollapseProps, Collapse, Badge } from 'antd';
import { MenuOutlined, DockerOutlined, ImportOutlined, SendOutlined, CodeSandboxOutlined, SettingOutlined, SplitCellsOutlined } from '@ant-design/icons';

import ThemeSwitcher from "@/components/switchThemeButton";

export default function SideDrawer() {
  const [open, setOpen] = useState(false);

  const showDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  const items: CollapseProps['items'] = [
    {
      key: '1',
      label: (
        <span style={{ display: "flex", alignItems: "center", gap: 10, border: "none", fontWeight: "bold" }}>
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
              style={{ height: "50px", borderRadius: 0, width: "100%", justifyContent: "flex-start", textAlign: "left", }}
              icon={<SendOutlined style={{ fontSize: 16 }} />}
            >
              <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%"
              }}>
                <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  TO SEND
                  <Badge count={6} title="TO SEND" color="cyan"
                    style={{
                      fontSize: "14px",  // text size inside the badge
                      minWidth: "35px",  // badge width
                    }}
                  />
                </span>
                <Badge count={2} title="ASAP TO SEND" text={<span style={{ fontWeight: "bold" }}>ASAP</span>}
                  style={{
                    fontSize: "14px",  // text size inside the badge
                    minWidth: "35px",  // badge width
                  }}
                />
              </div>
            </Button>

            <Button
              style={{ height: "50px", borderRadius: 0, width: "100%", justifyContent: "flex-start", textAlign: "left", }}
              icon={<ImportOutlined style={{ fontSize: 16 }} />}
            >
              <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%"
              }}>
                <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  RECEIVED
                  <Badge count={10} title={"TO RECEIVE"} color="#52c41a"
                    style={{
                      fontSize: "14px",  // text size inside the badge
                      minWidth: "35px",
                    }}
                  />
                </span>
                <Badge count={4} title={"ASAP TO RECEIVED"} text={<span style={{ fontWeight: "bold" }}>ASAP</span>}
                  style={{
                    fontSize: "14px",  // text size inside the badge
                    minWidth: "35px",
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
              style={{ height: "50px", borderRadius: 0, width: "100%", justifyContent: "flex-start", textAlign: "left", }}
              icon={<SettingOutlined style={{ fontSize: 16 }} />}
            >
              EMB
              <Badge count={10} showZero color="magenta"
                style={{
                  fontSize: "14px",  // text size inside the badge
                  minWidth: "35px",
                }}
              />
            </Button>
            <Button
              style={{ height: "50px", borderRadius: 0, width: "100%", justifyContent: "flex-start", textAlign: "left", }}
              icon={<SplitCellsOutlined style={{ fontSize: 16 }} />}
            >
              ORDERS PART-DISPATCHED
              <Badge count={3} showZero color="magenta"
                style={{
                  fontSize: "14px",  // text size inside the badge
                  minWidth: "35px",
                }}
              />
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
          title="Menu"
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
