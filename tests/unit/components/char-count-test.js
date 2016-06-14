import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent('char-count', 'Unit | Component | char count', {
  // Specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar'],
  unit: true
});

test('it renders', function(assert) {

  // Creates the component instance
  /*let component =*/ this.subject();
  // Renders the component to the page
  this.render();
  assert.equal(this.$().text().trim(), '10');
});

test('it calculates the remaining count before the maxlength is reached', function(assert) {
  let component = this.subject();
  let string = 'This is a test string';
  let maxlength = 50;
  let expectedDisplayedCount = 29;

  component.set('maxlength', maxlength);
  component.set('string', string);

  assert.equal(component.get('displayedCount'), expectedDisplayedCount);
});

test('it is in a warning state when the displayedCount is between 10 and 20', function(assert) {
  let component = this.subject();
  let string = 'This is a test string';
  let maxlength = 40;

  component.set('maxlength', maxlength);
  component.set('string', string);

  assert.equal(component.get('showWarning'), true);
  assert.equal(component.get('showDanger'), false);
});

test('it is in a danger state when the displayedCount is 10 or less', function(assert) {
  let component = this.subject();
  let string = 'This is a test string';
  let maxlength = 30;

  component.set('maxlength', maxlength);
  component.set('string', string);

  assert.equal(component.get('showWarning'), false);
  assert.equal(component.get('showDanger'), true);
});
