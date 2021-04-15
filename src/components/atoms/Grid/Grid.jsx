import React from 'react';
import PropTypes from 'proptypes';
import StyledGrid from './Grid.styled';

const Grid = (props) => {
  return <StyledGrid {...props}>{props.children}</StyledGrid>;
};

Grid.defaultProps = {
  direction: 'row',
  justify: 'space-between',
  alignItems: 'flex-start',
  alignContent: 'flex-start',
  xs: 12,
  sm: 12,
  md: 12,
  lg: 12,
  xl: 12,
};

Grid.propTypes = {
  direction: PropTypes.oneOf('row', 'row-reverse', 'column', 'column-reverse'),
  justify: PropTypes.oneOf(
    'flex-start',
    'flex-end',
    'center',
    'space-between',
    'space-around',
    'space-evenly'
  ),
  alignItems: PropTypes.oneOf('flex-start', 'flex-end', 'center', 'stretch', 'baseline'),
  alignContent: PropTypes.oneOf(
    'flex-start',
    'flex-end',
    'center',
    'stretch',
    'space-between',
    'space-around'
  ),
  xs: PropTypes.oneOf('1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'),
  sm: PropTypes.oneOf('1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'),
  md: PropTypes.oneOf('1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'),
  lg: PropTypes.oneOf('1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'),
  xl: PropTypes.oneOf('1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'),
};

export default Grid;
