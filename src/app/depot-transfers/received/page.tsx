"use client";

import { Typography, Card } from "antd";
import { useEffect } from "react";
import { useDrawer } from "@/hooks/contexts/drawerContext";

const { Title, Paragraph } = Typography;

export default function receivedPage() {

    const {setOpen} = useDrawer()
    useEffect(()=>{
        setOpen(false);
    },[])

  return (
    <main style={{ padding: "2rem", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <Card
        style={{
          maxWidth: 600,
          width: "100%",
          textAlign: "center",
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
        }}
      >
        <Title level={2} style={{ marginBottom: "1rem" }}>
          📦 Welcome to <span style={{ color: "#1677ff" }}>RECEIVED</span>
        </Title>
        <Paragraph style={{ fontSize: "1.1rem" }}>
          Here you can manage all the shipments that need to be RECEIVED.  
          Use the menu to navigate between other sections of the app.
        </Paragraph>
      </Card>
    </main>
  );
}
