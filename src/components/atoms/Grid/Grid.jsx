import React from 'react';
import PropTypes from 'proptypes';
import styled from 'styled-components';

const StyledGrid = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction};
  justify-content: ${(props) => props.justify};
  align-items: ${(props) => props.alignItems};
  align-content: ${(props) => props.alignContent};
  flex-wrap: wrap;
  flex-basis: ${(props) => {
    if (props.width <= 12) return `${props.width * 8.333333333333}%`;
    return '100%';
  }};
  max-width: ${(props) => {
    if (props.width <= 12) return `${props.width * 8.333333333333}%`;
    return '100%';
  }};
  ${(props) => console.log(props)}
  padding-top: ${(props) => props.padding && (props.padding.top || '0rem')}rem;
  padding-bottom: ${(props) => props.padding && (props.padding.bottom || '0rem')}rem;
  padding-right: ${(props) => props.padding && (props.padding.right || '0rem')}rem;
  padding-left: ${(props) => props.padding && (props.padding.left || '0rem')}rem;
  flex-flow: ${(props) => props.direction};
`;

const Grid = (props) => {
  return <StyledGrid {...props}>{props.children}</StyledGrid>;
};

Grid.defaultProps = {
  direction: 'row',
  justify: 'center',
  alignItems: 'center',
  alignContent: 'center',
  width: 12,
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
    'baselispace-between',
    'space-around'
  ),
  width: PropTypes.oneOf('1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'),
};

export default Grid;
