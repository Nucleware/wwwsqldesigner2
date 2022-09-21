import { t } from 'i18next';
import styles from './Options.module.css';

function Options() {
  return (
    <>
      <div className={styles.opts}>
        <table>
          <tbody>
            <tr>
              <td>* <label htmlFor="optionlocale">{t('language')}</label></td>
              <td>
                <select id="optionlocale">
                  <option></option>
                </select>
              </td>
            </tr>
            <tr>
              <td>* <label htmlFor="optiondb">{t('db')}</label></td>
              <td>
                <select id="optiondb">
                  <option></option>
                </select>
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="optionsnap">{t('snap')}</label>
              </td>
              <td>
                <input type="text" size="4" id="optionsnap" />
                <span className={styles.small}>{t('optionsnapnotice')}</span>
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="optionpattern">{t('pattern')}</label>
              </td>
              <td>
                <input type="text" size="6" id="optionpattern" />
                <span className={styles.small}>{t('optionpatternnotice')}</span>
              </td>
            </tr>
            <tr>
              <td>* <label htmlFor="optionstyle">{t('style')}</label></td>
              <td>
                <select id="optionstyle">
                  <option></option>
                </select>
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="optionhide">{t('hide')}</label>
              </td>
              <td>
                <input type="checkbox" id="optionhide" />
              </td>
            </tr>
            <tr>
              <td>* <label htmlFor="optionvector">{t('vector')}</label></td>
              <td>
                <input type="checkbox" id="optionvector" />
              </td>
            </tr>
            <tr>
              <td>* <label htmlFor="optionshowsize">{t('showsize')}</label></td>
              <td>
                <input type="checkbox" id="optionshowsize" />
              </td>
            </tr>
            <tr>
              <td>* <label htmlFor="optionshowtype">{t('showtype')}</label></td>
              <td>
                <input type="checkbox" id="optionshowtype" />
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
