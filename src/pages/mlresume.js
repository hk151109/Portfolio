export async function getServerSideProps() {
  return {
    redirect: {
      destination: '/HarikrishnanGopal_ML_Resume.pdf',
      permanent: false,
    },
  };
}

export default function MLResume() {
  // This page will never render because of the redirect
  return null;
}
