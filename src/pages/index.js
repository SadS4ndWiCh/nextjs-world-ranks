import styles from '../styles/Home.module.css';

import Layout from '../components/Layout';
import SearchInput from '../components/SearchInput';
import CountriesTable from '../components/CountriesTable';


export default function Home({ countries }) {
  return (
    <Layout title='World Ranks'>
      <div className={styles.count}>Found {countries.lenght} countries</div>

      <SearchInput placeholder='Filter by Name, Region and Subregion' />

      <CountriesTable countries={countries} />
    </Layout>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://restcountries.eu/rest/v2/all');
  const countries = await res.json();

  return {
    props: {
      countries,
    }
  }
}
