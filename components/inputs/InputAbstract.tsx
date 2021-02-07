import classNames from 'classnames';
import {
  ChangeEvent,
  CSSProperties,
  FocusEvent,
  RefObject,
  useRef,
  useState,
} from 'react';

export interface InputProps {
  id?: string;
  ref?: RefObject<HTMLInputElement>;

  // Applied to parent only
  className?: string;
  inputClassName?: string;

  // If value is not given in props, the component will manage it through state (default)
  value?: string | number;
  type?: 'text' | 'number' | 'search' | 'email' | 'password';
  name?: string;
  size?: 'large' | 'medium' | 'small';
  border?: 'primary' | 'secondary' | 'none';

  inputMode?:
    | 'none'
    | 'text'
    | 'decimal'
    | 'numeric'
    | 'tel'
    | 'search'
    | 'url';

  // Content
  // Sublabel can be used as a subtle descriptor to the right of label
  label?: string;
  subLabel?: string;
  prefix?: JSX.Element;
  suffix?: JSX.Element;
  externalSuffix?: JSX.Element;
  placeholder?: string;

  // Styling
  style?: CSSProperties;
  readonly?: boolean;
  center?: boolean;

  // Callbacks
  onKeyDown?(): any;
  onMouseUp?(): any;
  onBlur?(event: FocusEvent<HTMLInputElement>): void;
  onFocus?(event: FocusEvent<HTMLInputElement>): void;
  onChange?(event: ChangeEvent<HTMLInputElement>): any;
  onValueChange?(value: string): any;

  // Allows you to only accept values which satisfy this pattern
  regex?: RegExp;

  // HTMLInputElement Props

  autofocus?: boolean;
  // required?: boolean;
  // validity?: ValidityState;
  // validationMessage?: string;
  // willValidate?: boolean;
  // autocomplete?: string;

  // Validation
  max?: number | string;
  maxLength?: number;
  min?: number | string;
  minLength?: number;
  disabled?: boolean;
  step?: number | string | undefined;
}

export function InputAbstract(props: InputProps) {
  const {
    className,
    inputClassName,
    type = 'text',
    center = false,
    readonly = false,
    size = 'medium',
    border = 'secondary',
    style,
    prefix,
    maxLength,
    label,
    suffix,
    externalSuffix,
    disabled,
    min,
    regex,
    max,
    step,
    placeholder = '',
    inputMode = 'text',
    onKeyDown,
    onMouseUp,
  } = props;

  // Focus
  const inputRef = props.ref ?? useRef<HTMLInputElement>(null);
  const setInputFocus = () => {
    if (typeof inputRef !== 'string') {
      inputRef?.current?.focus();
    }
  };

  // Value
  const [value, setValue] = useState('' as string | number);
  const [hasFocus, setHasFocus] = useState(false);

  // Styles
  const fontSize =
    size !== 'medium' && size === 'large' ? 'text-lg' : 'text-sm';

  // Functions
  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    const element = event?.target as HTMLInputElement;
    if (element.value === undefined) {
      return;
    }

    // Test regex
    const isValidRegex = regex && regex?.test(String(element.value));
    if (!isValidRegex && element.value.length > 0) return;

    // Emails don't support selectionStart
    if (type !== 'email') {
      const caret = element.selectionStart;
      window.requestAnimationFrame(() => {
        element.selectionStart = caret;
        element.selectionEnd = caret;
      });
    }

    if (props.onValueChange) {
      props.onValueChange(element.value);
    }

    if (props.onChange) {
      props.onChange(event);
    }

    setValue(element.value);
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

  // // Effects
  // useEffect(() => {
  //   if (autofocus) {
  //     setInputFocus();
  //   }
  // }, []);

  return (
    <div>
      {label && (
        <div
          className={classNames(
            'mb-1',
            size === 'small' ? 'text-sm' : 'text-base',
          )}
        >
          {label}
        </div>
      )}

      <div className="flex items-center space-x-3">
        <div
          style={style ?? {}}
          className={classNames(
            'flex',
            'items-center',
            'appearance-none',
            'w-full',
            // 'bg-white',
            'text-gray-700',
            'leading-tight',
            'outline-black',
            'outline-secondary',
            'focus:outline-black',
            'duration-300',
            border !== 'none' && 'border-2',
            disabled && 'opacity-50 cursor-not-allowed',
            hasFocus ? 'border-primary' : `border-${border}`,
            size === 'small' ? 'px-2' : 'px-4',
            size === 'large' ? 'rounded-xl' : 'rounded-lg',
            className,
          )}
          onClick={setInputFocus}
        >
          {prefix && (
            <span
              className={classNames(
                `text-black`,
                'flex',
                'items-center',
                'pr-4',
              )}
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
              externalSuffix && 'w-full',
              disabled && 'cursor-not-allowed',
              size === 'large' ? 'h-12' : 'h-8',
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
            maxLength={maxLength}
            onChange={handleOnChange}
            onFocus={handleOnFocus}
            onBlur={handleOnBlur}
            inputMode={inputMode}
            onKeyDown={onKeyDown}
            onMouseUp={onMouseUp}
          ></input>

          {suffix && (
            <span
              className={classNames(
                `text-primary`,
                'flex',
                'items-center',
                'pl-4',
              )}
            >
              {suffix}
            </span>
          )}
        </div>

        {externalSuffix}
      </div>
    </div>
  );
}
