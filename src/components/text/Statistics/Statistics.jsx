import PropTypes from 'prop-types'
import styles from './Statistics.module.scss'

const Statistics = ({ className, label, percent }) => {
  return (
    <>
      {label && percent ? (
        <div className={`${className ? className : ''} ${styles.statistics}`}>
          <div className={styles.statistics_number}>
            {percent}<span>%</span>
          </div>
          <div className={styles.statistics_label}>{label}</div>
        </div>
      ) : null}
    </>
  )
}

Statistics.propTypes = {
  label: PropTypes.string,
  percent: PropTypes.string,
  className: PropTypes.string
}

export default Statistics