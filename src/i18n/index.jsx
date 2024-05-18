import arMessages from './messages/ar.json';
import deMessages from './messages/de.json';
import dedeMessages from './messages/de_DE.json';
import es419Messages from './messages/es_419.json';
import faIRMessages from './messages/fa_IR.json';
import frMessages from './messages/fr.json';
import frCAMessages from './messages/fr_CA.json';
import frFRMessages from './messages/fr_FR.json';
// no need to import en messages-- they are in the defaultMessage field
import hiMessages from './messages/hi.json';
import itMessages from './messages/it.json';
import itITMessages from './messages/it_IT.json';
import plMessages from './messages/pl.json';
import ptMessages from './messages/pt.json';
import ptptMessages from './messages/pt_PT.json';
import ruMessages from './messages/ru.json';
import trTRMessages from './messages/tr_TR.json';
import ukMessages from './messages/uk.json';
import zhcnMessages from './messages/zh_CN.json';
import zhhkMessages from './messages/zh_HK.json';

const messages = {
  ar: arMessages,
  fa: faIRMessages,
  de: deMessages,
  'es-419': es419Messages,
  fr: frMessages,
  'fr-ca': frCAMessages,
  'fr-fr': frFRMessages,
  'it-it': itITMessages,
  pl: plMessages,
  'tr-tr': trTRMessages,
  'zh-cn': zhcnMessages,
  'zh-hk': zhhkMessages,
  ru: ruMessages,
  uk: ukMessages,
  pt: ptMessages,
  it: itMessages,
  hi: hiMessages,
  'pt-pt': ptptMessages,
  'de-de': dedeMessages,
};

export default messages;
