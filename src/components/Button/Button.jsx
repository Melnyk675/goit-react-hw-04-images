import css from './Button.module.css'; 

export const Button = ({ clickLoad }) => {
  return (
    <button onClick={clickLoad} className={css.button} type="button">
      Load more
    </button>
  );
};