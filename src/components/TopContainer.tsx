import styled from '@emotion/styled/macro';
import React, { useContext } from 'react';
import { AppContext } from '../store/AppContext.tsx';

const TopContainer = () => {
    const { analyzedValues } = useContext(AppContext);

    return (
        <Container>
            <div>
                <h3>Words</h3>
                <span>{analyzedValues.words}</span>
            </div>
            <div>
                <h3>Characters</h3>
                <span>{analyzedValues.characters}</span>
            </div>
            <div>
                <h3>Sentences</h3>
                <span>{analyzedValues.sentences}</span>
            </div>
            <div>
                <h3>Paragraphs</h3>
                <span>{analyzedValues.paragraphs}</span>
            </div>
            <div>
                <h3>Pronouns</h3>
                <span>{analyzedValues.pronouns}</span>
            </div>
        </Container>
    );
};

const Container = styled.div({
    background: '#d7dedd',
    width: '70vw',
    padding: '10px 27px 15px',
    marginBottom: '10px',
    borderRadius: '3px 3px 0 0',
    display: 'flex',
    justifyContent: 'space-between',

    '> div': {
        margin: '3px',

        '> h3': {
            lineHeight: '10px',
        },

        '> span': {
            fontWeight: 400,
        },
    },
});

export default TopContainer;
