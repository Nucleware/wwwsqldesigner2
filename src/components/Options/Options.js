import { t } from 'i18next';
import { forwardRef, useId, useImperativeHandle, useState } from 'react';
import styles from './Options.module.css';
import { Config } from '../../lib/config';
import { getOptions } from '../../lib/options';

function Options(props, ref) {
  const [options, setOptions] = useState(getOptions);
  useImperativeHandle(ref, () => ({
    getOptions: () => options,
  }));

  const baseID = useId();

  function id(name) {
    return `${baseID}-${name}`;
  }

  function handleChange(e) {
    const optionName = e.target.getAttribute('optname');

    if (!optionName || !(optionName in options)) {
      return;
    }

    const optionValue = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setOptions((oldOptions) => ({ ...oldOptions, [optionName]: optionValue }));
  }

  return (
    <>
      <div className={styles.opts}>
        <table>
          <tbody>
            <tr>
              <td>* <label htmlFor={id("optionlocale")}>{t('language')}</label></td>
              <td>
                <select id={id("optionlocale")} value={options.locale} optname="locale" onChange={handleChange}>
                  {Config.AvailableLocales.map(locale => <option key={locale} value={locale}>{locale}</option>)}
                </select>
              </td>
            </tr>
            <tr>
              <td>* <label htmlFor={id("optiondb")}>{t('db')}</label></td>
              <td>
                <select id={id("optiondb")} value={options.db} optname="db" onChange={handleChange}>
                  {Config.AvailableDBs.map(db => <option key={db} value={db}>{db}</option>)}
                </select>
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor={id("optionsnap")}>{t('snap')}</label>
              </td>
              <td>
                <input type="text" size="4" id={id("optionsnap")} value={options.snap} optname="snap" onChange={handleChange} />
                <span className={styles.small}>{t('optionsnapnotice')}</span>
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor={id("optionpattern")}>{t('pattern')}</label>
              </td>
              <td>
                <input type="text" size="6" id={id("optionpattern")} value={options.pattern} optname="pattern" onChange={handleChange} />
                <span className={styles.small}>{t('optionpatternnotice')}</span>
              </td>
            </tr>
            <tr>
              <td>* <label htmlFor={id("optionstyle")}>{t('style')}</label></td>
              <td>
                <select id={id("optionstyle")} value={options.style} optname="style" onChange={handleChange}>
                  {Config.Styles.map(style => <option key={style} value={style}>{style}</option>)}
                </select>
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor={id("optionhide")}>{t('hide')}</label>
              </td>
              <td>
                <input type="checkbox" id={id("optionhide")} checked={options.hide} optname="hide" onChange={handleChange} />
              </td>
            </tr>
            <tr>
              <td>* <label htmlFor={id("optionvector")}>{t('vector')}</label></td>
              <td>
                <input type="checkbox" id={id("optionvector")} checked={options.vector} optname="vector" onChange={handleChange} />
              </td>
            </tr>
            <tr>
              <td>* <label htmlFor={id("optionshowsize")}>{t('showsize')}</label></td>
              <td>
                <input type="checkbox" id={id("optionshowsize")} checked={options.showsize} optname="showsize" onChange={handleChange} />
              </td>
            </tr>
            <tr>
              <td>* <label htmlFor={id("optionshowtype")}>{t('showtype')}</label></td>
              <td>
                <input type="checkbox" id={id("optionshowtype")} checked={options.showtype} optname="showtype" onChange={handleChange} />
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

export default forwardRef(Options);
