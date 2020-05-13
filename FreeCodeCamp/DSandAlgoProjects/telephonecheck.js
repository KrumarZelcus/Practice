function telephoneCheck(str) {
  const telepattern = /^(1)?( )?(\d{3}|\(\d{3}\))( |-)?\d{3}( |-)?\d{4}$/;
  return telepattern.test(str);
}

telephoneCheck("1 (555) 555-5555");
