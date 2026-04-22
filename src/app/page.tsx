import { DesktopPage } from "@/components/desktop/desktop-page";
import { MobilePage } from "@/components/mobile/mobile-page";

export default function Page() {
  return (
    <>
      <div id="top" />
      <div className="viewport viewport--desktop">
        <DesktopPage />
      </div>
      <div className="viewport viewport--mobile">
        <MobilePage />
      </div>
    </>
  );
}
