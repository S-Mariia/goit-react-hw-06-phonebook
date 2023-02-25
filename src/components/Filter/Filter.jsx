import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/actions';
import { Paragraph, Input } from './Filter.styled';

export const Filter = () => {
  const filterValue = useSelector(state => state.filter);
  const dispatch = useDispatch();

  return (
    <>
      <Paragraph>Find contacts by name</Paragraph>
      <Input
        onChange={evt => dispatch(setFilter(evt.currentTarget.value))}
        type="text"
        name="filter"
        placeholder="Enter name"
        value={filterValue}
      />
    </>
  );
};
