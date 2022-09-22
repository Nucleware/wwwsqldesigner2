import { t } from 'i18next';
import { useId } from 'react';
import styles from './Options.module.css';

function Options() {
  const baseID = useId();

  function id(name) {
    return `${baseID}-${name}`;
  }

  return (
    <>
      <div className={styles.opts}>
        <table>
          <tbody>
            <tr>
              <td>* <label htmlFor={id("optionlocale")}>{t('language')}</label></td>
              <td>
                <select id={id("optionlocale")}>
                  <option></option>
                </select>
              </td>
            </tr>
            <tr>
              <td>* <label htmlFor={id("optiondb")}>{t('db')}</label></td>
              <td>
                <select id={id("optiondb")}>
                  <option></option>
                </select>
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor={id("optionsnap")}>{t('snap')}</label>
              </td>
              <td>
                <input type="text" size="4" id={id("optionsnap")} />
                <span className={styles.small}>{t('optionsnapnotice')}</span>
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor={id("optionpattern")}>{t('pattern')}</label>
              </td>
              <td>
                <input type="text" size="6" id={id("optionpattern")} />
                <span className={styles.small}>{t('optionpatternnotice')}</span>
              </td>
            </tr>
            <tr>
              <td>* <label htmlFor={id("optionstyle")}>{t('style')}</label></td>
              <td>
                <select id={id("optionstyle")}>
                  <option></option>
                </select>
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor={id("optionhide")}>{t('hide')}</label>
              </td>
              <td>
                <input type="checkbox" id={id("optionhide")} />
              </td>
            </tr>
            <tr>
              <td>* <label htmlFor={id("optionvector")}>{t('vector')}</label></td>
              <td>
                <input type="checkbox" id={id("optionvector")} />
              </td>
            </tr>
            <tr>
              <td>* <label htmlFor={id("optionshowsize")}>{t('showsize')}</label></td>
              <td>
                <input type="checkbox" id={id("optionshowsize")} />
              </td>
            </tr>
            <tr>
              <td>* <label htmlFor={id("optionshowtype")}>{t('showtype')}</label></td>
              <td>
                <input type="checkbox" id={id("optionshowtype")} />
              </td>
            </tr>
          </tbody>
        </table>

        <hr />

        * <span className={styles.small}>{t('optionsnotice')}</span>
      </div>
    </>
  );
}

export default Options;
