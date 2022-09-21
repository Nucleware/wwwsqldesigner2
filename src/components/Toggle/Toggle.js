import classNames from 'classnames';
import styles from './Toggle.module.css';

function Toggle({ state, onClick }) {
  const className = classNames(styles.toggle, { [styles.on]: state, [styles.off]: !state });
  return (
    <>
      <div onClick={onClick} className={className}></div>
    </>
  );
}

export default Toggle;
