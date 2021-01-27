export function CheckoutSignIn() {
  return (
    <div className="flex flex-col">
      <Input
        size="large"
        type="email"
        className="rounded-xl py-2"
        placeholder="Email address"
        prefix={<EmailSVG className="h-6" />}
        // suffix={<>!</>}
        value={signInEmail}
        maxLength={50}
        onValueChange={value => setSignInEmail(cleanupInputValue(value))}
      ></Input>
      <Input
        size="large"
        type="password"
        className="rounded-xl py-2"
        placeholder="Password"
        prefix={<PasswordSVG className="ml-2 mr-2 h-8" />}
        value={signInPassword}
        onValueChange={value => setSignInPassword(cleanupInputValue(value))}
        maxLength={50}
      ></Input>
    </div>
  );
}
