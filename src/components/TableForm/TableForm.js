import { t } from 'i18next';
import styles from './TableForm.module.css';

function TableForm() {
  return (
    <>
      <table>
        <tbody>
          <tr>
            <td>
              <label id="tablenamelabel" htmlFor="tablename">{t('tablenamelabel')}</label>
            </td>
            <td>
              <input id="tablename" type="text" />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="tablecomment">{t('tablecommentlabel')}</label>
            </td>
            <td>
              <textarea rows="5" cols="40" id="tablecomment"></textarea>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default TableForm;
