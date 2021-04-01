import React from 'react';
import styled, { css } from 'styled-components';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import LinkIcon from 'assets/icons/link.svg';
import CopyButton from 'components/molecules/CopyButton/CopyButton';
import PropTypes from 'prop-types';
import Button from 'components/atoms/Button/Button';
import { connect } from 'react-redux';
import { removeItem as removeItemAction } from 'redux/actions';

const StyledWrapper = styled.div`
  min-height: 380px;
  max-width: 500px;
  border-radius: 10px;
  overflow: hidden;
  display: grid;
  position: relative;
  grid-template-rows: 0.25fr 1fr;
  box-shadow: 10px 9px 13px 0px rgba(203, 203, 203, 0.75);
  -webkit-box-shadow: 10px 9px 13px 0px rgba(203, 203, 203, 0.75);
  -moz-box-shadow: 10px 9px 13px 0px rgba(203, 203, 203, 0.75);

  @media (max-width: 1024px) {
    width: 400px;
  }

  @media (max-width: 1700px) {
    min-width: 350px;
  }
`;

const InnerWrapper = styled.div`
  padding: 17px 30px;
  position: relative;
  background-color: ${({ theme, activeColor }) => theme[activeColor]};

  :first-of-type {
    z-index: 9999;
  }

  ${({ flex }) =>
    flex &&
    css`
      background-color: white;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    `}
`;

const StyledLinkButton = styled.a`
  height: 47px;
  width: 47px;
  border-radius: 50px;
  background: white url(${({ icon }) => icon}) no-repeat;
  display: block;
  background-position: 50%;
  background-size: 60%;
  position: absolute;
  transform: translateY(-50%);
  right: 30px;
  top: 50%;
  cursor: pointer;
`;

const StyledCopyButton = styled(CopyButton)`
  transform: translateY(-50%);
`;

const DateInfo = styled(Paragraph)`
  margin: 0 0 5px;
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSize.xs};
`;

const StyledHeading = styled(Heading)`
  margin: 5px 0 0;
  display: block;
`;

const Card = ({ title, content, created, link, pageType, removeItem, id }) => (
  <StyledWrapper>
    <InnerWrapper activeColor={pageType}>
      <StyledHeading>{title}</StyledHeading>
      <DateInfo>{created}</DateInfo>
      <StyledLinkButton icon={LinkIcon} href={link} target="_blank" rel="noopener noreferrer" />
      <StyledCopyButton videoLink={link} />
    </InnerWrapper>
    <InnerWrapper flex>
      <Paragraph>{content}</Paragraph>
      <Button onClick={() => removeItem(id)} secondary>
        Remove
      </Button>
    </InnerWrapper>
  </StyledWrapper>
);

Card.propTypes = {
  pageType: PropTypes.oneOf(['home', 'saves', 'videos', 'geeks']).isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  created: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  removeItem: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

// eslint-disable-next-line arrow-body-style
const mapDispatchToProps = (dispatch) => {
  return {
    removeItem: (id) => dispatch(removeItemAction(id)),
  };
};

export default connect(null, mapDispatchToProps)(Card);
