import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import CharacterCatalog from '../../features/CharacterCatalog';
import '../../shared/styles/page/page.scss';

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache()
});

const AdditionalPage = () => {
    return(
        <>
            <div className="page-breadcrumbs">
                Дополнительная страница
            </div>
            <section>
                <div className="section-name">3. GraphQL</div>
                <div className="section-inner">
                    <ApolloProvider client={client}>
                        <CharacterCatalog/>
                    </ApolloProvider>
                </div>
            </section>
        </>
    )
}

export default AdditionalPage