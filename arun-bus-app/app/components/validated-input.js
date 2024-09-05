import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ValidatedInput extends Component {
  @tracked showValidations = false;

  get notValidating() {
    return !this.validation.isValidating;
  }
  get hasContent() {
    return !!this.value;
  }
  get hasWarnings() {
    return !!this.validation.warnings;
  }
  get isValid() {
    return this.hasContent && this.validation.isTruelyValid;
  }
  get shouldDisplayValidations() {
    return (
      this.args.showValidations ||
      this.showValidations ||
      this.args.didValidate ||
      this.hasContent
    );
  }
  get showErrorClass() {
    return (
      this.notValidating &&
      this.showErrorMessage &&
      this.hasContent &&
      this.validation
    );
  }
  get showErrorMessage() {
    return this.shouldDisplayValidations && this.validation.isInvalid;
  }
  get showWarningMessage() {
    return this.shouldDisplayValidations && this.hasWarnings && this.isValid;
  }
  get validation() {
    return this.args.model.get(`validations.attrs.${this.args.valuePath}`);
  }
  get value() {
    return this.args.model.get(this.args.valuePath);
  }

  get classes() {
    let classes = [];

    if (this.showErrorClass) {
      classes.push('has-error');
    }

    if (this.isValid) {
      classes.push('has-success');
    }

    return classes.join(' ');
  }

  @action
  focusOut() {
    this.showValidations = true;
  }

  @action
  updateValue(event) {
    if (event.currentTarget.type == 'checkbox') {
      let value = event.currentTarget.checked ? true : false;
      this.args.model.set(this.args.valuePath, value);
    } else {
      this.args.model.set(this.args.valuePath, event.target.value);
    }
  }
}
