import styled from "styled-components";

export const Container = styled.div`
.track {
    display: flex;
    align-items: center;
    gap: 1rem;
    &__image {
    }
    &__info {
        display: flex;
        flex-direction: column;
        gap: 0.3rem;
        &__track__name {
        color: white;
        font-size: .9rem
        }
        &__track__artists {
            font-size: .8rem;
            color: #b3b3b3;
        }
    }
    }
`;