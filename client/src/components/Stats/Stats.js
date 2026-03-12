import React from 'react';
import useCountUp from '../../hooks/useCountUp';
import styles from './Stats.module.css';
import { STATS } from '../../utils/data';

const StatItem = ({ num, suffix, label }) => {
  const { count, ref } = useCountUp(num);
  return (
    <div className={styles.statItem} ref={ref}>
      <span className={styles.statNum}>{count}{suffix}</span>
      <div className={styles.statLabel}>{label}</div>
    </div>
  );
};

const Stats = () => {
  return (
    <div className={styles.statsBar}>
      {STATS.map((stat) => (
        <StatItem key={stat.label} {...stat} />
      ))}
    </div>
  );
};

export default Stats;
