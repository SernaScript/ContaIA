import { ChartContainer, ChartTooltip } from "./ui/chart";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Ene", value: 1200 },
  { name: "Feb", value: 2100 },
  { name: "Mar", value: 800 },
  { name: "Abr", value: 1600 },
  { name: "May", value: 2400 },
  { name: "Jun", value: 1800 },
];

const chartConfig = {
  value: {
    label: "Monto",
    theme: {
      light: "#3b82f6",
      dark: "#60a5fa",
    },
  },
};

export default function ServicesChart() {
  return (
    <div className="my-10">
      <h3 className="text-lg font-semibold mb-2 text-blue-700 dark:text-blue-300">
        Actividad Reciente
      </h3>
      <ChartContainer
        config={chartConfig}
        className="w-full h-64 bg-white dark:bg-gray-900 rounded-lg shadow"
      >
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.1} />
              </linearGradient>
            </defs>
            <XAxis dataKey="name" stroke="#888" />
            <YAxis stroke="#888" />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip content={<ChartTooltip />} />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#3b82f6"
              fill="url(#colorValue)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </ChartContainer>
    </div>
  );
}
