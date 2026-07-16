"use client";

import React from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
import Link from "next/link";

export default function LoginForm({
  onFinish,
  loading,
  onForgotPasswordClick,
}) {
  const [form] = Form.useForm();

  return (
    <div className="w-full">
      <div className="mb-8 text-left">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
          Welcome back
        </h1>
        <p className="text-slate-505 text-slate-500 dark:text-zinc-400 mt-2 text-sm">
          Sign in to access your admin dashboard
        </p>
      </div>

      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        requiredMark={false}
        className="space-y-4 text-left"
      >
        <Form.Item
          label={
            <span className="text-slate-650 dark:text-zinc-300 font-semibold text-xs uppercase tracking-wider">
              Email Address
            </span>
          }
          name="email"
          rules={[
            { required: true, message: "Please enter your email address" },
            { type: "email", message: "Please enter a valid email address" },
          ]}
          className="mb-4"
        >
          <Input
            prefix={<MailOutlined className="text-slate-400 mr-2" />}
            placeholder="you@financiallyup.com"
            size="large"
            className="h-11 border-slate-200 dark:border-zinc-700 dark:bg-zinc-800/80 dark:text-white rounded-lg focus:border-[#008043]"
            defaultValue="admin@financiallyup.com.au"
          />
        </Form.Item>

        <Form.Item
          label={
            <span className="text-slate-650 dark:text-zinc-300 font-semibold text-xs uppercase tracking-wider">
              Password
            </span>
          }
          name="password"
          initialValue="123456"
          rules={[{ required: true, message: "Please enter your password" }]}
          className="mb-4"
        >
          <Input.Password
            prefix={<LockOutlined className="text-slate-400 mr-2" />}
            placeholder="Enter your password"
            size="large"
            className="h-11 border-slate-200 dark:border-zinc-700 dark:bg-zinc-800/80 dark:text-white rounded-lg"
          />
        </Form.Item>

        <div className="flex items-center justify-between pt-1">
          <Form.Item name="remember" valuePropName="checked" className="mb-0">
            <Checkbox className="text-slate-600 dark:text-zinc-300 text-sm font-medium">
              Remember me
            </Checkbox>
          </Form.Item>
          <button
            type="button"
            onClick={onForgotPasswordClick}
            className="text-sm font-semibold text-[#008043] hover:text-[#006635] transition-colors cursor-pointer"
          >
            Forgot password?
          </button>
        </div>

        <Form.Item className="pt-2">
          <Link href="/admin/dashboard">
            <Button
              type="primary"
              htmlType="submit"
              loading={loading}
              block
              size="large"
              className="h-11 bg-[#008043] hover:bg-[#006635] active:bg-[#004d28] border-none font-semibold text-white rounded-lg transition-all duration-200 shadow-sm"
            >
              Sign In
            </Button>
          </Link>
        </Form.Item>
      </Form>
    </div>
  );
}
