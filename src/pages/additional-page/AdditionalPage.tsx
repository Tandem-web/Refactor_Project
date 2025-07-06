// import ExchangeRatesComponent from "../../components/exchangeRate/ExchangeRatesComponent";
// import TestGraphQL from "../../components/TestGraphQL/TestGraphQL";
// import TestWebSocket from "../../components/TestWebSocket/TestWebSocket";

// import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

// const client = new ApolloClient({
//   uri: 'https://rickandmortyapi.com/graphql',
//   cache: new InMemoryCache()
// });

interface AdditionalPageProps {
    
}

const AdditionalPage: React.FC<AdditionalPageProps> = () => {
    return(
        <>
            <div className="page-breadcrumbs">
                Дополнительная страница
            </div>
        </>
    )
}

export default AdditionalPage