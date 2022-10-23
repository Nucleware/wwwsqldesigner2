import DataType from "../model/DataType";
import DataTypeGroup from "../model/DataTypeGroup";

export function parseDataTypes(dataTypesXml) {
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(dataTypesXml, 'text/xml');

  const root = xmlDoc.documentElement;

  const dbType = root.getAttribute('db');
  const groups = new Map();

  const groupElements = root.getElementsByTagName('group');
  for (let groupElement of groupElements) {
    const types = [];

    const dataTypeGroup = new DataTypeGroup(attrToObj(groupElement, 'label', 'color'));

    const typeElements = groupElement.getElementsByTagName('type');
    for (let typeElement of typeElements) {
      const dataType = new DataType(attrToObj(typeElement, 'label', 'length', 'sql', 'quote', 're'));

      types.push(dataType);
    }

    groups.set(dataTypeGroup, types);
  }

  return {
    dbType,
    groups,
  };
}

function attrToObj(element, ...attributes) {
  const obj = {};

  for (let attr of attributes) {
    obj[attr] = element.getAttribute(attr);
  }

  return obj;
}
