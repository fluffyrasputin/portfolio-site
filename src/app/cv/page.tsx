import { access } from "node:fs/promises";
import { constants } from "node:fs";
import { CvPage } from "@/components/cv-page";

const pdfPath = "/cv/andrey-carev-cv.pdf";

async function fileExists() {
  try {
    await access(`${process.cwd()}/public${pdfPath}`, constants.F_OK);
    return true;
  } catch {
    return false;
  }
}

export default async function Page() {
  const pdfExists = await fileExists();

  return <CvPage pdfPath={pdfPath} pdfExists={pdfExists} />;
}
