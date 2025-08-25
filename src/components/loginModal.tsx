"use client"

import ClientOnly from './clientOnly'
import { useState } from 'react'
import { Modal, Input, Button, Form, Popover } from 'antd'
import 'antd/dist/reset.css'
import { useRouter } from 'next/navigation';
import { login } from "../services/firebase_auth.js"

export default function HomePage() {
  const [open, setOpen] = useState(true)
  const [openPop, setOpenPop] = useState(false)
  const [loading, setLoading] = useState(false)
  const router = useRouter();

  const onFinishLogin = async (values: any) => {
    setLoading(true);
    try {
      const user = await login(values.email, values.password);
      setOpen(false);
      alert(`Bem-vindo, ${user.email}`);
      router.push("/dashboard");
      setLoading(false);

    } catch (error: any) {
      setOpenPop(true);
      console.log("DEU RUIM");
      alert(`Login failed, ${error}`);

    }

  };

  return (
    <ClientOnly>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-black">
        <Modal
          open={open}
          footer={null}
          closable={false}
          centered
          className="login-modal"
        >
          <h2 className="text-center text-xl font-semibold mb-4">Login</h2>
          <Form
            name="login"
            layout="vertical"
            onFinish={onFinishLogin}
            autoComplete="off"
          >
            <Form.Item
              className='login-form-item'
              label="Email"
              name="email"
              rules={[
                { required: true, message: 'Type your E-mail' },
                { type: "email", message: "The input is not valid E-mail!" }
              ]}
            >
              <Input className='login-email-input' />
            </Form.Item>

            <Form.Item
              className='login-form-item'
              label="Password"
              name="password"
              rules={[{ required: true, message: 'Type your password' }]}
            >
              <Input.Password className='login-password-input' />
            </Form.Item>

            <Form.Item className="login-form-item-button-submit">
              <Popover
                content={<a style={{ fontWeight:"bold"}} onClick={() => {
                  setOpenPop(false);
                  setLoading(false);
                }}>Close</a>}
                title={<h3 style={{color:"red"}}>Error - Login Failed!</h3>}
                trigger="click"
                open={openPop}
              >
                <Button
                  className='login-button-submit'
                  type="primary"
                  htmlType="submit"
                  loading={loading}
                  onClick={() => {

                  }}
                >
                  Login
                </Button>
              </Popover>
            </Form.Item>
            {/* IMPLEMENT IN THE FUTURE, CASE IT BE NECESSARY. I CAN NOT SEE REASONS FOR THIS RIGHT NOW.
          <Form.Item>
              <Checkbox className='login-check-remember'> Remember me </Checkbox>
          </Form.Item>*/}
          </Form>
        </Modal>
      </div>
    </ClientOnly>
  )
}
