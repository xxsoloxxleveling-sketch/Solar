import React, { useState, useMemo, useEffect } from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { ROIResult } from '../types';

// Simple Counting Animation Component
const CountUp: React.FC<{ end: number; duration?: number; prefix?: string; suffix?: string; decimals?: number }> = ({
  end,
  duration = 2000,
  prefix = '',
  suffix = '',
  decimals = 0
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      // Easing function (easeOutExpo)
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

      setCount(ease * end);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [end, duration]);

  return (
    <span>
      {prefix}{count.toLocaleString(undefined, { maximumFractionDigits: decimals, minimumFractionDigits: decimals })}{suffix}
    </span>
  );
};

const ROICalculator: React.FC = () => {
  const [monthlyBill, setMonthlyBill] = useState(30000);
  const [roofSize, setRoofSize] = useState(2000);
  const [years, setYears] = useState(15);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const data: ROIResult[] = useMemo(() => {
    const results: ROIResult[] = [];
    const annualBill = monthlyBill * 12;
    const systemCost = roofSize * 2000;
    let cumulativeSavings = -systemCost;
    let gridCostCumulative = 0;

    for (let i = 0; i <= years; i++) {
      results.push({
        year: i,
        cumulativeSavings: i === 0 ? 0 : cumulativeSavings,
        gridCost: gridCostCumulative
      });

      const currentYearBill = annualBill * Math.pow(1.10, i);
      gridCostCumulative += currentYearBill;

      if (i > 0) {
        cumulativeSavings += (currentYearBill * 0.9);
      }
    }
    return results;
  }, [monthlyBill, roofSize, years]);

  const totalSavings = data[data.length - 1].cumulativeSavings;
  const breakEvenYear = data.findIndex(d => d.cumulativeSavings > 0);
  const tenYearReturn = data[10] ? data[10].cumulativeSavings : 0;

  const handleBillChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = Number(e.target.value);
    if (val <= 60000) {
      setMonthlyBill(val);
    }
  };

  return (
    <div className="py-32 bg-midnight relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-16 text-center md:text-left">
          <h4 className="text-gold font-sans tracking-[0.3em] text-xs uppercase mb-3">Financial Forecast</h4>
          <h2 className="font-display text-4xl md:text-5xl text-white">Energy Investment Simulator</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Controls Panel (Span 4) */}
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-[#1a1a1a] border border-white/5 p-8 rounded-sm backdrop-blur-md">
              <h3 className="font-display text-xl text-white mb-8 border-b border-white/10 pb-4">Inputs</h3>

              <div className="space-y-10">
                <div className="group">
                  <label className="flex justify-between items-center text-xs text-gray-500 mb-4 font-sans tracking-widest uppercase group-hover:text-gold transition-colors">
                    <span>Monthly Bill</span>
                    <span className="text-white font-mono">Rs. {monthlyBill.toLocaleString()}</span>
                  </label>
                  <input
                    type="range"
                    min="1000"
                    max="60000"
                    step="500"
                    value={monthlyBill}
                    onChange={(e) => setMonthlyBill(Number(e.target.value))}
                    className="w-full h-[2px] bg-gray-800 rounded-lg appearance-none cursor-pointer accent-gold hover:accent-white transition-all"
                  />
                </div>

                <div className="group">
                  <label className="flex justify-between items-center text-xs text-gray-500 mb-4 font-sans tracking-widest uppercase group-hover:text-gold transition-colors">
                    <span>Roof Area</span>
                    <span className="text-white font-mono">{roofSize.toLocaleString()} sq.ft</span>
                  </label>
                  <input
                    type="range"
                    min="500"
                    max="10000"
                    step="100"
                    value={roofSize}
                    onChange={(e) => setRoofSize(Number(e.target.value))}
                    className="w-full h-[2px] bg-gray-800 rounded-lg appearance-none cursor-pointer accent-gold hover:accent-white transition-all"
                  />
                </div>

                <div className="group">
                  <label className="flex justify-between items-center text-xs text-gray-500 mb-4 font-sans tracking-widest uppercase group-hover:text-gold transition-colors">
                    <span>Timeline</span>
                    <span className="text-white font-mono">{years} Years</span>
                  </label>
                  <input
                    type="range"
                    min="5"
                    max="25"
                    step="1"
                    value={years}
                    onChange={(e) => setYears(Number(e.target.value))}
                    className="w-full h-[2px] bg-gray-800 rounded-lg appearance-none cursor-pointer accent-gold hover:accent-white transition-all"
                  />
                </div>
              </div>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-midnight border border-white/5 p-6 rounded-sm">
                <div className="text-[10px] text-gray-500 uppercase tracking-widest mb-2">Payback Period</div>
                <div className="text-2xl font-mono text-cyan">
                  {breakEvenYear > -1 ? `${breakEvenYear}` : '-'} <span className="text-sm font-sans text-gray-400">Years</span>
                </div>
              </div>
              <div className="bg-midnight border border-white/5 p-6 rounded-sm">
                <div className="text-[10px] text-gray-500 uppercase tracking-widest mb-2">10-Year Return</div>
                <div className="text-xl md:text-2xl font-mono text-gold break-words">
                  <CountUp end={tenYearReturn} prefix="Rs. " />
                </div>
              </div>
            </div>
          </div>

          {/* Chart Area (Span 8) */}
          <div className="lg:col-span-8 bg-[#1a1a1a] border border-white/5 p-8 rounded-sm backdrop-blur-md flex flex-col min-h-[500px]">
            <div className="flex justify-between items-end mb-8">
              <div>
                <h3 className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">Projected Net Value</h3>
                <div className="text-4xl md:text-6xl font-display text-white">
                  <CountUp end={totalSavings} prefix="Rs. " />
                </div>
              </div>
            </div>

            <div className="flex-grow w-full h-[400px]">
              {mounted && (
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={data} margin={{ top: 20, right: 0, left: -20, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorSavings" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#D4AF37" stopOpacity={0.2} />
                        <stop offset="95%" stopColor="#D4AF37" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} />
                    <XAxis
                      dataKey="year"
                      stroke="#555"
                      tick={{ fill: '#666', fontSize: 10, fontFamily: 'monospace' }}
                      axisLine={false}
                      tickLine={false}
                    />
                    <YAxis
                      stroke="#555"
                      tick={{ fill: '#666', fontSize: 10, fontFamily: 'monospace' }}
                      tickFormatter={(value) => `${(value / 1000000).toFixed(1)}M`}
                      axisLine={false}
                      tickLine={false}
                    />
                    <Tooltip
                      contentStyle={{ backgroundColor: '#000', borderColor: '#333', borderRadius: '0px', fontFamily: 'monospace' }}
                      itemStyle={{ color: '#D4AF37' }}
                      formatter={(value: number) => [`Rs. ${value.toLocaleString(undefined, { maximumFractionDigits: 0 })}`, "Net Value"]}
                      labelStyle={{ color: '#666' }}
                    />
                    <Area
                      type="monotone"
                      dataKey="cumulativeSavings"
                      stroke="#D4AF37"
                      strokeWidth={2}
                      fillOpacity={1}
                      fill="url(#colorSavings)"
                      animationDuration={2000}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ROICalculator;