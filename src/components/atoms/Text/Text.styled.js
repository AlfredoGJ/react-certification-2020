import styled from 'styled-components';

const StyledText = styled.text`
  ${(props) =>
    props.variant === 'body' && {
      fontSize: '1rem',
      color: props.theme.colors.text,
    }};

  ${(props) =>
    props.variant === 'body2' && {
      fontSize: '.8rem',
      color: props.theme.colors.textLight,
    }};
`;

export default StyledText;
