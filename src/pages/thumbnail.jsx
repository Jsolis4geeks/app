import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import styles from '../../styles/Home.module.css';
import { H1 } from '../common/styledComponents/Head';

export const getStaticProps = () => ({
  props: {
    previewMode: true,
    seo: {
      unlisted: true,
    },
  },
});

export default function Thmbnail() {
  const [asset, setAsset] = useState(null);
  const router = useRouter();
  const { slug } = router.query;

  useEffect(async () => {
    if (slug !== undefined) {
      const response = await fetch(`${process.env.BREATHECODE_HOST}/v1/registry/asset/${slug}`);
      const result = await response.json();

      setAsset(result);
    }
  }, [slug]);

  const Div = styled.div`
    background: url("/static/images/random-bg${Math.floor(Math.random() * 4) + 1}.png");
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
  `;

  if (!asset) return null;

  return (
    <Div>
      <H1 type="h1" className={styles.title}>
        {asset.title}
      </H1>
    </Div>
  );
}
