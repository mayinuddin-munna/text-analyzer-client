import styled from '@emotion/styled/macro';
import React, { useContext } from 'react';
import { AppContext } from '../store/AppContext.tsx';

const TopCounter = () => {
    const { analyzedValues } = useContext(AppContext);

    return (
        <Container>
            <>
                <h3>Words</h3>
                <span>{analyzedValues.words}</span>
            </>
            <>
                <h3>Characters</h3>
                <span>{analyzedValues.characters}</span>
            </>
            <>
                <h3>Sentences</h3>
                <span>{analyzedValues.sentences}</span>
            </>
            <>
                <h3>Paragraphs</h3>
                <span>{analyzedValues.paragraphs}</span>
            </>
            <>
                <h3>Pronouns</h3>
                <span>{analyzedValues.pronouns}</span>
            </>
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

export default TopCounter;
