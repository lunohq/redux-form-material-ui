const mapError = ({ pristine, touched, error, ...props }, errorProp = 'errorText') =>
  !pristine && touched && error ? { ...props, [errorProp]: error } : props

export default mapError
