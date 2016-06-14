import Ember from 'ember';
import layout from '../templates/components/char-count';

export default Ember.Component.extend({
  layout,

  classNames: ['char-count'],

  classNameBindings: [
    'showWarning:char-count--warning',
    'showDanger:char-count--danger'
  ],

  /**
    @property string
    @type String
  */
  string: '',

  /**
    @property maxlength
    @type Number
  */
  maxlength: 10,

  /**
    @property stringLength
    @type Ember.ComputedProperty|Number
  */
  stringLength: Ember.computed.readOnly('string.length'),

  /**
    @property displayedCount
    @type Ember.ComputedProperty|Number
  */
  displayedCount: Ember.computed('maxlength', 'stringLength', function () {
    return this.get('maxlength') - this.get('stringLength');
  }),

  /**
    @property showWarning
    @type Ember.ComputedProperty|Boolean
  */
  showWarning: Ember.computed('displayedCount', function () {
    let displayedCount = this.get('displayedCount');
    return displayedCount > 10 && displayedCount < 21;
  }),

  /**
    @property showDanger
    @type Ember.ComputedProperty|Boolean
  */
  showDanger: Ember.computed.lte('displayedCount', 10)
});
