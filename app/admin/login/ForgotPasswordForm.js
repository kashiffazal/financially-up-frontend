"use client";

import React from "react";
import { Form, Button } from "antd";
import { MailOutlined, ArrowLeftOutlined } from "@ant-design/icons";
import { AntInput } from "@/services/antdFields";

export default function ForgotPasswordForm({
  onFinish,
  loading,
  onBackToSignInClick,
}) {
  const [form] = Form.useForm();

  return (
    <div className="w-full">
      <div className="mb-8 text-left">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
          Forgot password?
        </h1>
        <p className="text-slate-500 dark:text-zinc-400 mt-2 text-sm">
          Enter your email address and we&apos;ll send you a link to reset your
          password.
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

        <Form.Item className="pt-2">
          <Button
            type="primary"
            htmlType="submit"
            loading={loading}
            block
            size="large"
            className="h-11 bg-[#008043] hover:bg-[#006635] active:bg-[#004d28] border-none font-semibold text-white rounded-lg transition-all cursor-pointer"
          >
            Send Reset Link
          </Button>
        </Form.Item>

        <div className="text-center pt-2">
          <button
            type="button"
            onClick={onBackToSignInClick}
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-slate-800 dark:text-zinc-400 dark:hover:text-white transition-colors cursor-pointer"
          >
            <ArrowLeftOutlined className="text-xs" /> Back to sign in
          </button>
        </div>
      </Form>
    </div>
  );
}
