"use client";

import React from "react";
import { Form, Button } from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
import { AntInput } from "@/services/antdFields";

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
        <p className="text-slate-500 dark:text-zinc-400 mt-2 text-sm">
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
        <AntInput
          type="email"
          name="email"
          label={
            <span className="text-slate-650 dark:text-zinc-300 font-semibold text-xs uppercase tracking-wider">
              Email Address
            </span>
          }
          placeholder="you@financiallyup.com.au"
          preIconAnt={<MailOutlined className="text-slate-400 mr-2" />}
          size="large"
          className="h-11 border-slate-200 dark:border-zinc-700 dark:bg-zinc-800/80 dark:text-white rounded-lg focus:border-[#008043]"
          reqMsg="Please enter your email address"
          emailErrorMsg="Please enter a valid email address"
        />

        <AntInput
          type="password"
          name="password"
          label={
            <span className="text-slate-650 dark:text-zinc-300 font-semibold text-xs uppercase tracking-wider">
              Password
            </span>
          }
          placeholder="Enter your password"
          preIconAnt={<LockOutlined className="text-slate-400 mr-2" />}
          size="large"
          className="h-11 border-slate-200 dark:border-zinc-700 dark:bg-zinc-800/80 dark:text-white rounded-lg"
          reqMsg="Please enter your password"
        />

        <div className="flex items-center justify-between pt-1">
          <AntInput
            type="checkbox"
            name="remember"
            text={<span className="text-slate-600 dark:text-zinc-300 text-sm font-medium">Remember me</span>}
            containerClassName="!mb-0"
            noRequired
          />
          <button
            type="button"
            onClick={onForgotPasswordClick}
            className="text-sm font-semibold text-[#008043] hover:text-[#006635] transition-colors cursor-pointer"
          >
            Forgot password?
          </button>
        </div>

        <Form.Item className="pt-2">
          <Button
            type="primary"
            htmlType="submit"
            loading={loading}
            block
            size="large"
            className="h-11 bg-[#008043] hover:bg-[#006635] active:bg-[#004d28] border-none font-semibold text-white rounded-lg transition-all duration-200 shadow-sm cursor-pointer"
          >
            Sign In
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
