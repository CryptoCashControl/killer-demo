"use client";

import React, { useEffect, useRef } from 'react';
import type { TradingConfig } from '@/lib/trading/types';

interface LiveTradingChartProps {
  symbol: string;
  interval: string;
  config: TradingConfig;
}

export default function LiveTradingChart({ symbol, interval, config }: LiveTradingChartProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetRef = useRef<any>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Clear existing content
    containerRef.current.innerHTML = '';

    // Generate unique ID
    const widgetId = `tradingview_${Math.random().toString(36).substring(7)}`;
    containerRef.current.id = widgetId;

    // Create TradingView widget script
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/tv.js';
    script.async = true;
    script.onload = () => {
      if (containerRef.current && (window as any).TradingView) {
        // Build studies array based on strategy config
        const studies = [];

        // Bollinger Bands - 布林带
        studies.push({
          id: 'BB@tv-basicstudies',
          inputs: {
            length: config.strategy.indicators.bollinger.period,
            stdDev: config.strategy.indicators.bollinger.deviation,
          },
        });

        // MACD
        studies.push({
          id: 'MACD@tv-basicstudies',
          inputs: {
            fastLength: config.strategy.indicators.macd.fastPeriod,
            slowLength: config.strategy.indicators.macd.slowPeriod,
            signalLength: config.strategy.indicators.macd.signalPeriod,
          },
        });

        // CCI - Commodity Channel Index
        studies.push({
          id: 'CCI@tv-basicstudies',
          inputs: {
            length: config.strategy.indicators.cci.period,
          },
        });

        // SuperTrend
        studies.push({
          id: 'SuperTrend@tv-basicstudies',
          inputs: {
            Factor: config.strategy.indicators.supertrend.multiplier,
            'ATR Period': config.strategy.indicators.supertrend.period,
          },
        });

        // Keltner Channels - 肯特纳通道
        studies.push({
          id: 'KeltnerChannels@tv-basicstudies',
          inputs: {
            length: config.strategy.indicators.keltner.maPeriod,
            mult: config.strategy.indicators.keltner.atrMultiple,
            atrLength: config.strategy.indicators.keltner.atrPeriod,
          },
        });

        widgetRef.current = new (window as any).TradingView.widget({
          autosize: true,
          symbol: `BINANCE:${symbol}`,
          interval: mapInterval(interval),
          timezone: 'Asia/Shanghai',
          theme: 'light',
          style: '1',
          locale: 'zh_CN',
          toolbar_bg: '#f1f3f6',
          enable_publishing: false,
          hide_side_toolbar: false,
          allow_symbol_change: true,
          container_id: widgetId,
          studies,
          disabled_features: ['use_localstorage_for_settings'],
          enabled_features: ['study_templates'],
        });
      }
    };

    document.body.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
      widgetRef.current = null;
    };
  }, [symbol, interval, config]);

  return (
    <div className="w-full bg-white dark:bg-gray-900 border-2 border-black dark:border-white">
      <div
        ref={containerRef}
        className="tradingview-widget-container"
        style={{ height: '600px', width: '100%' }}
      />
    </div>
  );
}

// Map our interval format to TradingView format
function mapInterval(interval: string): string {
  const mapping: Record<string, string> = {
    '1m': '1',
    '5m': '5',
    '15m': '15',
    '1h': '60',
    '4h': '240',
    '1d': 'D',
  };
  return mapping[interval] || '15';
}
