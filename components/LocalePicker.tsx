"use client";

import { usePathname, useRouter, useParams } from "next/navigation";

const LocalePicker = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { locale } = useParams();

  const pickLang = (newLocale: string) => {
    const segments = pathname.split("/");
    segments[1] = newLocale;
    const newPath = segments.join("/");
    router.push(newPath);
  };

  return (
    <select onChange={(e) => pickLang(e.target.value)} defaultValue={locale}>
      <option value="en">EN</option>
      <option value="de">DE</option>
    </select>
  );
};

export default LocalePicker;
