const inyectedVariables = Object.freeze({
  EDGE_ID: process.env.EDGE_ID,
  EDGE_CONFIG_TOKEN: process.env.EDGE_CONFIG_TOKEN,
  EDGE_CONFIG: process.env.EDGE_CONFIG,
  VERCEL_TOKEN: process.env.VERCEL_TOKEN,
});

const environment = Object.freeze({
  EDGE_ID: inyectedVariables.EDGE_ID,
  VERCEL_TOKEN: inyectedVariables.VERCEL_TOKEN,
});

export default environment;
