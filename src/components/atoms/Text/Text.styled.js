import styled from 'styled-components';

const StyledText = styled.div`
  ${(props) =>
    props.variant === 'body' && {
      fontSize: '1rem',
      color: props.theme.colors.text,
    }};

  ${(props) =>
    props.variant === 'h3' && {
      fontSize: '1.2rem',
      color: props.theme.colors.text,
      fontWeight: 400,
      margin: 0,
    }};

  ${(props) =>
    props.variant === 'h2' && {
      fontSize: '1.6rem',
      color: props.theme.colors.text,
      fontWeight: 400,
      margin: 0,
    }};

  ${(props) =>
    props.variant === 'body2' && {
      fontSize: '.8rem',
      color: props.theme.colors.textLight,
    }};

  ${(props) =>
    props.variant === 'error' && {
      fontSize: '.8rem',
      color: props.theme.colors.error,
    }};
`;

export default StyledText;
