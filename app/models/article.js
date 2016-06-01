import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
  title: attr('string'),
  summary: attr('string'),
  permalink: attr('string'),
  author: attr('string'),
  content: attr('string'),
  pubDate: attr('date'),
  slug: attr('string'),
  section: belongsTo('section')
});
