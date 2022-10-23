class DataType {
  constructor({ label, length, sql, quote, re }) {
    this.label = label;
    this.length = length;
    this.sql = sql;
    this.quote = quote;
    this.re = re;
  }
}

export default DataType;
