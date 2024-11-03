import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ChartConfig, ChartContainer } from '@/components/ui/chart'
import React from 'react'
import { Cell, Pie, PieChart } from 'recharts'

const chartData = [
    { browser: "basic", visitors: 275, fill: "var(--color-chrome)" },
    { browser: "bumper", visitors: 200, fill: "var(--color-safari)" },
    { browser: "deluxe", visitors: 287, fill: "var(--color-firefox)" },
    { browser: "superdeluxe", visitors: 173, fill: "var(--color-edge)" },
    { browser: "other", visitors: 190, fill: "var(--color-other)" },
  ]
  
  const chartConfig = {
    visitors: {
      label: "Count",
    },
    basic: {
      label: "basic",
      color: "hsl(var(--chart-1))",
    },
    bumper: {
      label: "bumper",
      color: "hsl(var(--chart-2))",
    },
    deluxe: {
      label: "deluxe",
      color: "hsl(var(--chart-3))",
    },
    superdeluxe: {
      label: "Super-Deluxe",
      color: "hsl(var(--chart-4))",
    },
    other: {
      label: "Other",
      color: "hsl(var(--chart-5))",
    },
  } satisfies ChartConfig

function Profile() {
    

      const totalVisitors = React.useMemo(() => {
        return chartData.reduce((acc, curr) => acc + curr.visitors, 0)
      }, [])

  return (
    <Card className='max-w-sm mx-auto'>
        <CardHeader>
            <CardTitle className='text-white-300'>Tickets Sold</CardTitle>
            <CardDescription>
                Track your tickets here.
            </CardDescription>
        </CardHeader>
        <CardContent>
            <ChartContainer config={chartConfig} className="mx-auto aspect-square max-h-[250px]"  >
<PieChart>
    <Pie 
    data={chartData}
    dataKey='visitors'
    nameKey='browser'
    innerRadius={60}
    strokeWidth={5}>
{chartData.map((entry, index) => (
  <Cell key={`cell-${index}`} fill={entry.fill} />
))}
    </Pie>
</PieChart>
            </ChartContainer>
        </CardContent>
    </Card>
  )
}

export default Profile