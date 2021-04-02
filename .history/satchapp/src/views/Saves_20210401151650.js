import React, { useState } from 'react';
import { connect } from 'react-redux';
import UserTemplate from 'templates/UserTemplate';
import Card from 'components/molecules/Card/Card';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Input from 'components/atoms/Input/Input';
import plusIcon from 'assets/icons/plus.svg';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import Heading from 'components/atoms/Heading/Heading';
import NewItemBar from 'components/organisms/NewItemBar/NewItemBar';

const StyledGrid = styled.div`
  display: grid;
  grid-gap: 85px;

  @media (min-width: 375px) {
    grid-template-columns: 1fr;
    margin-left: 40px;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1535px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const StyledHeading = styled(Heading)`
  margin: 50px 0 50px 0;

  @media (max-width: 1024px) {
    text-align: center;
    margin-left: 50px;
  }
`;

const StyledWrapper = styled.div`
  position: relative;
  padding: 25px 150px 25px 70px;
`;

const StyledButtonIcon = styled(ButtonIcon)`
  position: fixed;
  bottom: 40px;
  right: 40px;
  background-color: ${({ theme }) => theme.saves};
  background-size: 35%;
  border-radius: 50px;
  z-index: 10000;
  &:hover {
    transition: all 1s linear;
    transform: rotate(45deg);
  }
`;

const Saves = ({ saves }) => {
  const [isVisible, changeVisibility] = useState(false);

  const isNewItemBarVisible = () => changeVisibility(() => !isVisible);

  return (
    <UserTemplate pageType="saves">
      <StyledWrapper>
        <Input placeholder="Search" search />
        <StyledHeading big as="h1">
          Save some videos to watch them later!
        </StyledHeading>
        <StyledGrid>
          {saves.map(({ title, created, link, content, id }) => (
            <Card
              pageType="saves"
              link={link}
              title={title}
              created={created}
              content={content}
              id={id}
              key={id}
            />
          ))}
        </StyledGrid>
        <StyledButtonIcon icon={plusIcon} onClick={isNewItemBarVisible} />
        <NewItemBar isVisible={isVisible} />
      </StyledWrapper>
    </UserTemplate>
  );
};
Saves.propTypes = {
  saves: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      created: PropTypes.string.isRequired,
    }),
  ),
};

Saves.defaultProps = {
  saves: [],
};

const mapStateToProps = ({ saves }) => ({ saves });

export default connect(mapStateToProps)(Saves);
