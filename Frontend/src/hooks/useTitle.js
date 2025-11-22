import { useEffect } from "react";

/**
 * useTitle("Page Name")
 * sets document.title to "Page Name | Hotel Management System"
 * If you pass null/undefined it falls back to the appName.
 */
export default function useTitle(pageTitle) {
  const appName = "HMS";

  useEffect(() => {
    if (pageTitle) {
      document.title = `${pageTitle} | ${appName}`;
    } else {
      document.title = appName;
    }
  }, [pageTitle]);
}
