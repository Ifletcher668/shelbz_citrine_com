import { exec } from 'child_process';

import { config } from 'dotenv';

config({
  path: `.env.local`,
});

const managementToken =
  process.env.NEXT_PUBLIC_CONTENTFUL_MANAGEMENT_API_ACCESS_TOKEN;
const spaceId = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;

exec(
  `contentful space export --config contentful/export-config.json --management-token ${managementToken} --space-id ${spaceId}`,
  (error, stdout, stderr) => {
    if (error) {
      console.log(`error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
  },
);
