import classNames from 'classnames';
import { ChangeEvent, FocusEvent, useEffect, useRef, useState } from 'react';

export interface InputProps {
  // Styling
  fitHeight?: boolean;
  readonly?: boolean;
  center?: boolean;
  duration?: boolean;

  size?: 'large' | 'medium' | 'small';

  // Applied to parent only
  className?: string;
  inputClassName?: string;

  prefix?: JSX.Element;
  suffix?: JSX.Element;
  placeholder?: string;

  onChange?(event: ChangeEvent): any;
  onBlur?(event: FocusEvent<HTMLInputElement>): void;
  onFocus?(event: FocusEvent<HTMLInputElement>): void;
  onKeyDown?(): any;
  onMouseUp?(): any;

  // If value is not given in props, the component will manage it through state (default)
  value?: string | number;
  type?: 'text' | 'number' | 'search';
  inputMode?:
    | 'none'
    | 'text'
    | 'decimal'
    | 'numeric'
    | 'tel'
    | 'search'
    | 'url';
  step?: number | string | undefined;

  // HTMLInputElement Props

  disabled?: boolean;
  autofocus?: boolean;
  // required?: boolean;
  // validity?: ValidityState;
  // validationMessage?: string;
  // willValidate?: boolean;
  // autocomplete?: string;

  max?: number | string;
  maxLength?: number | string;
  min?: number | string;
  minLength?: number | string;
}

export function Input(props: InputProps) {
  const {
    className,
    inputClassName,
    type = 'text',
    center = false,
    readonly = false,
    size = 'medium',
    prefix,
    duration = true,
    suffix,
    autofocus,
    disabled,
    min,
    max,
    step,
    placeholder = '',
    inputMode = 'text',
    fitHeight = false,
    onKeyDown,
    onMouseUp,
  } = props;

  // Focus
  const inputRef = useRef<HTMLInputElement>(null);
  const setInputFocus = () => inputRef?.current?.focus();
  const [hasFocus, setHasFocus] = useState(false);

  // Value
  const [value, setValue] = useState('' as string | number);

  // Styles
  const fontSize =
    size !== 'medium' && size === 'large' ? 'text-lg' : 'text-sm';

  // Functions
  const handleOnChange = (event: ChangeEvent) => {
    const element = event?.target as HTMLInputElement;
    if (element.value === undefined) {
      return;
    }

    const caret = element.selectionStart;
    window.requestAnimationFrame(() => {
      element.selectionStart = caret;
      element.selectionEnd = caret;
    });

    setValue(element.value);
    if (props.onChange) {
      props.onChange(event);
    }
  };

  const handleOnBlur = (event: FocusEvent<HTMLInputElement>) => {
    setHasFocus(false);

    if (props.onBlur) {
      props.onBlur(event);
    }
  };

  const handleOnFocus = (event: FocusEvent<HTMLInputElement>) => {
    if (!readonly) {
      setHasFocus(true);
    }

    if (props.onFocus) {
      props.onFocus(event);
    }
  };

  // Effects
  useEffect(() => {
    if (autofocus) {
      setInputFocus();
    }
  }, []);

  return (
    <div
      className={classNames(
        'flex',
        'items-center',
        'appearance-none',
        'border-2',
        'rounded-lg',
        'w-full',
        'bg-white',
        'text-gray-700',
        'leading-tight',
        'outline-black',
        'outline-secondary',
        'focus:outline-black',
        fitHeight ? 'py-2' : 'h-8',
        size === 'small' ? 'px-2' : 'px-4',
        duration && 'duration-300',
        disabled && 'opacity-50 cursor-not-allowed',
        hasFocus ? `border-primary` : 'border-secondary',
        className,
      )}
      onClick={setInputFocus}
    >
      {prefix && (
        <span
          className={classNames(`text-black`, 'flex', 'items-center', 'pr-4')}
        >
          {prefix}
        </span>
      )}

      <input
        className={classNames(
          'bg-transparent',
          'outline-none',
          'flex-1',
          'w-0',
          disabled && 'cursor-not-allowed',
          center && 'text-center',
          fontSize,
          inputClassName,
        )}
        readOnly={readonly}
        type={type}
        ref={inputRef}
        spellCheck={false}
        disabled={disabled}
        placeholder={placeholder}
        value={props.value ?? value}
        step={step}
        min={min}
        max={max}
        onChange={handleOnChange}
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
        inputMode={inputMode}
        onKeyDown={onKeyDown}
        onMouseUp={onMouseUp}
      ></input>

      {type === 'number' && <div className="h-full bg-green-200"></div>}

      {suffix && (
        <span
          className={classNames(
            `text-${color}`,
            'flex',
            'items-center',
            'pl-4',
          )}
        >
          {suffix}
        </span>
      )}
    </div>
  );
}
