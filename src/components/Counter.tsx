import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Card, Statistic } from 'semantic-ui-react';
import { counterSelector } from '../store';
import { increment, decrement } from '../store/modules/Counter';

const Counter: React.FC = () => {
  const { count } = useSelector(counterSelector);
  const dispatch = useDispatch();
  const handleIncrement = () => dispatch(increment());
  const handleDecrement = () => dispatch(decrement());

  return (
    <Card>
      <Statistic className="number-board">
        <Statistic.Label>count</Statistic.Label>
        <Statistic.Value>{count}</Statistic.Value>
      </Statistic>
      <Card.Content>
        <div className="ui two buttons">
          <Button color="red" onClick={handleDecrement}>
            -1
          </Button>
          <Button color="green" onClick={handleIncrement}>
            +1
          </Button>
        </div>
      </Card.Content>
    </Card>
  );
};

export default Counter;
