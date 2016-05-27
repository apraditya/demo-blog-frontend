import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('blog-navbar', 'Integration | Component | blog navbar', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{blog-navbar}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#blog-navbar}}
      template block text
    {{/blog-navbar}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
