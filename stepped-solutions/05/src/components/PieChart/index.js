import React, { PureComponent } from 'react';
import { ResponsiveContainer, PieChart as RPieChart, Pie, Sector } from 'recharts';
import styles from './styles.module.scss';

class PieChart extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeIndex: 0
    };
  }

  onPieEnter = (_data, index) => {
    this.setState({
      activeIndex: index
    });
  };

  renderActiveShape = data => {
    const { title } = this.props;
    const RADIAN = Math.PI / 180;
    const {
      cx,
      cy,
      midAngle,
      innerRadius,
      outerRadius,
      startAngle,
      endAngle,
      fill,
      payload,
      percent,
      value
    } = data;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? 'start' : 'end';

    return (
      <g>
        <text x={cx} y={cy} dy={-5} textAnchor="middle" fill="#000" fontSize="35">
          {title}
        </text>
        <text x={cx} y={cy} dy={30} textAnchor="middle" fill={fill} fontSize="20">
          {payload.name} - {value}
        </text>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
        />
        <Sector
          cx={cx}
          cy={cy}
          startAngle={startAngle}
          endAngle={endAngle}
          innerRadius={outerRadius + 6}
          outerRadius={outerRadius + 10}
          fill={fill}
        />
        <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
        <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
        <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">
          {value}
        </text>
        <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
          {`(${(percent * 100).toFixed(0)}%)`}
        </text>
      </g>
    );
  };

  render() {
    const { data } = this.props;
    const { activeIndex } = this.state;

    return (
      <ResponsiveContainer className={styles.container} height={400} width="50%">
        <RPieChart>
          <Pie
            activeIndex={activeIndex}
            activeShape={this.renderActiveShape}
            data={data}
            dataKey="value"
            fill="#8884d8"
            innerRadius="70%"
            onMouseEnter={this.onPieEnter}
            outerRadius="80%"
          />
        </RPieChart>
      </ResponsiveContainer>
    );
  }
}

export default PieChart;
