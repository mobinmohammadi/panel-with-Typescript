    import { Pie, PieChart, Cell } from 'recharts';

const data = [
    { name: 'Group B', value: 150, fill: '#7FDF3C' },
    { name: 'Group C', value: 40, fill: '#FF6565' },
    { name: 'Group A', value: 110, fill: '#659DF5' },
];

export default function Chart({ isAnimationActive = true }: { isAnimationActive?: boolean }) {
    const total = data.reduce((sum, item) => sum + item.value, 0);

    return (
        <PieChart style={{ width: '100%', maxWidth: '176px', maxHeight: '176px', aspectRatio: 1 }} responsive>
            <Pie
                data={data}
                innerRadius="80%"
                outerRadius="100%"
                cornerRadius="50%"
                paddingAngle={5}
                dataKey="value"
                isAnimationActive={isAnimationActive}
            >
                {data.map((entry) => (
                    <Cell key={entry.name} fill={entry.fill} />
                ))}
            </Pie>
            <text
                x="50%"
                y="50%"
                textAnchor="middle"
                dominantBaseline="central"
                fontSize={12}
                fill="#000"
            >
                <tspan x="50%" dy="-0.6em" fontSize={10}>تعداد بیماران</tspan>
                <tspan x="50%" dy="1.2em" fontSize={14} fontWeight="bold">{total}</tspan>
            </text>
        </PieChart>
    );
}
