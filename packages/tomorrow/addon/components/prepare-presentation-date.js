import Component from '@ember/component';
import { computed } from '@ember/object';
import layout from '../templates/prepare-presentation-date';
import moment from 'moment';

export default Component.extend({
  layout,
  tagName: '',

  startDate: computed(function() {
    return moment().add(1, 'day').format('MMM D, YYYY');
  })
});