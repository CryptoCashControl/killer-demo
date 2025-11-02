"use client";

import React, { useEffect, useRef } from 'react';
import { createChart } from 'lightweight-charts';
import type { Candle, Trade } from '@/lib/trading/types';

interface BacktestChartProps {
  candles: Candle[];
  trades: Trade[];
  symbol: string;
}

export default function BacktestChart({ candles, trades, symbol }: BacktestChartProps) {
  const chartContainerRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<any>(null);

  useEffect(() => {
    if (!chartContainerRef.current || candles.length === 0) return;

    // Create chart
    const chart = createChart(chartContainerRef.current, {
      width: chartContainerRef.current.clientWidth,
      height: 500,
      layout: {
        background: { color: '#ffffff' },
        textColor: '#333',
      },
      grid: {
        vertLines: { color: '#e1e1e1' },
        horzLines: { color: '#e1e1e1' },
      },
      crosshair: {
        mode: 1,
      },
      timeScale: {
        borderColor: '#ccc',
        timeVisible: true,
        secondsVisible: false,
      },
      rightPriceScale: {
        borderColor: '#ccc',
      },
    });

    chartRef.current = chart;

    // Check if chart is valid
    // @ts-ignore - lightweight-charts v5 type definitions may be incomplete
    if (!chart || typeof chart.addCandlestickSeries !== 'function') {
      console.error('Chart API error: addCandlestickSeries not available', chart);
      return;
    }

    // Add candlestick series
    // @ts-ignore - Using type assertion for incomplete TypeScript definitions
    const candlestickSeries = chart.addCandlestickSeries({
      upColor: '#26a69a',
      downColor: '#ef5350',
      borderVisible: false,
      wickUpColor: '#26a69a',
      wickDownColor: '#ef5350',
    });

    // Format candle data for TradingView
    const chartData = candles.map(c => ({
      time: Math.floor(c.openTime / 1000), // TradingView uses seconds
      open: c.open,
      high: c.high,
      low: c.low,
      close: c.close,
    }));

    candlestickSeries.setData(chartData);

    // Add trade markers
    const markers: any[] = [];

    trades.forEach((trade) => {
      // Entry marker
      markers.push({
        time: Math.floor(trade.entryTime / 1000),
        position: trade.side === 'long' ? 'belowBar' : 'aboveBar',
        color: trade.side === 'long' ? '#26a69a' : '#ef5350',
        shape: trade.side === 'long' ? 'arrowUp' : 'arrowDown',
        text: trade.side === 'long' ? '买入' : '卖出',
      });

      // Exit marker
      if (trade.exitTime) {
        const profit = trade.pnl || 0;
        markers.push({
          time: Math.floor(trade.exitTime / 1000),
          position: trade.side === 'long' ? 'aboveBar' : 'belowBar',
          color: profit >= 0 ? '#4CAF50' : '#f44336',
          shape: 'circle',
          text: `${profit >= 0 ? '+' : ''}$${profit.toFixed(2)}`,
        });
      }
    });

    candlestickSeries.setMarkers(markers);

    // Handle resize
    const handleResize = () => {
      if (chartContainerRef.current && chartRef.current) {
        chartRef.current.applyOptions({
          width: chartContainerRef.current.clientWidth,
        });
      }
    };

    window.addEventListener('resize', handleResize);

    // Fit content
    chart.timeScale().fitContent();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (chartRef.current) {
        chartRef.current.remove();
        chartRef.current = null;
      }
    };
  }, [candles, trades]);

  return (
    <div className="w-full">
      <div className="mb-2 flex items-center justify-between">
        <h4 className="text-sm font-bold text-black dark:text-white">
          {symbol} K线图 ({candles.length} 根K线, {trades.length} 笔交易)
        </h4>
        <div className="flex gap-2 text-xs">
          <span className="px-2 py-1 bg-green-100 text-green-800 dark:bg-gray-900 dark:text-green-400 border border-green-600">
            ▲ 买入
          </span>
          <span className="px-2 py-1 bg-red-100 text-red-800 dark:bg-gray-900 dark:text-red-400 border border-red-600">
            ▼ 卖出
          </span>
          <span className="px-2 py-1 bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-400 border border-gray-600">
            ● 平仓
          </span>
        </div>
      </div>
      <div
        ref={chartContainerRef}
        className="border-2 border-black dark:border-white bg-white dark:bg-gray-900"
        style={{ height: '500px' }}
      />
    </div>
  );
}
