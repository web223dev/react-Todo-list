import React from 'react';
import style from './TodoListTemplate.scss';

const TodoListTemplate = ({ form, palette, children }) => {
  return (
    <div className={style.todo_list_template}>
      <div className={style.title}>
        To Do List
      </div>
      <section className={style.pallete_wrapper}>
        {palette}
      </section>
      <section className={style.form_wrapper}>
        {form}
      </section>
      <section className={style.todos_wrapper}>
        {children}
      </section>
    </div>
  );
};

export default TodoListTemplate