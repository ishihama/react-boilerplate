import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../atoms/Button';

import { counterSelector } from '../../store';
import { increment, decrement } from '../../store/modules/Counter';

const Counter: React.FC = () => {
  const { count } = useSelector(counterSelector);
  const dispatch = useDispatch();
  const handleIncrement = () => dispatch(increment());
  const handleDecrement = () => dispatch(decrement());

  return (
    <div>
      {count}
      count
      <div className="ui two buttons">
        <Button color="red" onClick={handleDecrement}>
          -1
        </Button>
        <Button color="green" onClick={handleIncrement}>
          +1
        </Button>
      </div>
    </div>
  );
};

export default Counter;
