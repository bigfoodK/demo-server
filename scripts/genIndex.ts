import fs from "fs-extra";
import path from "path";

type DemoIndexData = {
  name: string,
  path: string,
}

function readDemoDir(path: string): DemoIndexData[] {
  const dirEntries = fs.readdirSync(path, {
    withFileTypes: true,
  });

  return dirEntries
    .filter(dirEntry => !dirEntry.isFile())
    .map(dirEntry => {
      return {
        name: dirEntry.name,
        path: `demo/${dirEntry.name}/index.html`,
      }
    });
}

const demoDirPath = path.join(__dirname, '../demo');
const demoIndexPath = path.join(__dirname, '../src/client/demoIndex.ts');

fs.ensureDirSync(demoDirPath);

const demoItemData = readDemoDir(demoDirPath);

let contents = '';

contents += `
export type DemoIndexData = {
  name: string,
  path: string,
}
`;

contents += `
export const demoIndex: readonly DemoIndexData[] = [
`;

demoItemData.forEach(data => {
  contents += `
  {
    name: '${data.name}',
    path: '${data.path}',
  },
  `;
});

contents += `
] as const;
`;

fs.writeFileSync(demoIndexPath, contents);
console.log('done');
