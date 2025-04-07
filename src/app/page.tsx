'use client'

import { useState } from 'react'
import { POINT_VALUES } from '@/constants/futures'

export default function Home() {
  const [equity, setEquity] = useState('')
  const [symbol, setSymbol] = useState('E')
  const [pointsAtRisk, setPointsAtRisk] = useState('')
  const [riskPercentage, setRiskPercentage] = useState('2')
  const [result, setResult] = useState<CalculationResult | null>(null)

  interface CalculationResult {
    totalEquity: number
    symbol: string
    pointsAtRisk: number
    riskPerContract: number
    riskPercentage: number
    totalRisk: number
    numContracts: number
  }

  const calculateContracts = () => {
    const totalEquity = parseFloat(equity) * 1000
    const pointValue = POINT_VALUES[symbol as keyof typeof POINT_VALUES].value
    const points = parseFloat(pointsAtRisk)
    const riskDecimal = parseFloat(riskPercentage) / 100

    const riskPerContract = points * pointValue
    const totalRisk = totalEquity * riskDecimal
    const numContracts = Math.floor(totalRisk / riskPerContract)

    setResult({
      totalEquity,
      symbol,
      pointsAtRisk: points,
      riskPerContract,
      riskPercentage: parseFloat(riskPercentage),
      totalRisk,
      numContracts
    })
  }

  return (
    <main className="min-h-screen p-8">
      <div className="max-w-2xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold">Futures Position Calculator</h1>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Total Equity</label>
            <input
              type="number"
              value={equity}
              onChange={(e) => setEquity(e.target.value)}
              placeholder="Enter your total equity (in thousands)"
              className="w-full p-2 border rounded"
              min="1"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Symbol</label>
            <select
              value={symbol}
              onChange={(e) => setSymbol(e.target.value)}
              className="w-full p-2 border rounded"
            >
              {Object.entries(POINT_VALUES).map(([key, { name }]) => (
                <option key={key} value={key}>{key} - {name}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Points at Risk</label>
            <input
              type="number"
              value={pointsAtRisk}
              onChange={(e) => setPointsAtRisk(e.target.value)}
              placeholder="Enter points at risk"
              className="w-full p-2 border rounded"
              min="0.1"
              step="0.1"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Risk Percentage</label>
            <input
              type="number"
              value={riskPercentage}
              onChange={(e) => setRiskPercentage(e.target.value)}
              placeholder="Enter risk percentage"
              className="w-full p-2 border rounded"
              min="0.1"
              max="100"
              step="0.1"
            />
          </div>

          <button
            onClick={calculateContracts}
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            Calculate
          </button>
        </div>

        {result && (
          <div className="mt-8 p-4 border rounded bg-gray-50">
            <h2 className="text-xl font-semibold mb-4">Risk Calculation Results</h2>
            <div className="space-y-2">
              <p>Total Equity: ${result.totalEquity.toLocaleString()}</p>
              <p>Symbol: {result.symbol}</p>
              <p>Points at Risk: {result.pointsAtRisk}</p>
              <p>Risk Per Contract: ${result.riskPerContract.toLocaleString()}</p>
              <p>At {result.riskPercentage}% Risk:</p>
              <p>Total Allowable Risk: ${result.totalRisk.toLocaleString()}</p>
              <p>Number of Contracts to Trade: {result.numContracts}</p>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}
