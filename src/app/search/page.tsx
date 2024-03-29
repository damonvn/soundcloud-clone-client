import type { Metadata } from 'next';
import Container from '@mui/material/Container';
import ClientSearch from '@/components/search/client.search';

export const metadata: Metadata = {
   title: 'Search your tracks',
   description: 'miêu tả thôi mà',
};

const SearchPage = () => {
   return (
      <Container sx={{ pt: '76px', minHeight: 'calc(100vh + 10px)' }}>
         <ClientSearch />
      </Container>
   );
};

export default SearchPage;
