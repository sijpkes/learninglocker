// @ts-check
import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
// @ts-ignore
import styles from './styles.css';

export default withStyles(styles)(
  /**
   * @typedef {Object} PayloadItem
   * @property {string} name
   * @property {number} value
   * @param {{ display: (groupId: string) => string, payload: PayloadItem[], label: string }} props
   */
  (props) => {
    const { display, payload, label } = props;
    return (
      <div className={styles.customTooltip} key={`toolT${(Math.random() * 100)}`}>
        <div className={styles.label}  key={`toolTB${(Math.random() * 100)}`}>{display(label)}</div>
        {payload.map(({ name, value }) => {
          return <div className={styles.value} key={`toolTB${value}`}>{name} - {value}</div>;
        })}
      </div>
    );
  }
);
