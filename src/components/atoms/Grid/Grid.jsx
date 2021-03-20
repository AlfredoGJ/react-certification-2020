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

  @media (min-width: 320px) {
    width: ${(props) => {
      if (props.xs <= 12) return `${props.xs * 8.333333333333}%`;
      return '100%';
    }};
  }

  @media (min-width: 481px) {
    width: ${(props) => {
      if (props.sm <= 12) return `${props.sm * 8.333333333333}%`;
      return '100%';
    }};
  }

  @media (min-width: 769px) {
    width: ${(props) => {
      if (props.md <= 12) return `${props.md * 8.333333333333}%`;
      return '100%';
    }};
  }

  @media (min-width: 1025px) {
    width: ${(props) => {
      if (props.lg <= 12) return `${props.lg * 8.333333333333}%`;
      return '100%';
    }};
  }

  @media (min-width: 1201px) {
    width: ${(props) => {
      if (props.xl <= 12) return `${props.xl * 8.333333333333}%`;
      return '100%';
    }};
  }

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
