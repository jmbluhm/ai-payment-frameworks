import { useState, useEffect, useRef } from 'react'
import * as d3 from 'd3'
import Card from '../shared/Card'

export default function ComplexityCalculator() {
  const [platforms, setPlatforms] = useState(10)
  const [merchants, setMerchants] = useState(1000)
  const svgRef = useRef<SVGSVGElement>(null)

  const withoutUCP = platforms * merchants
  const withUCP = platforms + merchants
  const savings = withoutUCP - withUCP
  const savingsPercent = ((savings / withoutUCP) * 100).toFixed(1)

  useEffect(() => {
    if (!svgRef.current) return

    const svg = d3.select(svgRef.current)
    const width = svgRef.current.clientWidth
    const height = 300

    svg.selectAll('*').remove()

    // Without UCP (mesh network)
    const withoutGroup = svg.append('g')
      .attr('transform', `translate(${width * 0.25}, ${height / 2})`)

    const meshNodes = 6
    const radius = 60
    const meshPositions = Array.from({ length: meshNodes }, (_, i) => {
      const angle = (i / meshNodes) * Math.PI * 2
      return {
        x: Math.cos(angle) * radius,
        y: Math.sin(angle) * radius,
      }
    })

    // Draw all connections (mesh)
    meshPositions.forEach((source, i) => {
      meshPositions.forEach((target, j) => {
        if (i < j) {
          withoutGroup.append('line')
            .attr('x1', source.x)
            .attr('y1', source.y)
            .attr('x2', target.x)
            .attr('y2', target.y)
            .attr('stroke', '#FF4458')
            .attr('stroke-width', 1)
            .attr('stroke-opacity', 0.3)
        }
      })
    })

    // Draw nodes
    meshPositions.forEach((pos) => {
      withoutGroup.append('circle')
        .attr('cx', pos.x)
        .attr('cy', pos.y)
        .attr('r', 8)
        .attr('fill', '#FF4458')
    })

    // Label
    withoutGroup.append('text')
      .attr('y', radius + 40)
      .attr('text-anchor', 'middle')
      .attr('fill', '#0A0E27')
      .attr('font-size', '14px')
      .attr('font-weight', '600')
      .text('Without UCP')

    withoutGroup.append('text')
      .attr('y', radius + 60)
      .attr('text-anchor', 'middle')
      .attr('fill', '#64748B')
      .attr('font-size', '12px')
      .text('N × N Complexity')

    // With UCP (hub and spoke)
    const withGroup = svg.append('g')
      .attr('transform', `translate(${width * 0.75}, ${height / 2})`)

    const spokeNodes = 6
    const spokePositions = Array.from({ length: spokeNodes }, (_, i) => {
      const angle = (i / spokeNodes) * Math.PI * 2
      return {
        x: Math.cos(angle) * radius,
        y: Math.sin(angle) * radius,
      }
    })

    // Draw spokes from center
    spokePositions.forEach((pos) => {
      withGroup.append('line')
        .attr('x1', 0)
        .attr('y1', 0)
        .attr('x2', pos.x)
        .attr('y2', pos.y)
        .attr('stroke', '#00B87C')
        .attr('stroke-width', 2)
        .attr('stroke-opacity', 0.6)
    })

    // Draw outer nodes
    spokePositions.forEach((pos) => {
      withGroup.append('circle')
        .attr('cx', pos.x)
        .attr('cy', pos.y)
        .attr('r', 8)
        .attr('fill', '#00B87C')
    })

    // Draw center node (UCP)
    withGroup.append('circle')
      .attr('cx', 0)
      .attr('cy', 0)
      .attr('r', 20)
      .attr('fill', '#0066FF')

    withGroup.append('text')
      .attr('text-anchor', 'middle')
      .attr('dy', '0.3em')
      .attr('fill', 'white')
      .attr('font-size', '10px')
      .attr('font-weight', '600')
      .text('UCP')

    // Label
    withGroup.append('text')
      .attr('y', radius + 40)
      .attr('text-anchor', 'middle')
      .attr('fill', '#0A0E27')
      .attr('font-size', '14px')
      .attr('font-weight', '600')
      .text('With UCP')

    withGroup.append('text')
      .attr('y', radius + 60)
      .attr('text-anchor', 'middle')
      .attr('fill', '#64748B')
      .attr('font-size', '12px')
      .text('Hub & Spoke')
  }, [platforms, merchants])

  return (
    <Card className="my-8">
      <h3 className="text-h4 mb-6">Integration Complexity Calculator</h3>

      <div className="space-y-6 mb-8">
        {/* Platforms Slider */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <label htmlFor="platforms" className="text-body font-medium">
              Number of Platforms
            </label>
            <span className="text-h4 text-protocol-blue">{platforms}</span>
          </div>
          <input
            id="platforms"
            type="range"
            min="1"
            max="50"
            value={platforms}
            onChange={(e) => setPlatforms(Number(e.target.value))}
            className="w-full h-2 bg-light-gray rounded-lg appearance-none cursor-pointer accent-protocol-blue"
          />
        </div>

        {/* Merchants Slider */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <label htmlFor="merchants" className="text-body font-medium">
              Number of Merchants
            </label>
            <span className="text-h4 text-protocol-blue">{merchants.toLocaleString()}</span>
          </div>
          <input
            id="merchants"
            type="range"
            min="1"
            max="10000"
            value={merchants}
            onChange={(e) => setMerchants(Number(e.target.value))}
            className="w-full h-2 bg-light-gray rounded-lg appearance-none cursor-pointer accent-protocol-blue"
          />
        </div>
      </div>

      {/* Visualization */}
      <svg ref={svgRef} className="w-full mb-8" height="300" />

      {/* Results */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-error-red/10 border border-error-red/20 rounded-lg p-4">
          <div className="text-body-sm text-medium-gray mb-1">Without UCP</div>
          <div className="text-h2 text-error-red">{withoutUCP.toLocaleString()}</div>
          <div className="text-body-sm text-medium-gray">integrations</div>
        </div>

        <div className="bg-success-green/10 border border-success-green/20 rounded-lg p-4">
          <div className="text-body-sm text-medium-gray mb-1">With UCP</div>
          <div className="text-h2 text-success-green">{withUCP.toLocaleString()}</div>
          <div className="text-body-sm text-medium-gray">integrations</div>
        </div>

        <div className="bg-protocol-blue/10 border border-protocol-blue/20 rounded-lg p-4">
          <div className="text-body-sm text-medium-gray mb-1">Reduction</div>
          <div className="text-h2 text-protocol-blue">{savingsPercent}%</div>
          <div className="text-body-sm text-medium-gray">{savings.toLocaleString()} fewer</div>
        </div>
      </div>
    </Card>
  )
}
