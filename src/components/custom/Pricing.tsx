"use client";

import React, { useState } from 'react';
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { Cover } from "@/components/ui/cover";
import {Flex, Strong} from "@radix-ui/themes";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import Link from "next/link";
import EmailContactModal from '@/components/custom/EmailContactModal';

export default function Pricing() {
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);

  return (
    <div className="w-full p-1" id="pricing">
      <h1 className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center mt-10 mb-10 relative z-20 py-10 text-black dark:text-white">
        立即加入 CC Killer <br /> 获得 <Cover>专业成长</Cover>
      </h1>
      <div className="pl-15 pr-15">
        <div className="flex flex-col md:flex-row items-center w-full gap-2">
          <CardSpotlight className="h-125 grow">
            <p className="text-xl font-bold relative z-20 mt-2 text-white">
              免费计划
            </p>
            <div className="text-neutral-200 mt-4 relative z-20">
              我们在 X 平台会不定时的推出针对市场的调研报告以及入场、出场信号。
              <ul className="list-none  mt-2">
                <Step title="获得 BTC 市场评估" />
                <Step title="获得部分山寨币交易参考图" />
                <Step title="少量入场信号" />
                <Step title="少量咨询回复" />
              </ul>
            </div>
            <p className="text-neutral-300 mt-4 relative z-20 text-sm">
              注意：因为我们在 X 发布的内容不定期且<Strong>脱离交易系统的任何交易都是不安全的</Strong>。
            </p>
            <p className="text-neutral-300 mt-4 relative z-20 text-sm">
              需要您自己控制好相关风险。我们对您的任何损失概不负责。
            </p>
          </CardSpotlight>
          <CardSpotlight className="h-125 grow mt-2 md:mt-0">
            <p className="text-xl font-bold relative z-20 mt-2 text-white">
              基础计划
            </p>
            <div className="text-neutral-200 mt-4 relative z-20">
              我们针对基础会员，提供优质服务计划，资金 ≤500万 选择此项。
              <ul className="list-none  mt-2">
                <Step title="获得主流币种市场评估" />
                <Step title="获得主流山寨币交易参考图" />
                <Step title="获得主流币种入场信号" />
                <Step title="获得主流币种跟单权限" />
                <Step title="获得工作日咨询回复" />
                <Step title="较低资金管理费" />
                <Step title="较低分佣比例" />
                <Step title="24/5 客户服务" />
              </ul>
            </div>
            <p className="text-neutral-300 mt-4 relative z-20 text-sm">
              按照我们的交易系统提示进行交易。提供合约、现货跟单服务，部分期权对冲需要自行按照要求购买。
            </p>
            <ShimmerButton className="mt-2">
              <button
                onClick={() => setIsEmailModalOpen(true)}
                className="text-center text-sm font-medium leading-none text-white">
                立即咨询
              </button>
            </ShimmerButton>
          </CardSpotlight>
          <CardSpotlight className="h-125 grow mt-2 md:mt-0">
            <p className="text-xl font-bold relative z-20 mt-2 text-white">
              高级计划
            </p>
            <div className="text-neutral-200 mt-4 relative z-20">
              我们针对高级会员，提供专属服务计划，资金 ≤5000万 选择此项。
              <ul className="list-none  mt-2">
                <Step title="获得全部货币市场评估" />
                <Step title="获得全部交易参考图" />
                <Step title="获得全部入场信号" />
                <Step title="专业一对一交易跟单" />
                <Step title="业界最低：资金管理费" />
                <Step title="业界最低：分佣比例" />
                <Step title="24/7 客户服务" />
              </ul>
            </div>
            <p className="text-neutral-300 mt-4 relative z-20 text-sm">
              按照我们的交易系统提示进行交易。提供合约、现货跟单服务，提供期权代理服务。
            </p>
            <p className="text-neutral-300 mt-4 relative z-20 text-sm">
              提供额外的即时咨询服务。
            </p>
            <ShimmerButton className="mt-2">
              <button
                onClick={() => setIsEmailModalOpen(true)}
                className="text-center text-sm font-medium leading-none text-white">
                立即咨询
              </button>
            </ShimmerButton>
          </CardSpotlight>
        </div>
        <CardSpotlight className="w-full mt-2">
          <p className="text-xl font-bold relative z-20 mt-2 text-white">
            大客户计划
          </p>
          <div className="text-neutral-200 mt-4 relative z-20">
            我们针对优质的大客户，提供大客户私享一对一服务计划，资金 ≥5000万 选择此项。
          </div>
          <p className="text-neutral-300 mt-4 relative z-20 text-sm">
            按照我们的交易系统提示进行交易。提供合约、现货跟单服务，提供期权代理服务。
          </p>
          <ShimmerButton className="shadow-2xl mt-2">
            <button
              onClick={() => setIsEmailModalOpen(true)}
              className="text-center text-sm font-medium leading-none text-white">
              立即咨询
            </button>
          </ShimmerButton>
        </CardSpotlight>
      </div>

      {/* Email Contact Modal */}
      <EmailContactModal
        isOpen={isEmailModalOpen}
        onClose={() => setIsEmailModalOpen(false)}
        title="业务咨询"
      />
    </div>
  );
}

const Step = ({ title }: { title: string }) => {
  return (
    <li className="flex gap-2 items-start">
      <CheckIcon />
      <p className="text-white">{title}</p>
    </li>
  );
};

const CheckIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4 text-blue-500 mt-1 shrink-0"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M12 2c-.218 0 -.432 .002 -.642 .005l-.616 .017l-.299 .013l-.579 .034l-.553 .046c-4.785 .464 -6.732 2.411 -7.196 7.196l-.046 .553l-.034 .579c-.005 .098 -.01 .198 -.013 .299l-.017 .616l-.004 .318l-.001 .324c0 .218 .002 .432 .005 .642l.017 .616l.013 .299l.034 .579l.046 .553c.464 4.785 2.411 6.732 7.196 7.196l.553 .046l.579 .034c.098 .005 .198 .01 .299 .013l.616 .017l.642 .005l.642 -.005l.616 -.017l.299 -.013l.579 -.034l.553 -.046c4.785 -.464 6.732 -2.411 7.196 -7.196l.046 -.553l.034 -.579c.005 -.098 .01 -.198 .013 -.299l.017 -.616l.005 -.642l-.005 -.642l-.017 -.616l-.013 -.299l-.034 -.579l-.046 -.553c-.464 -4.785 -2.411 -6.732 -7.196 -7.196l-.553 -.046l-.579 -.034a28.058 28.058 0 0 0 -.299 -.013l-.616 -.017l-.318 -.004l-.324 -.001zm2.293 7.293a1 1 0 0 1 1.497 1.32l-.083 .094l-4 4a1 1 0 0 1 -1.32 .083l-.094 -.083l-2 -2a1 1 0 0 1 1.32 -1.497l.094 .083l1.293 1.292l3.293 -3.292z"
        fill="currentColor"
        strokeWidth="0"
      />
    </svg>
  );
};