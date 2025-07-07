import { gql } from '@apollo/client';

export const GET_ALL_CHARACTERS = gql`
    query Query {
        characters {
            results {
                name
                image
                status
                gender
            }
        }
    }
`;
