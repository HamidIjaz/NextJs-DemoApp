import Link from "next/link";
import { server } from "../../../config";
import Meta from "../../../components/Meta";
// import { useRouter } from "next/router";

const articleDetail = ({ article }) => {
  // const router = useRouter();
  // const { id } = router.query;
  return (
    <>
      <Meta title={article.title} description={article.description} />
      <h1>{article.title}</h1>
      <p>{article.body}</p>
      <br />
      <Link href="/">Go Back</Link>
    </>
  );
};

// from data.js file or any DB       change the fetch(`https://jsonplaceholder.typicode.com/posts` to fetch from jsonplaceholder
// using getStaticProps and getStaticPaths

export const getStaticProps = async (context) => {
  const res = await fetch(`${server}/api/articles/${context.params.id}`);

  const article = await res.json();

  return {
    props: {
      article,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`${server}/api/articles/`);

  const articles = await res.json();

  const ids = articles.map((article) => article.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false,
  };
};

// from json placeholder
//using getServerSideProps

// export const getServerSideProps = async (context) => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
//   );
//   const article = await res.json();

//   return {
//     props: {
//       article,
//     },
//   };
// };
// export default articleDetail;

export default articleDetail;
