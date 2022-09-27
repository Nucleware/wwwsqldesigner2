import Cookies from "universal-cookie";
import { Config } from "./config";

const cookies = new Cookies(document.cookie);

const OLD_COOKIE_NAME = 'wwwsqldesigner';
const COOKIE_NAME = 'wwwsqldesigner2';

let optionsCookie = cookies.get(COOKIE_NAME);

// migrate cookie if necessary
if (!optionsCookie) {
  const oldOptionsCookie = cookies.get(OLD_COOKIE_NAME, { doNotParse: true });
  if (oldOptionsCookie) {
    // WWW SQL Designer saved this cookie using JavaScript syntax, rather than JSON, and used `eval` to restore it
    // eslint-disable-next-line no-eval
    optionsCookie = eval("(" + oldOptionsCookie + ")");
    cookies.set(COOKIE_NAME, optionsCookie);
    cookies.remove(OLD_COOKIE_NAME);
  }
}

let options = {
  locale: optionsCookie.locale || Config.DefaultLocale,
  db: optionsCookie.db || Config.DefaultDB,
  staticpath: optionsCookie.staticpath || Config.Paths.Static || "",
  xhrpath: optionsCookie.xhrpath || Config.Paths.XHR || "",
  snap: optionsCookie.snap || 0,
  showsize: optionsCookie.showsize || 0,
  showtype: optionsCookie.showtype || 0,
  pattern: optionsCookie.pattern || "%R_%T",
  hide: optionsCookie.hide || false,
  vector: optionsCookie.vector || true,
  style: optionsCookie.style || 'material-inspired',
};

export function getOptions() {
  return { ...options };
}

export function saveOptions(newOptions) {
  options = { ...options, ...newOptions };
  cookies.set(COOKIE_NAME, options);
}
