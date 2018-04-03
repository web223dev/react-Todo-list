import React, { Component } from 'react';
import styles from './TodoItem.scss';

class TodoItem extends Component {
  shouldComponentUpdate(nextProps, nextState){
    return this.props.checked !== nextProps.checked;
  }
  render() {
    const { text, checked, id, onToggle, onRemove } = this.props;
    return (
      <div className={styles.todo_item} onClick={()=>onToggle(id)}>
        <div className={styles.remove} onClick={(e)=> {
          e.stopPropagation();
          onRemove(id)
        }}>&times;</div>
        <div className={`${styles.todo_text} ${checked && styles.checked}`}>
          <div>{text}</div>
        </div>
        {
          checked && (<div className={styles.check_mark}>✓</div>)
        }
      </div>
    );
  }
}

export default TodoItem;