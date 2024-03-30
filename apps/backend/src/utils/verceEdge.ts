import type { RawApps } from 'types/toggle';

const getApps = async (): Promise<RawApps> => {
  const response = await fetch(
    `https://edge-config.vercel.com/${process.env.EDGE_ID}/items?token=${process.env.EDGE_CONFIG_TOKEN}`,
  );

  return await response.json();
};

const getToggles = async (appName: string) => {
  const apps = await getApps();
  return apps[appName];
};

const update = async (appName: string, value: unknown) => {
  const response = await fetch(
    `https://api.vercel.com/v1/edge-config/${process.env.EDGE_ID}/items`,
    {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${process.env.VERCEL_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        items: [
          {
            operation: 'update',
            key: appName,
            value,
          },
        ],
      }),
    },
  );

  return await response.json();
};

const createApp = async (appName: string) => {
  const response = await fetch(
    `https://api.vercel.com/v1/edge-config/${process.env.EDGE_ID}/items`,
    {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${process.env.VERCEL_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        items: [
          {
            operation: 'create',
            key: appName,
            value: {},
          },
        ],
      }),
    },
  );

  return await response.json();
};

export { getToggles, getApps, update, createApp };
