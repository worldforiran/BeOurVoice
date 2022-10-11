import { useContext } from "react";
import { ELanguages, LocaleContext } from "../App";
import locale from "../locale";

export default function useLocale() {
  const { language } = useContext(LocaleContext);

  const index = language === ELanguages.English ? 0 : 1;

  return {
    _: (key: string) => locale[key][index],
  };
}
