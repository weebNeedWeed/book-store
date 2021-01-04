import React from "react";

export default function Test({ test }) {
  return <div>{test}</div>;
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { slug: "1" } }, { params: { slug: "2" } }],
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  return {
    props: {
      test: params.slug,
    },
  };
}
