import Head from 'next/head';
import { useEffect } from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import fs from 'fs';
import path from 'path';

interface PageData {
  slug: string;
  title: string;
  bodyClass: string;
  cssLinks: string[];
  inlineStyles: string;
  bodyHtml: string;
}

interface Props {
  data: PageData;
}

export default function BlogPost({ data }: Props) {
  useEffect(() => {
    document.body.className = data.bodyClass;
    return () => { document.body.className = ''; };
  }, [data.bodyClass]);

  return (
    <>
      <Head>
        <title>{data.title}</title>
        {data.cssLinks.map((href, i) => (
          <link key={i} rel="stylesheet" href={href} />
        ))}
        <style dangerouslySetInnerHTML={{ __html: data.inlineStyles }} />
      </Head>
      <div dangerouslySetInnerHTML={{ __html: data.bodyHtml }} />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const blogDataDir = path.join(process.cwd(), 'public', 'blog-data');

  if (!fs.existsSync(blogDataDir)) {
    return { paths: [], fallback: false };
  }

  const files = fs.readdirSync(blogDataDir).filter(f => f.endsWith('.json'));
  const paths = files.map(f => ({
    params: { slug: f.replace('.json', '') }
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const blogDataDir = path.join(process.cwd(), 'public', 'blog-data');
  const dataFile = path.join(blogDataDir, slug + '.json');

  if (!fs.existsSync(dataFile)) {
    return { notFound: true };
  }

  const data = JSON.parse(fs.readFileSync(dataFile, 'utf8'));

  return {
    props: { data }
  };
};
